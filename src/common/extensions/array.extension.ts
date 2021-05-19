interface Array<T> {
  Distinct(): T[];
  isNullOrEmpty(): boolean;
  Sum(map?: (arg: T, index: number) => number, startValue?: number): number;
  Max(map?: (arg: T, index: number) => number): number;
  Min(map?: (arg: T, index: number) => number): number;
  Remove(elem: (arg: T) => boolean): void;
}
Array.prototype.isNullOrEmpty = function () {
  return this == null || this.length === 0;
};
Array.prototype.Distinct = function <T>(): T[] {
  return [...new Set(this)];
};
Array.prototype.Remove = function <T>(elem: (arg: T) => boolean): void {
  this.splice(this.findIndex(elem), 1);
};
Array.prototype.Sum = function <T>(map?: (arg: T, index: number) => number, startValue: number = 0): number {
  const sum = (a, b) => a + b;
  if (map) return this.map(map).reduce(sum, startValue);
  else return this.reduce(sum, startValue);
};
Array.prototype.Max = function <T>(map?: (arg: T, index: number) => number): number {
  if (map) return Math.max(...this.map(map));
  else return Math.max(...this);
};
Array.prototype.Min = function <T>(map?: (arg: T, index: number) => number): number {
  if (map) return Math.min(...this.map(map));
  else return Math.min(...this);
};
