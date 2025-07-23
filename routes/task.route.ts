//task.route.ts

import express from 'express';
import * as taskController from '../controllers/task.controller';
import { taskSchema } from '../utils/validation';
import { validate } from '../middlewares/errorHandler';

const router = express.Router();

router.post('/create', validate(taskSchema), taskController.createTask);
router.get('/getall', taskController.getAllTasks);
router.get('/get/:id', taskController.getTaskById);
router.put('/update/:id', validate(taskSchema), taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;
