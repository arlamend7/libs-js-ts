"use strict";
Array.prototype.isNullOrEmpty = function () {
    return this == null || this.length == 0;
};
Array.prototype.Distinct = function () {
    return [...new Set(this)];
};
Array.prototype.Remove = function (elem) {
    this.splice(this.findIndex(elem), 1);
};
Array.prototype.Sum = function (func, startValue = 0) {
    if (func)
        return this.reduce(func, startValue);
    else
        return this.reduce((a, b) => a + b, startValue);
};
//# sourceMappingURL=array.extension.js.map