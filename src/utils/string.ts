export function convertToKebabCase(str:string) {
    return str
        // Find capital letters (that aren't at the start of the string) 
        // and replace them with '-<letter>' in lowercase
        .replace(/(?<!^)([A-Z])/g, '-$1')
        // Convert the entire string to lowercase
        .toLowerCase();
}
