class Component {}

class BeautyButton extends Component {}

class BeautyInput extends Component {}

class BeautySelect extends Component {}

abstract class ComponentLibrary {
  abstract createComponent(type: string): Component;
}

class BeautyUI extends ComponentLibrary {
  createComponent(type: "button" | "input" | "select"): Component {
    switch (type) {
      case "button":
        return new BeautyButton();
      case "input":
        return new BeautyInput();
      case "select":
        return new BeautySelect();
      default:
        throw new Error(`Invalid component type ${type}`);
    }
  }
}

class Demo {
  static run() {
    const beautyUI = new BeautyUI();

    beautyUI.createComponent("button");
    beautyUI.createComponent("input");
  }
}

export default Demo;
