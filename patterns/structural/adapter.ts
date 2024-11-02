interface LegacyTokenMethods {
  assign(): void;
  validate(): void;
}

interface JSONWebTokenMethods {
  sign(): void;
  verify(): void;
}

class LegacyToken implements LegacyTokenMethods {
  assign() {
    console.log("Generate legacy token");
  }

  validate() {
    console.log("Validate legacy token");
  }
}

class JSONWebToken implements JSONWebTokenMethods {
  sign() {
    console.log("Generate JSON Web Token");
  }

  verify() {
    console.log("Validate JSON Web Token");
  }
}

class LegacyTokenAdapter implements LegacyTokenMethods {
  constructor(private jwt: JSONWebToken) {}

  assign() {
    console.log("Adapting JWT generation to legacy token format");
    this.jwt.sign();
  }

  validate() {
    console.log("Adapting JWT validation to legacy token format");
    this.jwt.verify();
  }
}

abstract class RouteHandler {
  abstract handle(): void;
}

class LoginHandler extends RouteHandler {
  constructor(private token: LegacyToken) {
    super();
  }

  handle() {
    console.log("LoginHandler: Handling login request...");
    this.token.assign();
  }
}

class VerifyHandler extends RouteHandler {
  constructor(private token: LegacyToken) {
    super();
  }

  handle() {
    console.log("VerifyHandler: Handling token verification request...");
    this.token.validate();
  }
}

class Server {
  private routeMap: Map<string, RouteHandler>;

  constructor() {
    this.routeMap = new Map();
  }

  use(route: string, handler: RouteHandler) {
    this.routeMap.set(route, handler);
  }

  respond(route: string) {
    const handler = this.routeMap.get(route);

    if (handler) {
      handler.handle();
    }
  }
}

class Demo {
  static run() {
    const server = new Server();

    const legacyToken = new LegacyToken();
    const jwt = new JSONWebToken();
    const adaptedJwt = new LegacyTokenAdapter(jwt);

    const legacyTokenLoginHandler = new LoginHandler(legacyToken);
    const legacyTokenVerifyHandler = new VerifyHandler(legacyToken);
    const jwtLoginHandler = new LoginHandler(adaptedJwt);
    const jwtVerifyHandler = new VerifyHandler(adaptedJwt);

    server.use("/login", legacyTokenLoginHandler);
    server.use("/login/jwt", jwtLoginHandler);
    server.use("/verify", legacyTokenVerifyHandler);
    server.use("/verify/jwt", jwtVerifyHandler);

    console.log("Starting server and responding to routes...");

    server.respond("/login");
    server.respond("/login/jwt");
    server.respond("/verify");
    server.respond("/verify/jwt");
  }
}

export default Demo;
