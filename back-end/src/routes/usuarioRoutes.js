// importei o Router
import { Router } from "express"

// Importei as funções do usuarioController.js
import { registerUsuario, loginUsuario } from "../controllers/usuarioController.js"

//Router Criado
const routerUsuario = Router()

//Rota POST que leva ao registro de usuários
routerUsuario.post('/usuarios/register', registerUsuario)

//Rota POST que leva ao login de usuários
routerUsuario.post('/usuarios/login', loginUsuario)

export default routerUsuario