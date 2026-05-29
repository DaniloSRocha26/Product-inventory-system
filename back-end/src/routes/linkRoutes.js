import { Router } from "express";

//Importo as funções do linkController
import { getAllLinks, creatingLink, removingLink } from "../controllers/linkController.js";

//Importo o middleware que valida o token JWT antes de acessar as rotas
import autenticar from "../middlewares/auth.js";

const routerLink = Router()

//Busca todos os links de um produto pelo produto_id que vem na URL
routerLink.get('/:produto_id/', autenticar, getAllLinks)

//Cria um novo link para um produto pelo produto_id que vem na URL
routerLink.post('/:produto_id/', autenticar, creatingLink)

//Remove um link pelo id que vem na URL
routerLink.delete('/:id', autenticar, removingLink)

export default routerLink