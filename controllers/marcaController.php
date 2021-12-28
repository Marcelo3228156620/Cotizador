<?php

require 'models/marca.php';

class marcaController
{
    private $marcaModel;

    public function __construct()
    {
        $this->marcaModel = new Marca;
    }

    public function Index()
    {
        
    }

    public function marcaByList()
    {
        $marcas = $this->marcaModel->ListPrice();
        require 'views/listaPrecios.php';
    }
}