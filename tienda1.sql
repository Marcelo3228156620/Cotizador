-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-09-2021 a las 08:30:44
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(12) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `precio` double NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `imagen` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `items`
--

INSERT INTO `items` (`id`, `nombre`, `precio`, `categoria`, `imagen`) VALUES
(1, 'BATMAN', 12000, 'juguetes', 'juguete01.jpg'),
(2, 'CAPITAN AMERICA', 15000, 'juguetes', 'juguete02.jpg'),
(3, 'TANOS', 10000, 'juguetes', 'juguete03.jpg'),
(4, 'PRUEBA', 5000, 'juguetes', 'juguete04.jpg'),
(5, 'SHAZAM', 20000, 'juguetes', 'juguete05.jpg'),
(6, 'STICH', 2000, 'juguetes', 'juguete06.jpg'),
(7, 'PRUEBA 01', 5000, 'libros', 'libro01.jpg'),
(8, 'PRUEBA 02', 5000, 'libros', 'libro02.jpg'),
(9, 'PRUEBA 03', 5000, 'libros', 'libro03.jpg'),
(10, 'PRUEBA 04', 5000, 'libros', 'libro04.jpg'),
(11, 'PRUEBA 05', 5000, 'libros', 'libro05.jpg'),
(12, 'PRUEBA 06', 5000, 'libros', 'libro06.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
