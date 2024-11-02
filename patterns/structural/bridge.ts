abstract class AIIntegrationTool {
  protected model: AIModel;

  constructor(model: AIModel) {
    this.model = model;
  }

  abstract sendMessage(input: string): void;
}

class ChatPanel extends AIIntegrationTool {
  sendMessage(input: string) {
    console.log("Sending message from ChatPanel: ", input);
    this.model.processMessage(input);
  }
}

class ChatInputBox extends AIIntegrationTool {
  sendMessage(input: string) {
    console.log("Sending message from ChatInputBox: ", input);
    this.model.processMessage(input);
  }
}

abstract class AIModel {
  abstract processMessage(input: string): void;
}

class ChatGPTModel extends AIModel {
  processMessage(input: string) {
    console.log("ChatGPT processing message: ", input);
  }
}

class ClaudeModel extends AIModel {
  processMessage(input: string) {
    console.log("Claude processing message: ", input);
  }
}

class Demo {
  static run() {
    const chatGPTPanel = new ChatPanel(new ChatGPTModel());
    const claudeChatInputBox = new ChatInputBox(new ClaudeModel());

    chatGPTPanel.sendMessage("Hello, how are you?");
    claudeChatInputBox.sendMessage("Hello, how are you?");
  }
}

export default Demo;
