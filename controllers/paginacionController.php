<?php

    require 'models/paginacion.php';

    class paginacionController{

        private $paginacionModel;

        public function __construct()
        {
            $this->paginacionModel = new Paginacion;
        }

        /*public function Index()
        {
            $size = 3;
            $filas = $this->paginacionModel->paginar("producto");
            $paginas = $filas['filas'] / $size;
            $paginas = ceil($paginas);
        }*/

        public function paginacion($tabla ,$foreignKey, $id)
        {
            $size = 12;
            $filas = $this->paginacionModel->paginar($tabla, $foreignKey, $id);
            $paginas = $filas['filas'] / $size;
            return ceil($paginas);
        }
    }