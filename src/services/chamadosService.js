const chamadosModel = require("../models/chamadosModel");
// Importa o Model responsável pelo acesso ao banco de dados (tabelas)

class chamadosService {
    // Busca todos os chamados cadastrados
    static async selectAll() {
        return await chamadosModel.listatudo();
    }

    //busca por id
    static async getID(id) {
        return await chamadosModel.findID(id);

    }
    // Cria um novo chamado
    static async create(chamado) {
        const dadosValidados = chamadosService._validarEPrepararChamado(chamado);
        return await chamadosModel.create(dadosValidados)
    }

    // Atualizando chamados
    static async update(id, chamado) {
        const { tecnico_id } = chamado;
        if (!tecnico_id)
            throw new Error('Necessário informar um técnico responsável');

        const dadosValidados = chamadosService._validarEPrepararChamado(chamado);

        const updatedRows = await chamadosModel.update(id, chamado, dadosValidados);
        if (updatedRows === 0) {
            throw new Error("Chamado não encontrado."); // Caso nenhum usuário tenha sido atualizado
        }
        return updatedRows;
    }

    // Deletando chamados
    static async deleteochamado(id) {
        const deletedRows = await chamadosModel.delete(id);
        if (deletedRows === 0) {
            throw new Error("Chamado não encontrado."); // Caso nenhum usuário tenha sido deletado
        }
        return deletedRows;
    }

// ------------------------------------- Regras reutilizáveis via método ----------------------------------------------

// Método auxiliar interno para validar o status e a prioridade
    static _validarEPrepararChamado(chamado) {
        let status;
        let prioridade;

        switch (chamado.status) {
            case undefined:
            case null:
                status = "ABERTO";
                break;
            case "ABERTO":
            case "EM ATENDIMENTO":
            case "CONCLUÍDO":
                status = chamado.status;
                break;
            default:
                throw new Error('Status inválido. Use "ABERTO", "EM ATENDIMENTO" ou "CONCLUÍDO".');
        }

        switch (chamado.prioridade) {
            case "BAIXA":
            case "MEDIA":
            case "ALTA":
                prioridade = chamado.prioridade;
                break;
            default:
                throw new Error('Prioridade poderá receber apenas os seguintes valores: "BAIXA", "MÉDIA", "ALTA"');
        }

        return { ...chamado, status, prioridade };
    }
     
// ------------------------------------- Regras reutilizáveis ----------------------------------------------

}
module.exports = chamadosService;
// Exporta a classe para ser utilizada pelos controllers