create database Empresa_Armarin;
use Empresa_Armarin;
create table  if not exists Proveedor (
id int primary key auto_increment,
nombre varchar(125),
contacto varchar(125),
producto varchar (225)
);

insert into proveedor(nombre,contacto,producto) values ('Arboltabla', '999 888 777', 'tabla'),
('Tabloidys', '888 999 222', 'madera'),
('Tripleydesk', '222 666 777', 'tripley');
select * from proveedor;
create table if not exists nombre_materiaPrima(
id int primary key auto_increment,
nombre varchar(225)
);
insert into nombre_materiaPrima(nombre) values('tripley'), ('tabla'),('tablon');
create table if not exists Materia_prima(
id int primary key auto_increment,
nombre_id int,
fecha date,
cantidad numeric,
precio decimal,
proveedor_id int, 
foreign key (proveedor_id) references proveedor(id),
foreign key (nombre_id) references nombre_materiaPrima(id)
);
insert into materia_prima(nombre_id,fecha,cantidad,precio,proveedor_id) values(1,'2023-11-11',15,75,3);
select * from materia_prima;
create table if not exists Nombre_Isumos(
id int primary key auto_increment,
nombre varchar(225)
);
insert into Nombre_Isumos(nombre) values('clavos'),('pegamento'),('pintura');
select * from nombre_isumos;
delete from nombre_isumos where   id= 6;

create table if not exists Insumos(
id int primary key auto_increment,
nombre_id int,
fecha date,
cantidad numeric,
costo decimal,
foreign key (nombre_id) references nombre_isumos(id)
);
insert into Insumos(nombre_id,fecha,cantidad,costo) values (1,'2023-11-11',20,5),(3,'2023-11-11',5,35),(2,'2023-11-11',3,14);
select *from insumos;

create table if not exists personal(
id int primary key auto_increment,
nombre varchar(225),
apellido varchar(225),
correo varchar(225)
);
insert into personal(nombre,apellido,correo) values ('juan','torres','jtorres@htomail.com'),('Diego','Alga','Dalga@htomail.com'),('Marcos','Murca','Murca@htomail.com');
select * from personal;

create table if not exists Nombre_producto(
id int primary key auto_increment,
nombre varchar(225)
);
insert into nombre_producto(nombre) values ('ropero'),('estante'),('cama');
select *from Nombre_producto;

create table if not exists produccion(
id int primary key auto_increment,
nombre_id int,
fecha date,
materiaPrima_id int,
insumos_id int,
personal_id int,
costo decimal,
foreign key (nombre_id) references Nombre_producto(id),
foreign key (materiaprima_id) references Materia_prima(id),
foreign key (insumos_id) references Insumos(id),
foreign key (personal_id) references personal(id)
);
insert into produccion(nombre_id,fecha,materiaprima_id,insumos_id,personal_id,costo) values(1,'2023-11-11',1,1,2,250);
select * from produccion;

create database SV48305061;
USE SV48305061;
 create table if not exists tabla1(
 id int  primary key auto_increment,
 nombre varchar(225),
 apellido varchar(225)
 );
insert into  tabla1(nombre, apellido)  values   ('junior','arango');
select concat(nombre,apellido) as cliente from    tabla1;



use  veterinaria;
select * from veterinaria.Propietario;
select * from veterinaria.Mascota;
select * from .especie;
insert into veterinaria.especie(descripcion,activo,usuariocreacion) values ("toro",1,1);
select * from veterinaria.bckubigeo where ubigeo = 140114;
select * from veterinaria.nacionalidad;
select * from veterinaria.raza;
select * from veterinaria.sexo;
select * from veterinaria.ubigeo;
select * from veterinaria.usuario;
select * from veterinaria.usuario_log;
select * from hackaton13.logins;
drop database  hackaton13