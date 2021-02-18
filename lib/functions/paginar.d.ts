import { PaginacaoResponse } from '../models/interfaces/paginacaoResponse';
import { PaginacaoRequest } from '../models/paginacaoRequest';
export declare function Paginar<T>(array: T[], request?: PaginacaoRequest): PaginacaoResponse<T>;
