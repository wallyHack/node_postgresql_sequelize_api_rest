"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Tasks = _interopRequireDefault(require("./Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modelo Task
// definimos el modelo proyect con el ORM
var Project = _database.sequelize.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  priority: {
    type: _sequelize["default"].INTEGER
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  deliverydate: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
}); // relación de 1 a muchos, un proyecto tiene de 1 a muchas tareas


Project.hasMany(_Tasks["default"], {
  foreignKey: 'projectid',
  sourceKey: 'id'
}); // relación a 1, muchas tareas pertenecen a un solo proyecto

_Tasks["default"].belongsTo(Project, {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;