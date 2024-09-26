-- CRUD
use veterinaria;

insert into Ubigeo(ubigeo, ubicacion, usuariocreacion)
values('140114','MAGDALENA DEL MAR', 1),
('140124', 'SAN ISIDRO', 1);

select * from Ubigeo;

select ubigeo, ubicacion from Ubigeo;

-- SELECT * INTO bckUbigeo FROM Ubigeo;
CREATE TABLE bckUbigeo SELECT * FROM Ubigeo;

select * from bckUbigeo;

select * from ubigeo 
where ubigeo > '140114';

select * from ubigeo 
where ubicacion > 'LIMA';

select * from ubigeo 
where ubicacion < 'LIMA';

select * from ubigeo 
where fechaCreacion > '2023-11-08 00:00:00';

select * from ubigeo 
where usuarioModificacion is  null;

select * from ubigeo where fechaCreacion > '2023-11-08 00:00:00'
and usuarioModificacion is not null;

select * from ubigeo where fechaCreacion > '2023-11-08 00:00:00'
or usuarioModificacion is not null;

