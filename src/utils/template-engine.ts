import isPlainObject from "./is-plain-object";


export default class TemplateEngine {
    private readonly data: Record<string, any>;
    private readonly delimiters: [string, string];
    private readonly regex: RegExp;

    constructor(data: Record<string, any>, delimiters: [string, string] = ['{{', '}}']) {
        this.data = data;
        this.delimiters = delimiters;
        let regexString = `(?<!\\\\)${this.delimiters[0]}\\s*([\\s\\S]*?)\\s*(?<!\\\\)${this.delimiters[1]}`;
        this.regex = new RegExp(regexString, 'gm');
    }

    public resolve<Template extends string | Record<string, any>>(template: Template): Template {
        if (typeof template === 'string') {
            return this.resolveString(template) as Template;
        } else {
            return this.resolveObject(template) as Template;
        }
    }

    private adjustCode(code: string): string {
        return code.replace(/((?<!\\)(["']).*?(?<!\\)\2)|([^"']+)/g, (substring, stringPart, group2, codePart) => {
            if (codePart) return codePart.replaceAll('@', 'this["@"].');
            return stringPart || substring;
        });
    }

    private evaluateCode(code: string, context: Record<any, any>): any {
        return new Function('variables', `with(variables) { return ${this.adjustCode(code)}; }`).call({'@': this.data['@'], ...context}, this.data.variables);
    }

    private resolveString(string: string, context: Record<string, any> = {}): string {
        const codeMatch = Array.from(string.matchAll(this.regex));
        if (string.startsWith(this.delimiters[0]) && string.endsWith(this.delimiters[1]) && codeMatch && codeMatch.length === 1) {
            return this.evaluateCode(codeMatch[0][1], context);
        }

        return string.replace(this.regex, (_, code) => {
            return this.evaluateCode(code, context);
        });
    }

    private resolveObject(object: Record<string, any>) {
        let reactiveObject: Record<string, any> = {};
        Object.entries(object).forEach(([key, value]) => {
            if (typeof value === 'string') {
                Object.defineProperty(reactiveObject, key, {
                    get: () => {
                        return this.resolveString(value, {'@': {...this.data['@'], 'this': reactiveObject}});
                    }
                });
            } else if (isPlainObject(value)) {
                reactiveObject[key] = this.resolveObject(value);
            }else {
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
