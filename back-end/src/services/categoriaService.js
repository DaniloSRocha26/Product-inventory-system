//Importo a instância do pool do db.js para fazer as queries no banco
import pool from "../config/db.js"

//Busca todas as categorias que pertencem ao usuário logado
async function getAll(usuario_id){
    const result = await pool.query('SELECT * FROM categorias WHERE usuario_id = $1', [usuario_id])
    return result.rows
}

//Cria uma nova categoria vinculada ao usuário logado e retorna a categoria criada
async function create(usuario_id, nome){
    const result = await pool.query('INSERT INTO categorias (usuario_id, nome) VALUES($1, $2) RETURNING *', [usuario_id, nome])
    return result.rows[0]
}

//Adicionei uma função de update que atualiza o nome da tabela, filtrando pelo seu id
async function update(id, nome, usuario_id){
    const result = await pool.query('UPDATE categorias SET nome = $1 WHERE id = $2 AND usuario_id = $3 RETURNING *', [nome,  id, usuario_id])
    return result.rows[0]
}

//Adicionei uma função de remove que remove uma tabela, filtrando pelo seu id
async function remove(id, usuario_id){
    const result = await pool.query('DELETE FROM categorias WHERE id = $1 AND usuario_id = $2', [id, usuario_id])
}

export {getAll, create, update, remove}

