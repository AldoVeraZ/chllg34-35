import Task from "../models/taskModel.js";

// Crear una nueva tarea
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las tareas
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().select("-__v"); // Excluir el campo __v
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una tarea por ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).select("-__v"); // Excluir el campo __v
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una tarea por ID
export const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    ).select("-__v"); // Excluir el campo __v
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una tarea por ID
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id).select("-__v"); // Excluir el campo __v
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
