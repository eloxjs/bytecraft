// Represents a dynamic route with associated metadata
declare interface NavigableState {
    state: string;
    uri: string;
    action: {
        onEnter?: Function;
        onExit: Function;
    };
    parent?: NavigableState['state'] | null;
    isActive: boolean;
}