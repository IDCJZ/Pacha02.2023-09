
create database if not exists  idat;

use  idat;
create table if not exists proveedor(
id int primary key,
nombre varchar(100),
contacto varchar(100),
direccion varchar(100),
numero_telefono varchar(11)
);

insert into proveedor(id,nombre,contacto,direccion,numero_telefono) values(1,"transport peru","transport_peru@gmail.com","lima", "917204652");
select * from proveedor;



create table if not exists materia_prima(
id int primary key,
fecha date,
nombre varchar(100),
cantidad float,
costo float,
proveedor_id int,
foreign key (proveedor_id) references proveedor(id)
);


insert into materia_prima(id,fecha, nombre,cantidad,costo,proveedor_id) values(2,"2000-01-01", "madera 2",14,200,1);


select m.id,m.fecha,m.cantidad,m.costo,m.proveedor_id,p.nombre, p.direccion from materia_prima as m
join proveedor p
on p.id = m.proveedor_id;



create table  if not exists produccion(
id int primary key auto_increment,
fecha date,
producto varchar(50),
cantidad int
);


drop table distribucion;

create table if not  exists distribucion(
#falta el id
id int primary key auto_increment,
produccion_id int,
empresa varchar(100),
estado enum('espera','camino','entregado'),
#falta fecha

foreign key (produccion_id) references produccion(id)
);

select * from distribucion;
select * from produccion;

insert into produccion(id,fecha,producto,cantidad) values (7,"2023-11-11","Armario smallxl", 899);
insert into produccion(id,fecha,producto,cantidad) values (8,"2023-11-11","Armario smallxl", 45);
insert into produccion(id,fecha,producto,cantidad) values (9,"2023-11-11","Armario cd", 96);
insert into produccion(id,fecha,producto,cantidad) values (10,"2023-11-11","Armario sdfads", 50);
insert into produccion(id,fecha,producto,cantidad) values (11,"2023-11-11","Armario f323", 411);


insert into distribucion(produccion_id,empresa,estado) values(1,"transport sac","camino");

update produccion
set cantidad =9999
where id = 5;

update distribucion
set empresa ="transport nina",
	estado = "camino"
where produccion_id =11;



drop trigger tr_InsertDistribucion

delimiter $$
create trigger tr_InsertDistribucion
AFTER insert
on produccion
for each row
BEGIN

	insert into distribucion(produccion_id,empresa,estado) values(new.id,"","espera");
    
END $$

select * from distribucion where estado="camino"