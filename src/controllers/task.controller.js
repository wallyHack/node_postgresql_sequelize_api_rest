
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

export async function deleteTask(req, res){
   try {
        const { id } = req.params;
        const deleteRowCount = await Task.destroy({
            where:{
                id: id
            }
        });

        res.json({
            message: "Task deleted sucessfully",
            data: deleteRowCount
        });
   } catch (error) {
       console.log(error);
       res.status(500).json({
            message: "Something goes wrong",
            data: {}
       });
   }
}

export async function updateTask(req, res){
    const { id } = req.params; // id de la URL
    const { name, done, projectid } = req.body; // datos a actualizar

    try {
        const tasks = await Task.findAll({  // buscamos la tarea
            attributes: ['id', 'name', 'done', 'projectid'],
            where: {
                id: id
            }
        });
    
        // si la tarea existe la actualizamos
        if(tasks.length > 0){
            tasks.forEach(async task => {
                await task.update({
                    name,
                    done,
                    projectid
                });
            });
        }
    
        // respuesta al cliente
        res.json({
            message: "Task updates sucessfully",
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

