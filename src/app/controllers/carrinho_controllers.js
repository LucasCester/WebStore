const Carrinho_dao = require('../BD/carrinho_BancoDados');
var db = require('../../config/database');

class CarrinhoControllers
{
    adicionarCarrinho()
    {        
        return function(req,res) {
            const carrinhoDAO = new Carrinho_dao(db);
            carrinhoDAO.adicionarCarrinho(req.body)
        }
    }

    mostraProdutosCarrinho()
    {
        return function(req,res) {
            const carrinhoDAO = new Carrinho_dao(db);
            carrinhoDAO.selectProdutosCarrinho(function(error, produtoCarrinho){
                var valorTotal = 0;
                for(var i = 0; i < produtoCarrinho.length; i++)
                {
                    valorTotal += produtoCarrinho[i].subTotal;
                }
                console.log('Select carrinho = ' + produtoCarrinho)
                res.render('Carrinho.ejs', {
                    carrinho: produtoCarrinho,
                    valorTotal: valorTotal
                })
            })
        }
    }

    excluiDoCarrinho() {
        return function (req, res) {
            const carrinhoDAO = new Carrinho_dao(db);
            carrinhoDAO.excluiCarrinho()
                .then(res.redirect('/Home'))
                .catch(erro => console.log(erro));
        }
    }
}
module.exports = CarrinhoControllers;