class EditorState {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }
}

class TextEditor {
  private content: string;

  constructor(initialContent: string = "") {
    this.content = initialContent;
  }

  updateContent(newContent: string) {
    console.log(`TextEditor: Updating content to "${newContent}"`);
    this.content = newContent;
  }

  createState(): EditorState {
    return new EditorState(this.content);
  }

  restoreState(state: EditorState) {
    const restoredContent = state.getContent();
    console.log(
      `TextEditor: Restoring content "${restoredContent}" from state`
    );
    this.content = restoredContent;
  }
}

class Application {
  private states: EditorState[];
  private currentIndex: number;
  private textEditor: TextEditor;

  constructor() {
    this.states = [];
    this.currentIndex = -1;
    this.textEditor = new TextEditor();
  }

  updateContent(newContent: string) {
    this.textEditor.updateContent(newContent);
    this.states = this.states.slice(0, this.currentIndex + 1);
    this.states.push(this.textEditor.createState());
    this.currentIndex++;
  }

  undo() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.textEditor.restoreState(this.states[this.currentIndex]);
    }
  }

  redo() {
    if (this.currentIndex < this.states.length - 1) {
      this.currentIndex++;
      this.textEditor.restoreState(this.states[this.currentIndex]);
    }
  }
}

class Demo {
  static run() {
    const app = new Application();

    app.updateContent("I love coding.");
    app.updateContent("I love listening to music.");
    app.undo();
    app.redo();
    app.updateContent("I love drinking coffee.");
    app.undo();
  }
}

export default Demo;
