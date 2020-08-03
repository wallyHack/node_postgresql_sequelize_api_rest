
import { Router } from 'express';
const router = Router();

import { createProject } from './../controllers/project.controller';

// /api/proyects/

// ruta que agrega el registro de un proyecto POST
router.post('/', createProject);

export default router;