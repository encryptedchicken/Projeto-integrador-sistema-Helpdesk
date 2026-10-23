const chamadosModel = require("../models/chamadosModel");
// Importa o Model responsável pelo acesso ao banco de dados (tabelas)

class chamadosService {
    // Busca todos os usuários cadastrados
    static async selectAll() {
        return await chamadosModel.listatudo();
    }
    static async getID(id) {
        return await chamadosModel.findID(id);
    }
    // Cria um novo chamado
    static async create(chamado) {
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

                throw new Error('Prioridade poderá receber apenas os seguintes valores: "BAIXA", "MÉDIA" "ALTA"');
        }

        return chamadosModel.create({ ...chamado, status, prioridade });
    }
}
module.exports = chamadosService;
// Exporta a classe para ser utilizada pelos controllers