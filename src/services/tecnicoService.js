const TecnicoModel = require("../models/tecnicoModels");
// Importa o Model responsável pelo acesso ao banco de dados (tabelas)

// const validateEmail = require("../utils/validateEmail");

// Importa a função utilitária que valida o formato de e-mail
class tecnicoService {
    // Busca todos os usuários cadastrados
    static async getAllTecnicos() {
        return await TecnicoModel.findAll();
    }
   
}
module.exports = tecnicoService;
// Exporta a classe para ser utilizada pelos controllers