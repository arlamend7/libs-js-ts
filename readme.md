# Start of my typescript package 

I just try to create a good typescript package

## Extensions providers by this package
```ts
interface Array<T> {
  Distinct<T>(): T[];
  isNullOrEmpty(): boolean;
  Sum<T>(func?: (arg: T, arg2: T, index: number) => number, startValue?: number): number;
  Remove<T>(elem: (arg: T) => Boolean): void;
}

interface Date {
  SameAs(Date: Date): boolean;
  isBeetween(dateStart: Date, dateEnd: Date): boolean;
}

interface Number {
  [Symbol.iterator]: () => Generator<number, void, number[]>;
}

interface String {
  RemoveAccents(): string;
  isNullOrEmpty(): boolean;
}
```

## functions
```ts

```