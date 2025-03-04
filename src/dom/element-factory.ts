// ===================================
// Utility functions to generate common HTML elements
// ===================================

import isPlainObject from "../utils/is-plain-object";
import {append} from "./append";
import {createElement} from "./create-element";

function elementFactory<TagName extends keyof HTMLElementTagNameMap>(tagName: TagName) {
    type Config = (`.${any}` | `#${any}` | `[${any}`) | HTMLElementConfigMap[TagName];

    return function(configOrNode?:Config | Pick<Node, keyof NodeConfig>, ...nodes:Node[]): HTMLElementTagNameMap[TagName] {
        const selector = typeof configOrNode === 'string' ? configOrNode : '';
        const config = isPlainObject(configOrNode) ? configOrNode as HTMLElementConfigMap[TagName] : undefined;
        const element = createElement(`${tagName}${selector}`, config);
        const childNodes = [...((!configOrNode || selector || config) ? [] : [configOrNode as Node]), ...nodes];
        append(element, ...childNodes);

        return element as HTMLElementTagNameMap[TagName];
    };
}

export const Abbr = elementFactory('abbr');
export const Address = elementFactory('address');
export const Anchor = elementFactory('a');
export const Area = elementFactory('area');
export const Article = elementFactory('article');
export const Aside = elementFactory('aside');
export const AudioElement = elementFactory('audio');
export const B = elementFactory('b');
export const Base = elementFactory('base');
export const Bdi = elementFactory('bdi');
export const Bdo = elementFactory('bdo');
export const Blockquote = elementFactory('blockquote');
export const Body = elementFactory('body');
export const Br = elementFactory('br');
export const Button = elementFactory('button');
export const Canvas = elementFactory('canvas');
export const Caption = elementFactory('caption');
export const Cite = elementFactory('cite');
export const Code = elementFactory('code');
export const Col = elementFactory('col');
export const Colgroup = elementFactory('colgroup');
export const Data = elementFactory('data');
export const Datalist = elementFactory('datalist');
export const Dd = elementFactory('dd');
export const Del = elementFactory('del');
export const Details = elementFactory('details');
export const Dfn = elementFactory('dfn');
export const Dialog = elementFactory('dialog');
export const Div = elementFactory('div');
export const Dl = elementFactory('dl');
export const Dt = elementFactory('dt');
export const Em = elementFactory('em');
export const Embed = elementFactory('embed');
export const Fieldset = elementFactory('fieldset');
export const Figcaption = elementFactory('figcaption');
export const Figure = elementFactory('figure');
export const Footer = elementFactory('footer');
export const Form = elementFactory('form');
export const H1 = elementFactory('h1');
export const H2 = elementFactory('h2');
export const H3 = elementFactory('h3');
export const H4 = elementFactory('h4');
export const H5 = elementFactory('h5');
export const H6 = elementFactory('h6');
export const Head = elementFactory('head');
export const Header = elementFactory('header');
export const Hgroup = elementFactory('hgroup');
export const Hr = elementFactory('hr');
export const Html = elementFactory('html');
export const I = elementFactory('i');
export const Iframe = elementFactory('iframe');
export const Img = elementFactory('img');
export const Input = elementFactory('input');
export const Ins = elementFactory('ins');
export const Kbd = elementFactory('kbd');
export const Label = elementFactory('label');
export const Legend = elementFactory('legend');
export const Li = elementFactory('li');
export const LinkElement = elementFactory('link');
export const Main = elementFactory('main');
export const MapElement = elementFactory('map');
export const Mark = elementFactory('mark');
export const Menu = elementFactory('menu');
export const Meta = elementFactory('meta');
export const Meter = elementFactory('meter');
export const Nav = elementFactory('nav');
export const Noscript = elementFactory('noscript');
export const ObjectElement = elementFactory('object');
export const Ol = elementFactory('ol');
export const Optgroup = elementFactory('optgroup');
export const OptionElement = elementFactory('option');
export const Output = elementFactory('output');
export const P = elementFactory('p');
export const Picture = elementFactory('picture');
export const Pre = elementFactory('pre');
export const Progress = elementFactory('progress');
export const Q = elementFactory('q');
export const Rp = elementFactory('rp');
export const Rt = elementFactory('rt');
export const Ruby = elementFactory('ruby');
export const S = elementFactory('s');
export const Samp = elementFactory('samp');
export const Script = elementFactory('script');
export const Section = elementFactory('section');
export const Select = elementFactory('select');
export const Small = elementFactory('small');
export const Source = elementFactory('source');
export const Span = elementFactory('span');
export const Strong = elementFactory('strong');
export const Style = elementFactory('style');
export const StylesheetLink = (stylesheetPath: string) => LinkElement({rel: 'stylesheet', href:stylesheetPath});
export const Sub = elementFactory('sub');
export const Summary = elementFactory('summary');
export const Sup = elementFactory('sup');
export const Table = elementFactory('table');
export const TBody = elementFactory('tbody');
export const Td = elementFactory('td');
export const Template = elementFactory('template');
export const Textarea = elementFactory('textarea');
export const TFoot = elementFactory('tfoot');
export const Th = elementFactory('th');
export const THead = elementFactory('thead');
export const Time = elementFactory('time');
export const Title = elementFactory('title');
export const Tr = elementFactory('tr');
export const Track = elementFactory('track');
export const U = elementFactory('u');
export const Ul = elementFactory('ul');
export const Var = elementFactory('var');
export const Video = elementFactory('video');
export const Wbr = elementFactory('wbr');
export const Fragment = (...nodeList:Node[]) => {
    return append(
        document.createDocumentFragment(),
        ...nodeList
    )
}

export function TextNode(data: string) {
    return new Text(data);
}