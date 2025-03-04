type StateChangeHandler = (previousValue:any) => void;

type ObjectState = {
    stateChangeHandlers: { [propertyKey: string | number | symbol]: StateChangeHandler[] }
};

type PlainObject = {
    [k: string]: any;
    length?: never;
};

type ValueHandler<Value> = (value:Value, previousValue:Value) => void;
type UseProp<TargetObject> = <PropertyKey extends keyof TargetObject>(propertyKey:PropertyKey, valueHandler:ValueHandler<TargetObject[PropertyKey]>) => {delete:()=>void};
type ObjectHandler<TargetObject> = (useProp:UseProp<TargetObject>) => void;