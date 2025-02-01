// type Config = {
//     HTMLAnchorElement: HTMLAnchorElementConfig;
//     HTMLElement: HTMLElementConfig;
//     HTMLAreaElement: HTMLAreaElementConfig;
//     HTMLAudioElement: HTMLAudioElementConfig;
//     HTMLBaseElement: HTMLBaseElementConfig;
//     HTMLQuoteElement: HTMLQuoteElementConfig;
//     HTMLBodyElement: HTMLBodyElementConfig;
//     HTMLBRElement: HTMLBRElementConfig;
//     HTMLButtonElement: HTMLButtonElementConfig;
//     HTMLCanvasElement: HTMLCanvasElementConfig;
//     HTMLTableCaptionElement: HTMLTableCaptionElementConfig;
//     HTMLTableColElement: HTMLTableColElementConfig;
//     HTMLTableColElement: HTMLTableColElementConfig;
//     HTMLDataElement: HTMLDataElementConfig;
//     HTMLDataListElement: HTMLDataListElementConfig;
//     HTMLModElement: HTMLModElementConfig;
//     HTMLDetailsElement: HTMLDetailsElementConfig;
//     HTMLDialogElement: HTMLDialogElementConfig;
//     HTMLDivElement: HTMLDivElementConfig;
//     HTMLDListElement: HTMLDListElementConfig;
//     HTMLEmbedElement: HTMLEmbedElementConfig;
//     HTMLFieldSetElement: HTMLFieldSetElementConfig;
//     HTMLFormElement: HTMLFormElementConfig;
//     HTMLHeadingElement: HTMLHeadingElementConfig;
//     HTMLHeadingElement: HTMLHeadingElementConfig;
//     HTMLHeadingElement: HTMLHeadingElementConfig;
//     HTMLHeadingElement: HTMLHeadingElementConfig;
//     HTMLHeadingElement: HTMLHeadingElementConfig;
//     HTMLHeadingElement: HTMLHeadingElementConfig;
//     HTMLHeadElement: HTMLHeadElementConfig;
//     HTMLHRElement: HTMLHRElementConfig;
//     HTMLHtmlElement: HTMLHtmlElementConfig;
//     HTMLIFrameElement: HTMLIFrameElementConfig;
//     HTMLImageElement: HTMLImageElementConfig;
//     HTMLInputElement: HTMLInputElementConfig;
//     HTMLModElement: HTMLModElementConfig;
//     HTMLLabelElement: HTMLLabelElementConfig;
//     HTMLLegendElement: HTMLLegendElementConfig;
//     HTMLLIElement: HTMLLIElementConfig;
//     HTMLLinkElement: HTMLLinkElementConfig;
//     HTMLMapElement: HTMLMapElementConfig;
//     HTMLMenuElement: HTMLMenuElementConfig;
//     HTMLMetaElement: HTMLMetaElementConfig;
//     HTMLMeterElement: HTMLMeterElementConfig;
//     HTMLObjectElement: HTMLObjectElementConfig;
//     HTMLOListElement: HTMLOListElementConfig;
//     HTMLOptGroupElement: HTMLOptGroupElementConfig;
//     HTMLOptionElement: HTMLOptionElementConfig;
//     HTMLOutputElement: HTMLOutputElementConfig;
//     HTMLParagraphElement: HTMLParagraphElementConfig;
//     HTMLPictureElement: HTMLPictureElementConfig;
//     HTMLPreElement: HTMLPreElementConfig;
//     HTMLProgressElement: HTMLProgressElementConfig;
//     HTMLQuoteElement: HTMLQuoteElementConfig;
//     HTMLScriptElement: HTMLScriptElementConfig;
//     HTMLSelectElement: HTMLSelectElementConfig;
//     HTMLSlotElement: HTMLSlotElementConfig;
//     HTMLSourceElement: HTMLSourceElementConfig;
//     HTMLSpanElement: HTMLSpanElementConfig;
//     HTMLStyleElement: HTMLStyleElementConfig;
//     HTMLTableElement: HTMLTableElementConfig;
//     HTMLTableSectionElement: HTMLTableSectionElementConfig;
//     HTMLTableCellElement: HTMLTableCellElementConfig;
//     HTMLTemplateElement: HTMLTemplateElementConfig;
//     HTMLTextAreaElement: HTMLTextAreaElementConfig;
//     HTMLTableSectionElement: HTMLTableSectionElementConfig;
//     HTMLTableCellElement: HTMLTableCellElementConfig;
//     HTMLTableSectionElement: HTMLTableSectionElementConfig;
//     HTMLTimeElement: HTMLTimeElementConfig;
//     HTMLTitleElement: HTMLTitleElementConfig;
//     HTMLTableRowElement: HTMLTableRowElementConfig;
//     HTMLTrackElement: HTMLTrackElementConfig;
//     HTMLUListElement: HTMLUListElementConfig;
//     HTMLVideoElement: HTMLVideoElementConfig;
// }


// type ElementMapping = {
//     HTMLElement: "abbr" | "address" | "article" | "aside",
//     HTMLAnchorElement: "a",
//     HTMLDivElement: "div"
// };

// type ExtractType<T> = T extends keyof ElementMapping 
//     ? HTMLElementConfigMap[ElementMapping[T]] 
//     : never;

// type MyDivElementConfig = ExtractType<HTMLDivElement>;  // This would resolve to HTMLDivElementConfig
// type MyAnchorElementConfig = ExtractType<HTMLAnchorElement>;  // This would resolve to HTMLAnchorElementConfig

// type test = "HTMLElement" extends keyof ElementMapping ? true : false;