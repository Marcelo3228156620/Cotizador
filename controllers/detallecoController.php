<?php

    require 'models/detalleco.php';
    require 'carrito.php';
    /*require 'controller/cotizacionController.php';*/
    require 'vendor/autoload.php';
    
    use PhpOffice\PhpSpreadsheet\Spreadsheet;
    use PhpOffice\PhpSpreadsheet\Writer\xlsx;

    class detallecoController{

        private $detallecoModel;
        private $carrito;

        public function __construct()
        {
            $this->detallecoModel = new Detalleco;
            $this->carrito = new Carrito;
            $this->spreadsheet = new Spreadsheet();
            //$this->spreadsheet = new Spreadsheet();
        }

        public function Index()
        {
            $detalleco = $this->detallecoModel->getAll();
            require 'views/detalleco/detalleco.php';
        }

        public function save()
        {
            try {
                if(isset($_REQUEST['cotizacionId'])) {
                    $cotizacionId = $_REQUEST['cotizacionId'];
                    $itemsCarrito = json_decode($this->carrito->load(), 1);
                    foreach ($itemsCarrito as $itemsCarrito) {
                        $cantidad = $itemsCarrito['cantidad'];
                        $producto_id = $itemsCarrito['id'];
                        $detalle = array("cantidad"=>"$cantidad","producto_id"=>"$producto_id","cotizacion_id"=>"$cotizacionId");
                        $this->detallecoModel->newDetalleco($detalle);
                    }
                    $this->carrito->sessionOff();
                    
                    header('Location: ?controller=producto');
                    /*$to = "Pasante.sistemas@fenusa.com.co";
                    $subject = "Cotizacion N°: ". $cotizacionId ." ";
                    $message = "Acaba de recibir una nueva Cotización";
                    $headers = "From:  " . "\r\n" . "CC: pasante.sistemas@fenusa.com.co";
                    mail($to, $subject, $message, $headers);*/
                    /*echo "<script>alert('Su cotizacion es la numero: '+$cotizacionId);
                    window.location.href = '?controller=producto';</script>";*/
                    header('Location: ?controller=producto');
                }
            } catch (Exception $e) { 
                die($e->getMessage());
            }
        }
    }