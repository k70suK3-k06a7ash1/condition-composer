export type ComposedFunction<T, V> = (arg: T) => V;

export type ComposedPredicate<T> = ComposedFunction<T, boolean>;

export const composeAll =
	<T>(...funcs: Array<ComposedPredicate<T>>): ComposedPredicate<T> =>
	(arg: T): boolean =>
		funcs.every((func) => func(arg));

export const composeAllNot =
	<T>(...funcs: Array<ComposedPredicate<T>>): ComposedPredicate<T> =>
	(arg: T): boolean =>
		funcs.every((func) => !func(arg));

export const composeSome =
	<T>(...funcs: Array<ComposedPredicate<T>>): ComposedPredicate<T> =>
	(arg: T): boolean =>
		funcs.some((func) => func(arg));
