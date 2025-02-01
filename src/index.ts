import EventManager from "./services/event-manager";
import ExceptionRenderer from "./services/exception-renderer";
import Router from "./services/router";
import appConfig from "./config/app-config";

let activeTheme:typeof appConfig.themeList[number] = appConfig.themeList[0];
let themeSetInLocalStorage = window.localStorage.getItem('theme') as typeof appConfig.themeList[number];

class _App extends EventManager {
    config = appConfig;
    public csrfToken:string = (document.querySelector('meta[name="csrf-token"]')! as HTMLElement)?.getAttribute?.('content')||'';

    constructor() {
        super();
        this.theme = themeSetInLocalStorage;
        window.addEventListener('storage', (event) => {
            if(event.key !== 'theme') return void 0;
            this.theme = event.newValue as typeof activeTheme;
        });
    }

    public get name() { return this.config.name; }
    public set name(value) { this.config.name = value; }

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

// interface App {
//     addEventListener<EventType extends keyof AppEventMap>(eventType: EventType, listener: (event: AppEventMap[EventType]) => void): void;
//     removeEventListener<EventType extends keyof AppEventMap>(eventType: EventType, listener: (event: AppEventMap[EventType]) => void): void;
//     dispatchEvent<EventType extends keyof AppEventMap>(eventType: EventType, event?:AppEventMap[EventType]) : void;
// }

const App = new _App();

export * from "./services/router";
export * as path from "./utils/path";
export {
    App as default,
    EventManager,
    Router,
    ExceptionRenderer
}