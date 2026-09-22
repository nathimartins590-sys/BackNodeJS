import jwt from "jsonwebtoken"
import RepositoryUsuario from "../repository/usuario.js"

import bcrypt from "bcrypt"

const segredo = "sup#rS%cr&t@"

class ServiceUsuario {
    async Buscar() {
        return RepositoryUsuario.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const buscarusuario = await RepositoryUsuario.Detalhes(id)

        if (!buscarusuario) {
            throw new Error(`ID ${id} do usuario não encontrado`)
        }
        return buscarusuario
    }
    
    async Criar(email, senha, valor, concluido) {

        if (!email || !senha || !valor || !concluido) {
            throw new Error("Favor informar todos os dados ")

        }

        const senhaCripto =  await bcrypt.hash(senha, 12)

        const novousuario = await RepositoryUsuario.Create(email, senhaCripto)
        return { novousuario }
    }

    async Alterar(id, email, senha, valor, concluido) {
        if (!id || !email || !senha || !valor || !concluido) {
            throw new Error("Favor informar os dados");
        }

        const senhaCripto =  !senha ? undefined : await bcrypt.hash(senha, 12)

        const usuarioalterado = await RepositoryUsuario.Update(id, email, senhaCripto, valor, concluido)

        return usuarioalterado
    }

    async Deletar(id) {

        if (!id) {
            throw new Error("Favor informar todos os dados ")
        }

        const Deletarusuario = await RepositoryUsuario.Delete(id)

        return Deletarusuario
    }

    async Login(email, senha, valor, concluido) {

        if (!email || !senha || !valor || !concluido) {
            throw new Error("Email ou senha inválido ")
        }

        const usuario = await RepositoryUsuario.findByEmail()


        if (!usuario) {
            throw new Error("Email ou senha invalido ")
        }
        if (
            !(await bcrypt.compare(String(senha), usuario.senha))
        ) {
            throw new Error("Email ou senha inválido");

        }

        return jwt.sign(
            { id: usuario.id, email },
            segredo,
            { expiresIn :60*60}
        )

    }
}

export default new ServiceUsuario