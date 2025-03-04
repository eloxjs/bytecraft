/**
 * This class provides custom event handling functionality.
 * Users can add, remove, and dispatch events with it.
 */
export default class EventManager {

    /** Holds all the event listeners categorized by event name. */
    protected events: { [key: string]: Function[] } = {};

    /**
     * Add an event listener for a specific event name.
     *
     * @param eventType - The name of the event to listen to.
     * @param listener - The callback function to be executed when the event is dispatched.
     */
    public addEventListener(eventType: string, listener: Function) {
        if (!this.events[eventType]) {
            this.events[eventType] = [];
        }

        // Check if the listener is already registered for this event name
        if (!this.events[eventType].includes(listener)) {
            this.events[eventType].push(listener);
        }
    }

    /**
     * Remove an event listener from a specific event name.
     *
     * @param eventType - The name of the event to remove the listener from.
     * @param listener - The callback function to be removed.
     * @returns The removed listener or false if the listener wasn't found.
     */
    public removeEventListener(eventType: string, listener: Function):void {
        if (!this.events[eventType]) return void 0;

        const listenerIndex = this.events[eventType].indexOf(listener);
        if (listenerIndex >= 0) {
            // Remove the listener and return it
            this.events[eventType].splice(listenerIndex, 1);
        }
    }

    /**
     * Dispatches an event, calling all listeners registered for this event name.
     *
     * @param eventType - The name of the event to be dispatched.
     * @param params - Additional parameters to be passed to the listeners.
     */
    protected dispatchEvent(eventType: string, ...params: any[]) {
        const eventListeners = this.events[eventType] || [];
        eventListeners.forEach(listener => listener(...params));
    }
}
