class ArrayCalculateChanges {
    
    static calculateChanges(targetArray:any, operation:any, args:any, result:any) {
        const added = [];
        const removed = [];

        switch(operation) {
            case 'push':
                added.push(...this.getAddedForPush(targetArray, args));
                break;
            case 'unshift':
                added.push(...this.getAddedForUnshift(args));
                break;
            case 'pop':
                removed.push(this.getRemovedForPop(targetArray, result));
                break;
            case 'shift':
                removed.push(this.getRemovedForShift(result));
                break;
            case 'splice':
                const [spliceRemoved, spliceAdded] = this.getChangesForSplice(args, result);
                removed.push(...spliceRemoved);
                added.push(...spliceAdded);
                break;
        }

        const enhancedAddedItems = this.enhanceAddedItemsWithReplacements(added, removed);
        const enhancedRemovedItems = this.enhanceRemovedItemsWithReplacements(removed, added);
        const replacements = this.getReplacements(enhancedRemovedItems);

        return { added: enhancedAddedItems, removed: enhancedRemovedItems, replacements };
    }

    static getAddedForPush(targetArray:any, args:any) {
        return args.map((value:any, index:any) => ({
            index: (targetArray.length - args.length) + index,
            value
        }));
    }

    static getAddedForUnshift(args:any) {
        return args.map((value:any, index:any) => ({
            index,
            value
        }));
    }

    static getRemovedForPop(targetArray:any, result:any) {
        return {value: result, index: targetArray.length + 1};
    }

    static getRemovedForShift(result:any) {
        return {value: result, index: 0};
    }

    static getChangesForSplice(args:any, result:any) {
        const removed = result.map((value:any, index:any) => ({
            value,
            index: args[0] + index
        }));

        const added = args.slice(2).map((item:any, index:any) => ({
            index: args[0] + index,
            value: item
        }));

        return [removed, added];
    }

    static enhanceAddedItemsWithReplacements(added:any, removed:any) {
        return added.map((addedItem:any) => {
            const replaced = removed.find((removedItem:any) => removedItem.index === addedItem.index);
            addedItem.replaced = Boolean(replaced);
            if (replaced) {
                addedItem.oldValue = replaced.value;
            }
            return addedItem;
        });
    }

    static enhanceRemovedItemsWithReplacements(removed:any, added:any) {
        return removed.map((removedItem:any) => {
            const replaced = added.find((addedItem:any) => addedItem.index === removedItem.index);
            removedItem.replaced = Boolean(replaced);
            if (replaced) {
                removedItem.replacedWith = replaced.value;
            }
            return removedItem;
        });
    }

    static getReplacements(enhancedRemovedItems:any) {
        return enhancedRemovedItems.filter((item:any) => item.replaced).map((replacedItem:any) => ({
            index: replacedItem.index,
            value: replacedItem.replacedWith,
            oldValue: replacedItem.value
        }));
    }
}

const arrayMutationListenersMap = new WeakMap();

function createArrayStateHandlerMap(array:any) {
    if(!arrayMutationListenersMap.has(array)) {
        arrayMutationListenersMap.set(array, {
            addItem: [],
            removeItem: [],
            replaceItem: []
        });
    }
    return arrayMutationListenersMap.get(array);
}

function prepareListeners(targetArray:any, addedItems:any, removedItems:any, replacedItems:any) {
    const targetArrayMutationListeners = createArrayStateHandlerMap(targetArray);

    let listenersForAddedItems = {
        params: addedItems,
        type: 'addItem',
        listeners: targetArrayMutationListeners['addItem']
    };
    
    let listenersForRemovedItems = removedItems.map((removedItem:any) => {
        return {
            params: [removedItem],
            type: 'removeItem',
            listeners: targetArrayMutationListeners['removeItem'].find((entry:any) => entry.index === removedItem.index)?.listeners || []
        }
    });

    
    let listenersForReplacedItems = replacedItems.map((replacedItem:any) => {
        return {
            params: [replacedItem],
            type: 'replaceItem',
            listeners: targetArrayMutationListeners['replaceItem'].find((entry:any) => entry.index === replacedItem.index)?.listeners || []
        }
    });

    return [listenersForAddedItems, ...listenersForRemovedItems, ...listenersForReplacedItems].filter(entry => !!entry.listeners.length);
}

