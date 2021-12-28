<?php

    include_once 'carrito.php';

    if(isset($_GET['action'])) {
        $accion = $_GET['action'];
        $carrito = new Carrito();

        switch($accion) {
            case 'mostrar':
                mostrar($carrito);
                break;

            case 'add':
                add($carrito);
                break;    

            case 'remove':
                remove($carrito);
                break; 
                
            case 'delete':
                delete($carrito);
                break; 
        }
    } else {

    }

    function mostrar($carrito) {
        //cargar arreglo en la sesion
        //consultar DB para actualizar valores de los productos
        $itemsCarrito = json_decode($carrito->load(),1);
        /*print_r($itemsCarrito);
        die();*/
        $fullItems = [];
        $totalItems = 0;

        foreach ($itemsCarrito as $itemCarrito) {

            /*print_R('https://sistemasnuruena.com.co/controllers/api-producto.php?get-item=' . $itemCarrito['id']);
            die();*/
            $httpRequest = file_get_contents('./api-producto.php?get-item='.$itemCarrito['id']);
            print("holas ".$httpRequest." holas");
            die();
            /*$httpRequest = header("Location: /api-producto.php?get-item=".$itemCarrito['id']);
            print("holas ".$httpRequest." holas");
            die();*/
            $itemProducto = json_decode($httpRequest, 1)['item'];
            //if(isset($itemProducto)){}
            $itemProducto['cantidad'] = $itemCarrito['cantidad'];

            $totalItems += $itemProducto['cantidad'];
            /*print_R($itemProducto);
            die();*/
            array_push($fullItems, $itemProducto);
        }
        $resArray = array('info' => ['count' => $totalItems] , 'items' => $fullItems);
        /*print_R($resArray);
        die();*/
        echo json_encode($resArray);
    }

    function add($carrito) {
        if(isset($_POST['id'])) {
            $res = $carrito->add($_POST['id']);
            echo $res;
        } else {
            echo "Error";
        }
    }

    function remove($carrito) {
        if(isset($_POST['id'])) {
            $res = $carrito->remove($_POST['id']);
            if($res) {
                echo json_encode(['statuscode' => 200]);
            } else {
                echo json_encode(['statuscode' => 400]);
            }
        } else {
            echo json_encode(['statuscode' => 404,
                'response' => 'No se puede procesar la solicitud, id vacio']);
        }
    }

    function delete($carrito) {
        if(isset($_POST['id'])) {
            $res = $carrito->removeProduct($_POST['id']);
            if($res) {
                echo json_encode(['statuscode' => 200]);
            } else {
                echo json_encode(['statuscode' => 400]);
            }
        } else {
            echo json_encode(['statuscode' => 404,
                'response' => 'No se puede procesar la solicitud, id vacio']);
        }
    }