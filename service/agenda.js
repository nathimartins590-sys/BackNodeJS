import RepositoryAge from "../repository/agenda.js"

class ServiceAge {
    async Buscar() {
        return RepositoryAge.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("favor informar o id")
        }

        const agendas = RepositoryAge.FindeById(it => it.id === id)

        if (!agendas) {
            throw new Error(`id ${id} da agenda não encontrado`)
        }

        return agendas
    }

    async Criar(dia, mes, ano, hora) {
        if (!dia || !mes || !ano || !hora) {
            throw new Error({ message: "colocar todas as informações" })
        }
        const agendas = await RepositoryAge.Creat(mes, ano)
        return agendas
    }

    async Alterar(id) {
        // if (!id || !marca || !ano) {
        //     throw new Error("Favor informar os dados");
        // }

        // const index = RepositoryCarro.findIndex(carro => carro.id === Number(id));

        // if (index) {
        //     throw new Error("Carro não encontrado");
        // }

        // RepositoryCarro[index] = {
        //     id: Number(id),
        //     marca,
        //     ano
        // };

        return RepositoryAge.Update(id)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error({ message: "favor informar o id" })
        }

        const agendas = RepositoryAge.Delete(id)

        return agendas
    }

}

export default new ServiceAge()