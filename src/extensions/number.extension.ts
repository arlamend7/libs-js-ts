interface Number {
  [Symbol.iterator]: () => Generator<number, void, number[]>;
}
Number.prototype[Symbol.iterator] = function* (): Generator<number, void, number[]> {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
};
