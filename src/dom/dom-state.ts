import { useObjectProp } from "../hooks/use-object";

export default class DOMState {
    id; trackList; callback;

    constructor(id:null|any, trackList:{key:Record<string, any>}[], callback:(currentValue:any[], previousValue:any[]) => any) {
        this.id = id;
        this.trackList = trackList;
        this.callback = callback;
    }

    public init(callback:(currentValue:any[], previousValue:any[]) => void) {
        const values:any[] = [];
        const previousValues:any[] = [];

        this.trackList.forEach((trackItem, index) => {
            Object.entries(trackItem).forEach(([trackItemKey, trackItemObject]) => {
                values.push(trackItemObject[trackItemKey]);
                useObjectProp(trackItemObject, trackItemKey, (value, previousValue) => {
                    values[index] = value;
                    previousValues[index] = previousValue;
                    callback(values, previousValues);
                }, false);
            });
        });

        callback(values, previousValues);
    }
}

function bindState(trackList:{key:Record<string, any>}[], callback:(currentValue:any[], previousValue:any[]) => void) {
    return new DOMState(null, trackList, callback);
}

export {bindState};