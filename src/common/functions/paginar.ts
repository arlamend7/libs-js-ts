import { PaginacaoResponse } from '../models/interfaces/paginacaoResponse';
import { PaginacaoRequest } from '../models/paginacaoRequest';

export function Paginar<T>(array: T[], request?: PaginacaoRequest): PaginacaoResponse<T> {
  return {
    Total: array.length,
    Registros: !request ? array : array.slice(request.Qt * (request.Pg - 1), request.Qt * request.Pg),
  };
}
