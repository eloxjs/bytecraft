// type ElementPropertyType<K> = K extends (...args: infer P) => any ? P : K;
// // type ElementPropertyType<K> = K extends (...args: any) => any ? (K extends (...args: infer P) => any ? P : K) : K;

// type ExclusiveHTMLElementKeys<T> = Exclude<keyof T, keyof Object>;

// type ElementProperty<T> = Partial<{
//     [key in ExclusiveHTMLElementKeys<T>]: ElementPropertyType<T[key]>
// }>;

// type ElementConfiguration<T> = {
//     text?: string;
//     html?: string;
//     attributes?: Record<string, string>;
//     classNames?: string | string[];
//     id?: string;
// } & ElementProperty<T>;


// interface HTMLElementConfiguration {
//     text: string;
//     html: string;
//     attributes: Record<string, string>;
//     classNames: string | string[],
//     id: string;
// }




// interface NodeConfig {
//     nodeValue: string | null;
//     textContent: string | null;
//     appendChild<T extends Node>(node: T): T;
// }

// interface ElementConfig {
//     innerHTML: string;
//     append(...nodes: (Node | string)[]): void;
//     prepend(...nodes: (Node | string)[]): void;
//     replaceChildren(...nodes: (Node | string)[]): void;
//     className: string;
//     id: string;
//     outerHTML: string;
//     scrollLeft: number;
//     scrollTop: number;
//     slot: string;
//     attachShadow(init: ShadowRootInit): ShadowRoot; // read later
//     insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
//     insertAdjacentHTML(position: InsertPosition, text: string): void;
//     insertAdjacentText(where: InsertPosition, data: string): void;
//     scroll(options?: ScrollToOptions): void;
//     scroll(x: number, y: number): void;
//     scrollBy(options?: ScrollToOptions): void;
//     scrollBy(x: number, y: number): void;
//     scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
//     scrollTo(options?: ScrollToOptions): void;
//     scrollTo(x: number, y: number): void;
//     setAttribute(qualifiedName: string, value: string): void;
//     setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNode) */
//     setAttributeNode(attr: Attr): Attr | null;
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNodeNS) */
//     setAttributeNodeNS(attr: Attr): Attr | null;
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setPointerCapture) */
//     setPointerCapture(pointerId: number): void;
//     toggleAttribute(qualifiedName: string, force?: boolean): boolean;
//     addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
//     addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
// }

// interface ElementCSSInlineStyleConfig {
//     readonly attributeStyleMap: StylePropertyMap;
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/style) */
//     readonly style: CSSStyleDeclaration;
// }

// interface ElementContentEditableConfig {
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/contentEditable) */
//     contentEditable: string;
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/enterKeyHint) */
//     enterKeyHint: string;
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inputMode) */
//     inputMode: string;
// }

// // GlobalEventHandlers

// interface HTMLOrSVGElementConfig {
//     autofocus: boolean;
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/nonce) */
//     nonce?: string;
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/tabIndex) */
//     tabIndex: number;
// }

// interface HTMLElementConfig {
//     accessKey: string;
//     autocapitalize: string;
//     dir: string;
//     draggable: boolean;
//     hidden: boolean;
//     inert: boolean;
//     innerText: string;
//     lang: string;
//     outerText: string;
//     popover: string | null;
//     spellcheck: boolean;
//     title: string;
//     translate: boolean;
//     addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
//     addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
//     removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
//     removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
// }

// interface HTMLEmbedElement extends HTMLElement {
//     /** @deprecated */
//     align: string;
//     /** Sets or retrieves the height of the object. */
//     height: string;
//     /**
//      * Sets or retrieves the name of the object.
//      * @deprecated
//      */
//     name: string;
//     /** Sets or retrieves a URL to be loaded by the object. */
//     src: string;
//     type: string;
//     /** Sets or retrieves the width of the object. */
//     width: string;
//     getSVGDocument(): Document | null;
//     addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
//     addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
//     removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
//     removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
// }

// interface HTMLFieldSetElementConfig extends HTMLElement {
//     /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFieldSetElement/disabled) */
//     disabled: boolean;
//     name: string;
//     setCustomValidity(error: string): void;
//     addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
//     addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
//     removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
//     removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
// }