"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
let timer;
function debounce(fn, milissegundos, ...args) {
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, milissegundos, ...args);
    };
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map