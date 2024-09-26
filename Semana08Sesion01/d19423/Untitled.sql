create database prueba2;
use prueba2;

create table tabla1(
	id int,
    detalle varchar(500)
);

drop table tabla1;

drop database prueba2;

use prueba1;

alter table tabla1 add column apellido varchar(300);

insert into tabla1(id,nombre,apellido)
values(1,'Roberto','Pineda');
select * from tabla1;
insert into tabla1(id,nombre,apellido)
values('2','David','Lopez');

alter table tabla1 add column fechNacimiento datetime;
insert into tabla1(id,nombre,apellido)
values('3','Karen','Lam');

drop table usuario;

create table usuario(
	id int primary key auto_increment,
    username varchar(255) unique not null,
    email varchar(255) unique not null,
    nombre varchar(500) not null,
    apellido varchar(500) not null,
    estadoCivil bool null default 0,
    fechaNacimiento date null,
    edad int not null check (edad>=18),
    activo bool not null default 0,
    usuarioCreacion int not null,
    
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id) ,
    FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id) 
);
insert into usuario(username, email, nombre,apellido, fechaNacimiento,edad, usuarioCreacion)
values('rpineda','rpineda@x-codec.net', 'Roberto', 'Pineda','1983-08-28',40, 1);
insert into usuario(username, email, nombre,apellido, fechaNacimiento, edad, usuarioCreacion)
values('klam','klam@x-codec.net', 'Karen', 'Lam','1995-09-28', 28, 1);
select * from usuario;


