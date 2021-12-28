<?php

include_once 'carrito.php';
require 'models/producto.php';

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
        }

        public function add() {
            /*print_r("hols");
            die();*/
            if(isset($_POST['id'])) {
                $carrito = new Carrito();
                $quantity = $_POST['quantity'];
                //intval($quantity);
                /*print_r($quantity);
                die();*/
                $responsive = $carrito->addItem($_POST['id'], $quantity);
                /*print("Hola".$responsive);
                die();*/
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
                $totalItems += $itemProducto['cantidad'];
                array_push($fullItems, $itemProducto);
            }

            $resArray = array('info' => ['count' => $totalItems] , 'items' => $fullItems);
            

            echo json_encode($resArray);
        }
    }