<?php

 if($_POST['nombre']) {
     $nombre = $_POST['nombre'];
     $apellido = $_POST['apellido'];
     $telefono = $_POST['telefono'];
     $correo = $_POST['correo'];
     $to = "pasante.sistemas@fenusa.com.co";
    $subject = "Cotizacion";
    $message = "Hola $nombre";
    $headers = "From: ". $correo ." " . "\r\n" . "CC: pasante.sistemas@fenusa.com.co";

    mail($to, $subject, $message, $headers);
    print("Se envio");
 }