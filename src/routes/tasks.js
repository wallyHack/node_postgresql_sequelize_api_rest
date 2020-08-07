
import { Router } from 'express';
const router = Router();

import { getTasks, getOneTask, createTask, deleteTask, updateTask } from './../controllers/task.controller';

// /api/tasks/

router.get('/', getTasks);
router.get('/:id', getOneTask);
router.post('/', createTask);

// /api/tasks/id
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);


export default router;