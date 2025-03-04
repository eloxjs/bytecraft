/**
 * EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget)
 */
interface EventTargetConfig {
    /**
     * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
     *
     * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
     *
     * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
     *
     * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
     *
     * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
     *
     * If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.
     *
     * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
     */
    // #FUNCTION addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
}


interface NodeConfig extends EventTargetConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue) */
    nodeValue: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent) */
    textContent: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild) */
    // #FUNCTION appendChild<T extends Node>(node: T): T;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore) */
    // #FUNCTION insertBefore<T extends Node>(node: T, child: Node | null): T;
}

interface ARIAMixinConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic) */
    ariaAtomic: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete) */
    ariaAutoComplete: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy) */
    ariaBusy: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked) */
    ariaChecked: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount) */
    ariaColCount: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex) */
    ariaColIndex: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan) */
    ariaColSpan: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent) */
    ariaCurrent: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled) */
    ariaDisabled: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded) */
    ariaExpanded: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup) */
    ariaHasPopup: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden) */
    ariaHidden: string | null;
    ariaInvalid: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts) */
    ariaKeyShortcuts: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel) */
    ariaLabel: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel) */
    ariaLevel: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive) */
    ariaLive: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal) */
    ariaModal: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine) */
    ariaMultiLine: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable) */
    ariaMultiSelectable: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation) */
    ariaOrientation: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder) */
    ariaPlaceholder: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet) */
    ariaPosInSet: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed) */
    ariaPressed: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly) */
    ariaReadOnly: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired) */
    ariaRequired: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription) */
    ariaRoleDescription: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount) */
    ariaRowCount: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex) */
    ariaRowIndex: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan) */
    ariaRowSpan: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected) */
    ariaSelected: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize) */
    ariaSetSize: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort) */
    ariaSort: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax) */
    ariaValueMax: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin) */
    ariaValueMin: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow) */
    ariaValueNow: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText) */
    ariaValueText: string | null;
    role: string | null;
}

interface InnerHTMLConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) */
    innerHTML: string;
}
interface ParentNodeConfig extends NodeConfig {
    /**
     * Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
     *
     * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/append)
     */
    // #FUNCTION append(...nodes: (Node | string)[]): void;
    /**
     * Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.
     *
     * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/prepend)
     */
    // #FUNCTION prepend(...nodes: (Node | string)[]): void;
}

interface ElementCustomConfig<DOMState> {
    attributes: Record<string, string> | DOMState;
    '[]': Record<string, string> | DOMState;
    '.': string | DOMState;
    '#': string | DOMState;
    'html': string | DOMState;
}

interface HTMLElementCustomConfig<DOMState> {
    'text': string | DOMState;
    'numberOfLines': number | DOMState;
}


interface ElementConfig extends NodeConfig, ARIAMixinConfig, InnerHTMLConfig, ParentNodeConfig, ElementCustomConfig {
    /**
     * Returns the value of element's class content attribute. Can be set to change it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/className)
     */
    className: string;
    /**
     * Returns the value of element's id content attribute. Can be set to change it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/id)
     */
    id: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenchange_event) */
    onfullscreenchange: ((this: Element, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenerror_event) */
    onfullscreenerror: ((this: Element, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollLeft) */
    scrollLeft: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTop) */
    scrollTop: number;
    /**
     * Returns the value of element's slot content attribute. Can be set to change it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/slot)
     */
    slot: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentElement) */
    // #FUNCTION insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentHTML) */
    // #FUNCTION insertAdjacentHTML(position: InsertPosition, text: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentText) */
    // #FUNCTION insertAdjacentText(where: InsertPosition, data: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scroll) */
    // #FUNCTION scroll(options?: ScrollToOptions): void;
    // #FUNCTION scroll(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollBy) */
    // #FUNCTION scrollBy(options?: ScrollToOptions): void;
    // #FUNCTION scrollBy(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView) */
    // #FUNCTION scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTo) */
    // #FUNCTION scrollTo(options?: ScrollToOptions): void;
    // #FUNCTION scrollTo(x: number, y: number): void;
    /**
     * If force is not given, "toggles" qualifiedName, removing it if it is present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.
     *
     * Returns true if qualifiedName is now present, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/toggleAttribute)
     */
    // #FUNCTION toggleAttribute(qualifiedName: string, force?: boolean): boolean;
    // #FUNCTION addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION removeEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    // #FUNCTION removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ElementContentEditableConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/contentEditable) */
    contentEditable: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/enterKeyHint) */
    enterKeyHint: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inputMode) */
    inputMode: string;
}

interface GlobalEventHandlersConfig {
    /**
     * Fires when the user aborts the download.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)
     */
    onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event) */
    onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event) */
    onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event) */
    onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event) */
    onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event) */
    onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforeinput_event) */
    onbeforeinput: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
    /**
     * Fires when the object loses the input focus.
     * @param ev The focus event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)
     */
    onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event) */
    oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when playback is possible, but would require further buffering.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)
     */
    oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event) */
    oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the contents of the object or selection have changed.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)
     */
    onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user clicks the left mouse button on the object
     * @param ev The mouse event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)
     */
    onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event) */
    onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user clicks the right mouse button in the client area, opening the context menu.
     * @param ev The mouse event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)
     */
    oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event) */
    oncopy: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event) */
    oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event) */
    oncut: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
    /**
     * Fires when the user double-clicks the object.
     * @param ev The mouse event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
     */
    ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires on the source object continuously during a drag operation.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)
     */
    ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the source object when the user releases the mouse at the close of a drag operation.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)
     */
    ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the target element when the user drags the object to a valid drop target.
     * @param ev The drag event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)
     */
    ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
     * @param ev The drag event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)
     */
    ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the target element continuously while the user drags the object over a valid drop target.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)
     */
    ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the source object when the user starts to drag a text selection or selected object.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)
     */
    ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event) */
    ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Occurs when the duration attribute is updated.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)
     */
    ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the media element is reset to its initial state.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)
     */
    onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the end of playback is reached.
     * @param ev The event
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)
     */
    onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when an error occurs during object loading.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)
     */
    onerror: OnErrorEventHandler;
    /**
     * Fires when the object receives focus.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)
     */
    onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event) */
    onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event) */
    ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/input_event) */
    oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event) */
    oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user presses a key.
     * @param ev The keyboard event
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)
     */
    onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Fires when the user presses an alphanumeric key.
     * @param ev The event.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)
     */
    onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Fires when the user releases a key.
     * @param ev The keyboard event
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)
     */
    onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Fires immediately after the browser loads the object.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)
     */
    onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when media data is loaded at the current playback position.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)
     */
    onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the duration and dimensions of the media have been determined.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
     */
    onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when Internet Explorer begins looking for media data.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)
     */
    onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lostpointercapture_event) */
    onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /**
     * Fires when the user clicks the object with either mouse button.
     * @param ev The mouse event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)
     */
    onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event) */
    onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event) */
    onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user moves the mouse over the object.
     * @param ev The mouse event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)
     */
    onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user moves the mouse pointer outside the boundaries of the object.
     * @param ev The mouse event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)
     */
    onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user moves the mouse pointer into the object.
     * @param ev The mouse event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)
     */
    onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user releases a mouse button while the mouse is over the object.
     * @param ev The mouse event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)
     */
    onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event) */
    onpaste: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
    /**
     * Occurs when playback is paused.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)
     */
    onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the play method is requested.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)
     */
    onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the audio or video has started playing.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)
     */
    onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event) */
    onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event) */
    onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event) */
    onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event) */
    onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event) */
    onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event) */
    onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event) */
    onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event) */
    onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /**
     * Occurs to indicate progress while downloading media data.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)
     */
    onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    /**
     * Occurs when the playback rate is increased or decreased.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)
     */
    onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user resets a form.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)
     */
    onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event) */
    onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    /**
     * Fires when the user repositions the scroll box in the scroll bar on the object.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)
     */
    onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event) */
    onscrollend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event) */
    onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
    /**
     * Occurs when the seek operation ends.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)
     */
    onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the current playback position is moved.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)
     */
    onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the current selection changes.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)
     */
    onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event) */
    onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event) */
    onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event) */
    onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the download has stopped.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)
     */
    onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event) */
    onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
    /**
     * Occurs if the load operation has been intentionally halted.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)
     */
    onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs to indicate the current playback position.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)
     */
    ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event) */
    ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event) */
    ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event) */
    ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event) */
    ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event) */
    ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event) */
    ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event) */
    ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event) */
    ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event) */
    ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    /**
     * Occurs when the volume is changed, or playback is muted or unmuted.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)
     */
    onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when playback stops because the next frame of a video resource is not available.
     * @param ev The event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)
     */
    onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * @deprecated This is a legacy alias of `onanimationend`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)
     */
    onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * @deprecated This is a legacy alias of `onanimationiteration`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
     */
    onwebkitanimationiteration: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * @deprecated This is a legacy alias of `onanimationstart`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
     */
    onwebkitanimationstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * @deprecated This is a legacy alias of `ontransitionend`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
     */
    onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event) */
    onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    // #FUNCTION addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION removeEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    // #FUNCTION removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOrSVGElementConfig {
    autofocus: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/nonce) */
    nonce?: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/tabIndex) */
    tabIndex: number;
}

