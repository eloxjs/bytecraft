// A WeakMap to maintain state change handlers for each object.

const objectStateMap: WeakMap<PlainObject, ObjectState> = new WeakMap();

/**
 * Defines a property on the given object that can react to changes in its state.
 * 
 * @param object - The object on which the property should be defined.
 * @param propertyKey - The key/name of the property to be defined.
 * @param valueHandler - A function to handle the value of the property.
 */
function defineStatefulProperty<TargetObject extends PlainObject, PropertyKey extends keyof TargetObject>(object: TargetObject, propertyKey: PropertyKey, valueHandler: ValueHandler<TargetObject[PropertyKey]>, defaultExecute:boolean = true) {
    // Initialize the object state if not already present.
    if (!objectStateMap.has(object)) {
        objectStateMap.set(object, { stateChangeHandlers: {} });
    }

    // Check if the property is configurable.
    if (!(propertyKey in object) || isPropertyConfigurable(object, propertyKey)) {
        let propertyValue = object[propertyKey];

        // Remove the existing property from the object.
        delete object[propertyKey];

        // Define a new property with getters and setters.
        Object.defineProperty(object, propertyKey, {
            get: () => propertyValue,
            set: (value) => {
                // If the new value is different, update it and call the state change handlers.
                if (value !== propertyValue) {
                    const previousValue = propertyValue;
                    propertyValue = value;
                    objectStateMap.get(object)?.stateChangeHandlers[propertyKey]?.forEach(handler => handler(previousValue));
                }
            }
        });
    }

    // Execute the valueHandler for the current property value.
    if(defaultExecute) valueHandler(object[propertyKey], object[propertyKey]);

    // Initialize the state change handlers for the property if not present.
    if (!(propertyKey in objectStateMap.get(object)!.stateChangeHandlers)) {
        objectStateMap.get(object)!.stateChangeHandlers[propertyKey] = [];
    }

    // Add the provided valueHandler to the state change handlers for the property.
    function stateChangeHandler(previousValue:any) {
        valueHandler(object[propertyKey], previousValue);
    }

    objectStateMap.get(object)!.stateChangeHandlers[propertyKey].push(stateChangeHandler);

    return {
        delete: function():void {
            let handlers = objectStateMap.get(object)!.stateChangeHandlers[propertyKey];
            let handlerIndex = handlers.indexOf(stateChangeHandler);
            if(handlerIndex >= 0) handlers.splice(handlerIndex, 1);

            if(!handlers.length) {
                delete objectStateMap.get(object)!.stateChangeHandlers[propertyKey];
            }

            if(!Object.keys(objectStateMap.get(object)!.stateChangeHandlers).length) {
                objectStateMap.delete(object);
            }
        }
    }
}

/**
 * Defines stateful properties on the given object based on the provided handler.
 * 
 * @param object - The object on which stateful properties should be defined.
 * @param objectHandler - The handler that specifies which properties to make stateful.
 */
function useObject<TargetObject extends PlainObject>(object: TargetObject, objectHandler: ObjectHandler<TargetObject>) {
    let statefulPropertyHandlerDeleters:Function[] = [];

    objectHandler((propertyKey, valueHandler) => {
        let statefulProperty = defineStatefulProperty(object, propertyKey, valueHandler);
        statefulPropertyHandlerDeleters.push(statefulProperty.delete);
        return statefulProperty;
    });

    return {
        delete: function():void {
            statefulPropertyHandlerDeleters.forEach(func => func());
        }
    }
}

/**
 * Checks if a property on the given object is configurable.
 * 
 * @param targetObject - The object to check.
 * @param propertyKey - The key/name of the property to check.
 * @returns true if the property is configurable, otherwise false.
 */
function isPropertyConfigurable<TargetObject extends Object>(targetObject: TargetObject, propertyKey: keyof TargetObject) {
    const descriptor = Object.getOwnPropertyDescriptor(targetObject, propertyKey);
    return descriptor ? Boolean(descriptor.configurable) : false;
}

export default useObject;
export {
    useObject,
    defineStatefulProperty as useObjectProp
};