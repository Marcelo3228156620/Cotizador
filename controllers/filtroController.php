<?php

require 'models/filtro.php';

class filtroController
{
    private $filtroModel;

    public function __construct()
    {
        $this->filtroModel = new filtro;
    }

    public function Index()
    {
        return $this->filtroModel->getAll();
    }
}