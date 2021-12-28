<?php

class marca
{
    private $idMarca;
    private $nombre;
    private $logo;
    private $ubicacion;
    private $listaPrecio;
    private $listaUbicacion;
    private $status;
    private $manual_id;
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

    public function ListPrice()
    {
        try {
            $strSql = "SELECT * FROM marca WHERE status LIKE 'active'";
            return $this->pdo->select($strSql);
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
}