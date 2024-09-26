SELECT * FROM mascotas;

INSERT INTO mascotas (nombre, edad) VALUES ('NombreMascota', 3);

UPDATE mascotas SET nombre = 'NuevoNombre', edad = 4 WHERE mascota_id = 1;

DELETE FROM mascotas WHERE mascota_id = 1;
