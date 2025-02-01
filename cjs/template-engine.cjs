'use strict';

function isPlainObject(obj) {
    return typeof obj === 'object' &&
        obj !== null &&
        !Array.isArray(obj) &&
        Object.getPrototypeOf(obj) === Object.prototype;
}

class TemplateEngine {
    constructor(data, delimiters = ['{{', '}}']) {
        this.data = data;
        this.delimiters = delimiters;
        let regexString = `(?<!\\\\)${this.delimiters[0]}\\s*([\\s\\S]*?)\\s*(?<!\\\\)${this.delimiters[1]}`;
        this.regex = new RegExp(regexString, 'gm');
    }
    resolve(template) {
        if (typeof template === 'string') {
            return this.resolveString(template);
        }
        else {
            return this.resolveObject(template);
        }
    }
    adjustCode(code) {
        return code.replace(/((?<!\\)(["']).*?(?<!\\)\2)|([^"']+)/g, (substring, stringPart, group2, codePart) => {
            if (codePart)
                return codePart.replaceAll('@', 'this["@"].');
            return stringPart || substring;
        });
    }
    evaluateCode(code, context) {
        return new Function('variables', `with(variables) { return ${this.adjustCode(code)}; }`).call(Object.assign({ '@': this.data['@'] }, context), this.data.variables);
    }
    resolveString(string, context = {}) {
        const codeMatch = Array.from(string.matchAll(this.regex));
        if (string.startsWith(this.delimiters[0]) && string.endsWith(this.delimiters[1]) && codeMatch && codeMatch.length === 1) {
            return this.evaluateCode(codeMatch[0][1], context);
        }
        return string.replace(this.regex, (_, code) => {
            return this.evaluateCode(code, context);
        });
    }
    resolveObject(object) {
        let reactiveObject = {};
        Object.entries(object).forEach(([key, value]) => {
            if (typeof value === 'string') {
                Object.defineProperty(reactiveObject, key, {
                    get: () => {
                        return this.resolveString(value, { '@': Object.assign(Object.assign({}, this.data['@']), { 'this': reactiveObject }) });
                    }
                });
            }
            else if (isPlainObject(value)) {
                reactiveObject[key] = this.resolveObject(value);
            }
            else {
                Object.defineProperty(reactiveObject, key, {
                    get: () => {
                        return object[key];
                    }
                });
            }
        });
        return reactiveObject;
    }
}

module.exports = TemplateEngine;
