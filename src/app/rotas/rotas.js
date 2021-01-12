const UsuarioControlador = require('../controllers/usuarios_controllers');
const usuarioCont = new UsuarioControlador();

const LojaControllers = require('../controllers/loja_controllers');
const lojaCont = new LojaControllers();

const CarrinhoControllers = require('../controllers/carrinho_controllers');
const carrinhoCont = new CarrinhoControllers();

module.exports = (aplicacao) => {

    aplicacao.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    /****************  ROTAS  ****************/
    aplicacao.get('/Login', function(req,res) {
        res.render('../views/Login.ejs');
        console.log('Acessou a pagina de LOGIN...');
    })

    aplicacao.get('/Cadastro', function(req,res) {
        res.render('../views/Cadastro.ejs');
        console.log('Acessou a pagina de CADASTRO...');
    })

    aplicacao.get('/Home', lojaCont.mostraProdutos());

    aplicacao.get('/Carrinho', carrinhoCont.mostraProdutosCarrinho());

    aplicacao.post('/validaUsuario', usuarioCont.validaAcessoUsuario());

    aplicacao.post('/InserirCadastro', usuarioCont.insereNovoCliente());

    aplicacao.post('/adicionarCarrinho', carrinhoCont.adicionarCarrinho());

    aplicacao.post('/ExcluirCarrinho', carrinhoCont.excluiDoCarrinho());
}