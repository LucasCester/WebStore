const Loja_dao = require('../BD/loja_BancoDados');
var db = require('../../config/database');

class LojaControllers
{
    mostraProdutos()
    {
        return function(req,res) {
            const produtoDAO = new Loja_dao(db);
            produtoDAO.selectProdutos(function(error, infoProdutos){
                res.render('Index.ejs', {
                    produtos: infoProdutos
                })
            })
        }
    }
}
module.exports = LojaControllers;