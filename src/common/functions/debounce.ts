let timer: number;
export function debounce(fn: Function, milissegundos: number, ...args: any[]) {
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, milissegundos, ...args);
  };
}
