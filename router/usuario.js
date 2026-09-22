import express from "express"
import ControllerUsuario from "../controller/usuario.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.post("/login" ,authMiddleware, ControllerUsuario.Login)
router.get("/buscar",authMiddleware, ControllerUsuario.Buscar)
router.get("/detalhes/:id", ControllerUsuario.Detalhe)
router.post("/criar", ControllerUsuario.Criar)
router.put("/alterar/:id",ControllerUsuario.Alterar)
router.delete("/deletar/:id", ControllerUsuario.Deletar)

export default router