import { TipoOrdenacaoEnum } from '../enumeradores/TipoOrdenacaoEnum';

export class PaginacaoRequest {
  Qt: number;
  Pg: number;
  CpOrd: string | null;
  TpOrd: TipoOrdenacaoEnum;
  constructor(params: Partial<PaginacaoRequest>) {
    this.Qt = params.Qt || 10;
    this.Pg = params.Pg || 1;
    this.CpOrd = params.CpOrd || null;
    this.TpOrd = params.TpOrd || TipoOrdenacaoEnum.Desc;
  }
}
