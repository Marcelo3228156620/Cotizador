<?php

    class cotizacion
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

        public function getAll()
        {
            try {
                $strSql = "SELECT c.*, cl.nombre, cl.apellido FROM cotizacion AS c 
                INNER JOIN cliente AS cl 
                ON cl.idCliente = c.cliente_id
                ORDER BY idCotizacion DESC";
                return $this->pdo->select($strSql);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function newCotizacion($data)
        {
            try {
                return $this->pdo->insert("cotizacion", $data);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function maxRegister()
        {
            try {
                $strSql = "SELECT MAX(consecutivo) as con FROM cotizacion LIMIT 1";
                $res = $this->pdo->select($strSql);
                return $res[0]->con + 1;
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function getById($id)
        {
            try {
                $strSql = "SELECT c.*, cl.nombre, cl.apellido FROM cotizacion AS c
                INNER JOIN cliente AS cl
                ON cl.idCliente = c.cliente_id
                WHERE idCotizacion=:id";
                $arrayData = ['id' => $id];
                return $this->pdo->select($strSql, $arrayData);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function editCotizacion($data)
        {
            try {
                $strWhere = 'idCotizacion = '. $data['idCotizacion'];
                $table = 'cotizacion';
                $this->pdo->update($table, $data, $strWhere);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function viewCotizacion($id)
        {
            try {
                $strSql = "SELECT cl.nombre, cl.apellido, cl.correo,
                cl.telefono, dc.cantidad, c.idCotizacion, c.fecha, p.codigo, p.nombre AS producto
                FROM detalle_cotizacion AS dc
                INNER JOIN cotizacion AS c
                ON dc.cotizacion_id = c.idCotizacion
                INNER JOIN productosistema AS p
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