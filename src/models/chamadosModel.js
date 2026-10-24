const db = require('../config/database');
// Importa a conexão pool com o banco de dados
class chamadosModel {
    // Busca todos os usuários
    static async listatudo() {
        const [rows] = await db.query('SELECT * FROM chamados');
        return rows;
    }
    // Busca por ID
    static async findID(id) {
        const [rows] = await db.query('SELECT * FROM chamados WHERE id = ?', [id]);
        return rows[0];
    }
    // Criando novo chamado
    static async create(chamado) { 
        const { titulo, descricao, prioridade, status = "ABERTO", solucao, solicitante_id, categoria_id, tecnico_id} = chamado;
        const [result] = await db.query('INSERT INTO chamados (titulo, descricao, prioridade, status, solucao, solicitante_id, categoria_id, tecnico_id) VALUES (?,?,?,?,?,?,?,?)', [titulo, descricao, prioridade, status, solucao, solicitante_id, categoria_id, tecnico_id]);
        return result.insertId; // Retorna o ID 
    }

    //Atualizando um chamado existente 
    static async update(id, chamado) {
        const {titulo, descricao, prioridade, status, solucao, solicitante_id, categoria_id, tecnico_id} = chamado
        const [result] = await db.query('update chamados SET titulo = ?, descricao = ?, prioridade = ?, status = ?, solucao = ?, solicitante_id = ?, categoria_id = ?, tecnico_id = ? WHERE id = ?', [titulo, descricao, prioridade, status, solucao, solicitante_id, categoria_id, tecnico_id, id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM chamados WHERE id = ?', [id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }

}
module.exports = chamadosModel;
// Exporta a classe para ser usada nos services