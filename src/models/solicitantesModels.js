const db = require('../config/database');
// Importa a conexão pool com o banco de dados
class solicitantesModel {
    // Busca todos os usuários
    static async listatudo() {
        const [rows] = await db.query('SELECT * FROM solicitantes');
        return rows;
    }
    // Busca por ID
    static async findID(id) {
        const [rows] = await db.query('SELECT * FROM solicitantes WHERE id = ?', [id]);
        return rows[0];
    }
    // Validação e-mail
    static async findByEmail(email) {
        const [rows] = await db.query('SELECT * FROM solicitantes WHERE email = ?', [email]);
        return rows[0];
    }
    // Criando novo solicitante
    static async create(solicitante) {
        const { nome, email, setor } = solicitante;
        const [result] = await db.query('INSERT INTO solicitantes (nome, email, setor) VALUES (?,?,?)', [nome, email, setor]);
        return result.insertId; // Retorna o ID do usuário criado
    }
    // Atualizando um solicitante
    static async update(id, solicitantes) {
        const { nome, email, setor } = solicitantes;
        const [result] = await db.query('UPDATE solicitantes SET nome = ?, email = ?, setor = ? WHERE id = ?', [nome, email, setor, id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }
     static async delete(id) {
        const [result] = await db.query('DELETE FROM solicitantes WHERE id = ?', [id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }
}
module.exports = solicitantesModel;
// Exporta a classe para ser usada nos services