interface CSSStyleDeclarationConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/accent-color) */
    accentColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-content) */
    alignContent: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-items) */
    alignItems: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-self) */
    alignSelf: string;
    alignmentBaseline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/all) */
    all: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation) */
    animation: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-composition) */
    animationComposition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay) */
    animationDelay: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction) */
    animationDirection: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration) */
    animationDuration: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode) */
    animationFillMode: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count) */
    animationIterationCount: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name) */
    animationName: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state) */
    animationPlayState: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function) */
    animationTimingFunction: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance) */
    appearance: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio) */
    aspectRatio: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter) */
    backdropFilter: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility) */
    backfaceVisibility: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background) */
    background: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment) */
    backgroundAttachment: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode) */
    backgroundBlendMode: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip) */
    backgroundClip: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-color) */
    backgroundColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-image) */
    backgroundImage: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin) */
    backgroundOrigin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position) */
    backgroundPosition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x) */
    backgroundPositionX: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y) */
    backgroundPositionY: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat) */
    backgroundRepeat: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size) */
    backgroundSize: string;
    baselineShift: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/block-size) */
    blockSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border) */
    border: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block) */
    borderBlock: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color) */
    borderBlockColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end) */
    borderBlockEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color) */
    borderBlockEndColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style) */
    borderBlockEndStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width) */
    borderBlockEndWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start) */
    borderBlockStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color) */
    borderBlockStartColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style) */
    borderBlockStartStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width) */
    borderBlockStartWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style) */
    borderBlockStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width) */
    borderBlockWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom) */
    borderBottom: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color) */
    borderBottomColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius) */
    borderBottomLeftRadius: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius) */
    borderBottomRightRadius: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style) */
    borderBottomStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width) */
    borderBottomWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse) */
    borderCollapse: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-color) */
    borderColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius) */
    borderEndEndRadius: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius) */
    borderEndStartRadius: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image) */
    borderImage: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset) */
    borderImageOutset: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat) */
    borderImageRepeat: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice) */
    borderImageSlice: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source) */
    borderImageSource: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width) */
    borderImageWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline) */
    borderInline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color) */
    borderInlineColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end) */
    borderInlineEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color) */
    borderInlineEndColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style) */
    borderInlineEndStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width) */
    borderInlineEndWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start) */
    borderInlineStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color) */
    borderInlineStartColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style) */
    borderInlineStartStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width) */
    borderInlineStartWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style) */
    borderInlineStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width) */
    borderInlineWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left) */
    borderLeft: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color) */
    borderLeftColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style) */
    borderLeftStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width) */
    borderLeftWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius) */
    borderRadius: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right) */
    borderRight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color) */
    borderRightColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style) */
    borderRightStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width) */
    borderRightWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing) */
    borderSpacing: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius) */
    borderStartEndRadius: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius) */
    borderStartStartRadius: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-style) */
    borderStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top) */
    borderTop: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color) */
    borderTopColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius) */
    borderTopLeftRadius: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius) */
    borderTopRightRadius: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style) */
    borderTopStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width) */
    borderTopWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-width) */
    borderWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/bottom) */
    bottom: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow) */
    boxShadow: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing) */
    boxSizing: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-after) */
    breakAfter: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-before) */
    breakBefore: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-inside) */
    breakInside: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caption-side) */
    captionSide: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caret-color) */
    caretColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clear) */
    clear: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip)
     */
    clip: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-path) */
    clipPath: string;
    clipRule: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color) */
    color: string;
    colorInterpolation: string;
    colorInterpolationFilters: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-scheme) */
    colorScheme: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-count) */
    columnCount: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-fill) */
    columnFill: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-gap) */
    columnGap: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule) */
    columnRule: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color) */
    columnRuleColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style) */
    columnRuleStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width) */
    columnRuleWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-span) */
    columnSpan: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-width) */
    columnWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/columns) */
    columns: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain) */
    contain: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-block-size) */
    containIntrinsicBlockSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height) */
    containIntrinsicHeight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-inline-size) */
    containIntrinsicInlineSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size) */
    containIntrinsicSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width) */
    containIntrinsicWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container) */
    container: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-name) */
    containerName: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-type) */
    containerType: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/content) */
    content: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment) */
    counterIncrement: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset) */
    counterReset: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-set) */
    counterSet: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssFloat) */
    cssFloat: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssText) */
    cssText: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cursor) */
    cursor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/direction) */
    direction: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/display) */
    display: string;
    dominantBaseline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells) */
    emptyCells: string;
    fill: string;
    fillOpacity: string;
    fillRule: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter) */
    filter: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex) */
    flex: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis) */
    flexBasis: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction) */
    flexDirection: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow) */
    flexFlow: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow) */
    flexGrow: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink) */
    flexShrink: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap) */
    flexWrap: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/float) */
    float: string;
    floodColor: string;
    floodOpacity: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font) */
    font: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-family) */
    fontFamily: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings) */
    fontFeatureSettings: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning) */
    fontKerning: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing) */
    fontOpticalSizing: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-palette) */
    fontPalette: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size) */
    fontSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust) */
    fontSizeAdjust: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-stretch) */
    fontStretch: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-style) */
    fontStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis) */
    fontSynthesis: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps) */
    fontSynthesisSmallCaps: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style) */
    fontSynthesisStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight) */
    fontSynthesisWeight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant) */
    fontVariant: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates) */
    fontVariantAlternates: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps) */
    fontVariantCaps: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian) */
    fontVariantEastAsian: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures) */
    fontVariantLigatures: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric) */
    fontVariantNumeric: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position) */
    fontVariantPosition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings) */
    fontVariationSettings: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-weight) */
    fontWeight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust) */
    forcedColorAdjust: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/gap) */
    gap: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid) */
    grid: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-area) */
    gridArea: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns) */
    gridAutoColumns: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow) */
    gridAutoFlow: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows) */
    gridAutoRows: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column) */
    gridColumn: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end) */
    gridColumnEnd: string;
    /** @deprecated This is a legacy alias of `columnGap`. */
    gridColumnGap: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start) */
    gridColumnStart: string;
    /** @deprecated This is a legacy alias of `gap`. */
    gridGap: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row) */
    gridRow: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end) */
    gridRowEnd: string;
    /** @deprecated This is a legacy alias of `rowGap`. */
    gridRowGap: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start) */
    gridRowStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template) */
    gridTemplate: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas) */
    gridTemplateAreas: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns) */
    gridTemplateColumns: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows) */
    gridTemplateRows: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/height) */
    height: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphenate-character) */
    hyphenateCharacter: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphens) */
    hyphens: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
     */
    imageOrientation: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering) */
    imageRendering: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inline-size) */
    inlineSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset) */
    inset: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block) */
    insetBlock: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end) */
    insetBlockEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start) */
    insetBlockStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline) */
    insetInline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end) */
    insetInlineEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start) */
    insetInlineStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/isolation) */
    isolation: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-content) */
    justifyContent: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-items) */
    justifyItems: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-self) */
    justifySelf: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/left) */
    left: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing) */
    letterSpacing: string;
    lightingColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-break) */
    lineBreak: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height) */
    lineHeight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style) */
    listStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image) */
    listStyleImage: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position) */
    listStylePosition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type) */
    listStyleType: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin) */
    margin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block) */
    marginBlock: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end) */
    marginBlockEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start) */
    marginBlockStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom) */
    marginBottom: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline) */
    marginInline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end) */
    marginInlineEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start) */
    marginInlineStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-left) */
    marginLeft: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-right) */
    marginRight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-top) */
    marginTop: string;
    marker: string;
    markerEnd: string;
    markerMid: string;
    markerStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask) */
    mask: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip) */
    maskClip: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite) */
    maskComposite: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image) */
    maskImage: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode) */
    maskMode: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin) */
    maskOrigin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position) */
    maskPosition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat) */
    maskRepeat: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size) */
    maskSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-type) */
    maskType: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/math-style) */
    mathStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size) */
    maxBlockSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-height) */
    maxHeight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size) */
    maxInlineSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-width) */
    maxWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size) */
    minBlockSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-height) */
    minHeight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size) */
    minInlineSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-width) */
    minWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode) */
    mixBlendMode: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-fit) */
    objectFit: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-position) */
    objectPosition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset) */
    offset: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance) */
    offsetDistance: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-path) */
    offsetPath: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate) */
    offsetRotate: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/opacity) */
    opacity: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order) */
    order: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/orphans) */
    orphans: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline) */
    outline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-color) */
    outlineColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset) */
    outlineOffset: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-style) */
    outlineStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-width) */
    outlineWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow) */
    overflow: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor) */
    overflowAnchor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin) */
    overflowClipMargin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap) */
    overflowWrap: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x) */
    overflowX: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y) */
    overflowY: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior) */
    overscrollBehavior: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block) */
    overscrollBehaviorBlock: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline) */
    overscrollBehaviorInline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x) */
    overscrollBehaviorX: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y) */
    overscrollBehaviorY: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding) */
    padding: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block) */
    paddingBlock: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end) */
    paddingBlockEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start) */
    paddingBlockStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom) */
    paddingBottom: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline) */
    paddingInline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end) */
    paddingInlineEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start) */
    paddingInlineStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-left) */
    paddingLeft: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-right) */
    paddingRight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-top) */
    paddingTop: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page) */
    page: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-after) */
    pageBreakAfter: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-before) */
    pageBreakBefore: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-inside) */
    pageBreakInside: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/paint-order) */
    paintOrder: string;
    cssText: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective) */
    perspective: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin) */
    perspectiveOrigin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-content) */
    placeContent: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-items) */
    placeItems: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-self) */
    placeSelf: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events) */
    pointerEvents: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/position) */
    position: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/print-color-adjust) */
    printColorAdjust: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/quotes) */
    quotes: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/resize) */
    resize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/right) */
    right: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/rotate) */
    rotate: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/row-gap) */
    rowGap: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position) */
    rubyPosition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scale) */
    scale: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior) */
    scrollBehavior: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin) */
    scrollMargin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block) */
    scrollMarginBlock: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end) */
    scrollMarginBlockEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start) */
    scrollMarginBlockStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom) */
    scrollMarginBottom: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline) */
    scrollMarginInline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end) */
    scrollMarginInlineEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start) */
    scrollMarginInlineStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left) */
    scrollMarginLeft: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right) */
    scrollMarginRight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top) */
    scrollMarginTop: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding) */
    scrollPadding: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block) */
    scrollPaddingBlock: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end) */
    scrollPaddingBlockEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start) */
    scrollPaddingBlockStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom) */
    scrollPaddingBottom: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline) */
    scrollPaddingInline: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end) */
    scrollPaddingInlineEnd: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start) */
    scrollPaddingInlineStart: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left) */
    scrollPaddingLeft: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right) */
    scrollPaddingRight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top) */
    scrollPaddingTop: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align) */
    scrollSnapAlign: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop) */
    scrollSnapStop: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type) */
    scrollSnapType: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter) */
    scrollbarGutter: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold) */
    shapeImageThreshold: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin) */
    shapeMargin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside) */
    shapeOutside: string;
    shapeRendering: string;
    stopColor: string;
    stopOpacity: string;
    stroke: string;
    strokeDasharray: string;
    strokeDashoffset: string;
    strokeLinecap: string;
    strokeLinejoin: string;
    strokeMiterlimit: string;
    strokeOpacity: string;
    strokeWidth: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/tab-size) */
    tabSize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/table-layout) */
    tableLayout: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align) */
    textAlign: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last) */
    textAlignLast: string;
    textAnchor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright) */
    textCombineUpright: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration) */
    textDecoration: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color) */
    textDecorationColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line) */
    textDecorationLine: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink) */
    textDecorationSkipInk: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style) */
    textDecorationStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness) */
    textDecorationThickness: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis) */
    textEmphasis: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color) */
    textEmphasisColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position) */
    textEmphasisPosition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style) */
    textEmphasisStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-indent) */
    textIndent: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation) */
    textOrientation: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow) */
    textOverflow: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering) */
    textRendering: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow) */
    textShadow: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-transform) */
    textTransform: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset) */
    textUnderlineOffset: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position) */
    textUnderlinePosition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/top) */
    top: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/touch-action) */
    touchAction: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform) */
    transform: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-box) */
    transformBox: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin) */
    transformOrigin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style) */
    transformStyle: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition) */
    transition: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay) */
    transitionDelay: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration) */
    transitionDuration: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property) */
    transitionProperty: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function) */
    transitionTimingFunction: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/translate) */
    translate: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi) */
    unicodeBidi: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select) */
    userSelect: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align) */
    verticalAlign: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/visibility) */
    visibility: string;
    /**
     * @deprecated This is a legacy alias of `alignContent`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-content)
     */
    webkitAlignContent: string;
    /**
     * @deprecated This is a legacy alias of `alignItems`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-items)
     */
    webkitAlignItems: string;
    /**
     * @deprecated This is a legacy alias of `alignSelf`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-self)
     */
    webkitAlignSelf: string;
    /**
     * @deprecated This is a legacy alias of `animation`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation)
     */
    webkitAnimation: string;
    /**
     * @deprecated This is a legacy alias of `animationDelay`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
     */
    webkitAnimationDelay: string;
    /**
     * @deprecated This is a legacy alias of `animationDirection`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
     */
    webkitAnimationDirection: string;
    /**
     * @deprecated This is a legacy alias of `animationDuration`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
     */
    webkitAnimationDuration: string;
    /**
     * @deprecated This is a legacy alias of `animationFillMode`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
     */
    webkitAnimationFillMode: string;
    /**
     * @deprecated This is a legacy alias of `animationIterationCount`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
     */
    webkitAnimationIterationCount: string;
    /**
     * @deprecated This is a legacy alias of `animationName`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)
     */
    webkitAnimationName: string;
    /**
     * @deprecated This is a legacy alias of `animationPlayState`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
     */
    webkitAnimationPlayState: string;
    /**
     * @deprecated This is a legacy alias of `animationTimingFunction`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
     */
    webkitAnimationTimingFunction: string;
    /**
     * @deprecated This is a legacy alias of `appearance`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance)
     */
    webkitAppearance: string;
    /**
     * @deprecated This is a legacy alias of `backfaceVisibility`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
     */
    webkitBackfaceVisibility: string;
    /**
     * @deprecated This is a legacy alias of `backgroundClip`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)
     */
    webkitBackgroundClip: string;
    /**
     * @deprecated This is a legacy alias of `backgroundOrigin`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)
     */
    webkitBackgroundOrigin: string;
    /**
     * @deprecated This is a legacy alias of `backgroundSize`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size)
     */
    webkitBackgroundSize: string;
    /**
     * @deprecated This is a legacy alias of `borderBottomLeftRadius`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
     */
    webkitBorderBottomLeftRadius: string;
    /**
     * @deprecated This is a legacy alias of `borderBottomRightRadius`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
     */
    webkitBorderBottomRightRadius: string;
    /**
     * @deprecated This is a legacy alias of `borderRadius`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)
     */
    webkitBorderRadius: string;
    /**
     * @deprecated This is a legacy alias of `borderTopLeftRadius`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
     */
    webkitBorderTopLeftRadius: string;
    /**
     * @deprecated This is a legacy alias of `borderTopRightRadius`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
     */
    webkitBorderTopRightRadius: string;
    /**
     * @deprecated This is a legacy alias of `boxAlign`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-align)
     */
    webkitBoxAlign: string;
    /**
     * @deprecated This is a legacy alias of `boxFlex`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex)
     */
    webkitBoxFlex: string;
    /**
     * @deprecated This is a legacy alias of `boxOrdinalGroup`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
     */
    webkitBoxOrdinalGroup: string;
    /**
     * @deprecated This is a legacy alias of `boxOrient`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-orient)
     */
    webkitBoxOrient: string;
    /**
     * @deprecated This is a legacy alias of `boxPack`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-pack)
     */
    webkitBoxPack: string;
    /**
     * @deprecated This is a legacy alias of `boxShadow`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
     */
    webkitBoxShadow: string;
    /**
     * @deprecated This is a legacy alias of `boxSizing`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
     */
    webkitBoxSizing: string;
    /**
     * @deprecated This is a legacy alias of `filter`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter)
     */
    webkitFilter: string;
    /**
     * @deprecated This is a legacy alias of `flex`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex)
     */
    webkitFlex: string;
    /**
     * @deprecated This is a legacy alias of `flexBasis`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
     */
    webkitFlexBasis: string;
    /**
     * @deprecated This is a legacy alias of `flexDirection`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
     */
    webkitFlexDirection: string;
    /**
     * @deprecated This is a legacy alias of `flexFlow`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
     */
    webkitFlexFlow: string;
    /**
     * @deprecated This is a legacy alias of `flexGrow`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
     */
    webkitFlexGrow: string;
    /**
     * @deprecated This is a legacy alias of `flexShrink`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
     */
    webkitFlexShrink: string;
    /**
     * @deprecated This is a legacy alias of `flexWrap`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
     */
    webkitFlexWrap: string;
    /**
     * @deprecated This is a legacy alias of `justifyContent`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-content)
     */
    webkitJustifyContent: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp) */
    webkitLineClamp: string;
    /**
     * @deprecated This is a legacy alias of `mask`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask)
     */
    webkitMask: string;
    /**
     * @deprecated This is a legacy alias of `maskBorder`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border)
     */
    webkitMaskBoxImage: string;
    /**
     * @deprecated This is a legacy alias of `maskBorderOutset`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-outset)
     */
    webkitMaskBoxImageOutset: string;
    /**
     * @deprecated This is a legacy alias of `maskBorderRepeat`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat)
     */
    webkitMaskBoxImageRepeat: string;
    /**
     * @deprecated This is a legacy alias of `maskBorderSlice`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-slice)
     */
    webkitMaskBoxImageSlice: string;
    /**
     * @deprecated This is a legacy alias of `maskBorderSource`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-source)
     */
    webkitMaskBoxImageSource: string;
    /**
     * @deprecated This is a legacy alias of `maskBorderWidth`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-width)
     */
    webkitMaskBoxImageWidth: string;
    /**
     * @deprecated This is a legacy alias of `maskClip`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
     */
    webkitMaskClip: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-composite) */
    webkitMaskComposite: string;
    /**
     * @deprecated This is a legacy alias of `maskImage`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)
     */
    webkitMaskImage: string;
    /**
     * @deprecated This is a legacy alias of `maskOrigin`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
     */
    webkitMaskOrigin: string;
    /**
     * @deprecated This is a legacy alias of `maskPosition`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)
     */
    webkitMaskPosition: string;
    /**
     * @deprecated This is a legacy alias of `maskRepeat`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
     */
    webkitMaskRepeat: string;
    /**
     * @deprecated This is a legacy alias of `maskSize`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)
     */
    webkitMaskSize: string;
    /**
     * @deprecated This is a legacy alias of `order`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order)
     */
    webkitOrder: string;
    /**
     * @deprecated This is a legacy alias of `perspective`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective)
     */
    webkitPerspective: string;
    /**
     * @deprecated This is a legacy alias of `perspectiveOrigin`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
     */
    webkitPerspectiveOrigin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color) */
    webkitTextFillColor: string;
    /**
     * @deprecated This is a legacy alias of `textSizeAdjust`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)
     */
    webkitTextSizeAdjust: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke) */
    webkitTextStroke: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color) */
    webkitTextStrokeColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width) */
    webkitTextStrokeWidth: string;
    /**
     * @deprecated This is a legacy alias of `transform`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform)
     */
    webkitTransform: string;
    /**
     * @deprecated This is a legacy alias of `transformOrigin`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
     */
    webkitTransformOrigin: string;
    /**
     * @deprecated This is a legacy alias of `transformStyle`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)
     */
    webkitTransformStyle: string;
    /**
     * @deprecated This is a legacy alias of `transition`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition)
     */
    webkitTransition: string;
    /**
     * @deprecated This is a legacy alias of `transitionDelay`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
     */
    webkitTransitionDelay: string;
    /**
     * @deprecated This is a legacy alias of `transitionDuration`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
     */
    webkitTransitionDuration: string;
    /**
     * @deprecated This is a legacy alias of `transitionProperty`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)
     */
    webkitTransitionProperty: string;
    /**
     * @deprecated This is a legacy alias of `transitionTimingFunction`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
     */
    webkitTransitionTimingFunction: string;
    /**
     * @deprecated This is a legacy alias of `userSelect`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select)
     */
    webkitUserSelect: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space) */
    whiteSpace: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/widows) */
    widows: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/width) */
    width: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/will-change) */
    willChange: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-break) */
    wordBreak: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing) */
    wordSpacing: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
     */
    wordWrap: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode) */
    writingMode: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/z-index) */
    zIndex: string;
}

interface ElementCSSInlineStyleConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/style) */
    style: Partial<{[key in keyof CSSStyleDeclarationConfig]: CSSStyleDeclarationConfig[key]}>;
}

interface HTMLElementConfig extends ElementConfig, ElementCSSInlineStyleConfig, HTMLElementCustomConfig, ElementContentEditableConfig, GlobalEventHandlersConfig, HTMLOrSVGElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKey) */
    accessKey: string;
    autocapitalize: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dir) */
    dir: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/draggable) */
    draggable: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidden) */
    hidden: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inert) */
    inert: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/innerText) */
    innerText: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/lang) */
    lang: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/outerText) */
    outerText: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/popover) */
    popover: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/spellcheck) */
    spellcheck: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/title) */
    title: string;
    translate: boolean;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLHyperlinkElementUtilsConfig {
    /**
     * Returns the hyperlink's URL's fragment (includes leading "#" if non-empty).
     *
     * Can be set, to change the URL's fragment (ignores leading "#").
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/hash)
     */
    hash: string;
    /**
     * Returns the hyperlink's URL's host and port (if different from the default port for the scheme).
     *
     * Can be set, to change the URL's host and port.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/host)
     */
    host: string;
    /**
     * Returns the hyperlink's URL's host.
     *
     * Can be set, to change the URL's host.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/hostname)
     */
    hostname: string;
    /**
     * Returns the hyperlink's URL.
     *
     * Can be set, to change the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/href)
     */
    href: string;
    /**
     * Returns the hyperlink's URL's password.
     *
     * Can be set, to change the URL's password.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/password)
     */
    password: string;
    /**
     * Returns the hyperlink's URL's path.
     *
     * Can be set, to change the URL's path.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/pathname)
     */
    pathname: string;
    /**
     * Returns the hyperlink's URL's port.
     *
     * Can be set, to change the URL's port.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/port)
     */
    port: string;
    /**
     * Returns the hyperlink's URL's scheme.
     *
     * Can be set, to change the URL's scheme.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/protocol)
     */
    protocol: string;
    /**
     * Returns the hyperlink's URL's query (includes leading "?" if non-empty).
     *
     * Can be set, to change the URL's query (ignores leading "?").
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/search)
     */
    search: string;
    /**
     * Returns the hyperlink's URL's username.
     *
     * Can be set, to change the URL's username.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/username)
     */
    username: string;
}

