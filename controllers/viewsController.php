<?php

class viewsController
{
    public function Index()
    {
        require 'views/index.php';
    }

    public function quienes_somos()
    {
        require 'views/quienesSomos.php';
    }

    public function nuestras_marcas()
    {
        require 'views/nuestrasMarcas.php';
    }

    public function contacto()
    {
        require 'views/contacto.php';
    }

    public function servicio()
    {
        require 'views/servicios.php';
    }
}