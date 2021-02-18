"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginacaoRequest = void 0;
const TipoOrdenacaoEnum_1 = require("../enumeradores/TipoOrdenacaoEnum");
class PaginacaoRequest {
    constructor(params) {
        this.Qt = params.Qt || 10;
        this.Pg = params.Pg || 1;
        this.CpOrd = params.CpOrd || null;
        this.TpOrd = params.TpOrd || TipoOrdenacaoEnum_1.TipoOrdenacaoEnum.Desc;
    }
}
exports.PaginacaoRequest = PaginacaoRequest;
//# sourceMappingURL=paginacaoRequest.js.map