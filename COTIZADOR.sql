CREATE DATABASE cotizador;

USE cotizador;

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
    marca_id INT(12) NULL,
    imagen VARCHAR(45) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    subcategoria_id INT(12) NULL,
	categoria_id INT(12) NULL,
	filtroUno_id INT(12) NULL,
	estado VARCHAR(45) NOT NULL,
	medida VARCHAR(10) NULL,
	voltaje VARCHAR(10) NULL,
	filtro INT(12) NULL
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

CREATE TABLE medidas (
  idMedida int(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  medida varchar(20) NOT NULL
);

CREATE TABLE voltajes (
  idVoltaje int(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  voltaje varchar(20) NOT NULL
);

CREATE TABLE producto_medida (
  producto_id int(12) NOT NULL,
  medida_id int(12) NOT NULL
);

CREATE TABLE producto_voltaje (
  producto_id int(12) NOT NULL,
  voltaje_id int(12) NOT NULL
);

ALTER TABLE producto_medida
  ADD KEY fk_productoMedida (producto_id),
  ADD KEY fk_medidaProducto (medida_id);

ALTER TABLE producto_voltaje
  ADD KEY fk_productoVoltaje (producto_id),
  ADD KEY fk_voltajeProducto (voltaje_id);

ALTER TABLE 
	producto_color
ADD CONSTRAINT 
	fk_colorProducto 
FOREIGN KEY 
	(color_id) 
REFERENCES
	colores(idColor) 
ON DELETE CASCADE 
ON UPDATE CASCADE,
ADD CONSTRAINT 
	fk_productoColor 
FOREIGN KEY 
	(producto_id) 
REFERENCES 
	producto (idProducto) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE 
	producto_medida
ADD CONSTRAINT 
	fk_medidaProducto 
FOREIGN KEY 
	(medida_id) 
REFERENCES 
	medidas(idMedida) 
ON DELETE CASCADE 
ON UPDATE CASCADE,
ADD CONSTRAINT 
	fk_productoMedida 
FOREIGN KEY 
	(producto_id) 
REFERENCES 
	producto(idProducto) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE 
	producto_voltaje
ADD CONSTRAINT 
	fk_productoVoltaje 
FOREIGN KEY 
	(producto_id) 
REFERENCES 
	producto(idProducto) 
ON DELETE CASCADE
ON UPDATE CASCADE,
ADD CONSTRAINT 
	fk_voltajeProducto 
FOREIGN KEY 
	(voltaje_id) 
REFERENCES 
	voltajes(idVoltaje) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

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
	productosistema(idProducto)
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


CREATE TABLE productoSistema (
	idProducto INT(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    codigo VARCHAR(20) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
	medida_id INT(12) NULL,
	voltaje_id INT(12) NULL,
	producto_id INT(12) NULL
);

ALTER TABLE
	productoSistema 
ADD CONSTRAINT
	fk_medidaProductoSistema
FOREIGN KEY
	(medida_id)
REFERENCES
	medidas(idMedida)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE
	productoSistema 
ADD CONSTRAINT
	fk_productoProductoSistema
FOREIGN KEY
	(producto_id)
REFERENCES
	producto(idProducto)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE
	productoSistema 
ADD CONSTRAINT
	fk_voltajeProductoSistema
FOREIGN KEY
	(voltaje_id)
REFERENCES
	voltajes(idVoltaje)
ON UPDATE CASCADE
ON DELETE CASCADE;