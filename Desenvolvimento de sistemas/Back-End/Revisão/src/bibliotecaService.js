import { pool } from "./config.js"


export async function buscarLivroPorId(livroId) {
    const [rows] = await pool.query("SELECT * FROM livros WHERE id=?",
        [livroId]
    )
    return rows[0]
}

export async function cadastrarLivro(dadosLivro) {
    const {
        titulo,
        categoria,
        valor_unitario,
        estoque_minimo,
        estoque_maximo
    } = dadosLivro

    const [result] = await pool.query(
        `INSERT INTO livros
        (titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo)
        VALUES(?,?,?,?,?)`,

    )

    return {
        id: result.insertId,
        titulo,
        categoria,
        valor_unitario,
        estoque_minimo,
        estoque_maximo
    }
} 