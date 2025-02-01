import appConfig from "../config/app-config";

function sanitizeSegment(segment?: string): string {
    if (!segment) return ''; // Return an empty string if segment is undefined or null
    return segment.replace(/^\/+|\/+$/g, ''); // Remove leading and trailing slashes
}

/**
 * Returns the full URL for a given path and folder.
 * If the path or folder does not start with a '/', it's added.
 * 
 * @param path - The desired path to be appended to the folder.
 * @param folder - The desired folder from the base URL.
 * @returns A full URL combining the folder, path, and origin.
 */

export function basePath(path?: string, folderPath?: string): string {
    const sanitizedFolder = sanitizeSegment(folderPath);
    const sanitizedPath = sanitizeSegment(path);

    // Combine them with single slashes
    const combinedPath = [sanitizedFolder, sanitizedPath].filter(Boolean).join('/');

    // Return the full URL
    return new URL(`/${combinedPath}`, window.location.href).href;
}

/** Returns the source path for a given resource. */
export function srcPath(path?: string): string {
    return basePath(path, appConfig.paths.sourcePath);
}

/**
 * Returns the full URL for a given path and folder using basePath function.
 * 
 * @param path - The desired path to be appended to the folder.
 * @param folder - The desired folder from the base URL.
 * @returns A full URL for the specified asset.
 */
export function asset(path?: string, folder?: string) {
    return basePath(path, `${sanitizeSegment(appConfig.paths.assetPath)}/${sanitizeSegment(folder)}`);
}

// Shortcut functions for different asset types. They use the above asset() function with predefined folder names.

/** Returns the JavaScript path for a given resource. */
export function jsPath(path?: string): string {
    return asset(path, 'js');
}

/** Returns the CSS path for a given resource. */
export function cssPath(path?: string): string {
    return asset(path, 'css');
}

/** Returns the favicon path for a given resource. */
export function faviconPath(path?: string): string {
    return asset(path, 'favicon');
}

/** Returns the font path for a given resource. */
export function fontPath(path?: string): string {
    return asset(path, 'font');
}

/** Returns the image path for a given resource. */
export function imagePath(path?: string): string {
    return asset(path, 'image');
}

/** Returns the music path for a given resource. */
export function musicPath(path?: string): string {
    return asset(path, 'music');
}

/** Returns the video path for a given resource. */
export function videoPath(path?: string): string {
    return asset(path, 'video');
}

/** Returns the temporary path for a given resource. */
export function tempPath(path?: string): string {
    return asset(path, 'temp');
}