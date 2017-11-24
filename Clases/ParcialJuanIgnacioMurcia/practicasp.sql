-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2017 a las 21:13:11
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `practicasp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `usuario` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`usuario`, `password`, `email`) VALUES
('admin', '123', 'asdf'),
('juan', '123', 'ad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `direccion` varchar(20) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `nombre`, `apellido`, `sexo`, `direccion`, `latitud`, `longitud`) VALUES
(1, 'Juan', 'Smithen', 'Male', '1234 Waubesa Way', 30.118912, 111.484536),
(2, 'Shina', 'Farrants', 'Female', '4 Kinsman Pass', 41.3015266, -8.5820391),
(3, 'Waylin', 'Palin', 'Male', '7428 Lyons Terrace', 49.6284572, 16.3467929),
(4, 'Nissa', 'Zealander', 'Female', '5 Heffernan Alley', 31.1853497, 35.7047733),
(5, 'Charmion', 'Fitzmaurice', 'Female', '0227 Springs Crossin', -8.0397618, 111.9000827),
(6, 'Tallia', 'Danne', 'Female', '2600 Sunfield Park', 32.46, -84.99),
(7, 'Cilka', 'Mattes', 'Female', '44 Maywood Plaza', -6.7761721, 111.4126837),
(8, 'Read', 'Bloyes', 'Male', '55843 Chinook Alley', 46.1839042, -0.4738335),
(9, 'Godfrey', 'Fitzackerley', 'Male', '711 Almo Hill', 40.81609, 140.37539),
(10, 'Derek', 'Millom', 'Male', '05 Bellgrove Drive', 33.5041035, 11.0881494);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
