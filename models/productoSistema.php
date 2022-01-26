<?php 

    class productoSistema
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

        public function getById($idProducto, $idFiltro, $filtro = null)
        {
            if(!empty($filtro)){
                /*print("existe");
                die();*/
                if($filtro == 1){
                    try {
                        $strSql = "SELECT idProducto FROM productosistema WHERE medida_id LIKE '$idFiltro' AND producto_id LIKE '$idProducto'";
                        return $this->pdo->select($strSql);
                    } catch (PDOException $e) {
                        die($e->getMessage());
                    }
                } else {
                    try {
                        $strSql = "SELECT idProducto FROM productosistema WHERE voltaje_id LIKE '$idFiltro' AND producto_id LIKE '$idProducto'";
                        return $this->pdo->select($strSql);
                    } catch (PDOException $e) {
                        die($e->getMessage());
                    }
                }
            } else {
                /*print("Noexiste");
                die();*/
                try {
                    $strSql = "SELECT idProducto FROM productosistema WHERE producto_id LIKE '$idProducto'";
                    /*print($strSql);
                    die();*/
                    return $this->pdo->select($strSql);
                } catch (PDOException $e) {
                    die($e->getMessage());
                }
            }
        }
    }