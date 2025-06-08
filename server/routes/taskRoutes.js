import express from 'express';

const router = express.Router();

import {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

router.get('/tasks', getAllTasks); 
router.post('/tasks', createTask); 
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTask); 
router.delete('/tasks/:id', deleteTask); 

export default router;