interface Array<T> {
  Distinct<T>(): T[];
  isNullOrEmpty(): boolean;
  Sum<T>(func?: (arg: T, arg2: T, index: number) => number, startValue?: number): number;
  Remove<T>(elem: (arg: T) => Boolean): void;
}
Array.prototype.isNullOrEmpty = function () {
  return this == null || this.length == 0;
};
Array.prototype.Distinct = function <T>(): T[] {
  return [...new Set(<T[]>this)];
};
Array.prototype.Remove = function <T>(elem: (arg: T) => Boolean): void {
  this.splice(this.findIndex(elem), 1);
};
Array.prototype.Sum = function <T>(func?: (arg: T, arg2: T, index: number) => number, startValue: number = 0): number {
  if (func) return this.reduce(func, startValue);
  else return this.reduce((a, b) => a + b, startValue);
};
