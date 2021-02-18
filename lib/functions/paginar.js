"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginar = void 0;
function Paginar(array, request) {
    return {
        Total: array.length,
        Registros: !request ? array : array.slice(request.Qt * (request.Pg - 1), request.Qt * request.Pg),
    };
}
exports.Paginar = Paginar;
//# sourceMappingURL=paginar.js.map