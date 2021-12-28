<?php

class Manuales
{
    private $idManuales;
    private $nombre;
    private $ubicacionArc;
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
            $strSql = "SELECT * FROM marca";
            return $this->pdo->select($strSql);
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }

    public function manuales()
    {
        try {
            $strSql = "SELECT * FROM marca";
            return $this->pdo->select($strSql);
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }

    public function manualesByMarca($id)
    {
        try {
            $strSql = "SELECT m.* FROM manuales AS m 
            INNER JOIN marca AS ma ON ma.idMarca = m.marca_id 
            WHERE m.marca_id=:id";
            $arrayData = ['id' => $id];
            return $this->pdo->select($strSql, $arrayData);
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
}