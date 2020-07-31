
import Sequelize from 'sequelize';

// implementamos el ORM
export const sequelize = new Sequelize(
    'proyectos_uaz', // DB
    'postgres', // user
    'Manny061195', // password
    {
        host: 'localhost', // host 
        dialect: 'postgres', // tipo de DB
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);

