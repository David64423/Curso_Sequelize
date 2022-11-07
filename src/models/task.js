import {DataTypes} from 'sequelize';

import {sequelize} from '../database/database.js';

export const Task = sequelize.define('task',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name:{
        type: DataTypes.STRING,
    },

    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false, //Esto quiere decir que el valor por defecto al crear una tarea sera false
    }

},{
    timestamps: false,
});