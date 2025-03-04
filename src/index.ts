import EventManager from "./router/event-manager";
import ExceptionRenderer from "./router/exception-renderer";
import Router from "./router/router";
import appConfig from "./config/app-config";
import { AppEventMap } from "./types/EventManager/App";
import StateNavigator from './router/state-navigator';

// Holds the currently active theme, initialized with the first theme from appConfig.
let activeTheme:typeof appConfig.themeList[number] = appConfig.themeList[0];
let themeSetInLocalStorage = window.localStorage.getItem('theme') as typeof appConfig.themeList[number];

/**
 * The main application class, extending EventManager to handle app-wide events.
 * Manages configuration, themes, and document title updates.
 */
const App = new class App extends EventManager {
    config = appConfig;
    public csrfToken:string = (document.querySelector('meta[name="csrf-token"]')! as HTMLElement)?.getAttribute?.('content')||'';

    constructor() {
        super();
        this.theme = themeSetInLocalStorage;

        // Detects theme changes in localStorage across different tabs.
        window.addEventListener('storage', (event) => {
            if(event.key !== 'theme') return void 0;
            this.theme = event.newValue as typeof activeTheme;
        });
    }

    public get name() { return this.config.name; }
    public set name(value) { this.config.name = value; }

    /**
     * Gets and sets the application title.
     *
     * - If a string is provided, it updates the title content.
     * - If an object is provided, it merges the object with the existing title config.
     * - Updates the document title based on prefix, content, and suffix.
     * - Fires a 'changetitle' event when updated.
     */
    public get title() { return this.config.title.content; }
    public set title(title:string|Partial<typeof this.config.title>) {
        const titleConfig = typeof title === 'string' ? this.config.title : Object.assign(this.config.title, title);
        if(typeof title === 'string') this.config.title.content = title;
        const { prefix, content, suffix } = titleConfig;

        let documentTitle = `${prefix}${content}${suffix}`;
        if(title === this.name) {
            documentTitle = `${titleConfig.omitPrefixIfAppName ? '' : prefix}${content}${titleConfig.omitSuffixIfAppName ? '' : suffix}`
        }else if(!title) {
            documentTitle = titleConfig.placeholder;
        }

        document.title = documentTitle;
        this.dispatchEvent('changetitle');
    }

    /**
     * Gets and sets the active theme.
     *
     * - Ensures the theme is in the list before applying.
     * - Updates localStorage to persist the theme.
     * - Fires a 'changetheme' event with the current and previous theme.
     */
    public get theme() { return activeTheme; }
    public set theme(theme:typeof this.config.themeList[number]) {
        if(activeTheme !== theme && this.config.themeList.includes(theme)) {
            const oldTheme = activeTheme;
            activeTheme = theme;
            window.localStorage.setItem('theme', activeTheme);
            this.dispatchEvent('changetheme', {currentTheme: theme, oldTheme});
        }
    }
}

/**
 * Extends the App interface to support event handling methods
 * for managing custom application events.
 */
interface App {
    addEventListener<EventType extends keyof AppEventMap>(eventType: EventType, listener: (event: AppEventMap[EventType]) => void): void;
    removeEventListener<EventType extends keyof AppEventMap>(eventType: EventType, listener: (event: AppEventMap[EventType]) => void): void;
    dispatchEvent<EventType extends keyof AppEventMap>(eventType: EventType, event?:AppEventMap[EventType]) : void;
}

export * from "./router/router";
export * as path from "./utils/path";
export {
    App as default,
    EventManager,
    Router,
    ExceptionRenderer,
    StateNavigator
}