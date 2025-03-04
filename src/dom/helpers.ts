// ===================================
// Utility and Helper Functions
// ===================================

export function findPropertyDescriptor(obj:any, prop:string) {
    while (obj) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
        if (descriptor) {
            return descriptor;
        }
        obj = Object.getPrototypeOf(obj);
    }
    return null;
}

/**
 * Parses a string descriptor to extract HTML tag, class, id, and attribute information.
 * 
 * Given a descriptor string formatted similarly to CSS selectors (e.g., "div#id.class1.class2[attr=value]"),
 * this function breaks down and extracts its components. The extracted components include:
 * - The HTML tag type (e.g., "div", "a", "span").
 * - A list of classes (if any).
 * - A list of ids (if any).
 * - A map of attributes with their respective values (if any).
 * 
 * The primary goal of this function is to interpret the descriptor string and return a structured representation
 * of its components. This structured representation can then be used for further processing, like element creation.
 * 
 * @param {string} descriptor - The string representation of the element, containing tag, classes, ids, and attributes.
 * 
 * @returns {ParsedTagDescriptor} - An object containing structured information about the tag, classes, ids, and attributes.
 */
export function parseTagDescriptor(descriptor: string): ParsedTagDescriptor {
    const tagMatches = descriptor.match(/^(\w+)/);
    const classMatches = descriptor.matchAll(/\.([\w-]+)(?![^\[]*\])/g); // If want to reject classes which starts with number use this /\.(?![0-9])([\w\-]+)/g
    const idMatches = descriptor.matchAll(/#([\w\s-]+)/g);
    const attrMatches = descriptor.matchAll(/\[([\w-]+)(?:=("|')?(.*?)\2?)?\]/g);

    const classes = Array.from(classMatches).map(match => match[1]);
    const ids = Array.from(idMatches).map(match => match[1].trim());
    const attrs: Record<string, string> = {};

    for (const match of attrMatches) {
        attrs[match[1]] = match[3] || '';
    }

    return {
        tag: (tagMatches ? tagMatches[1] : 'div') as keyof HTMLElementTagNameMap,
        class: classes,
        id: ids,
        attrs
    };
}