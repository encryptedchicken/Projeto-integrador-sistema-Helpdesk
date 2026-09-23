create table solicitantes (
id int primary key auto_increment,
nome varchar(30),
email varchar(50), 
setor varchar(30))

------------------------------------

create table categorias (
id int primary key auto_increment,
nome varchar(30),
descricao varchar(500))

------------------------------------

create table tecnicos (
id int primary key auto_increment,
nome varchar(30),
email varchar(50))

------------------------------------

create table chamados (
id int primary key auto_increment,
titulo varchar(30),
descricao varchar(500),
prioridade varchar(20),
status varchar(20),
solucao varchar(150),
criado_em timestamp default current_timestamp,
solicitante_id int,
categoria_id int,
tecnico_id int,

foreign key (solicitante_id) references solicitantes(id),
foreign key (categoria_id) references categorias(id),
foreign key (tecnico_id) references tecnicos(id))