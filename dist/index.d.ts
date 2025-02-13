export type ComposedFunction<T, V> = (arg: T) => V;
export type ComposedPredicate<T> = ComposedFunction<T, boolean>;
export declare const composeAll: <T>(...funcs: Array<ComposedPredicate<T>>) => ComposedPredicate<T>;
export declare const composeAllNot: <T>(...funcs: Array<ComposedPredicate<T>>) => ComposedPredicate<T>;
export declare const composeSome: <T>(...funcs: Array<ComposedPredicate<T>>) => ComposedPredicate<T>;
