// Alphabet type, containing valid alphabetic characters, is imported from utils/Alphabet.d.ts

/**
 * Recursively extracts an alphabetic tag name from a given string.
 * - InputString is the string being processed.
 * - AccumulatedTag accumulates the extracted characters.
 * For instance, for "div.class#id", it will extract "div".
 */
type ExtractTagName<InputString extends string, AccumulatedTag extends string = ''> =
    InputString extends `${infer Char}${infer Remaining}`
    ? Char extends Alphabet
      ? ExtractTagName<Remaining, `${AccumulatedTag}${Char}`>
      : AccumulatedTag
    : AccumulatedTag;

/**
 * Checks if a given tag name `TagName` is valid by comparing against the `HTMLElementTagNameMap`.
 * If not valid, defaults to the string 'generic'.
 */
type ValidTagName<TagName> = TagName extends keyof HTMLElementTagNameMap ? TagName : 'div' /* generic */;

/**
 * Determines if the string `SelectorOrTag` is purely a selector (.class, #id, or [attribute])
 * If so, defaults to 'div'. Otherwise, treats the string as a potential tag.
 */
type TagOrSelector<SelectorOrTag extends string> = SelectorOrTag extends `.${any}` | `#${any}` | `[${any}` ? 'div' : SelectorOrTag;

/**
 * Resolves the tag name from a given string `SelectorOrTag`.
 * Uses `TagOrSelector` to identify selectors, then uses `ExtractTagName` or defaults to 'div'.
 * Finally, validates the tag with `ValidTagName`.
 */
type ResolvedTagName<SelectorOrTag extends string> = ValidTagName<TagOrSelector<SelectorOrTag> extends 'div' ? 'div' : ExtractTagName<SelectorOrTag>>;

/**
 * Maps a tag name `TagName` to its corresponding HTMLElement type.
 * If `TagName` isn't a recognized tag name, it defaults to the base `HTMLElement`.
 */
type MapTagNameToHTMLElement<TagName extends string> = TagName extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[TagName] : HTMLElement;

/**
 * Given a string `SelectorOrTag` that can be a tag, a selector, or a combination,
 * this type will determine the corresponding HTML element type.
 */
type HTMLTypeFromSelector <SelectorOrTag extends string> = MapTagNameToHTMLElement<ResolvedTagName<SelectorOrTag>>;