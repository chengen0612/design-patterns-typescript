class Component {
  render() {}
}

class Button extends Component {}

class SupportingText extends Component {}

class Avatar extends Component {}

class Profile extends Component {}

abstract class TooltipFactory<
  Trigger extends Component,
  Panel extends Component
> {
  abstract createTrigger(): Trigger;
  abstract createPanel(): Panel;
}

class PlainTooltipFactory extends TooltipFactory<Button, SupportingText> {
  createTrigger() {
    return new Button();
  }

  createPanel() {
    return new SupportingText();
  }
}

class AvatarTooltipFactory extends TooltipFactory<Avatar, Profile> {
  createTrigger() {
    return new Avatar();
  }

  createPanel() {
    return new Profile();
  }
}

class Tooltip<Trigger extends Component, Panel extends Component> {
  trigger: Trigger;
  panel: Panel;

  constructor(factory: TooltipFactory<Trigger, Panel>) {
    this.trigger = factory.createTrigger();
    this.panel = factory.createPanel();
  }

  render() {
    this.trigger.render();
    this.panel.render();
  }
}

class Demo {
  static run() {
    const plainTooltipFactory = new PlainTooltipFactory();
    const avatarTooltipFactory = new AvatarTooltipFactory();

    const plainTooltip = new Tooltip(plainTooltipFactory);
    const avatarTooltip = new Tooltip(avatarTooltipFactory);

    plainTooltip.render();
    avatarTooltip.render();
  }
}

export default Demo;
