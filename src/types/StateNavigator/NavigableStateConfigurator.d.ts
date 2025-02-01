declare interface NavigableStateConfigurator {
    onEnter(onEnterCallback: NavigableState['action']['onEnter'] | null) : this;
    onExit(onExitCallback: NavigableState['action']['onExit']) : this;
    parent(parentState: NavigableState['parent'])
}