# design-patterns-typescript

A collection of design pattern examples implemented in TypeScript.

## Overview

The examples are designed with the following principles in mind:

- **Learn Once, Use Everywhere**: Minimize language-specific features to make these examples easily adaptable across different programming languages.
- **Practicality**: Use practical examples to demonstrate how design patterns solve real-world problems, such as improving code reusability, simplifying maintenance, and managing complex systems more effectively.
- **Clear Focus**: Simplify implementation details to emphasize the core structure and applicability of design patterns.

## Patterns

### Creational Patterns

| Name                 | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| [Abstract Factory][] | Provide an interface of creating families of related objects             |
| [Builder][]          | Separate the construction of a complex object from its representation    |
| [Factory Method][]   | Create objects without specifying the exact class                        |
| [Prototype][]        | Create new objects by cloning an existing object                         |
| [Singleton][]        | Ensure a class have only one instance and provide global point of access |

### Structural Patterns

| Name          | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| [Adapter][]   | Allow classes with incompatible interfaces to work together               |
| [Bridge][]    | Separate an abstraction of its implementation to create multiple variants |
| [Composite][] | Treat individual objects and compositions of objects uniformly            |
| [Decorator][] | Dynamically add or override behavior of an object                         |
| [Facade][]    | Provide a simplified interface to a complex system                        |
| [Flyweight][] | Minimize memory usage by sharing common parts of object state             |
| [Proxy][]     | Provide a surrogate to control access to another object                   |

### Behavioral Patterns

| Name                        | Description                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| [Chain of Responsibility][] | Pass requests along a chain of handlers until one handles it                             |
| [Command][]                 | Encapsulate a request as an object to decouple sender and receiver                       |
| [Interpreter][]             | Define a language's grammar and interpret its expressions                                |
| [Iterator][]                | Provide a way to sequentially access the elements of a collection                        |
| [Mediator][]                | Facilitate communication between objects by centralizing control                         |
| [Memento][]                 | Provide the ability to control object versions                                           |
| [Observer][]                | Allow objects to subscribe to another object and be notified whenever it changes         |
| [State][]                   | Encapsulate different behaviors of an object and alters them based on its internal state |
| [Strategy][]                | Encapsulate algorithms into interchangeable classes                                      |
| [Template Method][]         | Define the skeleton of an algorithm, allowing subclasses to provide specific steps       |
| [Visitor][]                 | Add new operations to elements of an object structure without modifying them             |

### Others

| Name                | Description                                              |
| ------------------- | -------------------------------------------------------- |
| [Method Chaining][] | Call multiple methods on an object in a single statement |
| [Null Object][]     | Provide a default object with no meaningful behavior     |

## Running the Demo

Follow these steps to set up and run a demo for any design pattern example:

**1. Install dependencies**

First, install the project dependencies:

```bash
npm install
```

**2. Create the entry file**

Create a new file named _main.ts_ at the root of the project. This will server as your entry point to run a specific pattern. To try out a pattern, import the demo and run it like this:

```ts
import Demo from "./patterns/creational/factory-method";

Demo.run();
```

**3. Run the demo**

Start the development server and run the demo:

```bash
npm run dev
```

The result will be printed in the terminal, and you can modify the example as much as you'd like. :)

## Further Reading

- [Software design pattern - Wikipedia](https://en.wikipedia.org/wiki/Software_design_pattern): An excellent quick reference for learning or brushing up on design patterns. Each pattern is clearly defined with its intended use cases and the problems it solves, making it perfect for newcomers.
- [Head First Design Patterns](https://www.google.com.tw/books/edition/Head_First_Design_Patterns/GGpXN9SMELMC): Takes a fun, engaging approach to design patterns, using real-world examples and witty explanations that make it a page-turner.
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.google.com.tw/books/edition/Design_Patterns/6oHuKQe3TjQC): The definitive guide to design patterns. This classic text offers comprehensive coverage of both theory and practical applications, serving as an authoritative reference for mastering pattern-based design.

## Contributing

Pull requests are always welcome! You can add features and improvements through PRs, or use issues for bug reports and discussions. :)

[Abstract Factory]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/creational/abstract-factory.ts
[Adapter]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/structural/adapter.ts
[Bridge]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/structural/bridge.ts
[Builder]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/creational/builder.ts
[Chain of Responsibility]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/chain-of-responsibility.ts
[Command]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/command.ts
[Composite]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/structural/composite.ts
[Decorator]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/structural/decorator.ts
[Facade]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/structural/facade.ts
[Factory Method]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/creational/factory-method.ts
[Flyweight]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/structural/flyweight.ts
[Interpreter]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/interpreter.ts
[Iterator]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/iterator.ts
[Mediator]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/mediator.ts
[Method Chaining]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/other/method-chaining.ts
[Memento]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/memento.ts
[Null Object]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/other/null-object.ts
[Observer]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/observer.ts
[Prototype]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/creational/prototype.ts
[Proxy]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/structural/proxy.ts
[Singleton]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/creational/singleton.ts
[State]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/state.ts
[Strategy]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/strategy.ts
[Template Method]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/template-method.ts
[Visitor]: https://github.com/chengen0612/design-patterns-typescript/blob/main/patterns/behavioral/visitor.ts
