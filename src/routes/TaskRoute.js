import express from 'express';
import { TaskController } from '../controllers/TaskController.js';

const router = express.Router();

// Créer une tâche
router.post('/tasks', TaskController.createTask);

// Récupérer toutes les tâches
router.get('/tasks', TaskController.getTasks);

router.get('/tasks/:id', TaskController.getTaskById);

router.put('/tasks/:id', TaskController.updateTask);

router.delete('/tasks/:id', TaskController.deleteTask);

export { router };
