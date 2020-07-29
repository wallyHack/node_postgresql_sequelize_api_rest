
// configuración del servidor

import express, { json } from 'express';
import morgan from 'morgan';
const app = express();

// settings
// app.set('port', process.env.PORT || 3000);
// app.set("json spaces", 2);

// middlewares
app.use(morgan('dev'));
app.use(json());

// importing the routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

// routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

// starting the server
// app.listen(app.get('port'), ()=>{
//     console.log(`Server on port ${app.get('port')}`);
// });

export default app;