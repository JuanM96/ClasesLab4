-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2017 a las 01:03:16
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `parciallab4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `legajo` int(20) NOT NULL,
  `edad` int(20) NOT NULL,
  `foto` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id`, `nombre`, `password`, `tipo`, `legajo`, `edad`, `foto`) VALUES
(1, 'Elizabet', '9SQNMDJhW', 'jefe', 41, 1, '../../../assets/fotos/111111.jpg'),
(6, 'Hillie', 'DNkpgCuKEpX', 'operario', 2, 6, '../../../assets/fotos/555555.jpg'),
(7, 'Isador', '5BohVBsX', 'operario', 8294, 7, '../../../assets/fotos/777777.jpg'),
(8, 'Ancell', 'pBWrbWtLWP8d', 'operario', 82, 8, '../../../assets/fotos/888888.jpg'),
(9, 'Domingo', 'RpMeUPqM3', 'jefe', 123, 9, '../../../assets/fotos/999999.jpg'),
(10, 'Sadella', 'hguL99R29It1', 'jefe', 5, 10, '../../../assets/fotos/111111.jpg'),
(11, 'admin', '123', 'jefe', 1, 20, '../../../assets/fotos/222222.jpg'),
(19, 'test6', 'test2', 'jefe', 123, 20, '../../../assets/fotos/111111.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
