import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "../routes/router";

class Server {

  app: express.Application;
  mainPath: string;

  constructor() {
    //Inicializar servidor
    this.app = express();

    this.mainPath = "/";

    //Middlewares
    this.middlewares();

    //Rutas De aplicacion
    this.routes();
  }

  middlewares() {

    //MORGAN
    this.app.use(morgan("dev"));

    // CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.mainPath, router );
  }

  listen() {
    this.app.listen(process.env.PORT || 8080, () => {
      console.clear();
      console.log("Server up");
    });
  }
}

export default Server;
