class Reactive<T = any> {
  private _value: T;
  private components: Set<Component>;

  constructor(initialValue: T) {
    this._value = initialValue;
    this.components = new Set();
  }

  get value() {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;
    this.notifyComponents();
  }

  subscribe(component: Component) {
    this.components.add(component);
  }

  unsubscribe(component: Component) {
    this.components.delete(component);
  }

  notifyComponents() {
    this.components.forEach((component) => {
      component.update(this._value);
    });
  }
}

class Component<T = any> {
  private name: string;
  private data: T;

  constructor(name: string, reactive: Reactive<T>) {
    this.name = name;
    this.data = reactive.value;
    reactive.subscribe(this);
  }

  render() {
    console.log(`${this.name} component rendered with data:`, this.data);
  }

  update(newValue: T) {
    if (!Object.is(this.data, newValue)) {
      this.data = newValue;
      this.render();
    }
  }
}

class Demo {
  static run() {
    const todo = new Reactive(["Go grocery shopping"]);
    const counter = new Reactive(todo.value.length);

    const todoList = new Component("TodoList", todo);
    const todoCounter = new Component("TodoCounter", counter);

    todoList.render();
    todoCounter.render();

    todo.value = [...todo.value, "Do the laundry"];
    counter.value = todo.value.length;
    todo.value = [...todo.value, "Clean the house"];
    counter.value = todo.value.length;
  }
}

export default Demo;
