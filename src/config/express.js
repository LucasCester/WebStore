const express    = require('express');

const aplicacao  = express();

const bodyParser = require('body-parser');

aplicacao.use(bodyParser.urlencoded({
  extended: true
}));

const path = require('path');

aplicacao.use('/static',express.static('src/app/views'));
aplicacao.use('/imagens',express.static('src/app/views/Midias/Imagens'));
aplicacao.set('views', path.join(__dirname,'../app/views'));
aplicacao.set('view engine', 'ejs');

const rotas = require('../app/rotas/rotas');
rotas(aplicacao);

module.exports = aplicacao;