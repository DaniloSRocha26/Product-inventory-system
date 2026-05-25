//Importei o Router do express
//O Router vai servir para agrupar rotas
//em módulos separados, ao invés de ficar tudo no
//index.js, cada arquivo pode ter seu próprio
//router organizado
//No Index eu só vou precisar usar os app.use('/', )

//Por exemplo - categoriaRoutes.js
//router.get('/', ...)
//router.post('/', ...)

//Em outro arquivo seria a mesma coisa

//E no index eu só usaria app.use('/categoria', categoriaRoutes)
//ou app.use('/exemplo', exemploRoutes)
import { Router } from "express"

//importei a função getAllCategorias do categoriaController.js
import { getAllCategorias, creatingCategoria, updatingCategoria, removingCategoria } from "../controllers/categoriaController.js"

//Importo o middleware que valida o token JWT antes de acessar as rotas protegidas
import autenticar from "../middlewares/auth.js"

//Criei o router
const routerCategoria = Router()

//Rota GET que retorna todas as categorias do usuário logado, autenticar valida o token antes
routerCategoria.get('/', autenticar, getAllCategorias)

//Rota POST que cria uma nova categoria para o usuário logado,  autenticar valida o token antes
routerCategoria.post('/', autenticar, creatingCategoria)

//Rota UPDATE que atualiza a categoria selecionada pelo usuário
routerCategoria.put('/:id', autenticar, updatingCategoria)

//Rota DELETE que deleta a categoria selecionada pelo usuário
routerCategoria.delete('/:id', autenticar, removingCategoria)

export default routerCategoria