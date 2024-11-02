class Request {
  constructor(public pathname: string) {}
}

abstract class RequestHandler {
  private successor?: RequestHandler;

  abstract handle(request: Request): void;

  setSuccessor(successor: RequestHandler) {
    this.successor = successor;
  }

  protected next(request: Request) {
    this.successor?.handle(request);
  }
}

class Logger extends RequestHandler {
  handle(request: Request) {
    console.log(`Logger: Received request for ${request.pathname}`);
    this.next(request);
  }
}

class AlbumsHandler extends RequestHandler {
  handle(request: Request) {
    if (request.pathname !== "/albums") {
      return this.next(request);
    }
    console.log("AlbumsHandler: Sending several albums to user");
  }
}

class ArtistsHandler extends RequestHandler {
  handle(request: Request) {
    if (request.pathname !== "/artists") {
      return this.next(request);
    }
    console.log("ArtistsHandler: Sending several artists to user");
  }
}

class Server {
  private handlers: RequestHandler[];

  constructor() {
    this.handlers = [];
  }

  use(handler: RequestHandler) {
    const previousHandler = this.handlers[this.handlers.length - 1];
    previousHandler?.setSuccessor(handler);
    this.handlers.push(handler);
  }

  process(request: Request) {
    if (this.handlers.length > 0) {
      this.handlers[0].handle(request);
    }
  }

  listen() {
    console.log("Listening for incoming requests...");
  }
}

class Demo {
  static run() {
    const server = new Server();
    const logger = new Logger();
    const albumsHandler = new AlbumsHandler();
    const artistsHandler = new ArtistsHandler();

    server.use(logger);
    server.use(albumsHandler);
    server.use(artistsHandler);

    server.listen();

    server.process(new Request("/albums"));
    server.process(new Request("/artists"));
    server.process(new Request("/unknown"));
  }
}

export default Demo;
