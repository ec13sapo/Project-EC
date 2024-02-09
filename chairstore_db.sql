-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 09, 2024 at 01:15 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chairstore_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `preguntas_frecuentes`
--

DROP TABLE IF EXISTS `preguntas_frecuentes`;
CREATE TABLE IF NOT EXISTS `preguntas_frecuentes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(250) NOT NULL,
  `respuesta` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `preguntas_frecuentes`
--

INSERT INTO `preguntas_frecuentes` (`id`, `pregunta`, `respuesta`) VALUES
(31, '¿Realizan envios a todo el pais?', 'Si, los envios son a todo el pais!'),
(32, '¿Qué pasa si se rompe mi producto?', 'Si se encuentra dentro de los 6 meses posteriores a la compra, su producto todavia se encuentra en garantia y sera reemplazado por uno nuevo!'),
(34, '¿Qué colores se encuentran disponibles?', 'Las sillas se fabrican a pedido con el color a elección!');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `precio` decimal(9,0) NOT NULL,
  `descripcion` varchar(350) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_imagen` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `id_imagen`) VALUES
(9, 'Silla Capri', 40000, 'SILLA DE COMEDOR DE ESTRUCTURA METALICA CON RESPALDO Y ASIENTO ACOLCHADOS, FABRICADA CON MATERIALES DE LA MEJOR CALIDAD PARA MAXIMIZAR EL CONFORT', 't20iyczfs6dvfep2abrc'),
(7, 'Silla Martina', 60000, 'SILLA DE COMEDOR DE ESTRUCTURA METALICA CON RESPALDO Y ASIENTO ACOLCHADOS, FABRICADA CON MATERIALES DE LA MEJOR CALIDAD PARA MAXIMIZAR EL CONFORT', 'cbpf6x9zzoxbvndplrs2'),
(10, 'Silla Berlin', 70000, 'silla de comedor berlin tapizada', 'kd3bnl0eadn5kr7czxcg'),
(11, 'Silla Nairobi', 78564, 'SILLA DE COMEDOR DE ESTRUCTURA METALICA CON RESPALDO Y ASIENTO ACOLCHADOS, FABRICADA CON MATERIALES DE LA MEJOR CALIDAD PARA MAXIMIZAR EL CONFORT', 'cgi2mcmwrrpjdl85doqp'),
(12, 'Silla Carmin', 65545, 'SILLA DE COMEDOR DE ESTRUCTURA METALICA CON RESPALDO Y ASIENTO ACOLCHADOS, FABRICADA CON MATERIALES DE LA MEJOR CALIDAD PARA MAXIMIZAR EL CONFORT', 'kwluixxzbsczavp3ufz4'),
(13, 'Silla Lisboa', 54687, 'SILLA DE COMEDOR DE ESTRUCTURA METALICA CON RESPALDO Y ASIENTO ACOLCHADOS, FABRICADA CON MATERIALES DE LA MEJOR CALIDAD PARA MAXIMIZAR EL CONFORT', 'jx4u7wvt9z5s1yulrh5u'),
(14, 'Silla Matilde', 12345, 'SILLA DE COMEDOR DE ESTRUCTURA METALICA CON RESPALDO Y ASIENTO ACOLCHADOS, FABRICADA CON MATERIALES DE LA MEJOR CALIDAD PARA MAXIMIZAR EL CONFORT SILLA DE COMEDOR DE ESTRUCTURA METALICA CON RESPALDO Y ASIENTO ACOLCHADOS, FABRICADA CON MATERIALES DE LA MEJOR CALIDAD PARA MAXIMIZAR EL CONFORT -SI LE INTERESA COMPRAR MAS DE UN SET DE DOS SILLAS, DEBER', 'poemsyxsd565rnrupzws');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'ezequiel', 'ef73781effc5774100f87fe2f437a435'),
(2, 'eze', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
