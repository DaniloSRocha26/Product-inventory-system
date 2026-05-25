//Importo a função getAll do categoria.Service.js
import { create, getAll } from "../services/categoriaService.js";

//Faço uma função assíncrona para pegar todas as categorias e devolver
//como um json
async function getAllCategorias(req, res){
    try{
        //Passo o id do usuário logado que o middleware autenticar
        //salvou em req.user após validar o token
       const categorias = await getAll(req.user.id)
       res.json(categorias)
    }catch(error){
        res.status(500).json({ message: error.message})
    }

}

//Faço uma função assíncrona para pegar o nome da categoria, id do usuário
//logado 
//Criando a categoria no banco e devolvendo ela
async function creatingCategoria(req, res){
    try{
        
        //Chama o service passando o id do usuário e o nome, recebe a categoria de volta
        const createCategoria = await create(req.user.id, req.body.nome)
        res.status(201).json(createCategoria)
    }catch(error){
        res.status(500).json({ message: error.message})
    }
}

export {getAllCategorias, creatingCategoria}