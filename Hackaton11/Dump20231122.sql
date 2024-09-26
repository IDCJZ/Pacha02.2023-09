CREATE DATABASE  IF NOT EXISTS `veterinaria` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `veterinaria`;
-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: localhost    Database: veterinaria
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bckUbigeo`
--

DROP TABLE IF EXISTS `bckUbigeo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bckUbigeo` (
  `ubigeo` varchar(6) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bckUbigeo`
--

LOCK TABLES `bckUbigeo` WRITE;
/*!40000 ALTER TABLE `bckUbigeo` DISABLE KEYS */;
INSERT INTO `bckUbigeo` VALUES ('130115','CHICLAYO',1,1,'2023-11-06 21:52:52',NULL,NULL),('140114','MAGDALENA DEL MAR',1,1,'2023-11-08 19:52:44',NULL,NULL),('140124','SAN ISIDRO',1,1,'2023-11-08 19:52:44',NULL,NULL),('141133','LIMA',1,1,'2023-11-06 21:52:52',NULL,NULL);
/*!40000 ALTER TABLE `bckUbigeo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Especie`
--

DROP TABLE IF EXISTS `Especie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Especie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(500) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioCreacion` (`usuarioCreacion`),
  KEY `usuarioModificacion` (`usuarioModificacion`),
  CONSTRAINT `especie_ibfk_1` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `especie_ibfk_2` FOREIGN KEY (`usuarioModificacion`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Especie`
--

LOCK TABLES `Especie` WRITE;
/*!40000 ALTER TABLE `Especie` DISABLE KEYS */;
INSERT INTO `Especie` VALUES (1,'Gato',1,1,'2023-11-06 21:39:36',1,'2023-11-06 21:41:22'),(2,'Perro',1,1,'2023-11-06 21:39:36',1,'2023-11-06 21:41:22'),(3,'Hamster',0,1,'2023-11-10 20:14:38',1,'2023-11-22 19:46:36'),(4,'Hamster',1,1,'2023-11-22 19:46:36',NULL,NULL),(5,'Ovejas',1,1,'2023-11-22 19:59:56',NULL,NULL),(6,'Vacas',1,1,'2023-11-22 20:01:22',NULL,NULL),(7,'Cerdos',1,1,'2023-11-22 20:02:23',NULL,NULL),(8,'Gallinas',0,1,'2023-11-22 20:03:54',1,'2023-11-22 20:11:11');
/*!40000 ALTER TABLE `Especie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mascota`
--

DROP TABLE IF EXISTS `Mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Mascota` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `idEspecie` int NOT NULL,
  `idRaza` int NOT NULL,
  `idSexo` int NOT NULL,
  `idPropietario` int NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioCreacion` (`usuarioCreacion`),
  KEY `usuarioModificacion` (`usuarioModificacion`),
  KEY `idEspecie` (`idEspecie`),
  KEY `idRaza` (`idRaza`),
  KEY `idSexo` (`idSexo`),
  KEY `idPropietario` (`idPropietario`),
  CONSTRAINT `mascota_ibfk_1` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `mascota_ibfk_2` FOREIGN KEY (`usuarioModificacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `mascota_ibfk_3` FOREIGN KEY (`idEspecie`) REFERENCES `Especie` (`id`),
  CONSTRAINT `mascota_ibfk_4` FOREIGN KEY (`idRaza`) REFERENCES `Raza` (`id`),
  CONSTRAINT `mascota_ibfk_5` FOREIGN KEY (`idSexo`) REFERENCES `Sexo` (`id`),
  CONSTRAINT `mascota_ibfk_6` FOREIGN KEY (`idPropietario`) REFERENCES `Propietario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mascota`
--

LOCK TABLES `Mascota` WRITE;
/*!40000 ALTER TABLE `Mascota` DISABLE KEYS */;
INSERT INTO `Mascota` VALUES (1,'Selina',NULL,1,1,1,1,1,1,'2023-11-06 22:11:17',NULL,NULL),(2,'Pancho','2022-06-01',1,1,2,1,1,1,'2023-11-06 22:11:17',NULL,NULL);
/*!40000 ALTER TABLE `Mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Nacionalidad`
--

DROP TABLE IF EXISTS `Nacionalidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Nacionalidad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(500) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioCreacion` (`usuarioCreacion`),
  KEY `usuarioModificacion` (`usuarioModificacion`),
  CONSTRAINT `nacionalidad_ibfk_1` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `nacionalidad_ibfk_2` FOREIGN KEY (`usuarioModificacion`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nacionalidad`
--

LOCK TABLES `Nacionalidad` WRITE;
/*!40000 ALTER TABLE `Nacionalidad` DISABLE KEYS */;
INSERT INTO `Nacionalidad` VALUES (1,'Peruana',1,1,'2023-11-06 21:54:59',NULL,NULL),(2,'Ecuatoriana',1,1,'2023-11-06 21:54:59',NULL,NULL),(3,'Venezolana',1,1,'2023-11-06 21:54:59',NULL,NULL);
/*!40000 ALTER TABLE `Nacionalidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Propietario`
--

DROP TABLE IF EXISTS `Propietario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Propietario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Apellido` varchar(255) NOT NULL,
  `Direccion` varchar(1000) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `idNacionalidad` int NOT NULL,
  `ubigeo` varchar(6) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioCreacion` (`usuarioCreacion`),
  KEY `usuarioModificacion` (`usuarioModificacion`),
  KEY `idNacionalidad` (`idNacionalidad`),
  KEY `ubigeo` (`ubigeo`),
  CONSTRAINT `propietario_ibfk_1` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `propietario_ibfk_2` FOREIGN KEY (`usuarioModificacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `propietario_ibfk_3` FOREIGN KEY (`idNacionalidad`) REFERENCES `Nacionalidad` (`id`),
  CONSTRAINT `propietario_ibfk_4` FOREIGN KEY (`ubigeo`) REFERENCES `ubigeo` (`ubigeo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Propietario`
--

LOCK TABLES `Propietario` WRITE;
/*!40000 ALTER TABLE `Propietario` DISABLE KEYS */;
INSERT INTO `Propietario` VALUES (1,'Roberto','Pineda','Teododro Cardenas 652','916730940',2,'141133',1,1,'2023-11-06 22:03:25',NULL,NULL),(2,'Junior','Arango','Lima','932528778',1,'141133',1,1,'2023-11-06 22:03:25',NULL,NULL);
/*!40000 ALTER TABLE `Propietario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Raza`
--

DROP TABLE IF EXISTS `Raza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Raza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(500) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioCreacion` (`usuarioCreacion`),
  KEY `usuarioModificacion` (`usuarioModificacion`),
  CONSTRAINT `raza_ibfk_1` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `raza_ibfk_2` FOREIGN KEY (`usuarioModificacion`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Raza`
--

LOCK TABLES `Raza` WRITE;
/*!40000 ALTER TABLE `Raza` DISABLE KEYS */;
INSERT INTO `Raza` VALUES (1,'Mestizo',1,1,'2023-11-06 21:43:57',NULL,NULL),(2,'Schnauzer',1,1,'2023-11-06 21:43:57',NULL,NULL),(3,'Pequine',1,1,'2023-11-06 21:43:57',NULL,NULL);
/*!40000 ALTER TABLE `Raza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sexo`
--

DROP TABLE IF EXISTS `Sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sexo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(500) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioCreacion` (`usuarioCreacion`),
  KEY `usuarioModificacion` (`usuarioModificacion`),
  CONSTRAINT `sexo_ibfk_1` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `sexo_ibfk_2` FOREIGN KEY (`usuarioModificacion`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sexo`
--

LOCK TABLES `Sexo` WRITE;
/*!40000 ALTER TABLE `Sexo` DISABLE KEYS */;
INSERT INTO `Sexo` VALUES (1,'Hembra',1,1,'2023-11-06 21:45:26',NULL,NULL),(2,'Macho',1,1,'2023-11-06 21:45:26',NULL,NULL);
/*!40000 ALTER TABLE `Sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ubigeo`
--

DROP TABLE IF EXISTS `Ubigeo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ubigeo` (
  `ubigeo` varchar(6) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`ubigeo`),
  KEY `usuarioCreacion` (`usuarioCreacion`),
  KEY `usuarioModificacion` (`usuarioModificacion`),
  CONSTRAINT `ubigeo_ibfk_1` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `ubigeo_ibfk_2` FOREIGN KEY (`usuarioModificacion`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ubigeo`
--

LOCK TABLES `Ubigeo` WRITE;
/*!40000 ALTER TABLE `Ubigeo` DISABLE KEYS */;
INSERT INTO `Ubigeo` VALUES ('130115','CHICLAYO',1,1,'2023-11-06 21:52:52',NULL,NULL),('140114','MAGDALENA DEL MAR',1,1,'2023-11-08 19:52:44',NULL,NULL),('140124','SAN ISIDRO',1,1,'2023-11-08 19:52:44',NULL,NULL),('141133','LIMA',1,1,'2023-11-06 21:52:52',NULL,NULL);
/*!40000 ALTER TABLE `Ubigeo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `apellido` varchar(500) NOT NULL,
  `estadoCivil` tinyint(1) DEFAULT '0',
  `fechaNacimiento` date DEFAULT NULL,
  `edad` int NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '0',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `usuarioCreacion` (`usuarioCreacion`),
  KEY `usuarioModificacion` (`usuarioModificacion`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`usuarioModificacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `usuario_chk_1` CHECK ((`edad` >= 18))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'rpineda','rpineda@x-codec.net','Roberto','Pineda',0,'1983-08-28',40,0,1,'2023-11-06 21:34:52',NULL,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_user_insert` AFTER INSERT ON `usuario` FOR EACH ROW BEGIN
  INSERT INTO usuario_log(id,username, email, nombre, apellido, estadocivil, fechanacimiento, edad, activo, usuariocreacion, fechaCReacion,usuariomodificacion,fechamodificacion, accion) 
  VALUES (new.id,new.username, new.email, new.nombre, new.apellido, new.estadocivil, new.fechanacimiento, new.edad, new.activo, new.usuariocreacion, new.fechaCReacion,new.usuariomodificacion,new.fechamodificacion, 'I');
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_user_update` AFTER UPDATE ON `usuario` FOR EACH ROW BEGIN
  INSERT INTO usuario_log(id,username, email, nombre, apellido, estadocivil, fechanacimiento, edad, activo, usuariocreacion, fechaCReacion,usuariomodificacion,fechamodificacion, accion) 
  VALUES (new.id,new.username, new.email, new.nombre, new.apellido, new.estadocivil, new.fechanacimiento, new.edad, new.activo, new.usuariocreacion, new.fechaCReacion,new.usuariomodificacion,new.fechamodificacion, 'U');
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_user_delete` AFTER DELETE ON `usuario` FOR EACH ROW BEGIN
  INSERT INTO usuario_log(id,username, email, nombre, apellido, estadocivil, fechanacimiento, edad, activo, usuariocreacion, fechaCReacion,usuariomodificacion,fechamodificacion, accion) 
  VALUES (old.id,old.username, old.email, old.nombre, old.apellido, old.estadocivil, old.fechanacimiento, old.edad, old.activo, old.usuariocreacion, old.fechaCReacion,old.usuariomodificacion,old.fechamodificacion, 'D');
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `usuario_log`
--

DROP TABLE IF EXISTS `usuario_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_log` (
  `id` int NOT NULL DEFAULT '0',
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `apellido` varchar(500) NOT NULL,
  `estadoCivil` tinyint(1) DEFAULT '0',
  `fechaNacimiento` date DEFAULT NULL,
  `edad` int NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '0',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  `accion` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_log`
--

LOCK TABLES `usuario_log` WRITE;
/*!40000 ALTER TABLE `usuario_log` DISABLE KEYS */;
INSERT INTO `usuario_log` VALUES (1,'rpineda','rpineda@x-codec.net','Roberto','Pineda',0,'1983-08-28',40,0,1,'2023-11-06 21:34:52',NULL,NULL,NULL),(3,'klam','klam@x-codec.net','Karen','Lam',0,'1983-09-28',28,0,1,'2023-11-10 21:23:10',NULL,NULL,'I'),(3,'klam','klam@x-codec.net','Karen','Lam',0,'1996-09-28',28,0,1,'2023-11-10 21:23:10',NULL,NULL,'U'),(3,'klam','klam@x-codec.net','Karen','Lam',0,'1996-09-28',28,0,1,'2023-11-10 21:23:10',1,'2023-11-10 21:26:44','U'),(3,'klam','klam@x-codec.net','Karen','Lam',0,'1996-09-28',28,0,1,'2023-11-10 21:23:10',1,'2023-11-10 21:26:44','D');
/*!40000 ALTER TABLE `usuario_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `v_mascotas`
--

DROP TABLE IF EXISTS `v_mascotas`;
/*!50001 DROP VIEW IF EXISTS `v_mascotas`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_mascotas` AS SELECT 
 1 AS `id`,
 1 AS `nombre`,
 1 AS `nombres`,
 1 AS `direccion`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `Vacunas`
--

DROP TABLE IF EXISTS `Vacunas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Vacunas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(500) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioCreacion` (`usuarioCreacion`),
  KEY `usuarioModificacion` (`usuarioModificacion`),
  CONSTRAINT `vacunas_ibfk_1` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  CONSTRAINT `vacunas_ibfk_2` FOREIGN KEY (`usuarioModificacion`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vacunas`
--

LOCK TABLES `Vacunas` WRITE;
/*!40000 ALTER TABLE `Vacunas` DISABLE KEYS */;
INSERT INTO `Vacunas` VALUES (1,'Triple-Felina',1,1,'2023-11-06 21:48:27',NULL,NULL),(2,'Rabia',1,1,'2023-11-06 21:48:27',NULL,NULL),(3,'distemper',1,1,'2023-11-06 21:48:27',NULL,NULL),(4,'Moquillo',1,1,'2023-11-06 21:48:27',NULL,NULL),(5,'VIH Felino',1,1,'2023-11-06 21:48:27',NULL,NULL),(6,'Hepatitis',1,1,'2023-11-06 21:48:27',NULL,NULL),(7,'Parvovirosis',1,1,'2023-11-06 21:48:27',NULL,NULL);
/*!40000 ALTER TABLE `Vacunas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'veterinaria'
--

--
-- Dumping routines for database 'veterinaria'
--
/*!50003 DROP FUNCTION IF EXISTS `hello` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `hello`(s CHAR(20)) RETURNS char(50) CHARSET utf8mb4
    DETERMINISTIC
RETURN CONCAT('Hello, ',s,'!') ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_crud_especie` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_especie`(
	IN opcion INT, 
    IN descrip varchar(255),
    in act bool,
    in id int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from Especie where activo = 1;
	elseif opcion = 2 then
		insert into Especie(descripcion, usuariocreacion)
        values(descrip, usuario);
	elseif opcion = 3 then
		update Especie set
        descripcion = ifnull(descrip,descripcion),
        activo = ifnull(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where Especie.id = id;
	elseif opcion = 4 then
		update Especie set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where Especie.id = id;
	elseif opcion = 5 then
		select * from Especie where activo = 1 and Especie.id = id;
	END IF;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `v_mascotas`
--

/*!50001 DROP VIEW IF EXISTS `v_mascotas`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_mascotas` AS select `M`.`id` AS `id`,`M`.`Nombre` AS `nombre`,concat(`P`.`Nombre`,' ',`P`.`Apellido`) AS `nombres`,`P`.`Direccion` AS `direccion` from (`mascota` `M` join `propietario` `P` on((`M`.`idPropietario` = `P`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-22 20:27:38
