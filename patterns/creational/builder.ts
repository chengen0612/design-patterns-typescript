class Computer {
  constructor(
    public CPU: string,
    public RAM: string,
    public storage: string,
    public GPU: string
  ) {}

  displaySpecs() {
    console.log("Computer Specifications:");
    console.log(`  CPU: ${this.CPU}`);
    console.log(`  RAM: ${this.RAM}`);
    console.log(`  Storage: ${this.storage}`);
    console.log(`  GPU: ${this.GPU}\n`);
  }
}

interface ComputerBuilder {
  setCPU(): void;
  setRAM(): void;
  setStorage(): void;
  setGPU(): void;
  build(): Computer;
}

class OfficePCBuilder implements ComputerBuilder {
  private CPU: string;
  private RAM: string;
  private storage: string;
  private GPU: string;

  setCPU() {
    this.CPU = "Intel i5-12400";
  }

  setRAM() {
    this.RAM = "16GB DDR4";
  }

  setStorage() {
    this.storage = "512GB SSD";
  }

  setGPU() {
    this.GPU = "Integrated Intel UHD Graphics 730";
  }

  build() {
    return new Computer(this.CPU, this.RAM, this.storage, this.GPU);
  }
}

class GraphicDesignPCBuilder implements ComputerBuilder {
  private CPU: string;
  private RAM: string;
  private storage: string;
  private GPU: string;

  setCPU() {
    this.CPU = "Intel i9-13900K";
  }

  setRAM() {
    this.RAM = "32GB DDR5";
  }

  setStorage() {
    this.storage = "2TB NVMe SSD";
  }

  setGPU() {
    this.GPU = "NVIDIA RTX 3080";
  }

  build() {
    return new Computer(this.CPU, this.RAM, this.storage, this.GPU);
  }
}

class ComputerDirector {
  constructor(private builder: ComputerBuilder) {}

  construct(): Computer {
    this.builder.setCPU();
    this.builder.setGPU();
    this.builder.setStorage();
    this.builder.setRAM();

    return this.builder.build();
  }
}

class Demo {
  static run() {
    const officePCDirector = new ComputerDirector(new OfficePCBuilder());
    const graphicDesignPCDirector = new ComputerDirector(
      new GraphicDesignPCBuilder()
    );

    const officePC = officePCDirector.construct();
    const graphicDesignPC = graphicDesignPCDirector.construct();

    officePC.displaySpecs();
    graphicDesignPC.displaySpecs();
  }
}

export default Demo;
