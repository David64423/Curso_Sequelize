import {Router} from 'express';
import { getProjects, createProject } from '../controllers/projects.controller.js';

const router = Router();

router.get('/projects', getProjects) //Aca vamos a hacer que se puedan ver todos los proyectos
                                        /*Aqui le digo que cuando se vaya a esta ruta
                                        se va a ejecutar la funcion que importe 
                                        "getProjects" */

router.post('/projects', createProject) //Cuando haga una ruta post quiero crear proyectos
                                        /*Aqui le digo que cuando se vaya a esta ruta
                                        se va a ejecutar la funcion que importe 
                                        "createProjects" */

router.put('/projects/:id')//Cuando haga una ruta put es porque quiero actualizar un proyecto


router.delete('/projects/:id')//Cuando haga una ruta delete es porque quiero eliminar un projecto

router.get('/projects/:id')//Esto es porque quiero obtener un solo proyecto

export default router;