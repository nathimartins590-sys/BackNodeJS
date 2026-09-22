import agenda from "../model/agenda.js";

class RepositoryAge {
     async Find() {
       const agendas = await agenda.findAll()

       return agendas
    }

    async FindeById(id) {
        const agendaDetalhes = await agenda.findByPk(id)

        return agendaDetalhes
    }

    async Creat(dia, mes, ano, hora) {
        const agendaCriar = await agenda.create({dia, mes, ano, hora})

        return agendaCriar
    }

    async Update(id) {
        const agendaAlterar = await carro.findByPk(id)

        if(!agendaAlterar) {
            throw new Error("dia não encontrado")
        }

        agendaAlterar.mes = mes || agendaAlterar.mes
        agendaAlterar.ano = ano || agendaAlterar.ano

        await agendaAlterar.save()
    }

    async Delete(id) {
        const agendaDeletar = await agenda.findByPk(id)

        if(!agendaDeletar){
            throw new Error("nao foi achado")
        }

        await agendaDeletar.destroy()

        return agendaDeletar
    }
}

export default new RepositoryAge()