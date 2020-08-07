
import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getOneProject, deleteProject, updateProject } from './../controllers/project.controller';

// /api/proyects/

// ruta que agrega el registro de un proyecto POST
router.post('/', createProject);

// ruta para obtener todos los proyectos GET
router.get('/', getProjects);

// ruta que extrae un proyecto especifico
router.get('/:id', getOneProject);

// ruta que elimina un proyecto
router.delete('/:id', deleteProject);

// ruta que actualiza un proyecto
router.put('/:id', updateProject);

export default router;