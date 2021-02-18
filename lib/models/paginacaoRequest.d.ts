import { TipoOrdenacaoEnum } from '../enumeradores/TipoOrdenacaoEnum';
export declare class PaginacaoRequest {
    Qt: number;
    Pg: number;
    CpOrd: string | null;
    TpOrd: TipoOrdenacaoEnum;
    constructor(params: Partial<PaginacaoRequest>);
}
