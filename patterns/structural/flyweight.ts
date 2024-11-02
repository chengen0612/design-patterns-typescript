class ImageData {
  readonly url: string;

  constructor(url: string) {
    this.url = url;
    console.log(`Loading image from ${url}`);
  }
}

class Image {
  private x: number;
  private y: number;
  private imageData: ImageData;

  constructor(x: number, y: number, imageData: ImageData) {
    this.x = x;
    this.y = y;
    this.imageData = imageData;
  }

  render() {
    console.log(
      `Rendering image from: ${this.imageData.url} at position ` +
        `(${this.x}, ${this.y})`
    );
  }
}

class ImageDataStore {
  private dataMap: Map<string, ImageData> = new Map();

  getOne(url: string) {
    if (!this.dataMap.has(url)) {
      this.dataMap.set(url, new ImageData(url));
    }
    return this.dataMap.get(url)!;
  }
}

class Document {
  private images: Image[] = [];
  private imageDataStore: ImageDataStore = new ImageDataStore();

  addImage(x: number, y: number, url: string) {
    const imageData = this.imageDataStore.getOne(url);
    const image = new Image(x, y, imageData);
    this.images.push(image);
  }

  render() {
    this.images.forEach((image) => {
      image.render();
    });
  }
}

class Demo {
  static run() {
    const document = new Document();

    document.addImage(20, 20, "https://foo.com/images/sample1.png");
    document.addImage(40, 40, "https://foo.com/images/sample2.png");
    document.addImage(60, 60, "https://foo.com/images/sample1.png");

    document.render();
  }
}

export default Demo;
