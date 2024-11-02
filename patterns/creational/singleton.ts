class QueryCache {
  private static instance: QueryCache;
  private cache: Map<string, any>;

  private constructor() {
    this.cache = new Map();
  }

  public static getInstance() {
    if (!QueryCache.instance) {
      QueryCache.instance = new QueryCache();
    }

    return QueryCache.instance;
  }

  get(key: string) {
    return this.cache.get(key);
  }

  set(key: string, data: any) {
    this.cache.set(key, data);
  }

  has(key: string) {
    return this.cache.has(key);
  }
}

type Email = { email: string };

type EmailQueryOptions = { seed?: string };

type EmailQueryResponse = {
  results: Email[];
  info: Record<string, string | number>;
};

class RandomEmail {
  static async getOne(options?: EmailQueryOptions) {
    const url = this.getUrl(options);
    const data = await this._getOne(url);

    if (data && data.results.length) {
      console.log(data.results[0].email);
    }
  }

  private static async _getOne(
    url: string
  ): Promise<EmailQueryResponse | undefined> {
    const cache = QueryCache.getInstance();

    if (cache.has(url)) {
      console.log("Getting email from cache...");
      return cache.get(url);
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Getting email from server...");
      cache.set(url, data);
      return data;
    } catch {
      console.error("Failed to fetch email");
    }
  }

  private static getUrl(options: EmailQueryOptions = {}) {
    const url = new URL("https://randomuser.me/api/");
    const resolvedOptions = Object.assign({ inc: "email" }, options);

    for (const [key, value] of Object.entries(resolvedOptions)) {
      url.searchParams.set(key, value);
    }

    return url.href;
  }
}

class ClientA {
  static async main() {
    await RandomEmail.getOne();
  }
}

class ClientB {
  static async main() {
    await RandomEmail.getOne();
  }
}

class ClientC {
  static async main() {
    await RandomEmail.getOne({ seed: "foo" });
  }
}

class Demo {
  static async run() {
    await ClientA.main();
    await ClientB.main();
    await ClientC.main();
  }
}

export default Demo;
