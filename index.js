import express from 'express'
import router from './router/agenda.js';
import database from './config/database.js';
import usuario from './router/usuario.js'


const app = express()

app.use(express.json())

app.use("/api/v1/agenda", router)
app.use("/api/v1/usuario", usuario)

database.db
    .sync({ froce: false })
    .then(() => {
       app.listen(3000, () => {
        console.log("Bah, ta funcionando 3000")
       })
    })
    .catch((e) => {
        console.log(e)
    })