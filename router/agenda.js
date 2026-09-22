import express from 'express'
import ControllerAge from "../controller/agenda.js"

const router = express.Router()

router.get("/buscar", ControllerAge.Buscar)
router.get("/detalhe/:id", ControllerAge.Detalhe)
router.post("/criar", ControllerAge.Criar)
router.post("/alterar/:id", ControllerAge.Alterar)
router.post("/deletar/:id", ControllerAge.Deletar)

export default router