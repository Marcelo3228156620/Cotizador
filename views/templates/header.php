<?php
require_once 'models/categoria.php';
require_once 'models/subcategoria.php';
require_once 'models/marca.php';


$categoriaModel = new Categoria;
$subcategoriasModel = new Subcategoria;
$marcaModel = new marca;


$categorias = $categoriaModel->getAll();
$subcategorias = $subcategoriasModel->getAll();
$marcas = $marcaModel->getAll();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title></title>

    <meta name="keywords" content="HTML5 Template" />
    <meta name="description" content="Porto - Bootstrap eCommerce Template">
    <meta name="author" content="SW-THEMES">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/images/icons/Logo_peque_ferreteria.fw.png">


    <link rel="stylesheet" href="assets/css/ea92915d6480870b41e84eda217fd24a7831739103.css">
    <!--<link rel="stylesheet" href="assets/css/bootstrap.min.css">-->
    <script type="text/javascript">
        WebFontConfig = {
            google: {
                families: ['Open+Sans:300,400,600,700,800', 'Poppins:300,400,500,600,700,800']
            }
        };
        (function(d) {
            var wf = d.createElement('script'),
                s = d.scripts[0];
            wf.src = 'assets/js/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
        })(document);
    </script>

    <!-- Plugins CSS File -->
    <!--<link rel="stylesheet" href="assets/css/bootstrap.min.css">-->


    <!-- Main CSS File -->
    <!--<link rel="stylesheet" href="assets/css/style.min.css">-->
    <link rel="stylesheet" type="text/css" href="assets/vendor/fontawesome-free/css/all.min.css">
</head>

<body>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-left d-none d-sm-block">

                </div>

                <div class="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                    <div class="header-dropdown dropdown-expanded d-none d-lg-block">
                        <div class="header-menu">
                            <ul>
                                <li><a href="?controller=producto&method=act" target="_self">ACTUALIDAD Y CAPACITACIONES</a></li>
                                <li><a href="?controller=views&method=contacto" target="_self">CONTÁCTENOS</a></li>
                                <li><a href="?controller=views&method=quienes_somos" target="_self">QUIENES SOMOS</a></li>
                                <li><a href="?controller=views&method=nuestras_marcas" target="_self">NUESTRAS MARCAS</a></li>
                                <li><a href="?controller=views&method=servicio" target="_self">SERVICIOS</a></li>
                            </ul>
                        </div>
                    </div>

                    <span class="separator"></span>

                </div>
            </div>
        </div>

        <div class="header-middle">
            <div class="container">
                <div class="header-left col-lg-3 w-auto pl-0">
                    <button class="mobile-menu-toggler text-primary mr-2" type="button">
                        <i class="icon-menu"></i>
                    </button>
                    <a href="?contoller=cotizacion&method=admin" class="logo">
                        <img src="assets/images/logo.png" alt="Logo Nurueña">
                    </a>
                </div>

                <div class="header-right w-lg-max">
                    <div class="header-icon header-icon header-search header-search-inline header-search-category w-lg-max text-right">
                        <a href="#" class="search-toggle" role="button"><i class="icon-search-3"></i></a>
                        <form action="?controller=producto&method=search&pag=1" method="POST">
                            <div class="header-search-wrapper">
                                <input type="search" class="form-control" name="name" id="name" placeholder="Buscar producto..." required>
                                <div class="select-custom">
                                    <select id="cat" name="cat">
                                        <option value="">Todas</option>
                                        <?php foreach ($categorias as $categoria) : ?>
                                            <option value="<?php echo $categoria->idCategoria; ?>"><?php echo $categoria->nombre ?></option>
                                        <?php endforeach ?>
                                    </select>
                                </div>
                                <button class="btn icon-search-3 p-0" type="submit"></button>
                            </div>
                        </form>
                    </div>

                    <div class="dropdown cart-dropdown">
                        <a href="#" class="dropdown-toggle dropdown-arrow btn-carrito" role="Button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="">
                        <i class="fas fa-shopping-cart"></i>
                            <span class="cart-count badge-circle"></span>
                        </a>

                        <div class="dropdown-menu">
                            <div class="dropdownmenu-wrapper">
                                <div class="dropdown-cart-header">
                                    <span class="items"></span>

                                    <a href="?controller=producto&method=cart" class="float-right">Ver cotizador</a>
                                </div>

                                <div class="dropdown-cart-products" id="tabla-product">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-bottom sticky-header d-none d-lg-block">
            <div class="container">
                <nav class="main-nav w-100x mx-auto">
                    <ul class="menu sf-js-enabled sf-arrows" style="touch-action: pan-y;">
                        <?php foreach ($categorias as $categoria) : ?>
                            <li class="">
                                <a href="?controller=producto&method=productsBy&a=c&id=<?php echo $categoria->idCategoria ?>&pag=1"><?php echo $categoria->nombre ?></a>
                                <div class="megamenu megamenu-fixed-width">
                                    <div class="row">
                                        <div class="col-lg-9 col">
                                            <div class="row">
                                                <?php foreach ($subcategorias as $sub) : ?>
                                                    <?php if ($categoria->idCategoria == $sub->categoria_id) { ?>
                                                        <div class="col-lg-4">
                                                            <a href="?controller=producto&method=productsBy&a=s&id=<?php echo $sub->idSubCategoria ?>&pag=1"><?php echo $sub->nombre; ?></a>
                                                        </div>
                                                    <?php } ?>
                                                <?php endforeach ?>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 p-0">
                                            <img class="product-promo" src="<?php echo $categoria->ubicacion ?>" alt="<?php echo $categoria->imagen ?>">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        <?php endforeach ?>
                    </ul>
                </nav>
            </div>
        </div>
    </header>