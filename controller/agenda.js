import ServiceAge from "../service/agenda.js"

class ControllerAge {
    async Buscar(_, res) {
        try {
            const agendas = await ServiceAge.Buscar()
            res.send({ message: agendas })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const agendas = await ServiceAge.Detalhe(id)

            res.status(200).send({ message: agendas })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { dia, mes, ano, hora } = req.body

           await ServiceAge.Criar( dia, mes, ano, hora )
            
            res.status(201).send({ message: "cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { dia, mes, ano, hora } = req.body

            await ServiceAge.Update( dia, mes, ano, hora )
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.body.id
            
            await ServiceAge.Delete(id)

            res.send({ message: "deletado" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }


}

export default new ControllerAge()