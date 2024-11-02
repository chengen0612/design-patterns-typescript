class MathChain {
  private value: number;

  constructor(initialValue: number) {
    this.value = initialValue;
    console.log(`Initial value: ${this.value}`);
  }

  add(n: number) {
    this.value += n;
    console.log(`Adding ${n}: ${this.value}`);
    return this;
  }

  subtract(n: number) {
    this.value -= n;
    console.log(`Subtracting ${n}: ${this.value}`);
    return this;
  }

  multiply(n: number) {
    this.value *= n;
    console.log(`Multiplying by ${n}: ${this.value}`);
    return this;
  }

  divide(n: number) {
    this.value /= n;
    console.log(`Dividing by ${n}: ${this.value}`);
    return this;
  }

  getValue() {
    return this.value;
  }
}

class Demo {
  static run() {
    const result = new MathChain(5)
      .add(4)
      .subtract(3)
      .multiply(2)
      .divide(1)
      .getValue();

    console.log(`Calculated result: ${result}`);
  }
}

export default Demo;
