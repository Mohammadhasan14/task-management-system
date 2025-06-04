const getAllTasks = (req, res) => {
  res.status(200).json({ message: 'All tasks retrieved successfully' });
}

const createTask = (req, res) => {
  const newTask = req.body; 
  res.status(201).json({ message: 'Task created successfully', task: newTask });
}
const getTaskById = (req, res) => {
  const taskId = req.params.id;
  
  res.status(200).json({ message: `Task with ID ${taskId} retrieved successfully` });
}
const updateTask = (req, res) => {
  const taskId = req.params.id; 
  const updatedTask = req.body; 
  
  res.status(200).json({ message: `Task with ID ${taskId} updated successfully`, task: updatedTask });
}
const deleteTask = (req, res) => {
  const taskId = req.params.id; 
  
  res.status(200).json({ message: `Task with ID ${taskId} deleted successfully` });
}

export {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};