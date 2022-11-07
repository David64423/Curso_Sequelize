import app from './app.js';
import {sequelize} from './database/database.js';

import './models/project.js';
import './models/task.js';
let port=5000;

async function  main(){
    try{
        await sequelize.sync({force:true}); /* Este método hace una sincronizacion con la base de datos, es decir, 
                                crea tablas, las elimina o/y las crea nuevamente,etc. */ /*Si no le
                                pongo nada como parametro, va a crear las tablas de los archivos que impor-
                                te de models en caso de que no esten creados ya */
                                /* En caso que como parametro pongamos "{force:true}" significa que creara las
                                tablas pero eliminara las anteriores, es decir  que las recreara*/
                                /* En caso que como parametro pongamos "{alter:true}" significa que no se recrea
                                la tabla pero no se pierdenlos datos que tiene dentro */

        await sequelize.authenticate(); /*Función que trae la clase de sequelize para probar la conexion */
        console.log("Connection has been established successfully.");
        app.listen(port)
        console.log(`Server on port ${port}`);

    }
    catch(error){
        console.log("Unable to connect to the database:", error);

    }
}

main();