interface HTMLAnchorElementConfig extends HTMLElementConfig, HTMLHyperlinkElementUtilsConfig {
    /**
     * Sets or retrieves the character set used to encode the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/charset)
     */
    charset: string;
    /**
     * Sets or retrieves the coordinates of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/coords)
     */
    coords: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/download) */
    download: string;
    /**
     * Sets or retrieves the language code of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/hreflang)
     */
    hreflang: string;
    /**
     * Sets or retrieves the shape of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/name)
     */
    name: string;
    ping: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/referrerPolicy) */
    referrerPolicy: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/rel)
     */
    rel: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/rev)
     */
    rev: string;
    /**
     * Sets or retrieves the shape of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/shape)
     */
    shape: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/target)
     */
    target: string;
    /**
     * Retrieves or sets the text of the object as a string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/text)
     */
    text: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/type) */
    type: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLAreaElementConfig extends HTMLElementConfig, HTMLHyperlinkElementUtilsConfig {
    /**
     * Sets or retrieves a text alternative to the graphic.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/alt)
     */
    alt: string;
    /**
     * Sets or retrieves the coordinates of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/coords)
     */
    coords: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/download) */
    download: string;
    /**
     * Sets or gets whether clicks in this region cause action.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/noHref)
     */
    noHref: boolean;
    ping: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/referrerPolicy) */
    referrerPolicy: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/rel) */
    rel: string;
    /**
     * Sets or retrieves the shape of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/shape)
     */
    shape: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/target)
     */
    target: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLAudioElementConfig extends HTMLMediaElementConfig {
    // #FUNCTION addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLBRElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBRElement/clear)
     */
    clear: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLBaseElementConfig extends HTMLElementConfig {
    /**
     * Gets or sets the baseline URL on which relative links are based.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBaseElement/href)
     */
    href: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBaseElement/target)
     */
    target: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLBodyElementConfig extends HTMLElementConfig, WindowEventHandlersConfig {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBodyElement/aLink)
     */
    aLink: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBodyElement/background)
     */
    background: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBodyElement/bgColor)
     */
    bgColor: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBodyElement/link)
     */
    link: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBodyElement/text)
     */
    text: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBodyElement/vLink)
     */
    vLink: string;
    // #FUNCTION addEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLButtonElementConfig extends HTMLElementConfig, PopoverInvokerElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/disabled) */
    disabled: boolean;
    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/formAction)
     */
    formAction: string;
    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/formEnctype)
     */
    formEnctype: string;
    /**
     * Overrides the submit method attribute previously specified on a form element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/formMethod)
     */
    formMethod: string;
    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/formNoValidate)
     */
    formNoValidate: boolean;
    /**
     * Overrides the target attribute on a form element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/formTarget)
     */
    formTarget: string;
    /**
     * Sets or retrieves the name of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/name)
     */
    name: string;
    /**
     * Gets the classification and default behavior of the button.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/type)
     */
    type: "submit" | "reset" | "button";
    /**
     * Sets or retrieves the default or selected value of the control.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/value)
     */
    value: string;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    // #FUNCTION setCustomValidity(error: string): void;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLCanvasElementConfig extends HTMLElementConfig {
    /**
     * Gets or sets the height of a canvas element on a document.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/height)
     */
    height: number;
    /**
     * Gets or sets the width of a canvas element on a document.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/width)
     */
    width: number;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLDListElementConfig extends HTMLElementConfig {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDListElement/compact)
     */
    compact: boolean;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLDataElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDataElement/value) */
    value: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLDataListElementConfig extends HTMLElementConfig {
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLDetailsElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/open) */
    open: boolean;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLDialogElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/open) */
    open: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/returnValue) */
    returnValue: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/** @deprecated */
