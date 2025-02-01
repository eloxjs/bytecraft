import { activeTheme } from "@core/App";

export interface AppEventMap {
    changetitle: any;
    changetheme: {
        currentTheme: typeof activeTheme,
        oldTheme: typeof activeTheme
    };
}