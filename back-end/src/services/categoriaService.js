//Importei o instância do pool do db.js para utilizar aqui
import pool from "../config/db.js"

//Criei uma função assíncrona getAll() que executa 
// o SELECT * FROM categorias com o pool query()
async function getAll(){
    const result = await pool.query ('SELECT * FROM categorias')
    return result.rows
}

export default getAll