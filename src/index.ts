export const composeAll =
	<T>(...funcs: Array<(_arg: T) => boolean>) =>
	(_arg: T): boolean =>
		funcs.every((func) => func(_arg));

export const composeAllNot =
	<T>(...funcs: Array<(_arg: T) => boolean>) =>
	(_arg: T): boolean =>
		funcs.every((func) => !func(_arg));

export const composeSome =
	<T>(...funcs: Array<(_arg: T) => boolean>) =>
	(_arg: T): boolean =>
		funcs.some((func) => func(_arg));
