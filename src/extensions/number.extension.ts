interface Number {
  [Symbol.iterator]: Generator<number, number[], unknown>;
}

//@ts-ignore
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
};
