export var composeAll = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function (_arg) {
        return funcs.every(function (func) { return func(_arg); });
    };
};
export var composeAllNot = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function (_arg) {
        return funcs.every(function (func) { return !func(_arg); });
    };
};
export var composeSome = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function (_arg) {
        return funcs.some(function (func) { return func(_arg); });
    };
};
