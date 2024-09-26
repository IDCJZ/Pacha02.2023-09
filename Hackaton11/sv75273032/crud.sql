DELIMITER //

DELIMITER //

CREATE PROCEDURE obtenerMascota(IN id INT)
BEGIN
    SELECT * FROM mascotas WHERE mascota_id = id;
END //

DELIMITER ;




CREATE PROCEDURE agregarMascota(IN nombre VARCHAR(255), IN edad INT)
BEGIN
    INSERT INTO mascotas (nombre, edad) VALUES (nombre, edad);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE actualizarMascota(IN id INT, IN nuevoNombre VARCHAR(255), IN nuevaEdad INT)
BEGIN
    UPDATE mascotas SET nombre = nuevoNombre, edad = nuevaEdad WHERE mascota_id = id;
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE eliminarMascota(IN id INT)
BEGIN
    DELETE FROM mascotas WHERE mascota_id = id;
END //

DELIMITER ;
