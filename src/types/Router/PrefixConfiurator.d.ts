declare interface PrefixConfiurator {
    paramPattern(paramOrPatterns: string, regexPattern: string): this;
    paramPattern(paramOrPatterns: Record<string, string>): this;
}