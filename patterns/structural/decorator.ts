abstract class MarkdownParser {
  abstract toHTMLString(markdown: string): string;
}

class StandardMarkdownParser extends MarkdownParser {
  toHTMLString(markdown: string) {
    console.log("Converting markdown content to HTML strings...");
    return markdown;
  }
}

abstract class MarkdownParserDecorator extends MarkdownParser {
  constructor(protected parser: MarkdownParser) {
    super();
  }

  abstract extendSyntax(markdown: string): string;
}

class CodeBlockDecorator extends MarkdownParserDecorator {
  toHTMLString(markdown: string) {
    const extendedMarkdown = this.extendSyntax(markdown);
    return this.parser.toHTMLString(extendedMarkdown);
  }

  extendSyntax(markdown: string) {
    console.log("Processing code blocks...");
    return markdown;
  }
}

class HighlightDecorator extends MarkdownParserDecorator {
  toHTMLString(markdown: string) {
    const extendedMarkdown = this.extendSyntax(markdown);
    return this.parser.toHTMLString(extendedMarkdown);
  }

  extendSyntax(markdown: string) {
    console.log("Highlighting important notes...");
    return markdown;
  }
}

class Demo {
  static run() {
    let parser = new StandardMarkdownParser();
    parser = new CodeBlockDecorator(parser);
    parser = new HighlightDecorator(parser);

    console.log("Start parsing markdown content...");
    parser.toHTMLString("markdown");
  }
}

export default Demo;
