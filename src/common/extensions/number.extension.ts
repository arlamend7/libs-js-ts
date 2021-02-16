interface Number {
  [Symbol.iterator]: () => Generator<number, void, unknown>;
}
Number.prototype[Symbol.iterator] = function* (): Generator<number, void, unknown> {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
};
