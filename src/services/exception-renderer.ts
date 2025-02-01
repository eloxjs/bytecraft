import httpStatusCodes, { HttpStatusCodeUtils } from "../utils/http-status";
import App from "../index.js";
import { HTTP_STATUS_CODE, HTTP_STATUS_CONSTANT, HttpStatusCodes } from "../types/http-status.js";

export default class ExceptionRenderer {
    /** 
     * A mapping of HTTP_STATUS_CONSTANT to a custom view file.
     * Each entry defines the view file to be used for a particular HTTP status.
     */
    private static customViewMappings: {
        [key in HTTP_STATUS_CONSTANT]?: {
            viewFileName: string;
        }
    } = {};

    private static customFallbackView:string|null = null;

    /**
     * Renders the exception based on the provided status and data.
     * If a custom view exists for the status, it renders using that view;
     * otherwise, a default error view is rendered.
     *
     * @param status - The HTTP status constant or code.
     * @param data - Data associated with the exception.
     */
    public static async renderException(status: HTTP_STATUS_CONSTANT | HTTP_STATUS_CODE, data: any = null) {
        const httpStatusConstant = ExceptionRenderer.getStatusConstant(status);
        const httpStatus = httpStatusCodes[httpStatusConstant];
        const customView = ExceptionRenderer.customViewMappings[httpStatusConstant];

        App.title = httpStatus.text;
        document.title = httpStatus.text;

        if (customView) {
            await this.renderCustomView(customView, {status: {...httpStatus}, data});
        } else {
            this.renderDefaultView({status: {...httpStatus}, data});
        }
    }

    /**
     * Maps a custom view file to an HTTP status.
     *
     * @param status - The HTTP status constant or code to map.
     * @param customFileName - The custom view file name for the status.
     */
    public static setCustomView(status: HTTP_STATUS_CONSTANT | HTTP_STATUS_CODE, customFileName?: string) {
        const httpStatusConstant = ExceptionRenderer.getStatusConstant(status);
        this.customViewMappings[httpStatusConstant] = {
            viewFileName: customFileName || status.toString()
        };
    }

    /**
     * Sets a default custom view to fall back on when no specific custom view is mapped for an HTTP status.
     *
     * @param fileName - The custom view file name to use as a fallback, or null to reset to the default view.
     */
    public static setCustomFallbackView(fileName: string | null) {
        ExceptionRenderer.customFallbackView = fileName;
    }

    /**
     * Retrieves the status constant for a given status.
     *
     * @param status - The HTTP status constant or code.
     * @returns The corresponding HTTP_STATUS_CONSTANT.
     */
    private static getStatusConstant(status: HTTP_STATUS_CONSTANT | HTTP_STATUS_CODE): HTTP_STATUS_CONSTANT {
        if (typeof status === 'string') return status;
        return HttpStatusCodeUtils.getConstantByCode(status)!;
    }

    /**
     * Renders the custom view for a given exception status.
     *
     * @param customView - The custom view configuration containing the file name.
     * @param data - Data associated with the exception.
     */
    private static async renderCustomView(customView: { viewFileName: string }, data: {status:HttpStatusCodes[HTTP_STATUS_CONSTANT], data: any}) {
        const errorViewDirectoryPath = App.config.directoryPaths.errorViewDirectory;
        const normalizedErrorViewPath = (!errorViewDirectoryPath || errorViewDirectoryPath === '/') 
            ? '' 
            : (errorViewDirectoryPath.endsWith('/') ? errorViewDirectoryPath : `${errorViewDirectoryPath}/`);

        try {
            const { default: ErrorView } = await import(`${normalizedErrorViewPath}${customView.viewFileName}.js`);
            ErrorView.bind(ErrorView)(data);
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Renders the default view for given exception data. 
     * If a custom fallback view is set, it will render that. 
     * Otherwise, it displays the HTTP status code and text directly on the body.
     * 
     * @param exceptionData - Contains the HTTP status and associated data for the exception.
     * @property exceptionData.status - The HTTP status derived from HttpStatusCodes.
     * @property exceptionData.data - Additional data related to the exception.
     */
    private static renderDefaultView(exceptionData: {status: HttpStatusCodes[HTTP_STATUS_CONSTANT], data: any}) {
        if (ExceptionRenderer.customFallbackView !== null) {
            this.renderCustomView({viewFileName: ExceptionRenderer.customFallbackView}, exceptionData);
        } else {
            document.body.innerHTML = `${exceptionData.status.code} | ${exceptionData.status.text}`;
        }
    }

}