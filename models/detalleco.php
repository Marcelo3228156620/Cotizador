<?php

    class Detalleco
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
                $strSql = "SELECT * FROM detalle_cotizacion";
                return $this->pdo->select($strSql);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function newDetalleco($data)
        {
            try {
                $this->pdo->insert("detalle_cotizacion", $data);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }
    }