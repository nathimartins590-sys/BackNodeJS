import database from "../config/database.js"

class Agendas {
     constructor() {
        this.model = database.db.define("carros", {
            id: {
               type: database.db.Sequelize.INTEGER,
               primaryKey: true,
               autoIncrement: true
            },
            dia: {
               type: database.db.Sequelize.STRING,
            },
            mes: {
               type: database.db.Sequelize.INTEGER,
            },
            ano: {
               type: database.db.Sequelize.INTEGER,
            },
            hora: {
                type: database.db.Sequelize.INTEGER,
            }
        })
    }
}

export default new Agendas().model