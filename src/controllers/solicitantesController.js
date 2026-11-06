const solicitantesService = require('../services/solicitantesService');
// Importa o serviço que contém a lógica de negócio para manipular registros
class solicitantesController {
    // Método para listar tudo
    static async getAllSolicitantes(req, res) {
        try {
            const solicitantes = await solicitantesService.selectAll(); // Chama o service expecífico para listar tudo
            res.json(solicitantes); // Retorna a lista em formato JSON
        } catch (error) {
            res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500(erro interno)
        }
    }
    static async getbyid(req, res) {
        try {
            const { id } = req.params; // Pega o id da URL
            const solicitante = await solicitantesService.getID(id);
            if (!solicitante) {
                return res.status(404).json({ error: "Solicitante não encontrado" });
            }
            return res.json(solicitante); 
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    // Método para criar 
    static async create(req, res) {
        try {
            const id = await solicitantesService.create(req.body); // chama o serviço para criar
            res.status(201).json({ message: 'Solicitante criado com sucesso.', id }); // Retorna status 201(criado) e o ID
        } catch (error) {
            res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
        }
    }
    static async update(req, res) {
        try {
            const id = req.params.id; // Pega o ID da URL
            await solicitantesService.updateSolicitante(id, req.body); // Chama o service para atualizar
            res.json({ message: 'Usuário atualizado com sucesso.' });
        } catch (error) {
            res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
        }
    }
    static async delete(req, res) {
        try {
            const id = req.params.id; // Pega o ID da URL
            await solicitantesService.deletesolicitante(id); // Chama o service para deletar
            res.json({ message: 'Solicitante deletado com sucesso.' });
        } catch (error) {
            res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
        }
    }
}
module.exports = solicitantesController;
// Exporta o Controller para ser usado nas rotas