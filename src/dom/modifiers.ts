// ===================================
// DOM Element Modification Functions
// ===================================

import { convertToKebabCase } from "../utils/string";

function clearContent<TargetNode extends Node>(targetNode: TargetNode) {
    targetNode.textContent = '';
    return targetNode;
}

/**
 * Adds specified class(es) to an HTMLElement.
 * 
 * Accepts a targetElement and a list of class names. Each className can be 
 * a space-separated string of multiple classes. After processing these 
 * strings into individual class names, they are added to the target element.
 * 
 * @param {TargetElement} targetElement - The HTML element to receive the class(es).
 * @param {...string[]} classNames - A spread of class names, potentially space-separated.
 * 
 * @returns {TargetElement} - The modified element with the newly added class(es).
 */
function addClass<TargetElement extends HTMLElement>(targetElement: TargetElement, ...classNames: string[]): TargetElement {
    classNames = classNames.map(className => className.split(' ')).flat(1).filter(className => !!className);
    targetElement.classList.add(...classNames);
    return targetElement;
}

/**
 * Removes specified class(es) from an HTMLElement.
 * 
 * Similar to `addClass`, it takes a targetElement and a list of class names to be removed. 
 * After processing the class names, they are removed from the target element.
 * 
 * @param {TargetElement} targetElement - The HTML element to have class(es) removed.
 * @param {...string[]} classNames - A spread of class names, potentially space-separated.
 * 
 * @returns {TargetElement} - The modified element without the removed class(es).
 */
function removeClass<TargetElement extends HTMLElement>(targetElement: TargetElement, ...classNames: string[]): TargetElement {
    classNames = classNames.map(className => className.split(' ')).flat(1).filter(className => !!className);
    targetElement.classList.remove(...classNames);
    return targetElement;
}

/**
 * Sets the inner HTML content of an HTMLElement.
 * 
 * Directly replaces the inner HTML of the targetElement with the provided content.
 * 
 * @param {TargetElement} targetElement - The HTML element to have its inner HTML set.
 * @param {string} content - The new inner HTML content.
 * 
 * @returns {TargetElement} - The modified element with updated inner HTML.
 */
function innerHTML<TargetElement extends Element>(targetElement: TargetElement, content: string): TargetElement {
    targetElement.innerHTML = content;
    return targetElement;
}

/**
 * Sets the inner text of an HTMLElement.
 * 
 * Directly sets the inner text of the targetElement, ensuring the text is 
 * displayed without HTML interpretation.
 * 
 * @param {TargetElement} targetElement - The HTML element to have its inner text set.
 * @param {string} textContent - The new inner text.
 * 
 * @returns {TargetElement} - The modified element with updated inner text.
 */
function innerText<TargetElement extends HTMLElement>(targetElement: TargetElement, textContent: string): TargetElement {
    targetElement.innerText = textContent;
    return targetElement;
}

/**
 * Sets the value of an HTML element.
 * 
 * Useful for form elements like inputs and textareas. The function sets 
 * the 'value' property of the targetElement to the specified value.
 * 
 * @param {InputElement} targetElement - The form element to have its value set.
 * @param {string} [elementValue=''] - The new value for the element.
 * 
 * @returns {InputElement} - The modified form element with updated value.
 */
function setValue<InputElement extends ValueElement>(targetElement: InputElement, elementValue: string = ''): InputElement {
    targetElement.value = elementValue;
    return targetElement;
}

/**
 * Sets attributes on a given HTML element.
 * 
 * The function provides flexibility by allowing the setting of either a single
 * attribute-key value pair or multiple attributes at once using an attribute map.
 * 
 * Overloads:
 * - If the second parameter is a string (attribute key), a string value must be 
 *   provided as the third parameter. This sets a single attribute on the element.
 * 
 * - If the second parameter is a Record<string, string> (an object of attribute 
 *   key-value pairs), multiple attributes will be set on the element according 
 *   to the provided map.
 * 
 * @param element - The target HTML element on which attributes will be set.
 * @param attributeOrMap - Either a single attribute key or a map of attribute key-value pairs.
 * @param value - The value for the attribute if a single attribute key is provided.
 * 
 * @returns The modified HTML element with the newly set attributes.
 */
// Overload
function setAttribute<T extends Element|SVGElement>(element: T, attributeKey: string, value: string): T;
function setAttribute<T extends Element|SVGElement>(element: T, attributes: Record<string, string>): T;
function setAttribute<T extends Element|SVGElement>(element: T, attributeOrMap: string | Record<string, string>, value?: string): T {
    if (typeof attributeOrMap === 'string' && value !== undefined) {
        element.setAttribute(attributeOrMap, value);
    } else if (typeof attributeOrMap === 'object') {
        for (let attributeKey in attributeOrMap) {
            element.setAttribute(attributeKey, attributeOrMap[attributeKey]);
        }
    }

    return element;
}


/**
 * Applies inline styles to a given HTML element.
 * 
 * This function can either apply a single style property-value pair 
 * or multiple style properties at once based on the provided parameters.
 * 
 * @param {HTMLElement} targetElement - The target HTML element to which styles will be applied.
 * @param {string | Record<string, string>} stylePropOrMap - Either a single CSS property name (as a string) 
 *                                                           or a map of CSS property-value pairs.
 * @param {string} [styleValue] - The value for the CSS property if a single property name is provided.
 * 
 * @returns {HTMLElement} - The modified HTML element with the newly applied styles.
 */
function applyStyle<T extends HTMLElement>(targetElement: T, styleProperty: string, styleValue: string): T;
function applyStyle<T extends HTMLElement>(targetElement: T, stylePropertyMap: Partial<CSSStyleDeclaration>): T;
function applyStyle<T extends HTMLElement>(targetElement: T, stylePropOrMap: string | Partial<CSSStyleDeclaration>, styleValue?: string): T {
    let accumulatedStyles = '';

    if (typeof stylePropOrMap === 'string' && styleValue) {
        accumulatedStyles = `${convertToKebabCase(stylePropOrMap)}:${styleValue};`;
    } else if (typeof stylePropOrMap === 'object') {
        Object.entries(stylePropOrMap).forEach(([property, value]) => {
            accumulatedStyles += `${convertToKebabCase(property)}:${value};`;
        });
    }

    targetElement.style.cssText += accumulatedStyles;
    return targetElement;
}

export {
    addClass,
    removeClass,
    innerHTML,
    clearContent,
    innerText,
    setValue,
    setAttribute,
    applyStyle,
}