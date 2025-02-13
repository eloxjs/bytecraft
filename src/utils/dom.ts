import isPlainObject from "./is-plain-object";
import { convertToKebabCase } from "./string";

function createElement<TagName extends keyof HTMLElementTagNameMap>(descriptor:TagName, config?:HTMLElementConfigMap[TagName]):HTMLElementTagNameMap[TagName];
function createElement<Descriptor extends string>(descriptor:Descriptor, config?:HTMLElementConfigMap[ResolvedTagName<Descriptor>]): HTMLTypeFromSelector<Descriptor>;
function createElement<TagName extends keyof HTMLElementTagNameMap>(descriptor: TagName, config?:HTMLElementConfigMap[TagName]) {
    const { tag, class: classes, id, attrs } = parseTagDescriptor(descriptor);

    const element = document.createElement(tag);

    const customConfig:{[key:string]:Function} = {
        attributes(value:ElementCustomConfig['attributes']) {
            Object.entries(value).forEach(([key, value]) => {
                element.setAttribute(key, value);
            });
        },
        '[]': (value:ElementCustomConfig['[]']) => {
            customConfig.attributes(value);
        },
        '.': (value:ElementCustomConfig['.']) => {
            element.className = value;
        },
        '#': (value:ElementCustomConfig['#']) => {
            element.id = value;
        },
        html(value:ElementCustomConfig['html']) {
            element.innerHTML = value;
        },
        text(value:HTMLElementCustomConfig['text']) {
            element.innerText = value;
        },
        style(value: HTMLElementConfig['style']) {
            Object.entries(value).forEach(([propertyName, propertyValue]) => {
                (element.style as any)[propertyName] = propertyValue;
            });
        },
        fallbackSrc(fallbackImageSource: HTMLImageElementConfig['fallbackSrc']) {
            if (fallbackImageSource) {
                element.addEventListener('error', handleImageError);
            }
        
            function handleImageError() {
                element.removeEventListener('error', handleImageError);
                if (fallbackImageSource) {
                    (element as HTMLImageElement).src = fallbackImageSource;
                }
            }
        },
        numberOfLines(value: HTMLElementCustomConfig['numberOfLines']) {
            element.setAttribute('fixed-line-text', '');
            element.style.cssText += `-webkit-line-clamp: ${value}; height: ${value * 1.2}em; line-height: ${value * 1.2};`;
        }
    };

    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    if (id.length > 0) {
        element.id = id.join(' ');
    }

    for (const [attr, value] of Object.entries(attrs)) {
        element.setAttribute(attr, value);
    }

    if(config) {
        Object.entries(config).forEach(([key, value]) => {
            if(key in customConfig) return customConfig[key](value);
            if(findPropertyDescriptor(element, key)?.set) {
                (element as any)[key] = value;
            }
        });
    }

    return element;
}

function TextNode(data: string) {
    return new Text(data);
}

function clearContent<TargetNode extends Node>(targetNode: TargetNode) {
    targetNode.textContent = '';
    return targetNode;
}


// ===================================
// Utility functions to generate common HTML elements
// ===================================

function elementFactory<TagName extends keyof HTMLElementTagNameMap>(tagName: TagName) {
    type Config = (`.${any}` | `#${any}` | `[${any}`) | HTMLElementConfigMap[TagName];

    return function(configOrNode?:Config | Pick<Node, keyof NodeConfig>, ...nodes:Node[]): HTMLElementTagNameMap[TagName] {
        const selector = typeof configOrNode === 'string' ? configOrNode : '';
        const config = isPlainObject(configOrNode) ? configOrNode as HTMLElementConfigMap[TagName] : undefined;
        const element = createElement(`${tagName}${selector}`, config);
        const childNodes = [...((!configOrNode || selector || config) ? [] : [configOrNode as Node]), ...nodes];
        element.append(...childNodes);

        return element as HTMLElementTagNameMap[TagName];
    };
}

