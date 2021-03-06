# A Short Introduction To TypeScript

Bastian Sieker - Software developer at Zalando

---

## Agenda

1. About TypeScript
2. About Types
3. Features
4. Hands on

???

* whole project and presentation is online: https://github.com/bzums/typescript-introduction

---

## What Is TypeScript?

* Programming language transpiling to JavaScript
  * Statically typed
  * Type inference
  * Unlocks "future JavaScript" features
* Your JavaScript is TypeScript


???

* who heard about TypeScript before?
* who used it already?
* static vs. dynamic typing
  * static: type is assoicated with the variable and checked at compile-time
  * dynamic: type is associated with the value and checked at run-time
* TypeScript is a superset of JavaScript
  * features from ECMAScript spec which are not supported by node or browsers can already be used in TypeScript

---

## What Is It Not?

* It is not just type annotations
* It is not primarily about object orientation

???

* in comparison to flow it is its own language
* `class` keyword in JavaScript/TypeScript
* TypeScript `interface` keyword

---

## Why TypeScript?

* Types can improve the developer experience
  * Refactorings
  * Autocompletion
  * Code flow analysis
  * Errors and warnings at compile time
* Types are one of the best ways to document your code
* Transpiler to support latest ECMAScript features

<span class="footnote">
  <span class= "footnote-dot"></span>
  <a href="https://basarat.gitbooks.io/typescript/docs/why-typescript.html">https://basarat.gitbooks.io/typescript/docs/why-typescript.html</a>
</span>

---

## To Type Or Not To Type I

### Cons

* Static types do not really decrease bug density
* Types add overhead when writing code (most of the time)

### Pros

* Implicit documentation of your code
* Great developer experience due to tooling support

???

* problem of writing documentation in prosa
  * keep it in sync with the code
  * ambiguous

---

## To Type Or Not To Type II

> You want to reduce bugs? Use TDD. You want useful code intelligence tools? Use static types.

<span class="footnote">
  <span class= "footnote-dot"></span>
  <a href="https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3">The Shocking Secret About Types</a>
</span>

---

## Features

---

### Type Inference

```ts
const person = {
  name: 'Washington',
  forename: 'Denzel',
  age: 38
};
// const person: { name: string; forename: string; age: number; }

const age = person.age;
// const age: number

const isGreaterThan10 = (x) => x > 10;
// const isGreaterThan10: (x: any) => boolean

```

<span class="footnote">
  <span class= "footnote-dot"></span>
  <a href="https://www.typescriptlang.org/docs/handbook/type-inference.html">
    https://www.typescriptlang.org/docs/handbook/type-inference.html
  </a>
</span>

???

* TypeScript which is also just some JavaScript
* behaviour depends on `noImplicitAny` compiler option
* `any` type: every value will pass the compile-time type-checks
  * use with caution (there are only a few cases where you actually have to use it)
  * help when you incrementally what to move a project from JavaScript to TypeScript
* compare with compiler output: there is not much of a difference (depending on `target` compiler option)

---

### Explicit Type Declarations I

#### From...

```ts
const foo = 'foo';

const normalise = (s) =>
  s.trim().toUpperCase();

normalise(foo);
```

---

### Explicit Type Declarations I

#### To...

```ts
const foo: string = 'foo';

const normalise = (s: string): string =>
  s.trim().toUpperCase();

normalise(foo);
```

???

* `const str: string = 'foo';` actually not needed (type inference)
* convenient
* inline
* can be difficult to read/format with longer signature

---

### Explicit Type Declarations II

```ts
type stringTransformer = (s: string) => string;

const normalise: stringTransformer = (s) => s.trim().toUpperCase();
const revert: stringTransformer = (s) => /* ... */;
const encrypt: stringTransformer = (s) => /* ... */;
```

???

* indirection
* reusable
* separate data and type namespaces => types are gone at runtime

---

### Union Types I

```ts
type stringTransformer = (s: string | undefined) => string;

const normalise: stringTransformer = (s) =>
  (s === undefined)
    ? ''
    : s.trim().toUpperCase();

```

???

* to prevent `Uncaught TypeError: s.trim is not a function` at runtime

---

### Control Flow Based Type Analysis

```ts
const composeCommand = (command: string | string[]): string => {
    if (typeof command === 'string') {
        return command;
    }

    return command.join(' ');
}
```

<span class="footnote">
  <span class= "footnote-dot"></span>
  <a href="https://blog.mariusschulz.com/2016/09/30/typescript-2-0-control-flow-based-type-analysis">
    https://blog.mariusschulz.com/2016/09/30/typescript-2-0-control-flow-based-type-analysis
  </a>
  <br />
  <span class= "footnote-dot"></span>
  <a href="https://egghead.io/lessons/typescript-understand-typescript-s-control-flow-based-type-analysis">
    Understand TypeScript’s Control Flow Based Type Analysis (Egghead.io)
  </a>
</span>

???

* example from https://blog.mariusschulz.com
* compiler deduces most specific type possible:
  * if `command` is type of `string` it knows the function will return early with type `string`
  * else it knows `command` is not of type `string`
  * and hence of type `string[]`
  * and as a result the call to the `join` method type checks correctly

---

### Structural Type System

```ts
type Human = {
    age: number;
};

type Car = {
    age: number;
};

const getAge = (human: Human) => human.age;

const someCar: Car = { age: 12 };

getAge(someCar);
```

???

* this will also work if `Car` is extended further
  * `Car` just has to have all properties defined in `Human`

---

### And Many More...

* Generics
* [Inferred literal types](https://blog.mariusschulz.com/2017/01/27/typescript-2-1-improved-inference-for-literal-types)
* [Function overloads](https://blog.mariusschulz.com/2016/08/18/function-overloads-in-typescript)
* [`never` type](https://blog.mariusschulz.com/2016/11/18/typescript-2-0-the-never-type)
* [Type-check JavaScript](https://blog.mariusschulz.com/2017/06/16/typescript-2-3-type-checking-javascript-files-with-checkjs)
* ...

<span class="footnote">
  <span class= "footnote-dot"></span>
  <a href="https://blog.mariusschulz.com/2017/11/09/advanced-static-types-in-typescript">
    Advanced Static Types In Typescript at Egghead.io
  </a>
</span>

---

### Try It Out

[https://github.com/bzums/typescript-introduction](https://github.com/bzums/typescript-introduction)

???

* have a look at compiled JavaScript
* have a look at declaration files
* show debugging
* show IDE features:
  * type previews
  * auto completion
  * auto import
  * jumping to declaration files
