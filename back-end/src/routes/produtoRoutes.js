//Importo o Router do express para criar as rotas de produto
import { Router } from "express";

//Importo as funções do produtoController.js
import { getAllProdutos, creatingProduto, updatingProduto, removingProduto, toggleCompradoConfirm } from "../controllers/produtoController.js";

//Importo o middleware que valida o token JWT antes de acessar as rotas protegidas
import autenticar from "../middlewares/auth.js";

//Criei o router
const routerProduto = Router()

//Rota GET que retorna todos os produtos do usuário logado
routerProduto.get('/', autenticar, getAllProdutos)

//Rota POST que cria um novo produto para o usuário logado
routerProduto.post('/', autenticar, creatingProduto)

//Rota PUT que atualiza um produto pelo id que vem na URL
routerProduto.put('/:id', autenticar, updatingProduto)

//Rota DELETE que remove um produto pelo id que vem na URL
routerProduto.delete('/:id', autenticar, removingProduto)

//Rota PATCH que inverte o campo comprado de um produto pelo id que vem na URL
routerProduto.patch('/:id/comprado', autenticar, toggleCompradoConfirm)

export default routerProduto