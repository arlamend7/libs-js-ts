# Javascript && Typescript 

I use a jest library to test all functions
It`s a package with some extensions, functions and others things.
Everything that a use almost every day.
Next week I'll bether my firebase package. 

I'll create a c# library too.

---
## Common

#### Extensions providers by this package
```ts
interface Array<T> {
  Distinct(): T[];
  isNullOrEmpty(): boolean;
  Sum(map?: (arg: T, index: number) => number, startValue?: number): number;
  Max(map?: (arg: T, index: number) => number): number;
  Min(map?: (arg: T, index: number) => number): number;
  Remove(elem: (arg: T) => Boolean): void;
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
  isNullOrWhiteSpace(): boolean;
  JustNumbers(): string;
}
```

#### functions
```ts
    function debounce(fn: Function, milissegundos: number, ...args: any[]): () => void;
    function Paginar<T>(array: T[], request?: PaginacaoRequest): PaginacaoResponse<T>;
```
---
## Utils
```ts
class Validator {
    CPF(str: string): boolean;
    CNPJ(str: string): boolean;
    CellPhone(str: string): boolean;
}

class Formatter {
    get CONST_REGEX(): {
        CPF: RegExp;
        CNPJ: RegExp;
        CELLPHONE: RegExp;
    };
    CPF(text: string): string;
    CNPJ(text: string): string;
    CellPhone(text: string): string;
}
```
