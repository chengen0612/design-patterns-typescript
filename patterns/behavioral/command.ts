interface Command {
  execute(): void;
}

class MusicOnCommand implements Command {
  execute() {
    console.log("Open Spotify");
    console.log("Start playing music");
  }
}

class EditorStartCommand implements Command {
  execute() {
    console.log("Open VS Code");
  }
}

class TodoListOpenCommand implements Command {
  execute() {
    console.log("Open Notion");
    console.log("Show todo list");
  }
}

class MacroCommand implements Command {
  constructor(private commands: Command[]) {}

  execute() {
    for (const command of this.commands) {
      command.execute();
    }
  }
}

class HotkeyRegistry {
  private commands: Map<string, Command>;

  constructor() {
    this.commands = new Map();
  }

  getHotkey(keystrokes: string) {
    return this.commands.get(keystrokes);
  }

  setHotkey(keystrokes: string, command: Command) {
    this.commands.set(keystrokes, command);
  }
}

class Keyboard {
  constructor(private hotkeys: HotkeyRegistry) {}

  setHotkey(keystrokes: string, command: Command) {
    this.hotkeys.setHotkey(keystrokes, command);
  }

  onKeyPress(keystrokes: string) {
    const command = this.hotkeys.getHotkey(keystrokes);
    if (command) {
      command.execute();
    }
  }
}

class Demo {
  static run() {
    const hotkeys = new HotkeyRegistry();
    const keyboard = new Keyboard(hotkeys);

    const musicOn = new MusicOnCommand();
    const editorStart = new EditorStartCommand();
    const todoListOpen = new TodoListOpenCommand();
    const workStart = new MacroCommand([editorStart, todoListOpen]);

    keyboard.setHotkey("Ctrl+M", musicOn);
    keyboard.setHotkey("Ctrl+W", workStart);

    console.log("Press 'Ctrl+M':");
    keyboard.onKeyPress("Ctrl+M");
    console.log("\nPress 'Ctrl+W':");
    keyboard.onKeyPress("Ctrl+W");
  }
}

export default Demo;
