<?php

require 'models/subcategoria.php';

class subcategoriaController
{
    private $subcategoriaModel;

    public function __construct()
    {
        $this->subcategoriaModel = new Subcategoria;
    }

    public function Index()
    {
        return $this->subcategoriaModel->getAll();
    }

    public function mostrar()
    {
        if(isset($_POST['id'])) {
            $id = $_POST['id'];
            $subcategorias = $this->subcategoriaModel->getById($id);
            echo json_encode($subcategorias, JSON_UNESCAPED_UNICODE);
        }
    }
}