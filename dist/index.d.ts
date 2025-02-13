export declare const composeAll: <T>(...funcs: Array<(_arg: T) => boolean>) => (_arg: T) => boolean;
export declare const composeAllNot: <T>(...funcs: Array<(_arg: T) => boolean>) => (_arg: T) => boolean;
export declare const composeSome: <T>(...funcs: Array<(_arg: T) => boolean>) => (_arg: T) => boolean;
