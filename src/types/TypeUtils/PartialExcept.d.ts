declare type PartialExcept<T, K extends keyof T> = {
    [P in K]-?: T[P];
} & Partial<Omit<T, K>>;