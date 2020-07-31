
import Project from './../models/Proyects';

// funciones útiles para administrar proyectos

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

        if(newProject){ // si el proyecto se creao correctamente
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
