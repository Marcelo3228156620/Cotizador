<?php

require 'models/categoria.php';

class categoriaController
{
    private $categoriaModel;

    public function __construct()
    {
        $this->categoriaModel = new Categoria;
    }

    public function Index()
    {
        return $this->categoriaModel->getAll();
    }
}