<?php

include_once 'carrito.php';
require 'models/producto.php';
require 'models/medida.php';
require 'models/voltaje.php';

    class carritoController {

        /*public function add($carritoModel) {
            print_r("HOLA");
            die();
            if(isset($_POST['id'])) {
                $res = $carritoModel->add($_GET['id']);
                echo $res;
            } else {
        
            }
        }*/

        public function __construct()
        {
            $this->carrito = new Carrito();
            $this->productoModel = new Producto();
            $this->medidasModel = new Medida();
            $this->voltajeModel = new Voltaje();
        }

        public function add() {
            if(isset($_POST['id'])) {
                if(isset($_POST['medidas'])) {
                    $medida = $this->medidasModel->getById($_POST['medidas']);
                    $carrito = new Carrito();
                    $responsive = $carrito->addItem($_POST['id'], $_POST['quantity'], 1, $_POST['medidas'], $medida[1]);
                }else if(isset($_POST['voltaje'])) {
                    $voltaje = $this->voltajeModel->getById($_POST['voltaje']);
                    $carrito = new Carrito();
                    $responsive = $carrito->addItem($_POST['id'], $_POST['quantity'], 2, $_POST['voltaje'], $voltaje[1]);
                } else {
                    $carrito = new Carrito();
                    $responsive = $carrito->addItem($_POST['id'], $_POST['quantity'], "", "", "");
                }

                header("Location: " . $_SERVER["HTTP_REFERER"]);
            } else {
                print_r("hols");
                die();
            }
        }

        public function mostrar()
        {
            $carrito = new Carrito();
            $itemsCarrito = json_decode($carrito->load(),1);
            $fullItems = [];
            $totalItems = 0;
            foreach ($itemsCarrito as $itemCarrito) {
                $httpRequest = $this->productoModel->getByIdCart($itemCarrito['id']);
                $itemProducto = json_decode($httpRequest, 1)['item'];
                $itemProducto['cantidad'] = $itemCarrito['cantidad'];
                $itemProducto['idFiltro'] = $itemCarrito['idFiltro'];
                $itemProducto['nfiltro'] = $itemCarrito['nfiltro'];
                $totalItems += $itemProducto['cantidad'];
                array_push($fullItems, $itemProducto);
            }

            $resArray = array('info' => ['count' => $totalItems] , 'items' => $fullItems);
            

            echo json_encode($resArray);
        }
    }