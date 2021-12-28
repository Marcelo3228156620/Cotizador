<?php

    class Paginacion
    {
        private $fila;

        public function __construct()
        {
            try {
                $this->pdo = new Database;
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function paginar($tabla, $foreignKey, $id)
        {
            try {
                $strSql = "SELECT count(*) as filas FROM  $tabla WHERE $foreignKey=:id";
                $arrayData = ['id' => $id];
                return $this->pdo->selectfetch($strSql, $arrayData);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }
    }