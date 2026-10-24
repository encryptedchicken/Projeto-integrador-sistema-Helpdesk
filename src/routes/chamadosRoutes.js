const express = require('express');
// Importa o framework Express


const chamadosController = require('../controllers/chamadosController');
// Importa o controller responsável por gerenciar as ações de usuário

const router = express.Router();
// Cria uma nova instância de roteador do Express
// Define a rota para listar todas as categorias
router.get('/list_all', chamadosController.getAllChamados);
router.get('/list_id/:id', chamadosController.getbyid);
router.post('/create', chamadosController.create);
router.put('/update:id', chamadosController.update);
router.delete('/delete:id', chamadosController.delete)

module.exports = router;
// Exporta o roteador configurado para ser usado no app principal