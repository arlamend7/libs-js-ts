export function Paginar<T>(array: T[]) {
  return {
    Total: array.length,
    Registros: array,
  };
}
