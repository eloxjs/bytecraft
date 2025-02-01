/**
 * AppConfig Class:
 * Defines the essential configurations for the application.
 */
export default new class AppConfig {
    // Specifies if the application is a single page application
    public isSinglePageApplication: boolean = true;

    public name: string = '';
    public readonly title = {
        prefix: '',
        content: '',
        suffix: '',
        placeholder: '',
        omitPrefixIfAppName: true,
        omitSuffixIfAppName: true
    };

    public environment:'dev'|'prod' = ['127.0.0.1', 'localhost'].includes(window.location.hostname) ? 'dev' : 'prod';

    public readonly themeList = ['light', 'dark'] as const;

    // Defines the paths for various directories used within the app
    public readonly directoryPaths = {
        controllerDirectory: '',
        middlewareDirectory: '',
        errorViewDirectory: ''
    };

    public readonly paths = {
        assetPath: '/',
        sourcePath: '/src'
    };
}