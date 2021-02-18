interface Array<T> {
    Distinct<T>(): T[];
    isNullOrEmpty(): boolean;
    Sum<T>(func?: (arg: T, arg2: T, index: number) => number, startValue?: number): number;
    Remove<T>(elem: (arg: T) => Boolean): void;
}
