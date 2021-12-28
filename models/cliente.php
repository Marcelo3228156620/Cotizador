<?php

    class Cliente
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
                $strSql = "SELECT * FROM cliente";
                return $this->pdo->select($strSql);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function newClient($data)
        {
            try {
                return $this->pdo->insert("cliente", $data);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }
    }