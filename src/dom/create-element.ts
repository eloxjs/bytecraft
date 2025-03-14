import {findPropertyDescriptor, parseTagDescriptor} from "./helpers";
import DOMState, { __bindDOMState } from "./dom-state";

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
            applyDynamicOrStatic(value, (val) => {
                Object.entries(val).forEach(([key, val]) => {
                    applyDynamicOrStatic(val, (attrValue) => {
                        if(typeof attrValue !== 'string' && !attrValue) {
                            element.removeAttribute(key);
                        }else {
                            element.setAttribute(key, attrValue.toString());
                        }
                    });
                });
            });
        },

        '[]': (value: ElementCustomConfig<DOMState>['[]']) => {
            customConfig.attributes(value);
        },

        '.': (value: ElementCustomConfig<DOMState>['.']) => {
            applyDynamicOrStatic(value, (val) => {
                element.className = val;
            });
        },

        '#': (value: ElementCustomConfig<DOMState>['#']) => {
            applyDynamicOrStatic(value, (val) => {
                element.id = val;
            });
        },

        html(value: ElementCustomConfig<DOMState>['html']) {
            applyDynamicOrStatic(value, (val) => {
                element.innerHTML = val;
            });
        },

        text(value: HTMLElementCustomConfig<DOMState>['text']) {
            applyDynamicOrStatic(value, (val) => {
                element.textContent = val;
            });
        },

        style(value: HTMLElementConfig['style']) {
            applyDynamicOrStatic(value, (val) => {
                Object.entries(val).forEach(([property, propertyValue]) => {
                    applyDynamicOrStatic(propertyValue, (val) => {
                        element.style.setProperty(
                            property.startsWith('--') ? property : 
                            property.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`),
                            val
                        );
                    })
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
                applyDynamicOrStatic(value, (val) => {
                    (element as any)[key] = val;
                });
            }
        });
    }

    return element;
}

// Helper function to handle dynamic or static values
function applyDynamicOrStatic<T>(
    value: T | DOMState,
    setter: (value: T) => void
) {
    if (value instanceof DOMState) {

        __bindDOMState(value, (values, previousValues) => {
            // if(!document.contains(element)) {
            //     return value.unbind();
            // }
            
            const result = value.callback(values, previousValues);
            setter(result);
        });
    } else {
        setter(value);
    }
}

export {
    createElement
};