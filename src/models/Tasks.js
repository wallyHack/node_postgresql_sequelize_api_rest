
import Sequelize from 'sequelize';
import { sequelize } from './../database/database';

// definimos el modelo tasks con el ORM
const Task = sequelize.define('tasks',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT        
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    proyectId:{
        type: Sequelize.INTEGER,        
    }
}, {
    timestamp: false
});

export default Task;