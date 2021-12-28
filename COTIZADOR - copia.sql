CREATE DATABASE cotizadorPR;

USE cotizadorPR;

CREATE TABLE cliente (
	idCliente INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    correo VARCHAR(90) NOT NULL,
    telefono VARCHAR(12) NOT NULL
);

CREATE TABLE producto (
	idProducto INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    codigo VARCHAR(20) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    referenciaProveedor VARCHAR(45) NOT NULL,
    marca_id INT(12) NULL,
    imagen VARCHAR(45) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    subcategoria_id INT(12) NULL,
	categoria_id INT(12) NULL,
	filtroUno_id INT(12) NULL,
	estado VARCHAR(45) NOT NULL
);

CREATE TABLE categoria (
	idCategoria INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    imagen VARCHAR(45) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL
);

CREATE TABLE subcategoria (
	idSubCategoria INT(12) PRIMARY KEY NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    categoria_id INT(12) NOT NULL,
    imagen VARCHAR(45) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL
);

CREATE TABLE filtroUno (
	idFiltro INT(12) PRIMARY KEY NOT NULL,
    nombre VARCHAR(45) NOT NULL,
	subCategoria_id INT(12) NOT NULL
);

/*CREATE TABLE filtrouno_filtrodos (
	idFiltrouno_fitroDos INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	filtroUno_id INT(12) NOT NULL,
	filtroDos_id INT(12) NOT NULL
);*/

/*CREATE TABLE filtroDos (
	idFiltroDos INT(12) PRIMARY KEY NOT NULL,
    nombre VARCHAR(45) NOT NULL
);*/

CREATE TABLE cotizacion (
	idCotizacion INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cotizacionSap VARCHAR(12) NOT NULL,
    fecha DATETIME NOT NULL,
	fechaSap DATETIME NOT NULL, 
    cliente_id INT(12) NOT NULL
);

CREATE TABLE detalle_cotizacion (
	idDetalle INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cantidad INT(12) NOT NULL,
    producto_id INT(12) NOT NULL,
    cotizacion_id INT(12) NOT NULL
);

CREATE TABLE marca (
	idMarca INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nombre VARCHAR(45) NOT NULL,
	descripcion VARCHAR(60) NOT NULL,
	logo VARCHAR(45) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
	listaPrecio VARCHAR(50) NOT NULL,
	listaUbicacion VARCHAR(100) NOT NULL,
	status VARCHAR(20) NOT NULL
);

CREATE TABLE manuales (
	idManuales INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	ubicacionArc VARCHAR(100) NOT NULL,
	marca_id INT(12) NULL
);

ALTER TABLE
	manuales
ADD CONSTRAINT
	fk_marcaManuales
FOREIGN KEY
	(marca_id)
REFERENCES
	marca(idMarca)
ON UPDATE CASCADE
ON DELETE CASCADE;

 ALTER TABLE
	producto
ADD CONSTRAINT
	fk_marcaProducto
FOREIGN KEY
	(marca_id)
REFERENCES
	marca(idMarca)
ON UPDATE CASCADE
ON DELETE CASCADE;

 ALTER TABLE
	producto
ADD CONSTRAINT
	fk_categoriaProducto
FOREIGN KEY
	(categoria_id)
REFERENCES
	categoria(idCategoria)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE 
	cotizacion
ADD CONSTRAINT
	fk_clienteCotizacion
FOREIGN KEY 
	(cliente_id)
REFERENCES
	cliente(idCliente)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE
	detalle_cotizacion
ADD CONSTRAINT
	fk_productoDetalle
FOREIGN KEY 
	(producto_id)
REFERENCES
	producto(idProducto)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE
	detalle_cotizacion
ADD CONSTRAINT
	fk_facturaDetalle
FOREIGN KEY
	(cotizacion_id)
REFERENCES
	cotizacion(idCotizacion)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE
	subcategoria
ADD CONSTRAINT
	fk_categoriaSubcategoria
FOREIGN KEY
	(categoria_id)
REFERENCES
	categoria(idCategoria)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE
	filtroUno
ADD CONSTRAINT
	fk_subcategoriaFiltrouno
FOREIGN KEY
	(subCategoria_id)
REFERENCES
	subcategoria(idSubCategoria)
ON UPDATE CASCADE
ON DELETE CASCADE;

/*ALTER TABLE
	filtrouno_filtrodos
ADD CONSTRAINT
	fk_filtrouno_filtrodos_filtrouno1
FOREIGN KEY
	(filtroUno_id)
REFERENCES
	filtroUno(idFiltro)
ON UPDATE CASCADE
ON DELETE CASCADE;*/

/*ALTER TABLE
	filtrouno_filtrodos
ADD CONSTRAINT
	fk_filtrouno_filtrodos_filtrodos
FOREIGN KEY
	(filtroDos_id)
REFERENCES
	filtroDos(idfiltroDos)
ON UPDATE CASCADE
ON DELETE CASCADE;*/

/*ALTER TABLE
	filtroDos
ADD CONSTRAINT
	fk_filtrounoFiltrodos
FOREIGN KEY
	(filtroUno_id)
REFERENCES
	filtroUno(idFiltro)
ON UPDATE CASCADE
ON DELETE CASCADE;*/

ALTER TABLE
	producto 
ADD CONSTRAINT
	fk_subcategoriaProducto
FOREIGN KEY
	(subcategoria_id)
REFERENCES
	subcategoria(idSubCategoria)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE
	producto 
ADD CONSTRAINT
	fk_filtrounoProducto
FOREIGN KEY
	(filtrouno_id)
REFERENCES
	filtroUno(idFiltro)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE producto ADD FULLTEXT(nombre);
ALTER TABLE producto ADD FULLTEXT(codigo);
