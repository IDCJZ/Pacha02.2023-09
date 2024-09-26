select id,
upper(concat(Nombre, " ", Apellido)) as Nombres
-- ,Nombre +  " " + Apellido as NombresSuma 
, CHAR_LENGTH(Direccion)
, lower( direccion)
 from Propietario;
 
SELECT REPLACE("SQL Tutorial", "SQL", "HTML");

CREATE FUNCTION hello (s CHAR(20))
RETURNS CHAR(50) DETERMINISTIC
RETURN CONCAT('Hello, ',s,'!');

select hello('Roberto');

use Northwind;

select concat(count(country), ' clientes de ', country) as valor from customers
group by country;

CREATE TABLE account (acct_num INT, amount DECIMAL(10,2));

CREATE TRIGGER ins_sum BEFORE INSERT ON account
       FOR EACH ROW SET @sum = @sum + NEW.amount;
     
SET @sum = 0;
INSERT INTO account VALUES(137,14.98),(141,1937.50),(97,-100.00);
    SELECT @sum AS 'Total amount inserted';   
    
select * from account;

use veterinaria;

CREATE TABLE usuario_log SELECT * FROM usuario;

alter table usuario_log add column accion char(1);



DELIMITER $$
CREATE TRIGGER trg_user_insert 
AFTER INSERT ON usuario
FOR EACH ROW
BEGIN
  INSERT INTO usuario_log(id,username, email, nombre, apellido, estadocivil, fechanacimiento, edad, activo, usuariocreacion, fechaCReacion,usuariomodificacion,fechamodificacion, accion) 
  VALUES (new.id,new.username, new.email, new.nombre, new.apellido, new.estadocivil, new.fechanacimiento, new.edad, new.activo, new.usuariocreacion, new.fechaCReacion,new.usuariomodificacion,new.fechamodificacion, 'I');
END$$
DELIMITER ;

-- drop trigger trg_user_update

DELIMITER $$
CREATE TRIGGER trg_user_update 
AFTER update ON usuario
FOR EACH ROW
BEGIN
  INSERT INTO usuario_log(id,username, email, nombre, apellido, estadocivil, fechanacimiento, edad, activo, usuariocreacion, fechaCReacion,usuariomodificacion,fechamodificacion, accion) 
  VALUES (new.id,new.username, new.email, new.nombre, new.apellido, new.estadocivil, new.fechanacimiento, new.edad, new.activo, new.usuariocreacion, new.fechaCReacion,new.usuariomodificacion,new.fechamodificacion, 'U');
END$$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER trg_user_delete
AFTER delete ON usuario
FOR EACH ROW
BEGIN
  INSERT INTO usuario_log(id,username, email, nombre, apellido, estadocivil, fechanacimiento, edad, activo, usuariocreacion, fechaCReacion,usuariomodificacion,fechamodificacion, accion) 
  VALUES (old.id,old.username, old.email, old.nombre, old.apellido, old.estadocivil, old.fechanacimiento, old.edad, old.activo, old.usuariocreacion, old.fechaCReacion,old.usuariomodificacion,old.fechamodificacion, 'D');
END$$
DELIMITER ;


insert into usuario(username, email, nombre,apellido, fechaNacimiento,edad, usuarioCreacion)
values('klam','klam@x-codec.net', 'Karen', 'Lam','1983-09-28',28, 1);

update usuario set fechaNacimiento = '1996-09-28'
, usuarioModificacion =1, fechamodificacion = current_timestamp where id =3;

delete from usuario where id =3;

select * from usuario;
select * from usuario_log;
