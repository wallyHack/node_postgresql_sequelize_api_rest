
import Sequelize from 'sequelize';
import { sequelize } from './../database/database';

// modelo Task
import Task from './Tasks';

// definimos el modelo proyect con el ORM
const Proyect = sequelize.define('proyects',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate:{
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

// relación de 1 a muchos, un proyecto tiene de 1 a muchas tareas
Proyect.hasMany(Task, {foreignKey: 'proyectId', sourceKey: 'id'});

// relación a 1, muchas tareas pertenecen a un solo proyecto
Task.belongsTo(Proyect, {foreignKey: 'proyectId', sourceKey: 'id'})

export default Proyect;