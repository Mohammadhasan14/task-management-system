import connection from "../db/connection.js";


const getAllTasks = (req, res) => {
  const query = 'SELECT * FROM tasks';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving tasks:', err);
      return res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
    console.log('Retrieved tasks:', results);
    res.status(200).json({ tasks: results });
  });
};

const createTask = (req, res) => {
  const { title, details } = req.body;
  console.log('Creating task with title:', title, 'and details:', details);
  if (!title || !details) {
    return res.status(400).json({ message: 'Title and details are required' });
  }

  const query = 'INSERT INTO tasks (title, details) VALUES (?, ?)';
  const values = [title, details];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error creating task:', err);
      return res.status(500).json({ error: 'Failed to create task' });
    }

    const newTask = {
      id: results.insertId,
      title,
      details,
    };

    res.status(201).json({ message: 'Task created successfully', task: newTask });
  });
};

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