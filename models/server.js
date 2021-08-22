const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    //Inicializar servidor
    this.app = express();

    this.usuariosPath = "/api/usuarios";

    //Middlewares
    this.middlewares();

    //Rutas De aplicacion
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/Users"));
  }

  listen() {
    this.app.listen(process.env.PORT || 8080, () => {
      console.log("Servidor Arriba");
    });
  }
}

module.exports = Server;
