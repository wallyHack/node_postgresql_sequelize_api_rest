"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("./../controllers/project.controller");

var router = (0, _express.Router)();
// /api/proyects/
// ruta que agrega el registro de un proyecto POST
router.post('/', _project.createProject); // ruta para obtener todos los proyectos GET

router.get('/', _project.getProjects); // ruta que extrae un proyecto especifico

router.get('/:id', _project.getOneProject); // ruta que elimina un proyecto

router["delete"]('/:id', _project.deleteProject); // ruta que actualiza un proyecto

router.put('/:id', _project.updateProject);
var _default = router;
exports["default"] = _default;