abstract class OrderComponent {
  getName(): string {
    throw new Error("Unsupported Operation");
  }
  getPrice(): number {
    throw new Error("Unsupported Operation");
  }
  print(): void {
    throw new Error("Unsupported Operation");
  }
  addComponent(component: OrderComponent): void {
    throw new Error("Unsupported Operation");
  }
  removeComponent(component: OrderComponent): void {
    throw new Error("Unsupported Operation");
  }
}

class OrderItem extends OrderComponent {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    super();
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  print() {
    console.log(`  ${this.name}, $${this.price}`);
  }
}

class Order extends OrderComponent {
  private name: string;
  private components: OrderComponent[];

  constructor(name: string) {
    super();
    this.name = name;
    this.components = [];
  }

  addComponent(component: OrderComponent) {
    this.components.push(component);
  }

  removeComponent(component: OrderComponent) {
    const index = this.components.indexOf(component);
    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.components.reduce(
      (total, component) => total + component.getPrice(),
      0
    );
  }

  print() {
    console.log(this.name);
    console.log("-----------------");
    this.components.forEach((component) => {
      if (component instanceof Order) console.log("");
      component.print();
    });
  }
}

class OrderInspector {
  private order: OrderComponent;

  constructor(order: OrderComponent) {
    this.order = order;
  }

  printDetails() {
    this.order.print();
  }

  printTotalPrice() {
    console.log("\nTotal Price:", this.order.getPrice());
  }
}

class Demo {
  static run() {
    const chips = new OrderItem("Potato Chips", 50);
    const tea = new OrderItem("Tea", 30);
    const shirt = new OrderItem("T-shirt", 500);
    const jeans = new OrderItem("Jeans", 1200);
    const jacket = new OrderItem("Jacket", 2500);
    const headphones = new OrderItem("Headphones", 15000);

    const mainOrder = new Order("Main Order");
    const groceryOrder = new Order("Grocery Order");
    const clothingOrder = new Order("Clothing Order");

    groceryOrder.addComponent(chips);
    groceryOrder.addComponent(tea);

    clothingOrder.addComponent(shirt);
    clothingOrder.addComponent(jeans);
    clothingOrder.addComponent(jacket);

    mainOrder.addComponent(headphones);
    mainOrder.addComponent(groceryOrder);
    mainOrder.addComponent(clothingOrder);

    const inspector = new OrderInspector(mainOrder);

    inspector.printDetails();
    inspector.printTotalPrice();
  }
}

export default Demo;
