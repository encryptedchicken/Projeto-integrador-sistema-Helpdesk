const express = require('express');
// Importa o framework Express
console.log("AKI")
const solicitantesController = require('../controllers/solicitantesController');
// Importa o controller responsável por gerenciar as ações de usuário

const router = express.Router();
// Cria uma nova instância de roteador do Express
// Define a rota para listar todas as categorias

router.get('/listar_todos_solicitantes', solicitantesController.getAllSolicitantes);

//Define a rota para listar por ID
router.get('/:id', solicitantesController.getbyid)


// Define uma rota para criar
router.post('/', solicitantesController.create);

// Define la rota para atualizar
router.put('/:id', solicitantesController.update);

// Define a rota para deletar um usuário pelo ID
router.delete('/:id', solicitantesController.delete);

module.exports = router;
// Exporta o roteador configurado para ser usado no app principal