
import Project from '../models/Projects';
// funciones útiles para administrar proyectos

export async function getProjects(req, res){
    try{
        const projects = await Project.findAll(); // consultamos todos los proyectos
        res.json({
            data: projects
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }  
}

export async function getOneProject(req, res){
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id: id
            }
        });
    
        res.json({
            data: project
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function deleteProject(req, res){
    try {
        const { id } = req.params;
        const deleteRowCount = await Project.destroy({
            where: {
                id: id
            }
        });

        res.json({
            message: "Project deleted succesfully",
            count: deleteRowCount
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function createProject(req, res){
    // console.log(req.body);
    // res.send("Received...");
    const { name, priority, description, deliverydate } = req.body; //datos que me envia el cliente
    try{
        let newProject = await Project.create({
            name,
            priority, 
            description,
            deliverydate
        }, {
            // se especifican las columnas a las cuales les voy a enviar datos
            fields: ['name', 'priority', 'description', 'deliverydate'] 
        });

        if(newProject){ // si el proyecto se creo correctamente
            console.log(newProject);
            res.json({
                message: "Project created sucessfully",
                data: newProject
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }       
}

export async function updateProject(req, res){
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    try {
        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deliverydate' ],
            where: {
                id: id
            }
        });
    
        // si el proyecto existe lo actualizamos
        if(projects.length > 0){
            projects.forEach(async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    deliverydate
                });
            });
        }
        // respuesta al cliente
        res.json({
            message: "Project updated succesfully",
            data: projects
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

