abstract class TextExtractor {
  extractText(filepath: string) {
    console.log(`\nStarting text extraction process for file '${filepath}'...`);

    const fileContent = this.loadFileContent(filepath);
    const textContent = this.parseContent(fileContent);
    this.saveToFile(textContent);

    return textContent;
  }

  protected abstract loadFileContent(filepath: string): any;

  protected abstract parseContent(fileContent: any): string;

  private saveToFile(content: string) {
    console.log("Saving extracted text to a file...");
  }
}

class PDFTextExtractor extends TextExtractor {
  protected loadFileContent(filepath: string) {
    console.log(`Reading PDF from '${filepath}'...`);
    return "PDF content";
  }

  protected parseContent(fileContent: any) {
    console.log("Extracting text content from PDF...");
    return "text extracted from PDF";
  }
}

class ImageTextExtractor extends TextExtractor {
  protected loadFileContent(filepath: string) {
    console.log(`Reading image from '${filepath}'...`);
    return "image content";
  }

  protected parseContent(fileContent: any) {
    console.log("Extracting text content from image...");
    return "text extracted from image";
  }
}

class Demo {
  static run() {
    const pdfTextExtractor = new PDFTextExtractor();
    const imageTextExtractor = new ImageTextExtractor();

    pdfTextExtractor.extractText("sample-document.pdf");
    imageTextExtractor.extractText("sample-image.png");
  }
}

export default Demo;