const Abbr = elementFactory('abbr');
const Address = elementFactory('address');
const Anchor = elementFactory('a');
const Area = elementFactory('area');
const Article = elementFactory('article');
const Aside = elementFactory('aside');
const AudioElement = elementFactory('audio');
const B = elementFactory('b');
const Base = elementFactory('base');
const Bdi = elementFactory('bdi');
const Bdo = elementFactory('bdo');
const Blockquote = elementFactory('blockquote');
const Body = elementFactory('body');
const Br = elementFactory('br');
const Button = elementFactory('button');
const Canvas = elementFactory('canvas');
const Caption = elementFactory('caption');
const Cite = elementFactory('cite');
const Code = elementFactory('code');
const Col = elementFactory('col');
const Colgroup = elementFactory('colgroup');
const Data = elementFactory('data');
const Datalist = elementFactory('datalist');
const Dd = elementFactory('dd');
const Del = elementFactory('del');
const Details = elementFactory('details');
const Dfn = elementFactory('dfn');
const Dialog = elementFactory('dialog');
const Div = elementFactory('div');
const Dl = elementFactory('dl');
const Dt = elementFactory('dt');
const Em = elementFactory('em');
const Embed = elementFactory('embed');
const Fieldset = elementFactory('fieldset');
const Figcaption = elementFactory('figcaption');
const Figure = elementFactory('figure');
const Footer = elementFactory('footer');
const Form = elementFactory('form');
const H1 = elementFactory('h1');
const H2 = elementFactory('h2');
const H3 = elementFactory('h3');
const H4 = elementFactory('h4');
const H5 = elementFactory('h5');
const H6 = elementFactory('h6');
const Head = elementFactory('head');
const Header = elementFactory('header');
const Hgroup = elementFactory('hgroup');
const Hr = elementFactory('hr');
const Html = elementFactory('html');
const I = elementFactory('i');
const Iframe = elementFactory('iframe');
const Img = elementFactory('img');
const Input = elementFactory('input');
const Ins = elementFactory('ins');
const Kbd = elementFactory('kbd');
const Label = elementFactory('label');
const Legend = elementFactory('legend');
const Li = elementFactory('li');
const LinkElement = elementFactory('link');
const Main = elementFactory('main');
const MapElement = elementFactory('map');
const Mark = elementFactory('mark');
const Menu = elementFactory('menu');
const Meta = elementFactory('meta');
const Meter = elementFactory('meter');
const Nav = elementFactory('nav');
const Noscript = elementFactory('noscript');
const ObjectElement = elementFactory('object');
const Ol = elementFactory('ol');
const Optgroup = elementFactory('optgroup');
const OptionElement = elementFactory('option');
const Output = elementFactory('output');
const P = elementFactory('p');
const Picture = elementFactory('picture');
const Pre = elementFactory('pre');
const Progress = elementFactory('progress');
const Q = elementFactory('q');
const Rp = elementFactory('rp');
const Rt = elementFactory('rt');
const Ruby = elementFactory('ruby');
const S = elementFactory('s');
const Samp = elementFactory('samp');
const Script = elementFactory('script');
const Section = elementFactory('section');
const Select = elementFactory('select');
const Small = elementFactory('small');
const Source = elementFactory('source');
const Span = elementFactory('span');
const Strong = elementFactory('strong');
const Style = elementFactory('style');
const StylesheetLink = (stylesheetPath: string) => LinkElement({rel: 'stylesheet', href:stylesheetPath});
const Sub = elementFactory('sub');
const Summary = elementFactory('summary');
const Sup = elementFactory('sup');
const Table = elementFactory('table');
const TBody = elementFactory('tbody');
const Td = elementFactory('td');
const Template = elementFactory('template');
const Textarea = elementFactory('textarea');
const TFoot = elementFactory('tfoot');
const Th = elementFactory('th');
const THead = elementFactory('thead');
const Time = elementFactory('time');
const Title = elementFactory('title');
const Tr = elementFactory('tr');
const Track = elementFactory('track');
const U = elementFactory('u');
const Ul = elementFactory('ul');
const Var = elementFactory('var');
const Video = elementFactory('video');
const Wbr = elementFactory('wbr');
const Fragment = (...nodeList:Node[]) => {
    return append(
        document.createDocumentFragment(),
        ...nodeList
    )
}


