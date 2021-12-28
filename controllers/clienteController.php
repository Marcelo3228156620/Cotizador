<?php

    require 'models/cliente.php';

    class clienteController{

        private $clienteModel;

        public function __construct()
        {
            $this->clienteModel = new Cliente;
        }

        public function Index()
        {
            $clientes = $this->clienteModel->getAll();
            require 'views/cliente/cliente.php';
        }

        public function save()
        {
            try {
                if(isset($_POST['nombre'])) {                    
                    $clientId = $this->clienteModel->newClient($_POST);
                    header('Location: ?controller=cotizacion&method=save&clientId='.$clientId);
                }
            } catch (Exception $e) {
                die($e->getMessage());
            }
        }

        public function enviarEmail()
        {
            print("holax");
            die();
        }
    }