interface HTMLDirectoryElementConfig extends HTMLElementConfig {
    /** @deprecated */
    compact: boolean;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLDivElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDivElement/align)
     */
    align: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/** @deprecated use Document */
interface HTMLDocumentConfig extends DocumentConfig {
    // #FUNCTION addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLEmbedElementConfig extends HTMLElementConfig {
    /** @deprecated */
    align: string;
    /** Sets or retrieves the height of the object. */
    height: string;
    /**
     * Sets or retrieves the name of the object.
     * @deprecated
     */
    name: string;
    /** Sets or retrieves a URL to be loaded by the object. */
    src: string;
    type: string;
    /** Sets or retrieves the width of the object. */
    width: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLFieldSetElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFieldSetElement/disabled) */
    disabled: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFieldSetElement/name) */
    name: string;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    // #FUNCTION setCustomValidity(error: string): void;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/**
 * @deprecated
 */
interface HTMLFontElementConfig extends HTMLElementConfig {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFontElement/color)
     */
    color: string;
    /**
     * Sets or retrieves the current typeface family.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFontElement/face)
     */
    face: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFontElement/size)
     */
    size: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLFormElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/acceptCharset)
     */
    acceptCharset: string;
    /**
     * Sets or retrieves the URL to which the form content is sent for processing.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/action)
     */
    action: string;
    /**
     * Specifies whether autocomplete is applied to an editable text field.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/autocomplete)
     */
    autocomplete: AutoFillBase;
    /**
     * Sets or retrieves the MIME encoding for the form.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/encoding)
     */
    encoding: string;
    /**
     * Sets or retrieves the encoding type for the form.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/enctype)
     */
    enctype: string;
    /**
     * Sets or retrieves how to send the form data to the server.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/method)
     */
    method: string;
    /**
     * Sets or retrieves the name of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/name)
     */
    name: string;
    /**
     * Designates a form that is not validated when submitted.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/noValidate)
     */
    noValidate: boolean;
    rel: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/target)
     */
    target: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/requestSubmit) */
    // #FUNCTION requestSubmit(submitter?: HTMLElement | null): void;
    /**
     * Fires when the user resets a form.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset)
     */
    // #FUNCTION reset(): void;
    /**
     * Fires when a FORM is about to be submitted.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit)
     */
    // #FUNCTION submit(): void;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/**
 * @deprecated
 */
interface HTMLFrameElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves whether to display a border for the frame.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFrameElement/frameBorder)
     */
    frameBorder: string;
    /**
     * Sets or retrieves a URI to a long description of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFrameElement/longDesc)
     */
    longDesc: string;
    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFrameElement/marginHeight)
     */
    marginHeight: string;
    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFrameElement/marginWidth)
     */
    marginWidth: string;
    /**
     * Sets or retrieves the frame name.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFrameElement/name)
     */
    name: string;
    /**
     * Sets or retrieves whether the user can resize the frame.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFrameElement/noResize)
     */
    noResize: boolean;
    /**
     * Sets or retrieves whether the frame can be scrolled.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFrameElement/scrolling)
     */
    scrolling: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFrameElement/src)
     */
    src: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}


interface WindowEventHandlersConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event) */
    onafterprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeprint_event) */
    onbeforeprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event) */
    onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepadconnected_event) */
    ongamepadconnected: ((this: WindowEventHandlers, ev: GamepadEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepaddisconnected_event) */
    ongamepaddisconnected: ((this: WindowEventHandlers, ev: GamepadEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event) */
    onhashchange: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/languagechange_event) */
    onlanguagechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/message_event) */
    onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/messageerror_event) */
    onmessageerror: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/offline_event) */
    onoffline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/online_event) */
    ononline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagehide_event) */
    onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageshow_event) */
    onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) */
    onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/rejectionhandled_event) */
    onrejectionhandled: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/storage_event) */
    onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event) */
    onunhandledrejection: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event) */
    onunload: ((this: WindowEventHandlers, ev: Event) => any) | null;
    // #FUNCTION addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION removeEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    // #FUNCTION removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

/**
 * Provides special properties (beyond those of the regular HTMLElement interface they also inherit) for manipulating <frameset> elements.
 * @deprecated
 */
interface HTMLFrameSetElementConfig extends HTMLElementConfig, WindowEventHandlersConfig {
    /**
     * Sets or retrieves the frame widths of the object.
     * @deprecated
     */
    cols: string;
    /**
     * Sets or retrieves the frame heights of the object.
     * @deprecated
     */
    rows: string;
    // #FUNCTION addEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLHRElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     * @deprecated
     */
    align: string;
    /** @deprecated */
    color: string;
    /**
     * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
     * @deprecated
     */
    noShade: boolean;
    /** @deprecated */
    size: string;
    /**
     * Sets or retrieves the width of the object.
     * @deprecated
     */
    width: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}


interface HTMLHeadElementConfig extends HTMLElementConfig {
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}


interface HTMLHeadingElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLHeadingElement/align)
     */
    align: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLHtmlElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves the DTD version that governs the current document.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLHtmlElement/version)
     */
    version: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLIFrameElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/align)
     */
    align: string;
    allow: string;
    allowFullscreen: boolean;
    /**
     * Sets or retrieves whether to display a border for the frame.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/frameBorder)
     */
    frameBorder: string;
    /**
     * Sets or retrieves the height of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/height)
     */
    height: string;
    loading: string;
    /**
     * Sets or retrieves a URI to a long description of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/longDesc)
     */
    longDesc: string;
    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/marginHeight)
     */
    marginHeight: string;
    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/marginWidth)
     */
    marginWidth: string;
    /**
     * Sets or retrieves the frame name.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/name)
     */
    name: string;
    /**
     * Sets or retrieves whether the frame can be scrolled.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/scrolling)
     */
    scrolling: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/src)
     */
    src: string;
    /**
     * Sets or retrives the content of the page that is to contain.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/srcdoc)
     */
    srcdoc: string;
    /**
     * Sets or retrieves the width of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/width)
     */
    width: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLImageElementCustomConfig {
    fallbackSrc: string;
}

interface HTMLImageElementConfig extends HTMLElementConfig, HTMLImageElementCustomConfig {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/align)
     */
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/alt)
     */
    alt: string;
    /**
     * Specifies the properties of a border drawn around an object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/border)
     */
    border: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/crossOrigin) */
    crossOrigin: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/decoding) */
    decoding: "async" | "sync" | "auto";
    /**
     * Sets or retrieves the height of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/height)
     */
    height: number;
    /**
     * Sets or retrieves the width of the border to draw around the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/hspace)
     */
    hspace: number;
    /**
     * Sets or retrieves whether the image is a server-side image map.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/isMap)
     */
    isMap: boolean;
    /**
     * Sets or retrieves the policy for loading image elements that are outside the viewport.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/loading)
     */
    loading: "eager" | "lazy";
    /**
     * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/longDesc)
     */
    longDesc: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/lowsrc)
     */
    lowsrc: string;
    /**
     * Sets or retrieves the name of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/name)
     */
    name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/referrerPolicy) */
    referrerPolicy: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/sizes) */
    sizes: string;
    /**
     * The address or URL of the a media resource that is to be considered.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/src)
     */
    src: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/srcset) */
    srcset: string;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/useMap)
     */
    useMap: string;
    /**
     * Sets or retrieves the vertical margin for the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/vspace)
     */
    vspace: number;
    /**
     * Sets or retrieves the width of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/width)
     */
    width: number;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface PopoverInvokerElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/popoverTargetAction) */
    popoverTargetAction: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/popoverTargetElement) */
    popoverTargetElement: Element | null;
}

