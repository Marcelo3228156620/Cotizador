-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-01-2022 a las 16:07:32
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cotizadorpr`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idCategoria` int(12) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `ubicacion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `nombre`, `imagen`, `ubicacion`) VALUES
(1, 'Tubería y Accesorios', '101_CONSTRUCCION.png', 'img/categorias/101_CONSTRUCCION.png'),
(2, 'Registros, Válvulas y Complementos', '203_REGISTRO_GLOBO.png', 'img/categorias/203_REGISTRO_GLOBO.png'),
(3, 'Acabados', '302_DUCHAS_ELECTRICAS.png', 'img/categorias/302_DUCHAS_ELECTRICAS.png'),
(4, 'Impermeabilizantes y Aditivos', '402_INDUSTRIA.png', 'img/categorias/402_INDUSTRIA.png'),
(5, 'Bricolaje ', '501_HERRAMIENTA.png', 'img/categorias/501_HERRAMIENTA.png'),
(6, 'Geosistemas', '602_GEOMENBRANAS_.png', 'img/categorias/602_GEOMENBRANAS_.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `idCliente` int(12) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `correo` varchar(90) NOT NULL,
  `telefono` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion`
--

CREATE TABLE `cotizacion` (
  `idCotizacion` int(12) NOT NULL,
  `cotizacionSap` varchar(12) NOT NULL,
  `fecha` datetime NOT NULL,
  `fechaSap` datetime NOT NULL,
  `cliente_id` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_cotizacion`
--

CREATE TABLE `detalle_cotizacion` (
  `idDetalle` int(12) NOT NULL,
  `cantidad` int(12) NOT NULL,
  `producto_id` int(12) NOT NULL,
  `cotizacion_id` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `filtrouno`
--

CREATE TABLE `filtrouno` (
  `idFiltro` int(12) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `subCategoria_id` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `filtrouno`
--

INSERT INTO `filtrouno` (`idFiltro`, `nombre`, `subCategoria_id`) VALUES
(1011, 'Soldaduras', 101),
(1012, 'Presión', 101),
(1013, 'Sanitaria', 101),
(1014, 'Ventilación', 101),
(1015, 'CPVC', 101),
(1016, 'Conduit', 101),
(1017, 'SCH.80', 101),
(1018, 'Galvanizado', 101),
(1019, 'Canales', 101),
(1021, 'Novafort', 102),
(1022, 'Novaloq', 102),
(1023, 'Union Mecanica', 102),
(1024, 'Durafort', 102),
(1031, 'Ductos', 103),
(1032, 'TDP', 103),
(1033, 'Galvanizado IMC', 103),
(1034, 'Galvanizado EMT', 103),
(1051, 'Cobre', 105),
(1052, 'PealPe', 105),
(1053, 'Galvanizado C.40', 105),
(3011, 'Sanitarios', 301),
(3012, 'Lavamanos', 301),
(3013, 'Accesorios', 301),
(3014, 'Urinario', 301),
(3031, 'Cocina', 303),
(3032, 'Baño', 303),
(3033, 'Duchas', 303),
(3034, 'Accesorios', 303);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `manuales`
--

CREATE TABLE `manuales` (
  `idManuales` int(12) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `ubicacionArc` varchar(100) NOT NULL,
  `marca_id` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `manuales`
--

INSERT INTO `manuales` (`idManuales`, `nombre`, `ubicacionArc`, `marca_id`) VALUES
(1, 'Catalogo_Apolo.pdf', 'files/pdfs/Manuales/Apolo/Catalogo_Apolo.pdf', 4),
(2, 'Catalogo_Celta.pdf', 'files/pdfs/Manuales/Celta/Catalogo_Celta.pdf', 6),
(3, 'Line_Alcantarillado_Durafort.pdf', 'files/pdfs/Manuales/Celta/Line_Alcantarillado_Durafort.pdf', 6),
(4, 'Linea__Union_Mecanica_Acueducto.pdf', 'files/pdfs/Manuales/Celta/Linea__Union_Mecanica_Acueducto.pdf', 6),
(5, 'Linea_Azul.pdf', 'files/pdfs/Manuales/Celta/Linea_Azul.pdf', 6),
(6, 'Linea_Canales_y_Bajantes_Aguas_lluvias.pdf', 'files/pdfs/Manuales/Celta/Linea_Canales_y_Bajantes_Aguas_lluvias.pdf', 6),
(7, 'Linea_Electricos_y_Telefonicos.pdf', 'files/pdfs/Manuales/Celta/Linea_Electricos_y_Telefonicos.pdf', 6),
(8, 'Catalogo_Coflex.pdf', 'files/pdfs/Manuales/Coflex/Catalogo_Coflex.pdf', 8),
(9, 'Coflex_pro_lista.pdf', 'files/pdfs/Manuales/Coflex_Pro/Coflex_pro_lista.pdf', 9),
(10, 'Tuberia_EMT.pdf', 'files/pdfs/Manuales/Colmena/Tuberia_EMT.pdf', 10),
(11, 'Tuberia_IMC.pdf', 'files/pdfs/Manuales/Colmena/Tuberia_IMC.pdf', 10),
(12, 'Tuberia_RMC.pdf', 'files/pdfs/Manuales/Colmena/Tuberia_RMC.pdf', 10),
(13, 'Catalogo_Dicol.pdf', 'files/pdfs/Manuales/Dicol/Catalogo_Dicol.pdf', 30),
(14, 'Catalogo_Elicent.pdf', 'files/pdfs/Manuales/Elicent/Catalogo_Elicent.pdf', 12),
(15, 'Catalogo_FV.pdf', 'files/pdfs/Manuales/FV/Catalogo_FV.pdf', 14),
(16, 'Catalogo_Gerfor.pdf', 'files/pdfs/Manuales/Gerfor/Catalogo_Gerfor.pdf', 15),
(17, 'Catalogo_GRICOL.pdf', 'files/pdfs/Manuales/Gricol/Catalogo_GRICOL.pdf', 16),
(18, 'Catalogo_HELBERT.pdf', 'files/pdfs/Manuales/Helbert/Catalogo_HELBERT.pdf', 17),
(19, 'Catalogo_Helbert_Bermad.pdf', 'files/pdfs/Manuales/Helbert/Catalogo_Helbert_Bermad.pdf', 17),
(20, 'Catalogo_Helbert_Bugatti.pdf', 'files/pdfs/Manuales/Helbert/Catalogo_Helbert_Bugatti.pdf', 17),
(21, 'Catalogo_Helbert_Caleffi.pdf', 'files/pdfs/Manuales/Helbert/Catalogo_Helbert_Caleffi.pdf', 17),
(22, 'Catalogo_Helbert_Importadas.pdf', 'files/pdfs/Manuales/Helbert/Catalogo_Helbert_Importadas.pdf', 17),
(23, 'Catalogo_Helbert_Macromedidores_Janz_.pdf', 'files/pdfs/Manuales/Helbert/Catalogo_Helbert_Macromedidores_Janz_.pdf', 17),
(24, 'Catalogo_Helbert_Micromeidores.pdf', 'files/pdfs/Manuales/Helbert/Catalogo_Helbert_Micromeidores.pdf', 17),
(25, 'Catalogo_Helbert_Redwhite.pdf', 'files/pdfs/Manuales/Helbert/Catalogo_Helbert_Redwhite.pdf', 17),
(26, 'Catalogo_Helbert_Vanstone.pdf', 'files/pdfs/Manuales/Helbert/Catalogo_Helbert_Vanstone.pdf', 17),
(27, 'Catalogo_IGT.pdf', 'files/pdfs/Manuales/IGT/Catalogo_IGT.pdf', 18),
(28, 'lorenzetti.pdf', 'files/pdfs/Manuales/Lorenzetti/lorenzetti.pdf', 1),
(29, 'Catalogo_Maygas.pdf', 'files/pdfs/Manuales/Maygas/Catalogo_Maygas.pdf', 19),
(30, 'Catalogo_PCP.pdf', 'files/pdfs/Manuales/PCP/Catalogo_PCP.pdf', 22),
(31, 'Catalogo_PCP_Acueducto1.pdf', 'files/pdfs/Manuales/PCP/Catalogo_PCP_Acueducto1.pdf', 22),
(32, 'Catalogo_PEGLER.pdf', 'files/pdfs/Manuales/Pleger/Catalogo_PEGLER.pdf', 3),
(33, 'Catalogo_Sika.pdf', 'files/pdfs/Manuales/Sika/Catalogo_Sika.pdf', 24),
(34, 'Catalogo_SOCODA.pdf', 'files/pdfs/Manuales/Socoda/Catalogo_SOCODA.pdf', 26),
(35, 'Catalogo_Toolcraft.pdf', 'files/pdfs/Manuales/Toolcraft/Catalogo_Toolcraft.pdf', 28);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `idMarca` int(12) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(60) NOT NULL,
  `logo` varchar(45) NOT NULL,
  `ubicacion` varchar(100) NOT NULL,
  `listaPrecio` varchar(50) NOT NULL,
  `listaUbicacion` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`idMarca`, `nombre`, `descripcion`, `logo`, `ubicacion`, `listaPrecio`, `listaUbicacion`, `status`) VALUES
(1, 'Sika', 'Productos químicos', 'LOGO_SIKA.jpg', 'img/marcas/LOGO_SIKA.jpg', 'Catalogo_Sika.pdf', 'files/Manuales/Sika/Catalogo_Sika.pdf', 'active'),
(2, 'FV', 'Grifería y porcelana sanitaria', 'LOGO_FV.jpg', 'img/marcas/LOGO_FV.jpg', '', '', 'active'),
(3, 'Celta', 'Tubosistemas en PVC PREDIAL', 'LOGO_CELTA.jpg', 'img/marcas/LOGO_CELTA.jpg', '', '', 'active'),
(4, 'Lorenzetti', 'Duchas eléctricas y filtros de agua', 'LOGO_LORENZETTI.jpg', 'img/marcas/LOGO_LORENZETTI.jpg', '', '', 'active'),
(5, 'Maygas', 'PE-AL-PE Termofusión', 'LOGO_MAYGAS.jpg', 'img/marcas/LOGO_MAYGAS.jpg', '', '', 'active'),
(6, 'PCP', 'Válvulas y complementos en PVC', 'LOGO_PCP.jpg', 'img/marcas/LOGO_PCP.jpg', '', '', 'active'),
(7, 'Coflex', 'Accesorios de plomería', 'LOGO_COFLEX.jpg', 'img/marcas/LOGO_COFLEX.jpg', '', '', 'active'),
(8, 'CoflexPro', 'Tubosistemas Coflex Pro', 'LOGO_COFLEX_PRO.jpg', 'img/marcas/LOGO_COFLEX_PRO.jpg', '', '', 'active'),
(9, 'Toyo', 'Válvulas y registros', 'LOGO_TOYO.jpg', 'img/marcas/LOGO_TOYO.jpg', '', '', 'active'),
(10, 'Extrucol', '', 'LOGO_EXTRUCOL.jpg', 'img/marcas/LOGO_EXTRUCOL.jpg', '', '', 'active'),
(11, 'Helbert', 'Válvulas y complementos hidráulicos', 'LOGO_HELBERT.jpg', 'img/marcas/LOGO_HELBERT.jpg', '', '', 'active'),
(12, 'Gricol', 'Griferías y lavaplatos', 'LOGO_GRICOL.jpg', 'img/marcas/LOGO_GRICOL.jpg', '', '', 'active'),
(13, 'Gerfor', 'Griferias y tejas', 'LOGO_GERFOR.jpg', 'img/marcas/LOGO_GERFOR.jpg', '', '', 'active'),
(14, 'Socoda', 'Lavaplatos y cocinas', 'LOGO_SOCODA.jpg', 'img/marcas/LOGO_SOCODA.jpg', '', '', 'active'),
(15, 'Mech', 'Accesorios ranurados y galvanizados', 'LOGO_MECH.jpg', 'img/marcas/LOGO_MECH.jpg', '', '', 'active'),
(16, 'Charlotte', '', 'LOGO_CHALOTTE-PIPE.jpg', 'img/marcas/LOGO_CHALOTTE-PIPE.jpg', '', '', 'active'),
(17, 'Nacobre', 'Tubosistemas en cobre', 'LOGO_NACOBRE.jpg', 'img/marcas/LOGO_NACOBRE.jpg', '', '', 'active'),
(18, 'Pavco', 'Geosistemas', 'LOGO-PAVCO.jpg', 'img/marcas/LOGO-PAVCO.jpg', '', '', 'active'),
(19, 'Dicol', 'Tubosistemas en polipropileno', 'LOGO-DICOL.jpg', 'img/marcas/LOGO-DICOL.jpg', '', '', 'active'),
(20, 'Apolo', '', 'LOGO_APOLO.jpg', 'img/marcas/LOGO_APOLO.jpg', '', '', 'active'),
(21, 'Toolcraft', 'Bricolaje', 'LOGO_TOOLCRATF.jpg', 'img/marcas/LOGO_TOOLCRATF.jpg', '', '', 'active'),
(22, 'Aco', 'Sistemas de drenaje', 'LOGO _ACO.jpg', 'img/marcas/LOGO _ACO.jpg', '', '', 'active'),
(23, 'Colmena', 'Tuberías metálicas', 'LOGO_COLMENA.jpg', 'img/marcas/LOGO_COLMENA.jpg', '', '', 'active'),
(24, 'Corzan', 'Tubosistemas en PVC para redes contra incendio', 'LOGO_CORZAN.jpg', 'img/marcas/LOGO_CORZAN.jpg', '', '', 'active'),
(25, 'Elicent', 'Extractores', 'LOGO_EALICENT.jpg', 'img/marcas/LOGO_EALICENT.jpg', '', '', 'active'),
(26, 'Silplas', 'Rejillas, lavaderos y tapa registros', 'LOGO_SILPLAS.jpg', 'img/marcas/LOGO_SILPLAS.jpg', '', '', 'active'),
(27, 'Pleger', 'Válvulas y registros', 'LOGO DE PEGLER.jpg', 'img/marcas/LOGO DE PEGLER.jpg', '', '', 'active'),
(28, 'Blazemaster', 'Tubosistemas en PVC para redes contra incendio', 'LOGO_BLAZEMASTER.jpg', 'img/marcas/LOGO_BLAZEMASTER.jpg', '', '', 'active'),
(29, 'IGT', '', 'LOGO_IGT.jpg', 'img/marcas/LOGO_IGT.jpg', '', '', 'active'),
(30, 'TCL', 'Válvulas y registros', 'LOGO_TCL.jpg', 'img/marcas/LOGO_TCL.jpg', '', '', 'active'),
(31, 'Schlage', 'Cerraduras', 'LOGO_SCHLAGE.jpg', 'img/marcas/LOGO_SCHLAGE.jpg', '', '', 'active');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medidas`
--

CREATE TABLE `medidas` (
  `idMedida` int(12) NOT NULL,
  `medida` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medidas`
--

INSERT INTO `medidas` (`idMedida`, `medida`) VALUES
(1, '1/2\"'),
(2, '1/4\"'),
(3, '3\"'),
(4, '3/4\"'),
(5, '4\"'),
(6, '2 1/2\"'),
(7, '2\"'),
(10, '1 1/2\"'),
(11, '1 1/4\"'),
(12, '1\"');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(12) NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `marca_id` int(12) DEFAULT NULL,
  `imagen` varchar(45) NOT NULL,
  `ubicacion` varchar(100) NOT NULL,
  `subcategoria_id` int(12) DEFAULT NULL,
  `categoria_id` int(12) DEFAULT NULL,
  `filtroUno_id` int(12) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `medidas` varchar(10) DEFAULT NULL,
  `voltaje` varchar(10) DEFAULT NULL,
  `filtro` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `codigo`, `nombre`, `marca_id`, `imagen`, `ubicacion`, `subcategoria_id`, `categoria_id`, `filtroUno_id`, `estado`, `medida`, `voltaje`, `filtro`) VALUES
(1, '72010', 'CODO PVC PRESION\r\n', 3, '072010.jpg', 'img/productos/072010.jpg\r\n', 101, 1, 1012, 'si', 'true', NULL, 1),
(2, '71040', 'TEE PVC PRESION\r\n', 3, '071050.jpg', 'img/productos/071050.jpg\r\n\r\n', 101, 1, 1012, 'si', 'true', NULL, 1),
(3, '72550', 'SEMICODO PVC PRESION\r\n', 3, '072550.jpg', 'img/productos/072550.jpg\r\n\r\n', 101, 1, 1012, 'si', 'true', NULL, 1),
(4, '870616', 'DUCHA ACQUA STORM NEGRA ULTRA\r\n', 4, '870616.jpg', 'img/productos/870616.jpg\r\n\r\n', 101, 1, 1012, 'si', NULL, 'true', 2),
(9, '870617', 'DUCHA ACQUA STORM NEGRO/CR ULTRA', 4, '870617.jpg', 'img/productos/870617.jpg\r\n', 302, 3, NULL, 'si', NULL, 'true', 2),
(10, '580201', 'BASE UNIVERSAL PARA DUCHA SIN SALIDA TINA', 2, '5802011.jpg', 'img/productos/5802011.jpg', 303, 3, 3033, 'si', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosistema`
--

CREATE TABLE `productosistema` (
  `idProducto` int(12) NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `medida_id` int(12) DEFAULT NULL,
  `voltaje_id` int(12) DEFAULT NULL,
  `producto_id` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productosistema`
--

INSERT INTO `productosistema` (`idProducto`, `codigo`, `nombre`, `medida_id`, `voltaje_id`, `producto_id`) VALUES
(1, '072050', 'CODO 1 1/2 PVC PRESION', 10, NULL, 1),
(2, '072040', 'CODO 1 1/4 PVC PRESION', 11, NULL, 1),
(3, '072030', 'CODO 1 PVC PRESION\r\n', 12, NULL, 1),
(4, '072010', 'CODO 1/2 PVC PRESION\r\n', 1, NULL, 1),
(5, '072070', 'CODO 2 1/2 PVC PRESION', 6, NULL, 1),
(6, '072060', 'CODO 2 PVC PRESION\r\n', 7, NULL, 1),
(7, '072080', 'CODO 3 PVC PRESION\r\n', 3, NULL, 1),
(8, '072020', 'CODO 3/4 PVC PRESION\r\n', 4, NULL, 1),
(9, '072090', 'CODO 4 PVC PRESION', 5, NULL, 1),
(10, '071050', 'TEE 1 1/2 PVC PRESION\r\n', 10, NULL, 2),
(11, '071040', 'TEE 1 1/4 PVC PRESION', 11, NULL, 2),
(12, '071030', 'TEE 1 PVC PRESION', 12, NULL, 2),
(13, '071010', 'TEE 1/2 PVC PRESION', 1, NULL, 2),
(14, '071070', 'TEE 2 1/2 PVC PRESION', 6, NULL, 2),
(15, '071060', 'TEE 2 PVC PRESION', 7, NULL, 2),
(16, '071080', 'TEE 3 PVC PRESION', 3, NULL, 2),
(17, '071020', 'TEE 3/4 PVC PRESION', 4, NULL, 2),
(18, '071090', 'TEE 4 PVC PRESION', 5, NULL, 2),
(19, '072550', 'SEMICODO 1 1/2 PVC PRESION', 10, NULL, 3),
(20, '072540', 'SEMICODO 1 1/4 PVC PRESION', 11, NULL, 3),
(21, '072530', 'SEMICODO 1 PVC PRESION', 12, NULL, 3),
(22, '072510', 'SEMICODO 1/2 PVC PRESION', 1, NULL, 3),
(23, '072570', 'SEMICODO 2 1/2 PVC PRESION', 6, NULL, 3),
(24, '072560', 'SEMICODO 2 PVC PRESION', 7, NULL, 3),
(25, '072580', 'SEMICODO 3 PVC PRESION', 3, NULL, 3),
(26, '072520', 'SEMICODO 3/4 PVC PRESION', 4, NULL, 3),
(27, '072590', 'SEMICODO 4 PVC PRESION', 5, NULL, 3),
(28, '870616', 'DUCHA ACQUA STORM NEGRA ULTRA 127V', NULL, 1, 4),
(29, '870530', 'DUCHA ACQUA STORM NEGRA ULTRA 220V', NULL, 2, 4),
(30, '870533', 'DUCHA ACQUA STORM NEGRO/CR ULTRA 127V', NULL, 1, 9),
(31, '870617', 'DUCHA ACQUA STORM NEGRO/CR ULTRA 220V', NULL, 2, 9),
(32, '580201', 'BASE UNIVERSAL PARA DUCHA SIN SALIDA TINA', NULL, NULL, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_medida`
--

CREATE TABLE `producto_medida` (
  `producto_id` int(12) NOT NULL,
  `medida_id` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto_medida`
--

INSERT INTO `producto_medida` (`producto_id`, `medida_id`) VALUES
(1, 1),
(1, 6),
(1, 7),
(1, 3),
(1, 4),
(2, 11),
(2, 10),
(2, 12),
(2, 1),
(2, 6),
(2, 7),
(2, 4),
(2, 5),
(3, 10),
(3, 11),
(3, 12),
(3, 1),
(3, 6),
(3, 7),
(3, 3),
(3, 4),
(3, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_voltaje`
--

CREATE TABLE `producto_voltaje` (
  `producto_id` int(12) NOT NULL,
  `voltaje_id` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto_voltaje`
--

INSERT INTO `producto_voltaje` (`producto_id`, `voltaje_id`) VALUES
(4, 2),
(4, 1),
(9, 1),
(9, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategoria`
--

CREATE TABLE `subcategoria` (
  `idSubCategoria` int(12) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `categoria_id` int(12) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `ubicacion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `subcategoria`
--

INSERT INTO `subcategoria` (`idSubCategoria`, `nombre`, `categoria_id`, `imagen`, `ubicacion`) VALUES
(101, 'Construcción', 1, '101_CONSTRUCCION.png', 'img/categorias/101_CONSTRUCCION.png'),
(102, 'Infraestructura', 1, '102_INFRAESTRUCTURA.png', 'img/categorias/102_INFRAESTRUCTURA.png'),
(103, 'Eléctricos', 1, '103_ELECTRICO.png', 'img/categorias/103_ELECTRICO.png'),
(104, 'Contra Incendio', 1, '104_RED_CONTRA_INCENDIO.png', 'img/categorias/104_RED_CONTRA_INCENDIO.png'),
(105, 'Gas', 1, '105_GAS.png', 'img/categorias/105_GAS.png'),
(201, 'Bola', 2, '201_VALVULAS_BOLA_.png', 'img/categorias/201_VALVULAS_BOLA_.png'),
(202, 'Paso Directo', 2, '202_REGISTRO_PASO_DIRECTO.png', 'img/categorias/202_REGISTRO_PASO_DIRECTO.png'),
(203, 'Globo', 2, '203_REGISTRO_GLOBO.png', 'img/categorias/203_REGISTRO_GLOBO.png'),
(204, 'De pie', 2, '204_VALVULAS_DE_PIE.png', 'img/categorias/204_VALVULAS_DE_PIE.png'),
(205, 'Cheques', 2, '205_CHEQUES.png', 'img/categorias/205_CHEQUES.png'),
(206, 'Regulación', 2, '206_VALVULA__REGULADORA.png', 'img/categorias/206_VALVULA__REGULADORA.png'),
(207, 'Uniones', 2, '207_UNION_.png', 'img/categorias/207_UNION_.png'),
(208, 'Medidores', 2, '208_MEDIDOR_DE_AGUA.png', 'img/categorias/208_MEDIDOR_DE_AGUA.png'),
(209, 'Flotadores', 2, '209_FLOTADORES.png', 'img/categorias/209_FLOTADORES.png'),
(210, 'Acoples', 2, '210_ACOPLES.png', 'img/categorias/210_ACOPLES.png'),
(211, 'Sifones', 2, '211_SIFONES.png', 'img/categorias/211_SIFONES.png'),
(212, 'Desagües', 2, '212_DESAGUE_LAVAMANOS.png', 'img/categorias/212_DESAGUE_LAVAMANOS.png'),
(213, 'Canastillas', 2, '213_CANASTILLAS.png', 'img/categorias/213_CANASTILLAS.png'),
(214, 'Calentadores', 2, '214_CALENTADORES__GAS_.png', 'img/categorias/214_CALENTADORES__GAS_.png'),
(215, 'Cinta PTFE', 2, '215_CINTA_PTFE.png', 'img/categorias/215_CINTA_PTFE.png'),
(301, 'Porcelana Sanitaria', 3, '301_PORCELANA_SANITARIA.png', 'img/categorias/301_PORCELANA_SANITARIA.png'),
(302, 'Duchas Eléctricas', 3, '302_DUCHAS_ELECTRICAS.png', 'img/categorias/302_DUCHAS_ELECTRICAS.png'),
(303, 'Grifería', 3, '303_GRIFERIA_.png', 'img/categorias/303_GRIFERIA_.png'),
(304, 'Lavaplatos', 3, '304_LAVAPLATOS.png', 'img/categorias/304_LAVAPLATOS.png'),
(305, 'Cocinas', 3, '305_COCINAS.png', 'img/categorias/305_COCINAS.png'),
(306, 'Lavaderos', 3, '306_LAVADEROS.png', 'img/categorias/306_LAVADEROS.png'),
(307, 'Extractores', 3, '307_EXTRACTORES.png', 'img/categorias/307_EXTRACTORES.png'),
(308, 'Acero Inoxidable', 3, '308_ACERO_INOXIDABLE.png', 'img/categorias/308_ACERO_INOXIDABLE.png'),
(309, 'Pinturas', 3, '309_PINTURAS.png', 'img/categorias/309_PINTURAS.png'),
(310, 'Rejillas y Tapa Registros', 3, '310_REGILLAS.png', 'img/categorias/310_REGILLAS.png'),
(311, 'Tejas', 3, '311_TEJAS.png', 'img/categorias/311_TEJAS.png'),
(312, 'Cerraduras', 3, '312_CERRADURAS.png', 'img/categorias/312_CERRADURAS.png'),
(313, 'Filtros', 3, '313_FILTROS.png', 'img/categorias/313_FILTROS.png'),
(401, 'Construcción', 4, '401_CONSTRUCCION.png', 'img/categorias/401_CONSTRUCCION.png'),
(402, 'Industria', 4, '402_INDUSTRIA.png', 'img/categorias/402_INDUSTRIA.png'),
(501, 'Herramienta', 5, '501_HERRAMIENTA.png', 'img/categorias/501_HERRAMIENTA.png'),
(502, 'Iluminación', 5, '502_ILUMINACION.png', 'img/categorias/502_ILUMINACION.png'),
(601, 'Geomallas', 6, '601_GEOMALLAS.png', 'img/categorias/601_GEOMALLAS.png'),
(602, 'Geomembranas', 6, '602_GEOMENBRANAS_.png', 'img/categorias/602_GEOMENBRANAS_.png'),
(603, 'Geotextiles', 6, '603_GEOTEXTILES.png', 'img/categorias/603_GEOTEXTILES.png'),
(604, 'Geodrenes', 6, '604_GEO_DRENES.png', 'img/categorias/604_GEO_DRENES.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `voltajes`
--

CREATE TABLE `voltajes` (
  `idVoltaje` int(12) NOT NULL,
  `voltaje` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `voltajes`
--

INSERT INTO `voltajes` (`idVoltaje`, `voltaje`) VALUES
(1, '127V'),
(2, '220V');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idCliente`);

--
-- Indices de la tabla `cotizacion`
--
ALTER TABLE `cotizacion`
  ADD PRIMARY KEY (`idCotizacion`),
  ADD KEY `fk_clienteCotizacion` (`cliente_id`);

--
-- Indices de la tabla `detalle_cotizacion`
--
ALTER TABLE `detalle_cotizacion`
  ADD PRIMARY KEY (`idDetalle`),
  ADD KEY `fk_facturaDetalle` (`cotizacion_id`),
  ADD KEY `fk_productoDetalle` (`producto_id`);

--
-- Indices de la tabla `filtrouno`
--
ALTER TABLE `filtrouno`
  ADD PRIMARY KEY (`idFiltro`),
  ADD KEY `fk_subcategoriaFiltrouno` (`subCategoria_id`);

--
-- Indices de la tabla `manuales`
--
ALTER TABLE `manuales`
  ADD PRIMARY KEY (`idManuales`),
  ADD KEY `fk_marcaManuales` (`marca_id`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`idMarca`);

--
-- Indices de la tabla `medidas`
--
ALTER TABLE `medidas`
  ADD PRIMARY KEY (`idMedida`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`),
  ADD KEY `fk_marcaProducto` (`marca_id`),
  ADD KEY `fk_categoriaProducto` (`categoria_id`),
  ADD KEY `fk_subcategoriaProducto` (`subcategoria_id`),
  ADD KEY `fk_filtrounoProducto` (`filtroUno_id`);
ALTER TABLE `producto` ADD FULLTEXT KEY `nombre` (`nombre`);

--
-- Indices de la tabla `productosistema`
--
ALTER TABLE `productosistema`
  ADD PRIMARY KEY (`idProducto`),
  ADD KEY `fk_medidaProductosistema` (`medida_id`),
  ADD KEY `fk_productoProductosistema` (`producto_id`),
  ADD KEY `fk_voltajeProductosistema` (`voltaje_id`);

--
-- Indices de la tabla `producto_medida`
--
ALTER TABLE `producto_medida`
  ADD KEY `fk_productoMedida` (`producto_id`),
  ADD KEY `fk_medidaProducto` (`medida_id`);

--
-- Indices de la tabla `producto_voltaje`
--
ALTER TABLE `producto_voltaje`
  ADD KEY `fk_productoVoltaje` (`producto_id`),
  ADD KEY `fk_voltajeProducto` (`voltaje_id`);

--
-- Indices de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD PRIMARY KEY (`idSubCategoria`),
  ADD KEY `fk_categoriaSubcategoria` (`categoria_id`);

--
-- Indices de la tabla `voltajes`
--
ALTER TABLE `voltajes`
  ADD PRIMARY KEY (`idVoltaje`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idCategoria` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idCliente` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cotizacion`
--
ALTER TABLE `cotizacion`
  MODIFY `idCotizacion` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_cotizacion`
--
ALTER TABLE `detalle_cotizacion`
  MODIFY `idDetalle` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `manuales`
--
ALTER TABLE `manuales`
  MODIFY `idManuales` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `idMarca` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `medidas`
--
ALTER TABLE `medidas`
  MODIFY `idMedida` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `productosistema`
--
ALTER TABLE `productosistema`
  MODIFY `idProducto` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `voltajes`
--
ALTER TABLE `voltajes`
  MODIFY `idVoltaje` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cotizacion`
--
ALTER TABLE `cotizacion`
  ADD CONSTRAINT `fk_clienteCotizacion` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`idCliente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalle_cotizacion`
--
ALTER TABLE `detalle_cotizacion`
  ADD CONSTRAINT `fk_facturaDetalle` FOREIGN KEY (`cotizacion_id`) REFERENCES `cotizacion` (`idCotizacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_productoDetalle` FOREIGN KEY (`producto_id`) REFERENCES `productosistema` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `filtrouno`
--
ALTER TABLE `filtrouno`
  ADD CONSTRAINT `fk_subcategoriaFiltrouno` FOREIGN KEY (`subCategoria_id`) REFERENCES `subcategoria` (`idSubCategoria`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `manuales`
--
ALTER TABLE `manuales`
  ADD CONSTRAINT `fk_marcaManuales` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`idMarca`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_categoriaProducto` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`idCategoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_filtrounoProducto` FOREIGN KEY (`filtroUno_id`) REFERENCES `filtrouno` (`idFiltro`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_marcaProducto` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`idMarca`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_subcategoriaProducto` FOREIGN KEY (`subcategoria_id`) REFERENCES `subcategoria` (`idSubCategoria`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productosistema`
--
ALTER TABLE `productosistema`
  ADD CONSTRAINT `fk_medidaProductosistema` FOREIGN KEY (`medida_id`) REFERENCES `medidas` (`idMedida`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_productoProductosistema` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_voltajeProductosistema` FOREIGN KEY (`voltaje_id`) REFERENCES `voltajes` (`idVoltaje`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto_medida`
--
ALTER TABLE `producto_medida`
  ADD CONSTRAINT `fk_medidaProducto` FOREIGN KEY (`medida_id`) REFERENCES `medidas` (`idMedida`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_productoMedida` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto_voltaje`
--
ALTER TABLE `producto_voltaje`
  ADD CONSTRAINT `fk_productoVoltaje` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_voltajeProducto` FOREIGN KEY (`voltaje_id`) REFERENCES `voltajes` (`idVoltaje`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD CONSTRAINT `fk_categoriaSubcategoria` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`idCategoria`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
