create table Produto(
	idProduto int primary key auto_increment,
	nome varchar(30) not null,
	valor int not null,
	descricao varchar(8000) not null,
	imagens varchar(100) not null
)

create table usuario(
	idLogin int primary key,
	nome varchar(50) not null,
	senha varchar(25) not null,
	email varchar(50) not null,
	cpf char(14) not null
)

create table Carrinho(
	idCompra int primary key auto_increment,
	fkProduto int,
	quantidade int not null,
	fkLogin int,
	CONSTRAINT fkProduto FOREIGN KEY (fkProduto)
    REFERENCES Produto(idProduto),
	CONSTRAINT fkLogin FOREIGN KEY (fkLogin)
    REFERENCES usuario(idLogin)
)

insert into Produto values(1, 'Super Shotgun', 500.00, '<p class="branco">Uma Shotgun extremamente poderosa com uma adi��o.</p><p class="branco">Meat Hook: Um gancho que pode ser disparado em seus inimigos e fazendo com que voc� avance na dire��o deles assim podendo dar um tiro com mais precis�o.</p>', 'Super Shotgun.jpg');
insert into Produto values(2, 'Plasma Rifle', 250.00, '<p class="branco">Um rifle de plasma que causa dano consideravel com duas varia��es.</p><p class="branco">Microwave Beam: Cria um laser que gruda no inimigo e causa dano nele at� ele explodir violentamente.</p><p class="branco">Heat Blast: Ap�s carregar suas baterias extras pode usar a energia delas para liberar uma onda de calor que queima seus inimigos.</p>', 'Plasma Rifle.jpg');
insert into Produto values(3, 'Rocket Launcher', 280.00, '<p class="branco">Um Rocket Launcher com duas varia��es.</p><p class="branco">Remote-detonation: Pode alto detonar os m�sseis ainda no ar.</p><p class="branco">Lock Mode: Com esse modo atira m�sseis que seguem os inimigos.</p>', 'Rocket Laucher.jpg');
insert into Produto values(4, 'Ballista', 490.00, '<p class="branco">Uma balestra que dispara um ponentes com duas varia��es.</p><p class="branco">Arbalest: Carrega um tiro que gruda nos inimigos e explode depois de alguns segundos.</p><p class="branco">Destroyer Blade: Carrega e dispara uma onde de energia infernal que atravessa os inimigos.</p>', 'Ballista.jpg');
insert into Produto values(5, 'Combat Shotgun', 300.00, '<p class="branco">A Combat Shotgun � uma Shotgun normal com duas varia��es.</p><p class="branco">Triple Grande Laucher: Ela continua sendo uma Shotgun, por�m possui um lan�ador de bombas adesivas.</p><p class="branco">Gatling Shotgun: Com essa varia��o ela ganha a habilidade de disparar multiplas vezes seguidas.</p>', 'Combat Shotgun.jpg');
insert into Produto values(6, 'Chaingun', 320.00, '<p class="branco">Uma metralhadora girat�ria que causa destrui��o em massa, por�m depois de muito tempo atirando ela sobreaquece. Com duas varia��es.</p><p class="branco">Shilded Gun: Ativa um escudo de energia que te protege enquanto atira.</p><p class="branco">Turret Mode: Se fixa no ch�o aumentando sua cad�ncia de tiros por�m sobreaquece mais r�pido.</p>', 'Chaingun.jpg');
insert into Produto values(7, 'Heavy Cannon', 170.00, '<p class="branco">Essa poderosa arma al�m de sempre ser uma submetralhadora possui dois modos:</p><p class="branco">Sniper: Possui uma mira 16x com quatro tiros e se torna semi-automatica.</p><p class="branco">Multi-Cannon: Possui dois canh�es de micro-m�sseis.</p>', 'Heavy Cannon.jpg');
insert into Produto values(8, 'The Crucible', 3500.00, '<p class="branco">A Crucible � um artefato infernal antigo que pode ser usado como espada para cortar e mutilar todo tipo de ser vivo. Tem a habilidade de absorver uma grande quantidade de energia demon�aca.</p>', 'The Crucible.jpg');
insert into Produto values(9, 'BFG 9000', 6000.00, '<p class="branco">Uma arma que libera um orbe de energia verde que ao entrar em contato com qualquer coisa explode aniquilando qualquer tipo de dem�nio em �rea.</p>', 'BFG 9000.jpg');
insert into Produto values(10, 'The Betrayer', 60.00, '<p class="branco">Ap�s trair os sentinelas e fazer um pacto com os dem�nios com a tentativa de reviver seu filho, Betrayer teve que se exilar para n�o ser executado pelos sentinelas.</p>', 'The Betrayer.jpg');
insert into Produto values(11, 'Doom Slayer v2016', 30.00, '<p class="branco">O Slayer cl�ssico do Doom 2016.</p>', 'Doom Slayer v2016.jpg');
insert into Produto values(12, 'King Novik', 100.00, '<p class="branco">O Rei de todos os sentinelas e o mais poderoso j� existente.</p>', 'King Novik.jpg');
insert into Produto values(13, 'Sentinel', 120.00, '<p class="branco">Um dos guerreiros mais poderosos de todos os sentinelas, com um unico objetivo, o exerterminio total de todos os dem�nios.</p>', 'Sentinel.jpg');
insert into Produto values(14, 'Infernal Slayer', 30.00, '<p class="branco">O Slayer tradicional de sempre, por�m com um alguns detalhes em chamas.</p>', 'Infernal Slayer.jpg');
insert into Produto values(15, 'Marauder', 180.00, '<p class="branco">Ap�s morrer e reviver multiplas vezes em batalhas e guerras, ele acabou sendo corrompido e se tornando essa vers�o distorcida do Slayer.</p>', 'Marauder.jpg');
insert into Produto values(16, 'Quad Damage', 200.00, '<p class="branco">Lhe da uma for�a sobre humana para matar e destruir qualquer coisa que entrar na sua frente.</p>', 'Quad Damage.jpg');
insert into Produto values(17, 'Hasta', 100.00, '<p class="branco">Com isso voc� � capaz de se mover mais rapido do que seu corpo suporta.</p>', 'Haste.jpg');
insert into Produto values(18, 'Invisibility', 500.00, '<p class="branco">Uns dos orbes mais raros existentes, ele te da a capacidade de ficar invisivel por tempo indefinido ent�o cuidado, isso pode durar dias ou...</p>', 'Invisibility.jpg');