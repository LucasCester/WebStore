const Usuarios_dao = require('../BD/usuarios_BancoDados');
var db = require('../../config/database');

class UsuariosControllers
{
   validaAcessoUsuario()
   {
       return function(req,res) {
          const usuarioDAO = new Usuarios_dao(db);
          usuarioDAO.selectNaTabelaUsuarios(req.body.cpf,req.body.senha)
            .then (dados => {
                if (dados > 0) {
                    console.log('USUÁRIO EXISTE!! Está VALIDADO!!');
                    res.redirect('/Home');
                }
            })  
            .catch(erro => {
                console.log('USUÁRIO NÃO EXISTE NO BD!!');
                res.redirect('/Login');
            })
       }
   }

    insereNovoCliente() 
    {
        return function(req,res) {
            const clienteDAO = new Usuarios_dao(db);
            clienteDAO.incluiClientes(req.body)
                .then(res.redirect('/Login'))
                .catch(erro => console.log(erro));
        }
    }

    listaDadosCliente() 
    {
        return function (req, res) {
            const idDoCliente = req.params.id;
            const clienteDAO = new Usuarios_dao(db);
            clienteDAO.consultaClientePorId(idDoCliente, function (error, resultadosClientes) {
                console.log(resultadosClientes);
                res.render('Loja.ejs'),
                    { clientes: resultadosClientes[0] }
            });
        }
    }
}

module.exports = UsuariosControllers;