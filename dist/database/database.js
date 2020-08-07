"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// implementamos el ORM
var sequelize = new _sequelize["default"]('proyectos_uaz', // DB
'postgres', // user
'Manny061195', // password
{
  host: 'localhost',
  // host 
  dialect: 'postgres',
  // tipo de DB
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;