class Carrinho_BD
{
    constructor(db)
    {
        this._db = db;
    }

    adicionarCarrinho(carrinho) {
        return new Promise((resolve,reject) => {
            var sqlInsCarrinho = "INSERT INTO carrinho (quantidade, fkProduto) VALUES('" + carrinho.quantidade + "','" + carrinho.idProduto + "')";
            console.log("INSERT MONTADO = " + sqlInsCarrinho);
            this._db.query(sqlInsCarrinho, function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('ERRO -> adicionarCarrinho()');
                }
                else { return resolve(); }
            })
        })
    }

    selectProdutosCarrinho(callback) {
        var sqlConsProdutoCarrinho = "select p.idProduto, p.descricao, p.nome, p.valor, p.imagens, c.quantidade, c.idCompra, (p.valor * c.quantidade) as 'subTotal' from Produto p inner join Carrinho c on c.fkProduto = p.idProduto";
        this._db.query(sqlConsProdutoCarrinho,(erro,resultados) =>
            callback(erro,resultados))
    }

    excluiCarrinho() {
        return new Promise((resolve, reject) => {
            var sqlDel = "Delete from Carrinho";
            console.log(sqlDel);
            this._db.query(sqlDel,
                function (erro) {
                    if (erro) {
                        console.log(erro);
                        return reject('Exclusão da carrinho');
                    }
                    resolve();
                }
            );
        });
      }

}
module.exports = Carrinho_BD;