// ===================================
// DOM Element Modification Functions
// ===================================


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
function append<ParentType extends Element|DocumentFragment>(targetParent: ParentType, ...childNodes: (Node | Text | string)[]): ParentType {
    if (!targetParent) return targetParent;

    const childArray = Array.isArray(childNodes) ? childNodes : [childNodes];
    targetParent.append(...childArray);

    return targetParent;
}

type ElementGroup = [Element, ...ElementChild[]] | Element[];
type ElementChild = Element | ElementGroup;

function assembleDOM(root:Element): (...children: [Element, ...ElementChild[]]) => void {
    return (...children) => {
        recursivelyAppend(root, children as ElementChild);
    }


    function recursivelyAppend(parent:Element, children:ElementChild) {
        if(Array.isArray(children)) {
            children.forEach((child, index) => {
                if(Array.isArray(child)) {
                    let subParent = getParentOf(index);
                    if(!subParent) return void 0;
                    recursivelyAppend(subParent, child);
                }else {
                    recursivelyAppend(parent, child);
                }
            });
        }else {
            append(parent, children);
        }

        function getParentOf(index:number) {
            if(index < 0 || !Array.isArray(children)) return null;
            let parent = children[index - 1];
            if(Array.isArray(parent)) return getParentOf(index - 1);
            return parent;
        }
    }
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

// ===================================
// Utility and Helper Functions
// ===================================

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
function parseTagDescriptor(descriptor: string): ParsedTagDescriptor {
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

function findPropertyDescriptor(obj:any, prop:string) {
    while (obj) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
        if (descriptor) {
            return descriptor;
        }
        obj = Object.getPrototypeOf(obj);
    }
    return null;
}

// export default void 0;

export {
    // Element creation utilities
    createElement,
    TextNode,
    Abbr,
    Address,
    Anchor,
    Area,
    Article,
    Aside,
    AudioElement,
    B,
    Base,
    Bdi,
    Bdo,
    Blockquote,
    Body,
    Br,
    Button,
    Canvas,
    Caption,
    Cite,
    Code,
    Col,
    Colgroup,
    Data,
    Datalist,
    Dd,
    Del,
    Details,
    Dfn,
    Dialog,
    Div,
    Dl,
    Dt,
    Em,
    Embed,
    Fieldset,
    Figcaption,
    Figure,
    Footer,
    Form,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Head,
    Header,
    Hgroup,
    Hr,
    Html,
    I,
    Iframe,
    Img,
    Input,
    Ins,
    Kbd,
    Label,
    Legend,
    Li,
    LinkElement,
    Main,
    MapElement,
    Mark,
    Menu,
    Meta,
    Meter,
    Nav,
    Noscript,
    ObjectElement,
    Ol,
    Optgroup,
    OptionElement,
    Output,
    P,
    Picture,
    Pre,
    Progress,
    Q,
    Rp,
    Rt,
    Ruby,
    S,
    Samp,
    Script,
    Section,
    Select,
    Small,
    Source,
    Span,
    Strong,
    Style,
    StylesheetLink,
    Sub,
    Summary,
    Sup,
    Table,
    TBody,
    Td,
    Template,
    Textarea,
    TFoot,
    Th,
    THead,
    Time,
    Title,
    Tr,
    Track,
    U,
    Ul,
    Var,
    Video,
    Wbr,
    Fragment,

    // Element manipulation utilities
    append,
    assembleDOM,
    addClass,
    removeClass,
    innerHTML,
    clearContent,
    innerText,
    setValue,
    setAttribute,
    applyStyle
}