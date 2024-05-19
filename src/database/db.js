import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Función para establecer la conexión con la base de datos
export const dbConnection = async () => {
  try {
    // Intentamos conectar a la base de datos con la URL proporcionada en las variables de entorno
    const mongoDB = await mongoose.connect(process.env.DB_URL_CONNECTION, {
      /* useNewUrlParser: true, useUnifiedTopology: true */
    });
    // Si la conexión es exitosa, mostramos un mensaje en la consola con el nombre de la base de datos
    console.log(
      "Se conectó satisfactoriamente a la base de datos de: ",
      mongoDB.connections[0].name
    );
  } catch (error) {
    // Si hay un error en la conexión, lo capturamos y mostramos un mensaje de error
    console.error("Error al conectar la BD");
    throw new Error(error);
  }
};
