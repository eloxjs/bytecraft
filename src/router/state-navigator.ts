import EventManager from "./event-manager";

class StateNavigator extends EventManager {
    // Collection of navigable states
    private navigableStates: NavigableState[] = [];

    // Stores the last navigation state for reference on state changes
    private lastState: NavigableState['state'] | null = null;

    constructor() {
        super();
        this.lastState = window.history.state;

        // Event listener for handling state changes
        window.addEventListener('popstate', this.handleStateChange.bind(this));
    }

    /**
     * Handles the change of navigation states when the browser's history state changes.
     * 
     * This function is triggered by the 'popstate' event, which fires when the active 
     * history entry changes. This can occur due to:
     * - The user clicking the browser's back or forward button.
     * - The user manually changing the URL.
     * - A call to history.back(), history.forward(), or history.go().
     *
     * On detecting a state change:
     * 1. It first checks if there was a previous state. If so, it deactivates (or unloads)
     *    that state by calling the `deactivateState` method.
     * 2. It then checks if there's a new current state to activate (or load) and if so,
     *    calls the `activateState` method.
     * 3. After handling the state changes, it updates the `lastState` property to keep track 
     *    of the last active state.
     * 4. Lastly, it dispatches a 'statechange' event, which can be used by other parts of the 
     *    application to take actions in response to state changes.
     *
     * @param {PopStateEvent} event - The popstate event object containing the current history state.
     */
    private handleStateChange(event: PopStateEvent) {
        const currentState = event.state;

        // Unload previous state if it exists
        if (this.lastState) {
            this.deactivateState(this.lastState);
        }

        // Load the current state if it exists
        if (currentState) {
            this.activateState(currentState);
        }

        this.lastState = currentState;
        this.dispatchEvent('statechange');
    }

    /**
     * Navigates the application to a specified state and manages the associated actions 
     * and state information.
     * 
     * This function serves multiple purposes:
     * 1. It captures and stores the provided navigation state details in the `navigableStates` array.
     * 2. It updates the browser's history using the `history.pushState` method to reflect the 
     *    new state, allowing for native browser navigation (back/forward) to work seamlessly.
     * 3. It activates (or loads) the provided state using the `activateState` method.
     * 4. It offers a chained interface for additional configuration, such as setting the URI, 
     *    defining enter and exit actions, and specifying a parent state.
     *
     * @param state - A unique identifier for the navigation state.
     * @param onExitCallback - A callback function to execute when navigating away 
     *                                    from this state.
     * @param onEnterCallback - An optional callback function to execute when 
     *                                       entering this state.
     * 
     * @returns - Returns an object that provides a chained interface for additional 
     *                     state configuration.
     */
    public navigateToState(state: NavigableState['state'], onExitCallback: NavigableState['action']['onExit'], onEnterCallback?: NavigableState['action']['onEnter']) {
        const navigationState: NavigableState = {
            state,
            uri: window.location.href,
            action: {
                onEnter: onEnterCallback,
                onExit: onExitCallback
            },
            parent: null,
            isActive: false
        };

        const navigableStateConfigurator:NavigableStateConfigurator = {
            onEnter: function(onEnterCallback) {
                navigationState.action.onEnter = onEnterCallback || undefined;
                return navigableStateConfigurator;
            },
            onExit: function(onExitCallback) {
                navigationState.action.onExit = onExitCallback;
                return navigableStateConfigurator;
            },
            parent: function(parentState) {
                navigationState.parent = parentState;
                return navigableStateConfigurator;
            }
        };

        // Store the navigable state
        this.navigableStates.push(navigationState);

        // Activate the navigable state
        window.history.pushState(state, document.title, navigationState.uri);
        this.lastState = history.state;
        this.activateState(state);

        return navigableStateConfigurator;
    }

    /**
     * Activates (or loads) a specific navigation state.
     * 
     * This function is responsible for:
     * 1. Finding the navigation state within the `navigableStates` array using the provided state identifier.
     * 2. Checking if the state is already active to avoid redundant activations.
     * 3. If the state is found and is not active, it sets the `isActive` property of the state to `true`.
     * 4. Executes the associated `onEnter` callback, if defined, which could perform various actions 
     *    like rendering a specific view or triggering certain behaviors tied to this state.
     * 
     * Activation of a state means making it the currently "live" or "focused" navigation state in 
     * the application, which could influence what the user sees or can interact with.
     *
     * @param state - The unique identifier for the navigation state to be activated.
     */
    private activateState(state: NavigableState['state']) {
        const navigationState = this.navigableStates.find(route => route.state === state);

        if (!navigationState) return false;
        if (navigationState.isActive) return;

        const onEnterCallback = navigationState.action.onEnter;
        navigationState.isActive = true;
        
        if (onEnterCallback) onEnterCallback();
    }

    /**
     * Deactivates (or unloads) a specified navigation state.
     * 
     * This function carries out several crucial tasks:
     * 1. It locates the specified navigation state within the `navigableStates` array using the provided state identifier.
     * 2. Once found, it ensures the state is currently active to avoid unnecessary deactivation.
     * 3. It then sets the `isActive` property of that state to `false`, indicating the state is no longer the primary focus.
     * 4. Executes the associated `onExit` callback, which can be used to clean up resources, hide views, 
     *    or carry out any necessary actions upon leaving this state.
     * 
     * Deactivating a state typically signifies that the application is transitioning away from a specific 
     * view or context, readying the system for another state or doing nothing if the app is returning to a neutral state.
     *
     * @param state - The unique identifier for the navigation state to be deactivated.
     */
    private deactivateState(state: NavigableState['state']) {
        const navigationState = this.navigableStates.find(route => route.state === state);

        if (!navigationState) return false;

        const onExitCallback = navigationState.action.onExit;
        navigationState.isActive = false;
        onExitCallback();

        // Remove the state if no onEnter action is defined
        if (!navigationState.action.onEnter) {
            this.removeState(state);
        }
    }

    /**
     * Removes a specified navigation state from the managed collection.
     * 
     * This function serves the following primary tasks:
     * 1. It identifies the index of the navigation state within the `navigableStates` array using the provided state identifier.
     * 2. If the state is found within the collection, it gets removed, ensuring that the application no longer recognizes or acts on that state.
     * 
     * The removal of a state is typically required when a certain navigation context becomes obsolete, 
     * or when dynamic states are no longer needed for future operations. This ensures efficient memory use and management of only relevant states.
     *
     * @param state - The unique identifier for the navigation state to be removed.
     */
    public removeState(state: NavigableState['state']) {
        const stateIndex = this.navigableStates.findIndex(route => route.state === state);

        if (stateIndex >= 0) {
            this.navigableStates.splice(stateIndex, 1);
        }
    }
}

/**
 * The StateNavigator interface provides a structure for managing custom events.
 * It offers methods to add, remove, and dispatch these events based on the
 * predefined StateNavigatorEventMap type.
 */
interface StateNavigator {
    addEventListener(eventType: keyof StateNavigatorEventMap, listener: (event: StateNavigatorEventMap[keyof StateNavigatorEventMap]) => void): void;
    removeEventListener(eventType: keyof StateNavigatorEventMap, listener: (event: StateNavigatorEventMap[keyof StateNavigatorEventMap]) => void): void;
    dispatchEvent(eventType: keyof StateNavigatorEventMap, event?:StateNavigatorEventMap[keyof StateNavigatorEventMap]): void;
}

export default new StateNavigator();