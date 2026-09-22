import usuario from "../model/usuario.js"

class RepositoryUsuario{
async Find(){
    const buscartodos = await usuario.findAll()

return buscartodos

}

async Detalhes(id){
    const detalhes =await usuario.findByPk(id)

 return detalhes
}

async Create(email,senha, valor, concluido){
    const criarusuario = await usuario.create({email,senha,valor,concluido})

    return criarusuario
}

async Update(id,email,senha, valor, concluido){
    
        const update = await usuario.findByPk(id)

        if(!update){
            throw new Error("agenda não encontrado");
        }
        update.email = email
        update.senha = senha
        update.valor = valor
        update.concluido = concluido
    
        await update.save()

return update
}

async Delete(id){
    
const deleteusuario = await usuario.findByPk(id)

if(!deleteusuario){
    throw new Error("Usuario não encontrado");    
}
 await deleteusuario.destroy()

 return deleteusuario

}

findByEmail(email){
    return usuario.findOne({where : {email} })
}


}

export default new RepositoryUsuario()