interface HTMLInputElementConfig extends HTMLElementConfig, PopoverInvokerElementConfig {
    /** Sets or retrieves a comma-separated list of content types. */
    accept: string;
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     * @deprecated
     */
    align: string;
    /** Sets or retrieves a text alternative to the graphic. */
    alt: string;
    /**
     * Specifies whether autocomplete is applied to an editable text field.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/autocomplete)
     */
    autocomplete: AutoFill;
    capture: string;
    /** Sets or retrieves the state of the check box or radio button. */
    checked: boolean;
    /** Sets or retrieves the state of the check box or radio button. */
    defaultChecked: boolean;
    /** Sets or retrieves the initial contents of the object. */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formAction)
     */
    formAction: string;
    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formEnctype)
     */
    formEnctype: string;
    /**
     * Overrides the submit method attribute previously specified on a form element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formMethod)
     */
    formMethod: string;
    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formNoValidate)
     */
    formNoValidate: boolean;
    /**
     * Overrides the target attribute on a form element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formTarget)
     */
    formTarget: string;
    /**
     * Sets or retrieves the height of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/height)
     */
    height: number;
    /**
     * When set, overrides the rendering of checkbox controls so that the current value is not visible.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/indeterminate)
     */
    indeterminate: boolean;
    /** Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field. */
    max: string;
    /** Sets or retrieves the maximum number of characters that the user can enter in a text control. */
    maxLength: number;
    /** Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field. */
    min: string;
    minLength: number;
    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/multiple)
     */
    multiple: boolean;
    /** Sets or retrieves the name of the object. */
    name: string;
    /**
     * Gets or sets a string containing a regular expression that the user's input must match.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/pattern)
     */
    pattern: string;
    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/placeholder)
     */
    placeholder: string;
    readOnly: boolean;
    /**
     * When present, marks an element that can't be submitted without a value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/required)
     */
    required: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/selectionDirection) */
    selectionDirection: "forward" | "backward" | "none" | null;
    /** Gets or sets the end position or offset of a text selection. */
    selectionEnd: number | null;
    /** Gets or sets the starting position or offset of a text selection. */
    selectionStart: number | null;
    size: number;
    /** The address or URL of the a media resource that is to be considered. */
    src: string;
    /** Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field. */
    step: string;
    /** Returns the content type of the object. */
    type: string;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     * @deprecated
     */
    useMap: string;
    /** Returns the value of the data at the cursor's current position. */
    value: string;
    /** Returns a Date object representing the form control's value, if applicable; otherwise, returns null. Can be set, to change the value. Throws an "InvalidStateError" DOMException if the control isn't date- or time-based. */
    valueAsDate: Date | null;
    /** Returns the input field value as a number. */
    valueAsNumber: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/webkitdirectory) */
    webkitdirectory: boolean;
    /**
     * Sets or retrieves the width of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/width)
     */
    width: number;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}


/**
 * Exposes specific properties and methods (beyond those defined by regular HTMLElement interface it also has available to it by inheritance) for manipulating list elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLIElement)
 */
interface HTMLLIElementConfig extends HTMLElementConfig {
    /** @deprecated */
    type: string;
    /** Sets or retrieves the value of a list item. */
    value: number;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}


/**
 * Gives access to properties specific to <label> elements. It inherits methods and properties from the base HTMLElement interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)
 */
interface HTMLLabelElementConfig extends HTMLElementConfig {
    htmlFor: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/**
 * The HTMLLegendElement is an interface allowing to access properties of the <legend> elements. It inherits properties and methods from the HTMLElement interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLegendElement)
 */
interface HTMLLegendElementConfig extends HTMLElementConfig {
    /** @deprecated */
    align: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/**
 * Reference information for external resources and the relationship of those resources to a document and vice-versa. This object inherits all of the properties and methods of the HTMLElement interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement)
 */
interface HTMLLinkElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/as) */
    as: string;
    /**
     * Sets or retrieves the character set used to encode the object.
     * @deprecated
     */
    charset: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/crossOrigin) */
    crossOrigin: string | null;
    disabled: boolean;
    /** Sets or retrieves a destination URL or an anchor point. */
    href: string;
    /** Sets or retrieves the language code of the object. */
    hreflang: string;
    imageSizes: string;
    imageSrcset: string;
    integrity: string;
    /** Sets or retrieves the media type. */
    media: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/referrerPolicy) */
    referrerPolicy: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/rel)
     */
    rel: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     * @deprecated
     */
    rev: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     * @deprecated
     */
    target: string;
    /** Sets or retrieves the MIME type of the object. */
    type: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLMapElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves the name of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMapElement/name)
     */
    name: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/**
 * Provides methods to manipulate <marquee> elements.
 * @deprecated
 */
interface HTMLMarqueeElementConfig extends HTMLElementConfig {
    /** @deprecated */
    behavior: string;
    /** @deprecated */
    bgColor: string;
    /** @deprecated */
    direction: string;
    /** @deprecated */
    height: string;
    /** @deprecated */
    hspace: number;
    /** @deprecated */
    loop: number;
    /** @deprecated */
    scrollAmount: number;
    /** @deprecated */
    scrollDelay: number;
    /** @deprecated */
    trueSpeed: boolean;
    /** @deprecated */
    vspace: number;
    /** @deprecated */
    width: string;
    /** @deprecated */
    // #FUNCTION start(): void;
    /** @deprecated */
    // #FUNCTION stop(): void;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}
interface HTMLMediaElementConfig extends HTMLElementConfig {
    /**
     * Gets or sets a value that indicates whether to start playing the media automatically.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/autoplay)
     */
    autoplay: boolean;
    /**
     * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/controls)
     */
    controls: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/crossOrigin) */
    crossOrigin: string | null;
    /**
     * Gets or sets the current playback position, in seconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/currentTime)
     */
    currentTime: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/defaultMuted) */
    defaultMuted: boolean;
    /**
     * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
     */
    defaultPlaybackRate: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/disableRemotePlayback) */
    disableRemotePlayback: boolean;
    /**
     * Gets or sets a flag to specify whether playback should restart after it completes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loop)
     */
    loop: boolean;
    /**
     * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/muted)
     */
    muted: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/encrypted_event) */
    onencrypted: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waitingforkey_event) */
    onwaitingforkey: ((this: HTMLMediaElement, ev: Event) => any) | null;
    /**
     * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playbackRate)
     */
    playbackRate: number;
    /**
     * Gets or sets a value indicating what data should be preloaded, if any.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/preload)
     */
    preload: "none" | "metadata" | "auto" | "";
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/preservesPitch) */
    preservesPitch: boolean;
    /**
     * The address or URL of the a media resource that is to be considered.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/src)
     */
    src: string;
    /**
     * Gets or sets the volume level for audio portions of the media element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volume)
     */
    volume: number;
    // #FUNCTION addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLMenuElementConfig extends HTMLElementConfig {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMenuElement/compact)
     */
    compact: boolean;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLMetaElementConfig extends HTMLElementConfig {
    /** Gets or sets meta-information to associate with httpEquiv or name. */
    content: string;
    /** Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header. */
    httpEquiv: string;
    media: string;
    /** Sets or retrieves the value specified in the content attribute of the meta object. */
    name: string;
    /**
     * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.
     * @deprecated
     */
    scheme: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLMeterElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMeterElement/high) */
    high: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMeterElement/low) */
    low: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMeterElement/max) */
    max: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMeterElement/min) */
    min: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMeterElement/optimum) */
    optimum: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMeterElement/value) */
    value: number;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLModElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves reference information about the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLModElement/cite)
     */
    cite: string;
    /**
     * Sets or retrieves the date and time of a modification to the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLModElement/dateTime)
     */
    dateTime: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLOListElementConfig extends HTMLElementConfig {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOListElement/compact)
     */
    compact: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOListElement/reversed) */
    reversed: boolean;
    /**
     * The starting number.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOListElement/start)
     */
    start: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOListElement/type) */
    type: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLObjectElementConfig extends HTMLElementConfig {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/align)
     */
    align: string;
    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/archive)
     */
    archive: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/border)
     */
    border: string;
    /**
     * Sets or retrieves the URL of the file containing the compiled Java class.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/code)
     */
    code: string;
    /**
     * Sets or retrieves the URL of the component.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/codeBase)
     */
    codeBase: string;
    /**
     * Sets or retrieves the Internet media type for the code associated with the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/codeType)
     */
    codeType: string;
    /**
     * Sets or retrieves the URL that references the data of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/data)
     */
    data: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/declare)
     */
    declare: boolean;
    /**
     * Sets or retrieves the height of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/height)
     */
    height: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/hspace)
     */
    hspace: number;
    /**
     * Sets or retrieves the name of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/name)
     */
    name: string;
    /**
     * Sets or retrieves a message to be displayed while an object is loading.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/standby)
     */
    standby: string;
    /**
     * Sets or retrieves the MIME type of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/type)
     */
    type: string;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/useMap)
     */
    useMap: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/vspace)
     */
    vspace: number;
    /**
     * Sets or retrieves the width of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/width)
     */
    width: string;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/setCustomValidity)
     */
    // #FUNCTION setCustomValidity(error: string): void;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/**
 * Provides special properties and methods (beyond the regular HTMLElement object interface they also have available to them by inheritance) for manipulating the layout and presentation of <optgroup> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptGroupElement)
 */
