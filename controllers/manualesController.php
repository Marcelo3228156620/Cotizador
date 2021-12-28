<?php

require 'models/manuales.php';

class manualesController
{
    private $manualesModel;

    public function __construct()
    {
        $this->manualesModel = new Manuales;
    }

    public function Index()
    {

    }

    public function manuales()
    {
        $marcas = $this->manualesModel->manuales();
        require 'views/manuales.php';
    }

    public function manualesByMarca()
    {
        if (isset($_REQUEST['m'])) {
            $manuales = $this->manualesModel->manualesByMarca($_REQUEST['m']);
            /*print_R($manuales);
            die();*/
            require 'views/manualesByMarca.php';
        }
    }
}