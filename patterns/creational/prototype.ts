interface ShapeOptions {
  x: number;
  y: number;
  color?: string;
}

type LineOptions = ShapeOptions & { length: number };

type CircleOptions = ShapeOptions & { radius: number };

type RectangleOptions = ShapeOptions & { width: number; height: number };

abstract class Shape {
  public x: number;
  public y: number;
  public color: string;

  constructor(options: ShapeOptions) {
    this.x = options.x;
    this.y = options.y;
    this.color = options.color || "black";
  }

  abstract clone(): Shape;

  abstract toString(): string;
}

class Line extends Shape {
  public length: number;

  constructor(options: LineOptions) {
    super(options);
    this.length = options.length;
  }

  clone() {
    return new Line(this);
  }

  toString() {
    return `Line of length ${this.length}, starting at (${this.x}, ${this.y}), color: ${this.color}`;
  }
}

class Circle extends Shape {
  public radius: number;

  constructor(options: CircleOptions) {
    super(options);
    this.radius = options.radius;
  }

  clone() {
    return new Circle(this);
  }

  toString() {
    return `Circle with radius ${this.radius}, centered at (${this.x}, ${this.y}), color: ${this.color}`;
  }
}

class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(options: RectangleOptions) {
    super(options);
    this.width = options.width;
    this.height = options.height;
  }

  clone() {
    return new Rectangle(this);
  }

  toString() {
    return `Rectangle of width ${this.width} and height ${this.height}, positioned at (${this.x}, ${this.y}), color: ${this.color}`;
  }
}

class Canvas {
  private shapes: Shape[];

  constructor() {
    this.shapes = [];
  }

  addShape(shape: Shape) {
    this.shapes.push(shape);
  }

  describe() {
    console.log("Describing all shapes on the canvas:");
    for (const shape of this.shapes) {
      console.log(shape.toString());
    }
  }
}

class Demo {
  static run() {
    const canvas = new Canvas();

    const line = new Line({ x: 10, y: 10, length: 20 });
    const circle = new Circle({ x: 5, y: 5, radius: 10 });
    const rectangle = new Rectangle({ x: 15, y: 15, width: 30, height: 10 });

    const circleClone = circle.clone();
    const rectangleClone = rectangle.clone();

    canvas.addShape(line);
    canvas.addShape(circle);
    canvas.addShape(rectangle);
    canvas.addShape(circleClone);
    canvas.addShape(rectangleClone);

    canvas.describe();
  }
}

export default Demo;