interface HTMLOptGroupElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptGroupElement/disabled) */
    disabled: boolean;
    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptGroupElement/label)
     */
    label: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLOptionElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves the status of an option.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/defaultSelected)
     */
    defaultSelected: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/disabled) */
    disabled: boolean;
    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/label)
     */
    label: string;
    /**
     * Sets or retrieves whether the option in the list box is the default item.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/selected)
     */
    selected: boolean;
    /**
     * Sets or retrieves the text string specified by the option tag.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/text)
     */
    text: string;
    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/value)
     */
    value: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLOutputElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/defaultValue) */
    defaultValue: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/name) */
    name: string;
    /**
     * Returns the element's current value.
     *
     * Can be set, to change the value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/value)
     */
    value: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLParagraphElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLParagraphElement/align)
     */
    align: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/**
 * @deprecated
 */
interface HTMLParamElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves the name of an input parameter for an element.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLParamElement/name)
     */
    name: string;
    /**
     * Sets or retrieves the content type of the resource designated by the value attribute.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLParamElement/type)
     */
    type: string;
    /**
     * Sets or retrieves the value of an input parameter for an element.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLParamElement/value)
     */
    value: string;
    /**
     * Sets or retrieves the data type of the value attribute.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLParamElement/valueType)
     */
    valueType: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLPictureElementConfig extends HTMLElementConfig {
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLPreElementConfig extends HTMLElementConfig {
    /**
     * Sets or gets a value that you can use to implement your own width functionality for the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLPreElement/width)
     */
    width: number;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLProgressElementConfig extends HTMLElementConfig {
    /**
     * Defines the maximum, or "done" value for a progress element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLProgressElement/max)
     */
    max: number;
    /**
     * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLProgressElement/value)
     */
    value: number;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLQuoteElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves reference information about the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLQuoteElement/cite)
     */
    cite: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}
interface HTMLScriptElementConfig extends HTMLElementConfig {
    async: boolean;
    /**
     * Sets or retrieves the character set used to encode the object.
     * @deprecated
     */
    charset: string;
    crossOrigin: string | null;
    /** Sets or retrieves the status of the script. */
    defer: boolean;
    /**
     * Sets or retrieves the event for which the script is written.
     * @deprecated
     */
    event: string;
    /**
     * Sets or retrieves the object that is bound to the event script.
     * @deprecated
     */
    htmlFor: string;
    integrity: string;
    noModule: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLScriptElement/referrerPolicy) */
    referrerPolicy: string;
    /** Retrieves the URL to an external file that contains the source code or data. */
    src: string;
    /** Retrieves or sets the text of the object as a string. */
    text: string;
    /** Sets or retrieves the MIME type for the associated scripting engine. */
    type: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLSelectElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/autocomplete) */
    autocomplete: AutoFill;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/disabled) */
    disabled: boolean;
    /**
     * Sets or retrieves the number of objects in a collection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/length)
     */
    length: number;
    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/multiple)
     */
    multiple: boolean;
    /**
     * Sets or retrieves the name of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/name)
     */
    name: string;
    /**
     * When present, marks an element that can't be submitted without a value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/required)
     */
    required: boolean;
    /**
     * Sets or retrieves the index of the selected option in a select object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/selectedIndex)
     */
    selectedIndex: number;
    /**
     * Sets or retrieves the number of rows in the list box.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/size)
     */
    size: number;
    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/value)
     */
    value: string;
    /**
     * Adds an element to the areas, controlRange, or options collection.
     * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
     * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/add)
     */
    // #FUNCTION add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    // #FUNCTION setCustomValidity(error: string): void;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLSlotElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/name) */
    name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/assign) */
    // #FUNCTION assign(...nodes: (Element | Text)[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/assignedElements) */
    // #FUNCTION assignedElements(options?: AssignedNodesOptions): Element[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/assignedNodes) */
    // #FUNCTION assignedNodes(options?: AssignedNodesOptions): Node[];
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLSourceElementConfig extends HTMLElementConfig {
    height: number;
    /**
     * Gets or sets the intended media type of the media source.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSourceElement/media)
     */
    media: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSourceElement/sizes) */
    sizes: string;
    /**
     * The address or URL of the a media resource that is to be considered.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSourceElement/src)
     */
    src: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSourceElement/srcset) */
    srcset: string;
    /**
     * Gets or sets the MIME type of a media resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSourceElement/type)
     */
    type: string;
    width: number;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}


interface HTMLSpanElementConfig extends HTMLElementConfig {
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLStyleElementConfig extends HTMLElementConfig {
    /**
     * Enables or disables the style sheet.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLStyleElement/disabled)
     */
    disabled: boolean;
    /**
     * Sets or retrieves the media type.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLStyleElement/media)
     */
    media: string;
    /**
     * Retrieves the CSS language in which the style sheet is written.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLStyleElement/type)
     */
    type: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTableCaptionElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves the alignment of the caption or legend.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCaptionElement/align)
     */
    align: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTableCellElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves abbreviated text for the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/abbr)
     */
    abbr: string;
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/align)
     */
    align: string;
    /**
     * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/axis)
     */
    axis: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/bgColor)
     */
    bgColor: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/ch)
     */
    ch: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/chOff)
     */
    chOff: string;
    /**
     * Sets or retrieves the number columns in the table that the object should span.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/colSpan)
     */
    colSpan: number;
    /**
     * Sets or retrieves a list of header cells that provide information for the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/headers)
     */
    headers: string;
    /**
     * Sets or retrieves the height of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/height)
     */
    height: string;
    /**
     * Sets or retrieves whether the browser automatically performs wordwrap.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/noWrap)
     */
    noWrap: boolean;
    /**
     * Sets or retrieves how many rows in a table the cell should span.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/rowSpan)
     */
    rowSpan: number;
    /**
     * Sets or retrieves the group of cells in a table to which the object's information applies.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/scope)
     */
    scope: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/vAlign)
     */
    vAlign: string;
    /**
     * Sets or retrieves the width of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/width)
     */
    width: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTableColElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves the alignment of the object relative to the display or table.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableColElement/align)
     */
    align: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableColElement/ch)
     */
    ch: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableColElement/chOff)
     */
    chOff: string;
    /**
     * Sets or retrieves the number of columns in the group.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableColElement/span)
     */
    span: number;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableColElement/vAlign)
     */
    vAlign: string;
    /**
     * Sets or retrieves the width of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableColElement/width)
     */
    width: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

