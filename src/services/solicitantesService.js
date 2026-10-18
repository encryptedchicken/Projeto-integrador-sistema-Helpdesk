const solicitantesModel = require("../models/solicitantesModels");
// Importa o Model responsável pelo acesso ao banco de dados (tabelas)

const validateEmail = require("../utils/validateEmail");

// Importa a função utilitária que valida o formato de e-mail
class solicitantesService {
    // Busca todos os usuários cadastrados
    static async selectAll() {
        return await solicitantesModel.listatudo();
    }
    static async getID(id) {
        return await solicitantesModel.findID(id);
    }
      // Cria um novo usuário após validações
    static async create(solicitante) {
        if (!validateEmail(solicitante.email)) {
            throw new Error("Formato de email inválido."); // Valida o formato do e - mail
        }
        const exisolicitante = await solicitantesModel.findByEmail(solicitante.email);
        if (exisolicitante) {
            throw new Error("Email já cadastrado."); // Impede cadastro de e-mails duplicados
        }
        return await solicitantesModel.create(solicitante); // Cria 
    }
    static async updateSolicitante(id, solicitante) {
        const updatedRows = await solicitantesModel.update(id, solicitante);
        if (updatedRows === 0) {
            throw new Error("Solicitante não encontrado."); // Caso nenhum usuário tenha sido atualizado
        }
        return updatedRows;
    }
     static async deletesolicitante(id) {
        const deletedRows = await solicitantesModel.delete(id);
        if (deletedRows === 0) {
            throw new Error("Solicitante não encontrado."); // Caso nenhum usuário tenha sido deletado
        }
        return deletedRows;
    }
}
module.exports = solicitantesService;
// Exporta a classe para ser utilizada pelos controllers