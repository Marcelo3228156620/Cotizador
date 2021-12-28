<?php

 class Exportar
 {
     private $pdo;

     public function __construct()
     {
         try {
             $this->pdo = new Database;
         } catch (PDOException $e) {
             die($e->getMessage());
         }
     }

     public function select($id)
     {
         try {

             $strSql = "SELECT cl.nombre, cl.apellido, cl.correo,
             cl.telefono, dc.cantidad, c.idCotizacion, c.fecha, p.codigo, p.nombre AS producto
             FROM detalle_cotizacion AS dc
             INNER JOIN cotizacion AS c
             ON dc.cotizacion_id = c.idCotizacion
             INNER JOIN producto AS p
             ON dc.producto_id = p.idProducto
             INNER JOIN cliente AS cl
             ON c.cliente_id = cl.idCliente
             WHERE c.idCotizacion =:id";
             $arrayData = ['id' => $id];
             return $this->pdo->select($strSql, $arrayData);
         } catch (PDOException $e) {
             die($e->getMessage());
         }
     }
 }