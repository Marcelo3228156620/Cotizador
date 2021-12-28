<?php

require 'models/producto.php';
require 'paginacionController.php';
require 'carrito.php';
require 'models/categoria.php';
require 'models/subcategoria.php';
require 'models/marca.php';
require 'models/filtro.php';

class productoController
{

    private $productoModel;
    private $paginacionC;
    private $carrito;
    private $subcategoria;
    private $marcaModel;
    private $filtroModel;

    public function __construct()
    {
        $this->paginacionC = new paginacionController;
        $this->productoModel = new Producto;
        $this->carrito = new Carrito;
        $this->categoriaModel = new Categoria;
        $this->subcategoria = new Subcategoria;
        $this->marcaModel = new Marca;
        $this->filtroModel = new filtro;

    }

    public function Index()
    {
        $productos = $this->productoModel->getAll();
        require 'views/index.php';
    }

    public function mostrarProductos()
    {
        if(isset($_GET['pagina'])) {
            $iniciar = ($_GET['pagina']-1)*12;
            $products = $this->productoModel->productLimit($iniciar);
            require 'views/products.php';
        } else {
            $products = $this->productoModel->getAll();
            require 'views/products.php';
        }
    }

    public function productsBy()
    {
        if(isset($_GET['pag'])) {
            $iniciar = ($_GET['pag']-1)*12;
            if (isset($_GET['a'])) {
                $id = $_GET['id'];
                if($_GET['a'] == 'c') {
                    $paginas = $this->paginacionC->paginacion("producto", 'categoria_id', $id);
                    $products = $this->productoModel->productsBy($id, 'categoria_id', $iniciar);
                    require 'views/products.php';
                } elseif($_GET['a'] == 's') {
                    if(isset($_GET['sf'])) {
                        if(isset($_GET['f'])) {
                            $sf = $_GET['f'];
                            $paginas = $this->paginacionC->paginacion("producto", 'filtroUno_id', $sf);
                            $products = $this->productoModel->productsBy($sf, 'filtroUno_id', $iniciar);
                            $filtros = $this->filtroModel->getAll();
                            require 'views/products.php';
                        }
                    } else {
                        $paginas = $this->paginacionC->paginacion("producto", 'subcategoria_id', $id);
                        $products = $this->productoModel->productsBy($id, 'subcategoria_id', $iniciar);
                        $filtros = $this->filtroModel->getAll();
                        require 'views/products.php';
                    }
                } elseif($_GET['a'] == 'm') {
                    $paginas = $this->paginacionC->paginacion("producto", 'marca_id', $id);
                    $products = $this->productoModel->productsBy($id, 'marca_id', $iniciar);
                    require 'views/products.php';
                } elseif($_GET['a'] == 'f') {
                    $paginas = $this->paginacionC->paginacion("producto", 'filtroUno_id', $id);
                    $products = $this->productoModel->productsBy($id, 'filtroUno_id', $iniciar);
                    $filtros = $this->filtroModel->getAll();
                    require 'views/products.php';
                }
            }
        } else {
                $id = $_GET['id'];
                if($_GET['a'] == 'c') {
                    $paginas = $this->paginacionC->paginacion("producto", 'categoria_id', $id);
                    $products = $this->productoModel->productsBy($id, 'categoria_id', 1);
                    $filtros = $this->filtroModel->getAll();
                    require 'views/products.php';
                } elseif($_GET['a'] == 's') {
                    if(isset($_GET['f'])) {
                        $paginas = $this->paginacionC->paginacion("producto", 'subcategoria_id', $id);
                        $products = $this->productoModel->productsBy($_GET['f'], 'filtroUno_id', 1);
                        $filtros = $this->filtroModel->getAll();
                        require 'views/products.php';
                    } else {
                        $paginas = $this->paginacionC->paginacion("producto", 'subcategoria_id', $id);
                        $products = $this->productoModel->productsBy($id, 'subcategoria_id', 1);
                        $filtros = $this->filtroModel->getAll();
                        require 'views/products.php';
                    }
                } elseif($_GET['a'] == 'm') {
                    $paginas = $this->paginacionC->paginacion("producto", 'marca_id', $id);
                    $products = $this->productoModel->productsBy($id, 'marca_id', 1);
                    require 'views/products.php';
                } elseif($_GET['a'] == 'f') {
                    $paginas = $this->paginacionC->paginacion("producto", 'filtroUno_id', $id);
                    $products = $this->productoModel->productsBy($id, 'filtroUno_id', 1);
                    $filtros = $this->filtroModel->getAll();
                    require 'views/products.php';
                }
        }
    }

