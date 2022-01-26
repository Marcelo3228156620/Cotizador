<?php

require 'models/cotizacion.php';
require 'models/exportar.php';
require 'models/detalleco.php';
require 'models/productoSistema.php';
require 'carrito.php';

class cotizacionController
{

    private $cotizacionModel;
    private $exportarModel;
    private $detallecoModel;

    public function __construct()
    {
        $this->carrito = new Carrito;
        $this->detallecoModel = new Detalleco;
        $this->cotizacionModel = new Cotizacion;
        $this->exportarModel = new Exportar;
        $this->prdtsistemasModel = new productoSistema;
    }

    public function admin()
    {
        $cotizaciones = $this->cotizacionModel->getAll();
        require 'views/admin.php';
    }

    public function Index()
    {
        $cotizaciones = $this->cotizacionModel->getAll();
        require 'views/cotizacion/cotizacion.php';
    }

    public function save()
    {
        try {
            if (isset($_REQUEST['clientId'])) {
                $cliente_id = $_REQUEST['clientId'];
                $fecha = date('Y-m-d H:i:s');
                $cotiza = array("fecha" => "$fecha", "cliente_id" => "$cliente_id");
                $cotizacionId = $this->cotizacionModel->newCotizacion($cotiza);
                    $itemsCarrito = json_decode($this->carrito->load(), 1);
                    /*print_r($itemsCarrito);
                    die();*/
                    foreach ($itemsCarrito as $itemsCarrito) {
                        $cantidad = $itemsCarrito['cantidad'];
                        $id = $this->prdtsistemasModel->getById($itemsCarrito['id'], $itemsCarrito['idFiltro'], $itemsCarrito['filtro']);
                        $id = $id[0]->idProducto;
                        $detalle = array("cantidad"=>"$cantidad","producto_id"=>"$id","cotizacion_id"=>"$cotizacionId");
                        $this->detallecoModel->newDetalleco($detalle);
                    }
                    $this->carrito->sessionOff();
                header('Location: ?controller=producto&method=cart&cotizacionId=' . $cotizacionId);
            }
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    public function edit()
    {
        if(isset($_REQUEST['id'])){
            $id = $_REQUEST['id'];
            $cotizacion = $this->cotizacionModel->getById($id);
            require 'views/cotizacion/edit.php';
        }
    }

    public function update()
    {
        if(isset($_POST)) {
            if($_POST['cotizacionSap']){
                $_POST["fechaSap"] = date('Y-m-d H:i:s');
                $this->cotizacionModel->editCotizacion($_POST);
                header('Location: ?controller=cotizacion&method=admin');
            } else {
                header('Location: ?controller=cotizacion&method=admin');
            }
        } else {
            echo "Error, accion no permitida";
        }
    }

    public function search()
    {
        if(isset($_POST)) {
            $id = $_POST['idCotizacion'];
            $cotizaciones = $this->cotizacionModel->getById($id);
            /*print_R($res);
            die();*/
            if($cotizaciones==null) {
                require 'views/admin.php';
            } else {
                require 'views/admin.php';
            }
        } else {

        }
    }

    public function view()
    {
        if(isset($_GET['id'])) {
            $cotizacion = $this->cotizacionModel->viewCotizacion($_GET['id']);
            require 'views/cotizacion/viewCotizacion.php';
        }
    }
}
