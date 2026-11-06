const CategoriaModel = require("../models/categoriaModels");
// Importa o Model responsável pelo acesso ao banco de dados (tabelas)

// const validateEmail = require("../utils/validateEmail");

// Importa a função utilitária que valida o formato de e-mail
class categoriaService {
    // Busca todas as categorias
    static async Mandatudoaipramim() {
        return await CategoriaModel.procurai();
    }
   
}
module.exports = categoriaService;
// Exporta a classe para ser utilizada pelos controllers