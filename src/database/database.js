import Sequelize from 'sequelize'; /*Cuando sequelize es importado, cuando se útiliza sequelize con la
                                    primera letra en mayuscula, nos estamos refiriendo a la biblioteca misma, 
                                    mientras que cuando lo usamos con la primera "s" en minuscula, hacemos 
                                    referencia a una instancia de esta biblioteca. Esto es una convención.
                                    En este caso nos traeremos sequelize con la primera s en mayuscula para
                                    seguir esta regla. */

export const sequelize = new Sequelize ('projectsdb','root','',{
    host:'localhost',
    dialect: 'mysql'
})
    