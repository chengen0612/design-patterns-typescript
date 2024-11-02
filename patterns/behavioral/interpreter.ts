interface Expression {
  interpret(): string | undefined;
}

class PropertyExpression implements Expression {
  private propertyMap: Record<string, string> = {
    h: "height",
    w: "width",
    bg: "background-color",
  };

  constructor(private propertyAlias: string) {}

  interpret() {
    return this.propertyMap[this.propertyAlias];
  }
}

class ValueExpression implements Expression {
  constructor(private value: string) {}

  interpret() {
    if (/\[[a-z0-9]+\]/.test(this.value)) {
      return this.value.slice(1, -1);
    }
  }
}

class ClassNameExpression implements Expression {
  constructor(private value: string) {}

  interpret() {
    const [propAlias, value] = this.value.split("-");
    if (!propAlias || !value) return;

    const propExp = new PropertyExpression(propAlias);
    const valueExp = new ValueExpression(value);

    const interpretedProp = propExp.interpret();
    const interpretedValue = valueExp.interpret();

    if (interpretedProp && interpretedValue) {
      const escapedClassName = this.escapeClassName(this.value);
      return `.${escapedClassName} {\n  ${interpretedProp}: ${interpretedValue};\n}`;
    }
  }

  private escapeClassName(className: string): string {
    return className.replace(/[^a-z0-9]/g, (match) => `\\${match}`);
  }
}

class ClassNameParser {
  parse(value: string) {
    const classNames = value.trim().split(/\s+/);
    return classNames
      .map((className) => new ClassNameExpression(className).interpret())
      .filter(Boolean)
      .join("\n");
  }
}

class Demo {
  static run() {
    const parser = new ClassNameParser();

    const className = "w-[12px] h-[12px] bg-[pink]";
    const result = parser.parse(className);

    console.log("CSS generated from custom class names:\n");
    console.log(result);
  }
}

export default Demo;
