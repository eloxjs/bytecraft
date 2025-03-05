import { useObjectProp } from "../hooks/use-object";

const DOMStateList:WeakMap<PlainObject, Function[]> = new WeakMap();

export default class DOMState {
    trackList;
    callback;

    constructor(trackList:{key:Record<string, any>}[], callback:(currentValue:any[], previousValue:any[]) => any) {
        this.trackList = trackList;
        this.callback = callback;
        DOMStateList.set(
            this,
            []
        );
    }

    public unbind() {
        const deleteList = DOMStateList.get(this);
        if(!deleteList) return void 0;
        deleteList.forEach(stateDelete => stateDelete());
        deleteList.splice(0, deleteList.length);
        DOMStateList.delete(this);
    }

    public ref(object:Record<string, any>, key?:string) {
        object[key ? key : 'current'] = this;
    }
}

/**
 * It's used by methods like `append` and `createElement`.
 */
export function __bindDOMState(domState: DOMState, callback:(currentValue:any[], previousValue:any[]) => void) {
    const values:any[] = [];
    const previousValues:any[] = [];

    domState.trackList.forEach((trackItem, index) => {
        Object.entries(trackItem).forEach(([trackItemKey, trackItemObject]) => {
            values.push(trackItemObject[trackItemKey]);
            const addedState = useObjectProp(trackItemObject, trackItemKey, (value, previousValue) => {
                values[index] = value;
                previousValues[index] = previousValue;
                callback(values, previousValues);
            }, false);

            DOMStateList.get(domState)?.push(addedState.delete);
        });
    });

    callback(values, previousValues);
}

export function bindState(trackList:{key:Record<string, any>}[], callback:(currentValue:any[], previousValue:any[]) => void) {
    return new DOMState(trackList, callback);
}

export function unbindState(domState:DOMState) {
    domState.unbind();
}