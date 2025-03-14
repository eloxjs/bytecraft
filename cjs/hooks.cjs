'use strict';

class ArrayCalculateChanges {
    static calculateChanges(targetArray, operation, args, result) {
        const added = [];
        const removed = [];
        switch (operation) {
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
    static getAddedForPush(targetArray, args) {
        return args.map((value, index) => ({
            index: (targetArray.length - args.length) + index,
            value
        }));
    }
    static getAddedForUnshift(args) {
        return args.map((value, index) => ({
            index,
            value
        }));
    }
    static getRemovedForPop(targetArray, result) {
        return { value: result, index: targetArray.length + 1 };
    }
    static getRemovedForShift(result) {
        return { value: result, index: 0 };
    }
    static getChangesForSplice(args, result) {
        const removed = result.map((value, index) => ({
            value,
            index: args[0] + index
        }));
        const added = args.slice(2).map((item, index) => ({
            index: args[0] + index,
            value: item
        }));
        return [removed, added];
    }
    static enhanceAddedItemsWithReplacements(added, removed) {
        return added.map((addedItem) => {
            const replaced = removed.find((removedItem) => removedItem.index === addedItem.index);
            addedItem.replaced = Boolean(replaced);
            if (replaced) {
                addedItem.oldValue = replaced.value;
            }
            return addedItem;
        });
    }
    static enhanceRemovedItemsWithReplacements(removed, added) {
        return removed.map((removedItem) => {
            const replaced = added.find((addedItem) => addedItem.index === removedItem.index);
            removedItem.replaced = Boolean(replaced);
            if (replaced) {
                removedItem.replacedWith = replaced.value;
            }
            return removedItem;
        });
    }
    static getReplacements(enhancedRemovedItems) {
        return enhancedRemovedItems.filter((item) => item.replaced).map((replacedItem) => ({
            index: replacedItem.index,
            value: replacedItem.replacedWith,
            oldValue: replacedItem.value
        }));
    }
}
const arrayMutationListenersMap = new WeakMap();
function createArrayStateHandlerMap(array) {
    if (!arrayMutationListenersMap.has(array)) {
        arrayMutationListenersMap.set(array, {
            addItem: [],
            removeItem: [],
            replaceItem: []
        });
    }
    return arrayMutationListenersMap.get(array);
}
function prepareListeners(targetArray, addedItems, removedItems, replacedItems) {
    const targetArrayMutationListeners = createArrayStateHandlerMap(targetArray);
    let listenersForAddedItems = {
        params: addedItems,
        type: 'addItem',
        listeners: targetArrayMutationListeners['addItem']
    };
    let listenersForRemovedItems = removedItems.map((removedItem) => {
        var _a;
        return {
            params: [removedItem],
            type: 'removeItem',
            listeners: ((_a = targetArrayMutationListeners['removeItem'].find((entry) => entry.index === removedItem.index)) === null || _a === undefined ? undefined : _a.listeners) || []
        };
    });
    let listenersForReplacedItems = replacedItems.map((replacedItem) => {
        var _a;
        return {
            params: [replacedItem],
            type: 'replaceItem',
            listeners: ((_a = targetArrayMutationListeners['replaceItem'].find((entry) => entry.index === replacedItem.index)) === null || _a === undefined ? undefined : _a.listeners) || []
        };
    });
    return [listenersForAddedItems, ...listenersForRemovedItems, ...listenersForReplacedItems].filter(entry => !!entry.listeners.length);
}
function callListeners(events) {
    events.forEach((event) => {
        event.listeners.forEach((listener) => {
            listener(...event.params);
        });
    });
}
function updateListenerIndices(targetArray, items) {
    const arrayMutationListeners = arrayMutationListenersMap.get(targetArray);
    Object.entries(items).forEach(([mutationType, removedOrAddedItems]) => {
        removedOrAddedItems.forEach((removedOrAddedItem) => {
            ['removeItem', 'replaceItem'].forEach(listenerType => {
                let listenersArray = arrayMutationListeners[listenerType];
                if (mutationType === 'removed') {
                    const handlerIndex = listenersArray.findIndex((item) => item.index === removedOrAddedItem.index);
                    if (handlerIndex >= 0) {
                        listenersArray.splice(handlerIndex, 1);
                    }
                }
                listenersArray.forEach((listener) => {
                    if (listener.index >= removedOrAddedItem.index) {
                        listener.index += (mutationType === 'removed' ? -1 : 1);
                    }
                });
            });
        });
    });
}
function useArray(array, arrayHandler) {
    const arrayMutationOperations = ['push', 'pop', 'shift', 'unshift', 'splice'];
    createArrayStateHandlerMap(array);
    arrayMutationOperations.forEach((arrayMutationOperation) => {
        array[arrayMutationOperation] = function (...args) {
            let result = Array.prototype[arrayMutationOperation].apply(this, args);
            let { added: addedItems, removed: removedItems, replacements } = ArrayCalculateChanges.calculateChanges(array, arrayMutationOperation, args, result);
            let listeners = prepareListeners(array, addedItems, removedItems, replacements);
            updateListenerIndices(array, {
                removed: removedItems.filter((removedItem) => !removedItem.replaced),
                added: addedItems.filter((addedItem) => !addedItem.replaced)
            });
            callListeners(listeners);
            return result;
        };
    });
    arrayHandler(useItem, addAdditionListener, addRemovalListener, addReplaceListener);
    function useItem(index, itemHandler) {
        itemHandler(array[index], onRemove, onReplace);
        function onRemove(listener) {
            addRemovalListener(index, listener);
        }
        function onReplace(listener) {
            addReplaceListener(index, listener);
        }
    }
    function addAdditionListener(listener) {
        arrayMutationListenersMap.get(array).addItem.push(listener);
    }
    function addRemovalListener(index, listener) {
        addListener('removeItem', index, listener);
    }
    function addReplaceListener(index, listener) {
        addListener('replaceItem', index, listener);
    }
    function addListener(type, index, listener) {
        const listenerEntry = arrayMutationListenersMap.get(array)[type].find((item) => item.index === index);
        if (listenerEntry) {
            listenerEntry.listeners.push(listener);
        }
        else {
            arrayMutationListenersMap.get(array)[type].push({ index, listeners: [listener] });
        }
    }
}

const objectStateMap = new WeakMap();
function defineStatefulProperty(object, propertyKey, valueHandler, defaultExecute = true) {
    if (!objectStateMap.has(object)) {
        objectStateMap.set(object, { stateChangeHandlers: {} });
    }
    if (!(propertyKey in object) || isPropertyConfigurable(object, propertyKey)) {
        let propertyValue = object[propertyKey];
        delete object[propertyKey];
        Object.defineProperty(object, propertyKey, {
            get: () => propertyValue,
            set: (value) => {
                var _a, _b;
                if (value !== propertyValue) {
                    const previousValue = propertyValue;
                    propertyValue = value;
                    (_b = (_a = objectStateMap.get(object)) === null || _a === undefined ? undefined : _a.stateChangeHandlers[propertyKey]) === null || _b === undefined ? undefined : _b.forEach(handler => handler(previousValue));
                }
            }
        });
    }
    if (defaultExecute)
        valueHandler(object[propertyKey], object[propertyKey]);
    if (!(propertyKey in objectStateMap.get(object).stateChangeHandlers)) {
        objectStateMap.get(object).stateChangeHandlers[propertyKey] = [];
    }
    function stateChangeHandler(previousValue) {
        valueHandler(object[propertyKey], previousValue);
    }
    objectStateMap.get(object).stateChangeHandlers[propertyKey].push(stateChangeHandler);
    return {
        delete: function () {
            let handlers = objectStateMap.get(object).stateChangeHandlers[propertyKey];
            let handlerIndex = handlers.indexOf(stateChangeHandler);
            if (handlerIndex >= 0)
                handlers.splice(handlerIndex, 1);
            if (!handlers.length) {
                delete objectStateMap.get(object).stateChangeHandlers[propertyKey];
            }
            if (!Object.keys(objectStateMap.get(object).stateChangeHandlers).length) {
                objectStateMap.delete(object);
            }
        }
    };
}
function useObject(object, objectHandler) {
    let statefulPropertyHandlerDeleters = [];
    objectHandler((propertyKey, valueHandler) => {
        let statefulProperty = defineStatefulProperty(object, propertyKey, valueHandler);
        statefulPropertyHandlerDeleters.push(statefulProperty.delete);
        return statefulProperty;
    });
    return {
        delete: function () {
            statefulPropertyHandlerDeleters.forEach(func => func());
        }
    };
}
function isPropertyConfigurable(targetObject, propertyKey) {
    const descriptor = Object.getOwnPropertyDescriptor(targetObject, propertyKey);
    return descriptor ? Boolean(descriptor.configurable) : false;
}

exports.useArray = useArray;
exports.useObject = useObject;
exports.useObjectProp = defineStatefulProperty;
