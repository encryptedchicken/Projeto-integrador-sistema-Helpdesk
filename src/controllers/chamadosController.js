const chamadosService = require('../services/chamadosService');
// Importa o serviço que contém a lógica de negócio para manipular registros
class chamadosController {
    // Método para listar tudo
    static async getAllChamados(req, res) {
        try {
            const chamados = await chamadosService.selectAll(); // Chama o service expecífico para listar tudo
            res.json(chamados); // Retorna a lista em formato JSON
        } catch (error) {
            res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500(erro interno)
        }
    }
    static async getbyid(req, res) {
        try {
            const { id } = req.params; // Pega o id da URL
            const chamados = await chamadosService.getID(id);
            if (!chamados) {
                return res.status(404).json({ error: "chamado não encontrado" });
            }
            return res.json(chamados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    // Método para criar 
    static async create(req, res) {
        try {
            const id = await chamadosService.create(req.body); // chama o serviço para criar
            res.status(201).json({ message: 'Chamado criado com sucesso.', id }); // Retorna status 201(criado) e o ID

        } catch (error) {
            const message = error.code === 'ER_DUP_ENTRY' || error.message.includes('Duplicate entry')
                ? 'chamado duplicado'
                : error.message;
            res.status(400).json({ error: message }); // Em caso de erro de validação, retorna status 400
        }
    }
}
module.exports = chamadosController;
// Exporta o Controller para ser usado nas rotas