import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/db.js";
import taskRoutes from "./routes/task.routes.js";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Creamos la aplicación de Express
const app = express();

// Usamos express.json() para parsear el cuerpo de las solicitudes HTTP
app.use(express.json());

// Conectamos a la base de datos
dbConnection();

// Usamos las rutas definidas para tareas
app.use("/api", taskRoutes);

// Definimos el puerto en el que la aplicación va a escuchar
const port = process.env.PORT || 3000;

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en ${process.env.BASE_URL}`);
});
