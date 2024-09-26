create database  IF NOT EXISTS veterinaria;
use veterinaria;


create table IF NOT EXISTS usuario(
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
-- insert into usuario(username, email, nombre,apellido, fechaNacimiento,edad, usuarioCreacion)
-- values('rpineda','rpineda@x-codec.net', 'Roberto', 'Pineda','1983-08-28',40, 1);

create table if not exists Especie(

	id int primary key auto_increment,
	descripcion varchar(500) not null,
    
	activo bool not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id) ,
    FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id) 
);

-- insert into Especie(descripcion, usuarioCreacion)
-- values('Gato', 1),
-- ('Perro', 1);

-- update Especie set Activo = 1,
-- usuarioModificacion = 1,
-- fechaModificacion = CURRENT_TIMESTAMP
-- where id in (1,2);

create table if not exists Raza(

	id int primary key auto_increment,
	descripcion varchar(500) not null,
    
	activo bool not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id) ,
    FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id) 
);

-- insert into Raza(descripcion, usuarioCreacion)
-- values('Mestizo', 1),
-- ('Schnauzer', 1),
-- ('Pequine',1);

create table if not exists Sexo(

	id int primary key auto_increment,
	descripcion varchar(500) not null,
    
	activo bool not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id) ,
    FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id) 
);

-- insert into Sexo(descripcion, usuarioCreacion)
-- values('Hembra', 1),
-- ('Macho', 1);


create table if not exists Vacunas(

	id int primary key auto_increment,
	descripcion varchar(500) not null,
    
	activo bool not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id) ,
    FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id) 
);

insert into Vacunas(descripcion, usuarioCreacion)
values('Triple-Felina', 1),
('Rabia', 1),
('distemper', 1),
('Moquillo', 1),
('VIH Felino', 1),
('Hepatitis', 1),
('Parvovirosis', 1);

create table if not exists Ubigeo(
	ubigeo varchar(6) not null primary key,
    ubicacion varchar(255) not null,
    
    activo bool not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id) ,
    FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id) 
);

insert into ubigeo(ubigeo, ubicacion, usuarioCreacion)
values('141133','LIMA', 1),
('130115','CHICLAYO', 1);

create table if not exists Nacionalidad(
	id int primary key auto_increment,
	descripcion varchar(500) not null,
    
	activo bool not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id) ,
    FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id) 
);

insert into Nacionalidad(descripcion, usuarioCreacion)
values('Peruana',1),
('Ecuatoriana',1),
('Venezolana', 1);


create table if not exists Propietario(
	id int primary key auto_increment,
    Nombre varchar(255) not null,
    Apellido varchar(255) not null,
    Direccion varchar(1000) not null,
    Telefono varchar(50) not null,
    idNacionalidad int not null,
    ubigeo varchar(6) not null,
    
    activo bool not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id) ,
    FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id) ,
    FOREIGN KEY (idNacionalidad) REFERENCES Nacionalidad(id) ,
    FOREIGN KEY (ubigeo) REFERENCES ubigeo(ubigeo) 
);

insert into propietario(Nombre, Apellido,Direccion, Telefono, idNacionalidad, ubigeo,usuarioCreacion )
values('Roberto', 'Pineda', 'Teododro Cardenas 652', '916730940', 2,'141133', 1),
('Junior', 'Arango','Lima','932528778',1, '141133', 1);


create table if not exists Mascota(
	id int primary key auto_increment,
    Nombre varchar(255) not null,
    fechaNacimiento date null,
    idEspecie int not null,
    idRaza int not null,
    idSexo int not null,
    idPropietario int not null,
    
    activo bool not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id) ,
    FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id),
    FOREIGN KEY (idEspecie) REFERENCES Especie(id),
    FOREIGN KEY (idRaza) REFERENCES Raza(id),
    FOREIGN KEY (idSexo) REFERENCES Sexo(id),
    FOREIGN KEY (idPropietario) REFERENCES Propietario(id)
    
);

insert into Mascota(nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario,usuarioCreacion)
values('Selina', null,1, 1, 1, 1, 1),
('Pancho', '2022-06-01', 1, 1, 2, 1,1);

Select * from Mascota;
Select * from Propietario;
Select * from Nacionalidad;
select * from ubigeo;
select * from Vacunas;
select * from sexo;
select * from raza;
select * from especie;
select * from usuario;
