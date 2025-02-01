type ParsedTagDescriptor = {
    tag: keyof HTMLElementTagNameMap;
    class: string[];
    id: string[];
    attrs: Record<string, string>;
};