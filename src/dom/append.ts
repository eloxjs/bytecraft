import DOMState, { __bindDOMState } from "./dom-state";

/**
 * Appends child elements or text nodes to a parent Element.
 * 
 * This utility function allows for appending multiple children (either Elements or Text nodes)
 * to a specified parent Element. Optionally, it can first empty the parent of its current content.
 * 
 * @param {Element} targetParent - The parent element to which the children will be appended.
 * @param {Node | Text | string | (Node | Text | string)[]} childNodes - The child element(s) or text node(s) to append.
 * 
 * @returns - The parent element with the newly appended child elements or text nodes.
 */
export function append<ParentType extends Element|DocumentFragment>(targetParent: ParentType, ...childNodes: (Node | Text | string | boolean | undefined | null | number | DOMState)[]): ParentType {
    if (!targetParent) return targetParent;

    const filteredChildArray = childNodes
        .map((item) => {
            return typeof item === 'number' ? item.toString() : item
        }).map((item) => {
            if(item instanceof DOMState) {
                let node:null|Node = null;

                __bindDOMState(item, (values, previousValues) => {
                    // if(node !== null && !document.contains(node)) {
                    //     return item.unbind();
                    // }

                    const result = item.callback(values, previousValues) as Node | Text | string | boolean | undefined | null | number;

                    if(result === undefined || result === null || typeof result === 'boolean') {
                        const comment = document.createComment("");
                        if(node !== null) (node as ChildNode).replaceWith(comment);
                        node = comment;
                    }else if(typeof result === 'string' || typeof result === 'number') {
                        const text = new Text(result.toString());
                        if(node !== null) (node as ChildNode).replaceWith(text);
                        node = text;
                    }else {
                        if(node !== null) (node as ChildNode).replaceWith(result);
                        node = result;
                    }
                });
                return node;
            }else {
                return item;
            }
        })
        .filter((item) => {
            return item !== undefined && item !== null && typeof item !== 'boolean'
        });

    targetParent.append(...filteredChildArray);

    return targetParent;
}