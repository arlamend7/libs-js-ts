interface Number {
    [Symbol.iterator]: () => Generator<number, void, unknown>;
}
