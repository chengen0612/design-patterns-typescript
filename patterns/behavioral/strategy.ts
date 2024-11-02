interface TranslationStrategy {
  translate(input: string): void;
}

class GoogleTranslateStrategy implements TranslationStrategy {
  translate(input: string) {
    console.log(`Translate '${input}' with Google Translate`);
  }
}

class ChatGPTStrategy implements TranslationStrategy {
  translate(input: string) {
    console.log(`Translate '${input}' with Chat GPT`);
  }
}

class Aya23Strategy implements TranslationStrategy {
  translate(input: string) {
    console.log(`Translate '${input}' with Aya 23`);
  }
}

class Translator {
  private targetLanguage: string = "zh-TW";
  private strategy: TranslationStrategy = new GoogleTranslateStrategy();

  translate(input: string) {
    this.strategy.translate(input);
  }

  setStrategy(strategy: TranslationStrategy) {
    this.strategy = strategy;
  }
}

class Demo {
  static run() {
    const translator = new Translator();

    const chatGPTStrategy = new ChatGPTStrategy();
    const aya23Strategy = new Aya23Strategy();

    translator.translate("Hello World");

    translator.setStrategy(chatGPTStrategy);
    translator.translate("Hello World");

    translator.setStrategy(aya23Strategy);
    translator.translate("Hello World");
  }
}

export default Demo;
