# A Short Introduction To TypeScript

---

## Agenda

1. About TypeScript
2. About Types
3. Features
4. Hands on

---

## What Is TypeScript?

* Programming language transpiling to JavaScript
* Optional type system for JavaScript
* Your JavaScript is TypeScript

---

## What Is It Not?

* It is not just type annotations
* It is not primarily about object orientation

???

* history of `class` keyword
* `interface` keyword

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
* Static types add overhead when writing code (most of the time)

### Pros

* Implicit documentation of your code
* Great developer experience due to tooling support

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

???

* TypeScript which is also just some JavaScript

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
    : ''
    ? s.trim().toUpperCase();

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

---

### And Many More...

* Generics
* Inferred literal types
* Custom type guards

<span class="footnote">
  <span class= "footnote-dot"></span>
  <a href="https://blog.mariusschulz.com/2017/11/09/advanced-static-types-in-typescript">
    Advanced Static Types In Typescript at Egghead.io
  </a>
</span>

---

### Try It Out

TODO: Link to repo here, so setup and get going

---

## Backlog

---

### Inferred Literal Types

```ts
const HTTP_GET = 'GET';    // Inferred type: 'GET'
const HTTP_POST = 'POST';  // Inferred type: 'POST'

function get(url: string, method: 'GET' | 'POST') {
    // ...
}

get('https://example.com/', HTTP_GET);
```

https://blog.mariusschulz.com/2017/01/27/typescript-2-1-improved-inference-for-literal-types