/** @deprecated prefer HTMLTableCellElement */
interface HTMLTableDataCellElementConfig extends HTMLTableCellElementConfig {
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTableElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/align)
     */
    align: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/bgColor)
     */
    bgColor: string;
    /**
     * Sets or retrieves the width of the border to draw around the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/border)
     */
    border: string;
    /**
     * Sets or retrieves the amount of space between the border of the cell and the content of the cell.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/cellPadding)
     */
    cellPadding: string;
    /**
     * Sets or retrieves the amount of space between cells in a table.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/cellSpacing)
     */
    cellSpacing: string;
    /**
     * Sets or retrieves the way the border frame around the table is displayed.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/frame)
     */
    frame: string;
    /**
     * Sets or retrieves which dividing lines (inner borders) are displayed.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/rules)
     */
    rules: string;
    /**
     * Sets or retrieves a description and/or structure of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/summary)
     */
    summary: string;
    /**
     * Retrieves the tFoot object of the table.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/tFoot)
     */
    tFoot: HTMLTableSectionElement | null;
    /**
     * Retrieves the tHead object of the table.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/tHead)
     */
    tHead: HTMLTableSectionElement | null;
    /**
     * Sets or retrieves the width of the object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/width)
     */
    width: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTableHeaderCellElementConfig extends HTMLTableCellElementConfig {
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTableRowElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement/align)
     */
    align: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement/bgColor)
     */
    bgColor: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement/ch)
     */
    ch: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement/chOff)
     */
    chOff: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement/vAlign)
     */
    vAlign: string;
    /**
     * Creates a new cell in the table row, and adds the cell to the cells collection.
     * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement/insertCell)
     */
    // #FUNCTION insertCell(index?: number): HTMLTableCellElement;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTableSectionElementConfig extends HTMLElementConfig {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableSectionElement/align)
     */
    align: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableSectionElement/ch)
     */
    ch: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableSectionElement/chOff)
     */
    chOff: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableSectionElement/vAlign)
     */
    vAlign: string;
    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableSectionElement/insertRow)
     */
    // #FUNCTION insertRow(index?: number): HTMLTableRowElement;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTemplateElementConfig extends HTMLElementConfig {
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTextAreaElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/autocomplete) */
    autocomplete: AutoFill;
    /** Sets or retrieves the width of the object. */
    cols: number;
    /** Sets or retrieves the initial contents of the object. */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /** Sets or retrieves the maximum number of characters that the user can enter in a text control. */
    maxLength: number;
    minLength: number;
    /** Sets or retrieves the name of the object. */
    name: string;
    /** Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field. */
    placeholder: string;
    /** Sets or retrieves the value indicated whether the content of the object is read-only. */
    readOnly: boolean;
    /** When present, marks an element that can't be submitted without a value. */
    required: boolean;
    /** Sets or retrieves the number of horizontal rows contained in the object. */
    rows: number;
    selectionDirection: "forward" | "backward" | "none";
    /** Gets or sets the end position or offset of a text selection. */
    selectionEnd: number;
    /** Gets or sets the starting position or offset of a text selection. */
    selectionStart: number;
    /** Retrieves or sets the text in the entry field of the textArea element. */
    value: string;
    /** Sets or retrieves how to handle wordwrapping in the object. */
    wrap: string;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    // #FUNCTION setCustomValidity(error: string): void;
    // #FUNCTION setRangeText(replacement: string): void;
    // #FUNCTION setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    // #FUNCTION setSelectionRange(start: number | null, end: number | null, direction?: "forward" | "backward" | "none"): void;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTimeElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTimeElement/dateTime) */
    dateTime: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTitleElementConfig extends HTMLElementConfig {
    /**
     * Retrieves or sets the text of the object as a string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTitleElement/text)
     */
    text: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTrackElementConfig extends HTMLElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/default) */
    default: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/kind) */
    kind: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/label) */
    label: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/src) */
    src: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/srclang) */
    srclang: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLUListElementConfig extends HTMLElementConfig {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLUListElement/compact)
     */
    compact: boolean;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLUListElement/type)
     */
    type: string;
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLUnknownElementConfig extends HTMLElementConfig {
    // #FUNCTION addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}


interface HTMLVideoElementConfig extends HTMLMediaElementConfig {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/disablePictureInPicture) */
    disablePictureInPicture: boolean;
    /**
     * Gets or sets the height of the video element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/height)
     */
    height: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event) */
    onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) */
    onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    /** Gets or sets the playsinline of the video element. for example, On iPhone, video elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins. */
    playsInline: boolean;
    /**
     * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/poster)
     */
    poster: string;
    /**
     * Gets or sets the width of the video element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/width)
     */
    width: number;
    // #FUNCTION cancelVideoFrameCallback(handle: number): void;
    // #FUNCTION addEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // #FUNCTION addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

type PartialConfig<T> = Partial<{[key in keyof T]: T[key]}>;

type ConfigTypes = {
    "a": HTMLAnchorElementConfig;
    "abbr": HTMLElementConfig;
    "address": HTMLElementConfig;
    "area": HTMLAreaElementConfig;
    "article": HTMLElementConfig;
    "aside": HTMLElementConfig;
    "audio": HTMLAudioElementConfig;
    "b": HTMLElementConfig;
    "base": HTMLBaseElementConfig;
    "bdi": HTMLElementConfig;
    "bdo": HTMLElementConfig;
    "blockquote": HTMLQuoteElementConfig;
    "body": HTMLBodyElementConfig;
    "br": HTMLBRElementConfig;
    "button": HTMLButtonElementConfig;
    "canvas": HTMLCanvasElementConfig;
    "caption": HTMLTableCaptionElementConfig;
    "cite": HTMLElementConfig;
    "code": HTMLElementConfig;
    "col": HTMLTableColElementConfig;
    "colgroup": HTMLTableColElementConfig;
    "data": HTMLDataElementConfig;
    "datalist": HTMLDataListElementConfig;
    "dd": HTMLElementConfig;
    "del": HTMLModElementConfig;
    "details": HTMLDetailsElementConfig;
    "dfn": HTMLElementConfig;
    "dialog": HTMLDialogElementConfig;
    "div": HTMLDivElementConfig;
    "dl": HTMLDListElementConfig;
    "dt": HTMLElementConfig;
    "em": HTMLElementConfig;
    "embed": HTMLEmbedElementConfig;
    "fieldset": HTMLFieldSetElementConfig;
    "figcaption": HTMLElementConfig;
    "figure": HTMLElementConfig;
    "footer": HTMLElementConfig;
    "form": HTMLFormElementConfig;
    "h1": HTMLHeadingElementConfig;
    "h2": HTMLHeadingElementConfig;
    "h3": HTMLHeadingElementConfig;
    "h4": HTMLHeadingElementConfig;
    "h5": HTMLHeadingElementConfig;
    "h6": HTMLHeadingElementConfig;
    "head": HTMLHeadElementConfig;
    "header": HTMLElementConfig;
    "hgroup": HTMLElementConfig;
    "hr": HTMLHRElementConfig;
    "html": HTMLHtmlElementConfig;
    "i": HTMLElementConfig;
    "iframe": HTMLIFrameElementConfig;
    "img": HTMLImageElementConfig;
    "input": HTMLInputElementConfig;
    "ins": HTMLModElementConfig;
    "kbd": HTMLElementConfig;
    "label": HTMLLabelElementConfig;
    "legend": HTMLLegendElementConfig;
    "li": HTMLLIElementConfig;
    "link": HTMLLinkElementConfig;
    "main": HTMLElementConfig;
    "map": HTMLMapElementConfig;
    "mark": HTMLElementConfig;
    "menu": HTMLMenuElementConfig;
    "meta": HTMLMetaElementConfig;
    "meter": HTMLMeterElementConfig;
    "nav": HTMLElementConfig;
    "noscript": HTMLElementConfig;
    "object": HTMLObjectElementConfig;
    "ol": HTMLOListElementConfig;
    "optgroup": HTMLOptGroupElementConfig;
    "option": HTMLOptionElementConfig;
    "output": HTMLOutputElementConfig;
    "p": HTMLParagraphElementConfig;
    "picture": HTMLPictureElementConfig;
    "pre": HTMLPreElementConfig;
    "progress": HTMLProgressElementConfig;
    "q": HTMLQuoteElementConfig;
    "rp": HTMLElementConfig;
    "rt": HTMLElementConfig;
    "ruby": HTMLElementConfig;
    "s": HTMLElementConfig;
    "samp": HTMLElementConfig;
    "script": HTMLScriptElementConfig;
    "search": HTMLElementConfig;
    "section": HTMLElementConfig;
    "select": HTMLSelectElementConfig;
    "slot": HTMLSlotElementConfig;
    "small": HTMLElementConfig;
    "source": HTMLSourceElementConfig;
    "span": HTMLSpanElementConfig;
    "strong": HTMLElementConfig;
    "style": HTMLStyleElementConfig;
    "sub": HTMLElementConfig;
    "summary": HTMLElementConfig;
    "sup": HTMLElementConfig;
    "table": HTMLTableElementConfig;
    "tbody": HTMLTableSectionElementConfig;
    "td": HTMLTableCellElementConfig;
    "template": HTMLTemplateElementConfig;
    "textarea": HTMLTextAreaElementConfig;
    "tfoot": HTMLTableSectionElementConfig;
    "th": HTMLTableCellElementConfig;
    "thead": HTMLTableSectionElementConfig;
    "time": HTMLTimeElementConfig;
    "title": HTMLTitleElementConfig;
    "tr": HTMLTableRowElementConfig;
    "track": HTMLTrackElementConfig;
    "u": HTMLElementConfig;
    "ul": HTMLUListElementConfig;
    "var": HTMLElementConfig;
    "video": HTMLVideoElementConfig;
    "wbr": HTMLElementConfig;
}

interface Apple extends HTMLElementCustomConfig, ElementCustomConfig {
    rel: string;
    src: string;
    className: string;
    type: string;
    placeholder: string;
    id: string;
    style: any;
    title: string;
    min: string;
    max: string;
    step: string;
    readOnly: boolean;
    innerText: string;
    href: string;
}

type HTMLElementConfigMap = {
    [K in keyof ConfigTypes]: Partial<ConfigTypes[K]>;
}