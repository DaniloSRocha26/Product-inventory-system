import { Router } from "express"

import { registerUsuario, loginUsuario } from "../controllers/usuarioController.js"

const routerUsuario = Router()

routerUsuario.post('/usuarios/register', registerUsuario)

routerUsuario.post('/usuarios/login', loginUsuario)

export default routerUsuario