interface OrderItem {
  accept(visitor: OrderItemVisitor): void;
}

class MenuItem implements OrderItem {
  constructor(public name: string, public price: number) {}

  accept(visitor: OrderItemVisitor): void {
    visitor.visitMenuItem(this);
  }
}

class Meal implements OrderItem {
  constructor(
    public main: MenuItem,
    public side: MenuItem,
    public drink: MenuItem
  ) {}

  accept(visitor: OrderItemVisitor): void {
    visitor.visitMeal(this);
  }
}

class Combo implements OrderItem {
  constructor(public left: MenuItem, public right: MenuItem) {}

  accept(visitor: OrderItemVisitor): void {
    visitor.visitCombo(this);
  }
}

interface OrderItemVisitor {
  visitMenuItem(menuItem: MenuItem): void;
  visitMeal(meal: Meal): void;
  visitCombo(combo: Combo): void;
}

class PricingVisitor implements OrderItemVisitor {
  private totalPrice: number = 0;

  visitMenuItem(menuItem: MenuItem) {
    this.totalPrice += menuItem.price;
  }

  visitMeal(meal: Meal) {
    this.totalPrice += meal.main.price;
    this.totalPrice += meal.side.price;
    this.totalPrice += meal.drink.price;
  }

  visitCombo(combo: Combo) {
    this.totalPrice += combo.left.price;
    this.totalPrice += combo.right.price;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}

class OrderDetailVisitor implements OrderItemVisitor {
  private details: string[] = [];

  visitMenuItem(item: MenuItem) {
    this.details.push(`- ${item.name}: $${item.price}`);
  }

  visitMeal(meal: Meal) {
    this.details.push("- Meal:");
    this.details.push(`  - ${meal.main.name}: $${meal.main.price}`);
    this.details.push(`  - ${meal.side.name}: $${meal.side.price}`);
    this.details.push(`  - ${meal.drink.name}: $${meal.drink.price}`);
  }

  visitCombo(combo: Combo) {
    this.details.push("- 1+1 Combo:");
    this.details.push(`  - ${combo.left.name}: $${combo.left.price}`);
    this.details.push(`  - ${combo.right.name}: $${combo.right.price}`);
  }

  getOrderDetails() {
    return this.details.join("\n");
  }
}

class Order {
  private items: OrderItem[];

  constructor(items: OrderItem[] = []) {
    this.items = items;
  }

  calculateTotal() {
    const visitor = new PricingVisitor();
    this.items.forEach((item) => item.accept(visitor));
    return visitor.getTotalPrice();
  }

  getOrderDetails() {
    const visitor = new OrderDetailVisitor();
    this.items.forEach((item) => item.accept(visitor));
    return visitor.getOrderDetails();
  }
}

class Demo {
  static run() {
    const mcChicken = new MenuItem("McChicken", 50);
    const filetOFish = new MenuItem("Filet-O-Fish", 45);
    const fries = new MenuItem("Fries", 30);
    const coke = new MenuItem("Coke", 25);
    const lemonTea = new MenuItem("Lemon Tea", 20);
    const iceCream = new MenuItem("Ice Cream", 35);

    const meal = new Meal(mcChicken, fries, coke);
    const combo = new Combo(fries, lemonTea);

    const order1 = new Order([filetOFish, meal, combo]);
    const order2 = new Order([filetOFish, iceCream]);

    console.log(`Total for Order1: $${order1.calculateTotal()}`);
    console.log(`Total for Order2: $${order2.calculateTotal()}`);

    console.log("\nOrder1 Details:");
    console.log(order1.getOrderDetails());

    console.log("\nOrder2 Details:");
    console.log(order2.getOrderDetails());
  }
}

export default Demo;
