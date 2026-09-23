const categoriaService = require('../services/categoriaService');
// Importa o serviço que contém a lógica de negócio para manipular registros
class CategoriaController {
    // Método para listar todos as categorias do sistema helpdesk
    static async getAllCategorias(req, res) {
        try {
            const catergoria = await categoriaService.Mandatudoaipramim(); // Chama o service expecífico para listar todas as categorias
            res.json(catergoria); // Retorna a lista em formato JSON
        } catch (error) {
            res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500(erro interno)
        }
    }
}
module.exports = CategoriaController;
// Exporta o Controller para ser usado nas rotas