const tecnicoService = require('../services/tecnicoService');
// Importa o serviço que contém a lógica de negócio para manipular registros
class TecnicoController {
    // Método para listar todos os técnicos
    static async getAllTecnicos(req, res) {
        try {
            const users = await tecnicoService.getAllTecnicos(); // Chama o service para buscar técnicos
            res.json(users); // Retorna a lista em formato JSON
        } catch (error) {
            res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500(erro interno)
        }
    }
}
module.exports = TecnicoController;
// Exporta o Controller para ser usado nas rotas