const express = require("express");
const cors = require("cors");
const testRoute = require("../routes/test.route");
const usuarioRoute = require("../routes/usuario.route");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.testRoutePath = "/api/test";
    this.usuarioRoutePath = "/api/usuario";

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // JSON Body Parser
    this.app.use(express.json());

    // CORS Errors
    this.app.use(cors());

    // Public directory
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(`${this.testRoutePath}`, testRoute);
    this.app.use(`${this.usuarioRoutePath}`, usuarioRoute);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}

module.exports = Server;
