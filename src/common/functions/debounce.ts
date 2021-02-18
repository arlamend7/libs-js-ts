let timer;
export function debounce(fn: (...arg: any[]) => void, milissegundos: number, ...args: any[]) {
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, milissegundos, ...args);
  };
}
