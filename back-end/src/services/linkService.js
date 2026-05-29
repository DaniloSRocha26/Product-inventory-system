import pool from "../config/db.js"

//Busca todos os links vinculados a um produto pelo seu id
async function getByproduto(produto_id){
    const result = await pool.query('SELECT * FROM links WHERE produto_id = $1', [produto_id])
    return result.rows
}

//Cria um novo link vinculado a um produto e retorna o link criado
async function create(produto_id, url, nome_loja){
    const result = await pool.query('INSERT INTO links (produto_id, url, nome_loja) VALUES($1, $2, $3) RETURNING *', [produto_id, url, nome_loja])
    return result.rows[0]
}

//Remove um link filtrando pelo seu id
async function remove(id){
    const result = await pool.query('DELETE FROM links WHERE id = $1 ', [id])
}

export {getByproduto, create, remove}