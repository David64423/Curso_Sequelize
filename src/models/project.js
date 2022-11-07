import {DataTypes} from 'sequelize';
import {sequelize} from './../database/database.js'; /*Para estos modelos es necesario la conexion a base de
                                                        datos */
import {Task} from './task.js';

export const Project=sequelize.define('projects',{ /* Define es para definir tablas, en el primer parametro le doy el nombre que 
                                quiero que tenga la base de datos, mientras que en el segundo parametro le doy
                                un objeto con los campos que quiero que tenga mis tablas */
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    } ,
    name:{
        type: DataTypes.STRING,
    },
    priority:{
        type: DataTypes.INTEGER,
    },
    description:{
        type: DataTypes.STRING,
    },

},
{
    timestamps:true,
});

Project.hasMany(Task, { /*Esto quiere decir que un projecto tiene muchas tareas */
    
    foreignKey: 'projectId',  /* Esta es la columna que se agregara a task para la relación  */

    sourceKey:'id' /* Esta es a que columna hace referencia la foreignKey */
})

Task.belongsTo(Project,{ /* Aqui le aclaramos que muchas tareas pueden pertenecer a un solo proyecto *//* Hay
                            que aclarar esto en los dos lados de la relación */


    foreignKey: 'projectId',  /* Esta es la columna que se agregara a task para la relación  */

    targetId:'id' /* Esta es a que columna hace referencia la foreignKey */
});