function callListeners(events:any) {
    events.forEach((event:any) => {
        event.listeners.forEach((listener:any) => {
            listener(...event.params);
        });
    });
}

// Helper function to remove a listener based on its index and then adjust the indices of the remaining listeners
function updateListenerIndices(targetArray:any, items:any) {
    const arrayMutationListeners = arrayMutationListenersMap.get(targetArray);

    Object.entries(items).forEach(([mutationType, removedOrAddedItems]) => {
        (removedOrAddedItems as any).forEach((removedOrAddedItem:any) => {
            ['removeItem', 'replaceItem'].forEach(listenerType => {
                let listenersArray = arrayMutationListeners[listenerType];
        
                if(mutationType === 'removed') {
                    const handlerIndex = listenersArray.findIndex((item:any) => item.index === removedOrAddedItem.index);
        
                    if (handlerIndex >= 0) {
                        listenersArray.splice(handlerIndex, 1);
                    }
                }
        
                listenersArray.forEach((listener:any) => {
                    if (listener.index >= removedOrAddedItem.index) {
                        listener.index += (mutationType === 'removed' ? -1 : 1);
                    }
                });
            });
        });
    });
}

export default function useArray(array:any[], arrayHandler:Function) {
    const arrayMutationOperations = ['push', 'pop', 'shift', 'unshift', 'splice'];

    createArrayStateHandlerMap(array);

    arrayMutationOperations.forEach((arrayMutationOperation) => {
        array[arrayMutationOperation as any] = function(...args:any[]) {
            let result = Array.prototype[arrayMutationOperation as any].apply(this, args);
            let {added: addedItems, removed: removedItems, replacements} = ArrayCalculateChanges.calculateChanges(array, arrayMutationOperation, args, result);

            let listeners = prepareListeners(array, addedItems, removedItems, replacements);

            updateListenerIndices(array, {
                removed: removedItems.filter((removedItem:any) => !removedItem.replaced),
                added: addedItems.filter((addedItem:any) => !addedItem.replaced)
            });

            callListeners(listeners);
            return result;
        }
    });

    arrayHandler(useItem, addAdditionListener, addRemovalListener, addReplaceListener);

    function useItem(index:any, itemHandler:any) {

        itemHandler(array[index], onRemove, onReplace);

        function onRemove(listener:any) {
            addRemovalListener(index, listener);
        }
        function onReplace(listener:any) {
            addReplaceListener(index, listener);
        }
    }

    function addAdditionListener(listener:any) {
        arrayMutationListenersMap.get(array).addItem.push(listener);
    }

    function addRemovalListener(index:any, listener:any) {
        addListener('removeItem', index, listener);
    }

    function addReplaceListener(index:any, listener:any) {
        addListener('replaceItem', index, listener);
    }

    function addListener(type:any, index:any, listener:any) {
        const listenerEntry = arrayMutationListenersMap.get(array)[type].find((item:any) => item.index === index);
        if(listenerEntry) {
            listenerEntry.listeners.push(listener);
        }else {
            arrayMutationListenersMap.get(array)[type].push({index, listeners: [listener]});
        }
    }
}






// // Define the allowed mutation operations
// type ArrayMutationOperation = 'push' | 'pop' | 'shift' | 'unshift' | 'splice';

// // Extend the Array prototype with the custom methods
// // interface Array<T> {
// //     push(...items: T[]): number;
// //     pop(): T | undefined;
// //     shift(): T | undefined;
// //     unshift(...items: T[]): number;
// //     splice(start: number, deleteCount?: number, ...items: T[]): T[];
// // }

// const arrayMutationOperations: ArrayMutationOperation[] = ['push', 'pop', 'shift', 'unshift', 'splice'];

// arrayMutationOperations.forEach((arrayMutationOperation) => {
//     Array.prototype[arrayMutationOperation] = function(...args: any[]) {
//         let result = Array.prototype[arrayMutationOperation].apply(this, args);
//         return result;
//     }
// });