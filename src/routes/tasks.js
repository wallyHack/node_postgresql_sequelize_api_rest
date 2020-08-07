
import { Router } from 'express';
const router = Router();

import { getTasks, getOneTask, createTask, deleteTask, updateTask, getTasksByProject } from './../controllers/task.controller';

// /api/tasks/

router.get('/', getTasks);
router.post('/', createTask);

// /api/tasks/id
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

// obtenemos las tareas pertenecientes a un proyecto
// /api/tasks/project/:projectId
router.get('/project/:projectid', getTasksByProject);


export default router;