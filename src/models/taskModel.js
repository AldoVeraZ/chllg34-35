import mongoose from "mongoose";

// Definimos el esquema de la tarea
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v; // Eliminamos el campo __v
      },
    },
  }
);

// Exportamos el modelo basado en el esquema
export default mongoose.model("Task", taskSchema);
