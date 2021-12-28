CREATE DATABASE cotizadorP;

USE cotizadorP;

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
    marca_id INT(12) NOT NULL,
    imagen VARCHAR(45) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    subcategoria_id INT(12) NOT NULL,
	categoria_id INT(12) NOT NULL
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
	logo VARCHAR(45) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL
);

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
	producto 
ADD CONSTRAINT
	fk_subcategoriaProducto
FOREIGN KEY
	(subcategoria_id)
REFERENCES
	subcategoria(idSubCategoria)
ON UPDATE CASCADE
ON DELETE CASCADE;

/*CREATE TABLE usuario (
	idUsuario INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nombre VARCHAR(45) NOT NULL,
	usuario VARCHAR(30) NOT NULL,
	clave VARCHAR(30) NOT NULL
);*/