    public function search()
    {
        if(isset($_REQUEST['name']))
        {
            $iniciar = ($_GET['pag']-1)*12;
            
            if($_REQUEST['cat'] != null) {
                $cat = $_REQUEST['cat'];
                $nPalabras = explode(" ",$_REQUEST['name']);
                $numero = count($nPalabras);
                if($numero==1) {
                    $paginas = $this->productoModel->countProductsByCat(true, $_REQUEST['name'], $cat);
                    $products = $this->productoModel->searchProductsByCat(true, $_REQUEST['name'], $cat, $iniciar);
                    require 'views/products.php';
                } elseif ($numero>1) {
                    $paginas = $this->productoModel->countProductsByCat(false, $_REQUEST['name'], $cat);
                    $products = $this->productoModel->searchProductsByCat(false, $_REQUEST['name'], $cat, $iniciar);
                    require 'views/products.php';
                }
            } else {
                $nPalabras = explode(" ",$_REQUEST['name']);
                $numero = count($nPalabras);
                if($numero == 1) {
                    $paginas = $this->productoModel->countProducts(true, $_REQUEST['name']);
                    $products = $this->productoModel->searchProducts(true, $_REQUEST['name'], $iniciar);
                    require 'views/products.php';
                } elseif ($numero > 1) {
                    $paginas = $this->productoModel->countProducts(false, $_REQUEST['name']);
                    $products = $this->productoModel->searchProducts(false, $_REQUEST['name'], $iniciar);
                    require 'views/products.php';
                }
            }
        } else {
            print("hola");
        die();
        }
    }

    public function productByFiltro()
    {
        if(isset($_REQUEST['f'])) {
            $id = $_REQUEST['f'];
            $products = $this->productoModel->productsBy($id, 'filtroUno_id', 1);
            echo json_encode($products, JSON_UNESCAPED_UNICODE);
        }
    }

    public function productsBySub()
    {
        if(isset($_GET['id'])) {
            $id = $_GET['id'];
            $products = $this->productoModel->productsSub($id);
            require 'views/products.php';
        }
    }

    public function productsByCat()
    {
        if(isset($_GET['id'])) {
            $id = $_GET['id'];
            $products = $this->productoModel->productsCat($id);
            require 'views/products.php';
        }
    }

    public function productsByMarca()
    {
        if(isset($_GET['id'])) {
            $id = $_GET['id'];
            $products = $this->productoModel->productsMarca($id);
            require 'views/products.php';
        }
    }

    public function mostrarProducto()
    {
        require 'views/product.php';
    }

    public function viewProduct()
    {
        if(isset($_GET['id'])) {
            $id = $_GET['id'];
            $product = $this->productoModel->getById($id);
            /*print_r($product);
            die();*/
            $productos = $this->productoModel->productLim($product[0]->marca_id);
            require 'views/product.php';
        }
    }

    public function upload()
    {
        if (isset($_FILES['file'])) {
            //Cambiar el nombre del archivo
            $file = $this->productoModel->changeName();
            $path = 'files/';
            $real_file = $this->productoModel->upload_file($file, $path);
            $this->productoModel->upload_book($real_file);
        } else {
            header('Location: ?controller=producto');
            print("Error");
        }
    }

    public function cart()
    {
        $totalItems = 0;
        $itemsCarrito = json_decode($this->carrito->load(), 1);
        $carrito = [];
        foreach ($itemsCarrito as $itemsCarrito) {
            $http = $this->productoModel->getById($itemsCarrito['id']);
            foreach ($http as $res) {
                $res->cantidad = $itemsCarrito['cantidad'];
            }
            array_push($carrito, $http);
        }
        require 'views/cart.php';
    }

    public function removeItem()
    {
        if (isset($_GET['id'])) {
            $res = $this->carrito->remove($_GET['id']);
            if ($res) {
                header('Location: ?controller=producto&method=cart');
            }
        }
    }

    public function removeProduct()
    {
        if (isset($_GET['id'])) {
            $res = $this->carrito->removeProduct($_GET['id']);
            if ($res) {
                header('Location: ?controller=producto&method=cart');
            }
        }
    }

    public function addItem()
    {
        if (isset($_GET['id'])) {
            $res = $this->carrito->add($_GET['id']);
            if ($res) {
                header('Location: ?controller=producto&method=cart');
            }
        }
    }

    public function act()
    {
        require 'views/actualidad.php';
    }
}
