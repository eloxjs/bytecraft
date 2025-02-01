function isPlainObject(obj) {
    return typeof obj === 'object' &&
        obj !== null &&
        !Array.isArray(obj) &&
        Object.getPrototypeOf(obj) === Object.prototype;
}

function convertToKebabCase(str) {
    return str
        .replace(/(?<!^)([A-Z])/g, '-$1')
        .toLowerCase();
}

function createElement(descriptor, config) {
    const { tag, class: classes, id, attrs } = parseTagDescriptor(descriptor);
    const element = document.createElement(tag);
    const customConfig = {
        attributes(value) {
            Object.entries(value).forEach(([key, value]) => {
                element.setAttribute(key, value);
            });
        },
        '[]': (value) => {
            customConfig.attributes(value);
        },
        '.': (value) => {
            element.className = value;
        },
        '#': (value) => {
            element.id = value;
        },
        html(value) {
            element.innerHTML = value;
        },
        text(value) {
            element.innerText = value;
        },
        style(value) {
            Object.entries(value).forEach(([propertyName, propertyValue]) => {
                element.style[propertyName] = propertyValue;
            });
        },
        fallbackSrc(fallbackImageSource) {
            if (fallbackImageSource) {
                element.addEventListener('error', handleImageError);
            }
            function handleImageError() {
                element.removeEventListener('error', handleImageError);
                if (fallbackImageSource) {
                    element.src = fallbackImageSource;
                }
            }
        },
        numberOfLines(value) {
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
    if (config) {
        Object.entries(config).forEach(([key, value]) => {
            var _a;
            if (key in customConfig)
                return customConfig[key](value);
            if ((_a = findPropertyDescriptor(element, key)) === null || _a === undefined ? undefined : _a.set) {
                element[key] = value;
            }
        });
    }
    return element;
}
function TextNode(data) {
    return new Text(data);
}
function clearContent(targetNode) {
    targetNode.textContent = '';
    return targetNode;
}
function elementFactory(tagName) {
    return function (configOrNode, ...nodes) {
        const selector = typeof configOrNode === 'string' ? configOrNode : '';
        const config = isPlainObject(configOrNode) ? configOrNode : undefined;
        const element = createElement(`${tagName}${selector}`, config);
        const childNodes = [...((!configOrNode || selector || config) ? [] : [configOrNode]), ...nodes];
        element.append(...childNodes);
        return element;
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
const StylesheetLink = (stylesheetPath) => LinkElement({ rel: 'stylesheet', href: stylesheetPath });
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
function append(targetParent, ...childNodes) {
    if (!targetParent)
        return targetParent;
    const childArray = Array.isArray(childNodes) ? childNodes : [childNodes];
    targetParent.append(...childArray);
    return targetParent;
}
function assembleDOM(root) {
    return (...children) => {
        recursivelyAppend(root, children);
    };
    function recursivelyAppend(parent, children) {
        if (Array.isArray(children)) {
            children.forEach((child, index) => {
                if (Array.isArray(child)) {
                    let subParent = getParentOf(index);
                    if (!subParent)
                        return undefined;
                    recursivelyAppend(subParent, child);
                }
                else {
                    recursivelyAppend(parent, child);
                }
            });
        }
        else {
            append(parent, children);
        }
        function getParentOf(index) {
            if (index < 0 || !Array.isArray(children))
                return null;
            let parent = children[index - 1];
            if (Array.isArray(parent))
                return getParentOf(index - 1);
            return parent;
        }
    }
}
function addClass(targetElement, ...classNames) {
    classNames = classNames.map(className => className.split(' ')).flat(1).filter(className => !!className);
    targetElement.classList.add(...classNames);
    return targetElement;
}
function removeClass(targetElement, ...classNames) {
    classNames = classNames.map(className => className.split(' ')).flat(1).filter(className => !!className);
    targetElement.classList.remove(...classNames);
    return targetElement;
}
function innerHTML(targetElement, content) {
    targetElement.innerHTML = content;
    return targetElement;
}
function innerText(targetElement, textContent) {
    targetElement.innerText = textContent;
    return targetElement;
}
function setValue(targetElement, elementValue = '') {
    targetElement.value = elementValue;
    return targetElement;
}
function setAttribute(element, attributeOrMap, value) {
    if (typeof attributeOrMap === 'string' && value !== undefined) {
        element.setAttribute(attributeOrMap, value);
    }
    else if (typeof attributeOrMap === 'object') {
        for (let attributeKey in attributeOrMap) {
            element.setAttribute(attributeKey, attributeOrMap[attributeKey]);
        }
    }
    return element;
}
function applyStyle(targetElement, stylePropOrMap, styleValue) {
    let accumulatedStyles = '';
    if (typeof stylePropOrMap === 'string' && styleValue) {
        accumulatedStyles = `${convertToKebabCase(stylePropOrMap)}:${styleValue};`;
    }
    else if (typeof stylePropOrMap === 'object') {
        Object.entries(stylePropOrMap).forEach(([property, value]) => {
            accumulatedStyles += `${convertToKebabCase(property)}:${value};`;
        });
    }
    targetElement.style.cssText += accumulatedStyles;
    return targetElement;
}
function parseTagDescriptor(descriptor) {
    const tagMatches = descriptor.match(/^(\w+)/);
    const classMatches = descriptor.matchAll(/\.([\w-]+)(?![^\[]*\])/g);
    const idMatches = descriptor.matchAll(/#([\w\s-]+)/g);
    const attrMatches = descriptor.matchAll(/\[([\w-]+)(?:=("|')?(.*?)\2?)?\]/g);
    const classes = Array.from(classMatches).map(match => match[1]);
    const ids = Array.from(idMatches).map(match => match[1].trim());
    const attrs = {};
    for (const match of attrMatches) {
        attrs[match[1]] = match[3] || '';
    }
    return {
        tag: (tagMatches ? tagMatches[1] : 'div'),
        class: classes,
        id: ids,
        attrs
    };
}
function findPropertyDescriptor(obj, prop) {
    while (obj) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
        if (descriptor) {
            return descriptor;
        }
        obj = Object.getPrototypeOf(obj);
    }
    return null;
}

export { Abbr, Address, Anchor, Area, Article, Aside, AudioElement, B, Base, Bdi, Bdo, Blockquote, Body, Br, Button, Canvas, Caption, Cite, Code, Col, Colgroup, Data, Datalist, Dd, Del, Details, Dfn, Dialog, Div, Dl, Dt, Em, Embed, Fieldset, Figcaption, Figure, Footer, Form, H1, H2, H3, H4, H5, H6, Head, Header, Hgroup, Hr, Html, I, Iframe, Img, Input, Ins, Kbd, Label, Legend, Li, LinkElement, Main, MapElement, Mark, Menu, Meta, Meter, Nav, Noscript, ObjectElement, Ol, Optgroup, OptionElement, Output, P, Picture, Pre, Progress, Q, Rp, Rt, Ruby, S, Samp, Script, Section, Select, Small, Source, Span, Strong, Style, StylesheetLink, Sub, Summary, Sup, TBody, TFoot, THead, Table, Td, Template, TextNode, Textarea, Th, Time, Title, Tr, Track, U, Ul, Var, Video, Wbr, addClass, append, applyStyle, assembleDOM, clearContent, createElement, innerHTML, innerText, removeClass, setAttribute, setValue };
