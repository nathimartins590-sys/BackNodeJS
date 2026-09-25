import ServiceUsuario from "../service/usuario.js"

class ControllerUsuario {

    async Buscar(_, res) {
        try {
            const logico = await ServiceUsuario.Buscar()
            res.status(200).send({ mensagem: logico })

        } catch (error) {
            res.status(500).send({
                mensagem: error.menssage
            })
        }
    }

   async Detalhe(req, res) {
        try {

            const id = req.params.id
            const logico = await ServiceUsuario.Detalhe(id)

          await  res.status(200).send({ mensagem: logico })

        } catch (error) {
            res.status(500).send({
                mensagem: error.mensage
            })
        }

    }

  async  Criar(req, res) {
        try {

            const { email, senha, valor, concluido } = req.body

           await ServiceUsuario.Criar( email, senha, valor, concluido)

            res.status(201).send({
                mensagem: "Cadastrado com sucesso"
            })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

 async  Alterar(req, res) {
        try {
             const { email, senha, valor, concluido } = req.body
            const id = Number(req.params.id)

            await ServiceCarro.Alterar(id, email, senha, valor, concluido)
            
            res.status(201).send({ mensagem: "Alterado  com sucesso" })

        } catch (error) {
            res.status(500).send({
                mensagem: error.menssage
            })
        }

    }

  async  Deletar(req, res) {
        try {

            const id = req.params.id

         await ServiceUsuario.Deletar(id)

            res.status(204).send({
                mensagem: "Deletado"
            })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }

    }

async Login(req,res){

try {
    
    
    const {email , senha, valor, concluido } = req.body
    
    
    const token = await ServiceUsuario.Login(email , senha, valor, concluido )
    
    res.status(200).send({
        token
    })
} catch (error) {
    
    res.status(500).send({
        mensage: error.message
    })

}

}
}

export default new ControllerUsuario()