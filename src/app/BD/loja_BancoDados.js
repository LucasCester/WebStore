class Loja_BD
{
    constructor(db)
    {
        this._db = db;
    }

    selectProdutos(callback) {
        var sqlConsProduto = 'SELECT nome, valor, descricao, imagens, idProduto from produto';
        this._db.query(sqlConsProduto,(erro,resultados) =>
            callback(erro,resultados))
    }
}
module.exports = Loja_BD;