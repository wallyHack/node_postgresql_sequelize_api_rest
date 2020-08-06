
import Task from './../models/Tasks'; // model task
import Project from './../models/Projects'; // model Project

// funciones útiles para administrar las tareas

export async function getTasks(req, res){
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            data: tasks
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function getOneTask(req, res){
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: {
                id: id
            }
        });
    
        res.json({
            data: task
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function createTask(req, res){

    // datos que envia el cliente
    const { name, done, projectid } = req.body;
    try {
        let newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            // se especifican las columns a las cuales les enviaré datos
            fields: ['name', 'done', 'projectid']
        });
    
        // si la tarea se creo correctamente
        if(newTask){
            // se le envia una respuesta al cliente
            console.log(newTask);
            res.json({
                message: "Task created sucessfully",
                data: newTask            
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}


