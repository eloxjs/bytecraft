import {findPropertyDescriptor, parseTagDescriptor} from "./helpers";
import DOMState from "./dom-state";

function createElement<TagName extends keyof HTMLElementTagNameMap>(descriptor:TagName, config?:HTMLElementConfigMap[TagName]):HTMLElementTagNameMap[TagName];
function createElement<Descriptor extends string>(descriptor:Descriptor, config?:HTMLElementConfigMap[ResolvedTagName<Descriptor>]): HTMLTypeFromSelector<Descriptor>;
function createElement<TagName extends keyof HTMLElementTagNameMap>(descriptor: TagName, config?:HTMLElementConfigMap[TagName]) {
    const { tag, class: classes, id, attrs } = parseTagDescriptor(descriptor);
    const element = document.createElement(tag);

    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    // Set ID (only use first valid ID)
    if (id.length > 0) {
        const validId = id.find(id => id && !/\s/.test(id));
        if (validId) element.id = validId;
    }

    // Set attributes
    for (const [attr, value] of Object.entries(attrs)) {
        element.setAttribute(attr, value);
    }

    const customConfig = {
        attributes(value: ElementCustomConfig<DOMState>['attributes']) {
            applyDynamicOrStatic(value, element, (el, val) => {
                Object.entries(val).forEach(([key, val]) => {
                    el.setAttribute(key, val as string);
                });
            });
        },

        '[]': (value: ElementCustomConfig<DOMState>['[]']) => {
            customConfig.attributes(value);
        },

        '.': (value: ElementCustomConfig<DOMState>['.']) => {
            applyDynamicOrStatic(value, element, (el, val) => {
                el.className = val;
            });
        },

        '#': (value: ElementCustomConfig<DOMState>['#']) => {
            applyDynamicOrStatic(value, element, (el, val) => {
                el.id = val;
            });
        },

        html(value: ElementCustomConfig<DOMState>['html']) {
            applyDynamicOrStatic(value, element, (el, val) => {
                el.innerHTML = val;
            });
        },

        text(value: HTMLElementCustomConfig<DOMState>['text']) {
            applyDynamicOrStatic(value, element, (el, val) => {
                el.textContent = val;
            });
        },

        style(value: HTMLElementConfig['style']) {
            applyDynamicOrStatic(value, element, (el, val) => {
                Object.entries(val).forEach(([property, value]) => {
                    el.style.setProperty(
                        property.startsWith('--') ? property : 
                        property.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`),
                        value
                    );
                });
            });
        },

        fallbackSrc(fallbackImageSource: HTMLImageElementConfig['fallbackSrc']) {
            if (element instanceof HTMLImageElement && fallbackImageSource) {
                const handleError = () => {
                    element.removeEventListener('error', handleError);
                    element.src = fallbackImageSource;
                };
                element.addEventListener('error', handleError);
            }
        },

        // element.style.cssText += `-webkit-line-clamp: ${result}; height: ${result * 1.2}em; line-height: ${result * 1.2};`;

        // numberOfLines(value: HTMLElementCustomConfig<DOMState>['numberOfLines']) {
        //     element.setAttribute('fixed-line-text', '');
        //     applyDynamicOrStatic(value, element, (el, val) => {
        //         el.style.webkitLineClamp = String(val);
        //         el.style.display = '-webkit-box';
        //         el.style.webkitBoxOrient = 'vertical';
        //         el.style.overflow = 'hidden';
        //     });
        // }
    };

    if (config) {
        Object.entries(config).forEach(([key, value]) => {
            if (key in customConfig) {
                (customConfig as any)[key](value);
                return;
            }

            const descriptor = findPropertyDescriptor(element, key);
            if (descriptor?.set) {
                applyDynamicOrStatic(value, element, (el, val) => {
                    (el as any)[key] = val;
                });
            }
        });
    }

    return element;
}

// Helper function to handle dynamic or static values
function applyDynamicOrStatic<T>(
    value: T | DOMState,
    element: HTMLElement,
    setter: (element: HTMLElement, value: T) => void
) {
    if (value instanceof DOMState) {
        value.init((values, previousValues) => {
            const result = value.callback(values, previousValues);
            setter(element, result);
        });
    } else {
        setter(element, value);
    }
}

export {
    createElement
};