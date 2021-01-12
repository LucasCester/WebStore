class Usuarios_dao
{
    constructor(db)
    {
        this._db = db;
    }

    selectNaTabelaUsuarios(cpf,senha) {
       return new Promise((resolve,reject) => {
          var sqlConsUsuarios = "SELECT * FROM usuario WHERE CPF='" + cpf + "' and senha='" + senha + "'";
          console.log("SELECT MONTADO = " + sqlConsUsuarios);
          this._db.query(sqlConsUsuarios, function (erro,resultado) {
              if (resultado.length > 0) {
                  var dados = resultado.length;
                  resolve(dados);
              }
              else {
                return reject('USUÁRIO NÃO EXISTE NO BD');
              }
          })
       })
    }

    incluiClientes(usuario) {
        return new Promise((resolve,reject) => {
            var sqlInsCliente = "INSERT INTO usuario (nome, cpf, senha, email) VALUES('" + usuario.nome + "','" + usuario.cpf + "','" + usuario.senha + "','" + usuario.email + "')";
            console.log("INSERT MONTADO = " + sqlInsCliente);
            this._db.query(sqlInsCliente, function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('ERRO NA INCLUSÃO DO NOVO REGISTRO NA TAB CLIENTES NO BD');
                }
                else { return resolve();  }
            })
        })
    }

      consultaClientePorId(id, callback) {
        var sqlCons = 'SELECT idLogin, cpf, email, nome, senha FROM usuario WHERE idLogin=' + id;
        console.log(sqlCons);
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }
}
module.exports = Usuarios_dao;