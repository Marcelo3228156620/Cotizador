<?php

    include_once '../PDO/Database.php';
    include_once '../models/producto.php';

    if(isset($_GET['get-item'])){
        print("hola");
        die();
        $id =$_GET['get-item'];
        if($id == '') {
            echo json_encode(['statuscode' => 400, 'response' => 'No hay valor para id']);
        } else {
            $productos = new Producto();
            $item = $productos->getByIdCart($id);
            echo json_encode(['statuscode' => 200, 
                        'item' => $item]);
        }
    }