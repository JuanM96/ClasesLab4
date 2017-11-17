-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2017 a las 01:12:36
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tpsaladejuegos`
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
('admin', 'admin', 'admin@admin.com'),
('1', '2', '3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rankings`
--

CREATE TABLE `rankings` (
  `nombreUsuario` varchar(20) NOT NULL,
  `juego` varchar(50) NOT NULL,
  `resultado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rankings`
--

INSERT INTO `rankings` (`nombreUsuario`, `juego`, `resultado`) VALUES
('admin', 'Agilidad Aritmetica', 'Gano'),
('admin', 'Agilidad Aritmetica', 'Perdio'),
('admin', 'Agilidad Aritmetica', 'Perdio'),
('admin', 'Agilidad Aritmetica', 'Gano'),
('admin', 'Agilidad Aritmetica', 'Perdio'),
('admin', 'Agilidad Aritmetica', 'Gano'),
('admin', 'Agilidad Aritmetica', 'Perdio'),
('admin', 'Piedra, Papel y Tijera', 'Perdio'),
('admin', 'Piedra, Papel y Tijera', 'Perdio'),
('admin', 'Piedra, Papel y Tijera', 'Gano'),
('admin', 'Piedra, Papel y Tijera', 'Perdio'),
('admin', 'Piedra, Papel y Tijera', 'Perdio'),
('admin', 'Piedra, Papel y Tijera', 'Gano'),
('admin', 'Piedra, Papel y Tijera', 'Empate'),
('admin', 'Piedra, Papel y Tijera', 'Gano'),
('admin', 'Anagrama', 'Perdio'),
('admin', 'Anagrama', 'Gano'),
('admin', 'Anagrama', 'Perdio'),
('admin', 'Anagrama', 'Gano'),
('admin', 'Piedra, Papel y Tijera', 'Empate'),
('admin', 'Tic Tac Toe', 'Gano'),
('admin', 'Tic Tac Toe', 'Perdio'),
('admin', 'Tic Tac Toe', 'Empato'),
('admin', 'Adivina el número', 'Gano');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
