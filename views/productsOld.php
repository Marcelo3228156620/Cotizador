<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
</head>

<body>
    <?php
    /*if(isset($filtros)) {
        print_r($filtros);
        die();
    } else {
        print("No existe");
        die();
    }*/
    ?>
    <?php require 'templates/header.php'; ?>
    <?php
        if(isset($_GET['a'])) {
            $act = $_GET['a'];
            $id = $_GET['id'];
            if(isset($_GET['pag'])) {
                $pag = $_GET['pag'];
            }
        }
        $paginas2 = $paginas-2;
    ?>
    <main class="main">
        <div class="container">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="?controller=producto"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item active" aria-current="page">Productos</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-lg-9">
                    <div class="boxed-slider owl-carousel owl-carousel-lazy owl-theme owl-theme-light">
                        <img class="slide-bg owl-lazy" data-src="assets/images/slider/Banner_Apolo_P1.jpg" alt="banner" width="870" height="300">
                        <img class="slide-bg owl-lazy" data-src="assets/images/slider/Banner_Coflex_P2.jpg" alt="banner" width="870" height="300">
                </div>

                    <nav class="toolbox pt-4">
                        <?php /*print_r($filtros);
                        die(); */
                        if(isset($filtros)) { ?>
                            <div class="toolbox-left">
                            <div class="toolbox-item toolbox-sort">
                                <label>Filtrar:</label>
                                <div class="select-custom">
                                    <select name="orderBy" class="form-control" id="orderBy">
                                        <option value="">...</option>
                                        <?php foreach($filtros as $filtro) : ?>
                                            <?php if ($filtro->subCategoria_id == $id || $filtro->categoria_id == $id) 
                                                echo '<option value="'.$filtro->idFiltro.'">'.$filtro->nombre.'</option>';
                                            ?>
                                        <?php endforeach ?>
                                    </select>
                                </div>
                        <!-- End .select-custom -->
                        <?php } else { ?>

                        <?php } ?>


                        <!--</div>-->
                        <!-- End .toolbox-item -->
                        <!--</div>-->
                        <!-- End .toolbox-left -->

                        <!--<div class="toolbox-right">
                            <div class="toolbox-item toolbox-show">
                                <label>Show:</label>

                                <div class="select-custom">
                                    <select name="count" class="form-control">
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                        <option value="36">36</option>
                                    </select>
                                </div>-->
                        <!-- End .select-custom -->
                        <!--</div>-->
                        <!-- End .toolbox-item -->

                        <!--<div class="toolbox-item layout-modes">
                                <a href="category.html" class="layout-btn btn-grid active" title="Grid">
                                    <i class="icon-mode-grid"></i>
                                </a>
                                <a href="category-list.html" class="layout-btn btn-list" title="List">
                                    <i class="icon-mode-list"></i>
                                </a>
                            </div>-->
                        <!-- End .layout-modes -->
                        <!--</div>-->
                        <!-- End .toolbox-right -->
                    </nav>

                    <div class="row" id="products">
                        <!--<div class="col-6 col-sm-4">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-1.jpg">
                                    </a>
                                    <div class="label-group">
                                        <div class="product-label label-hot">HOT</div>
                                        <div class="product-label label-sale">-20%</div>
                                    </div>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a>
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Fleece Jacket</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style="width:100%"></span>-->
                        <!-- End .ratings -->
                        <!--<span class="tooltiptext tooltip-top"></span>
                                        </div>-->
                        <!-- End .product-ratings -->
                        <!--</div>-->
                        <!-- End .product-container -->
                        <!--<div class="price-box">
                                        <span class="old-price">$90.00</span>
                                        <span class="product-price">$70.00</span>
                                    </div>-->
                        <!-- End .price-box -->
                        <!--</div>-->
                        <!-- End .product-details -->
                        <!--</div>
                        </div>-->
                        <!-- End .col-sm-4 -->

                        <!--<div class="col-6 col-sm-4">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-2.jpg">
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a>
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Ray Ban 5228</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style="width:100%"></span>-->
                        <!-- End .ratings -->
                        <!--<span class="tooltiptext tooltip-top"></span>
                                        </div>-->
                        <!-- End .product-ratings -->
                        <!--</div>-->
                        <!-- End .product-container -->
                        <!--<div class="price-box">
                                        <span class="product-price">$33.00</span>
                                    </div>-->
                        <!-- End .price-box -->
                        <!--</div>-->
                        <!-- End .product-details -->
                        <!--</div>-->
                        <!--</div>-->
                        <!-- End .col-sm-4 -->
                        <?php foreach($products as $producto) : ?>
                        <div class="col-6 col-sm-4">
                            <div class="product-default">
                                <figure>
                                    <a href="#">
                                        <img src="<?php echo $producto->ubicacion ?>" alt="">
                                    </a>
                                </figure>
                                <div class="product-details">
                                    <input type="hidden" id="<?php echo $producto->idProducto ?>" class="btnAddCart" value="">
                                    <div class="category-list">
                                        <a href="#" class="product-category"><?php echo $producto->producto ?></a>
                                    </div>
                                    <h6 class="product-title">
                                        <a href="?controller=producto&method=viewProduct&id=<?php echo $producto->idProducto ?>"><?php echo $producto->nombre ?></a>
                                    </h6>
                                    <h3 class="product-title">
                                        <p>Referencia  <?php echo $producto->codigo ?></p>
                                    </h3>
                                    <div class="product-action">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal" onclick="nueva(<?php echo $producto->idProducto ?>)" id="btnAdd">Cotizar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php endforeach ?>
                    </div><!-- End .row -->

                    <nav class="toolbox toolbox-pagination">
                        <div class="toolbox-item toolbox-show">
                            <!--<label>Show:</label>

                            <div class="select-custom">
                                <select name="count" class="form-control">
                                    <option value="12">12</option>
                                    <option value="24">24</option>
                                    <option value="36">36</option>
                                </select>
                            </div>--><!-- End .select-custom -->
                        </div><!-- End .toolbox-item -->

                        <ul class="pagination toolbox-item" id="pagination">
                            <li class="page-item <?php echo $pag<=1 ? 'disabled': '' ?>">
                                <a class="page-link page-link-btn" href="?controller=producto&method=productsBy&a=<?php echo $act ?>&id=<?php echo $id ?>&pag=<?php echo $_GET['pag']-1 ?>"><i class="icon-angle-left"></i></a>
                            </li>
                            <?php for($i=0; $i<$paginas; $i++): ?>
                            <!--<li class="page-item <?php //echo $i <= $paginas-1 ? 'disabled' : '' ?>">-->
                            <li class="page-item <?php echo  $i >= $paginas2 ? '' : ($i > 3 ? 'disabled' : '') ?><?php echo $pag == $i+1 ? 'active' : '' ?>">
                                <a class="page-link" href="?controller=producto&method=productsBy&a=<?php echo $act ?>&id=<?php echo $id ?>&pag=<?php echo $i+1 ?>"><?php echo $i+1 ?><span class="sr-only">(current)</span></a>
                            </li>
                            <?php endfor ?>
                            <li class="page-item <?php echo $pag >= $paginas ? 'disabled' : '' ?>">
                                <a class="page-link page-link-btn" href="?controller=producto&method=productsBy&a=<?php echo $act ?>&id=<?php echo $id ?>&pag=<?php echo $_GET['pag']+1 ?>"><i class="icon-angle-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div><!-- End .col-lg-9 -->

                <div class="sidebar-overlay"></div>
                <div class="sidebar-toggle"><i class="fas fa-sliders-h"></i></div>
                <aside class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                    <div class="sidebar-wrapper">
                        <div class="widget">
                            <h3 class="widget-title">
                                <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Categorias</a>
                            </h3>

                            <div class="collapse show" id="widget-body-2">
                                <div class="widget-body">
                                    <ul class="cat-list">
                                        <?php foreach ($categorias as $categoria) :?>
                                        <li><a href="?controller=producto&method=productsBy&a=c&id=<?php echo $categoria->idCategoria ?>&pag=1"><?php echo $categoria->nombre ?></a></li>
                                        <?php endforeach ?>
                                    </ul>
                                </div><!-- End .widget-body -->
                            </div><!-- End .collapse -->
                        </div><!-- End .widget -->

                        <!--<div class="widget">
                            <h3 class="widget-title">
                                <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Price</a>
                            </h3>

                            <div class="collapse show" id="widget-body-3">
                                <div class="widget-body">
                                    <form action="#">
                                        <div class="price-slider-wrapper">
                                            <div id="price-slider"></div>-->
                        <!-- End #price-slider -->
                        <!--</div>-->
                        <!-- End .price-slider-wrapper -->

                        <!--<div class="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                            <button type="submit" class="btn btn-primary">Filter</button>

                                            <div class="filter-price-text">
                                                Price:
                                                <span id="filter-price-range"></span>
                                            </div>-->
                        <!-- End .filter-price-text -->
                        <!--</div>-->
                        <!-- End .filter-price-action -->
                        <!--</form>
                                </div>-->
                        <!-- End .widget-body -->
                        <!--</div>-->
                        <!-- End .collapse -->
                        <!--</div>-->
                        <!-- End .widget -->

                        <div class="widget">
                            <h3 class="widget-title">
                                <a data-toggle="collapse" href="#widget-body-4" role="button" aria-expanded="true" aria-controls="widget-body-4">Marcas</a>
                            </h3>

                            <div class="collapse show" id="widget-body-4">
                                <div class="widget-body">
                                    <ul class="cat-list">
                                        <?php foreach($marcas as $marca) : ?>
                                        <li><a href="?controller=producto&method=productsBy&a=m&id=<?php echo $marca->idMarca ?>&pag=1"><?php echo $marca->nombre ?></a></li>
                                        <?php endforeach ?>
                                    </ul>
                                </div>
                        <!-- End .widget-body -->
                        </div>
                        <!-- End .collapse -->
                        </div>
                        <!-- End .widget -->

                        <!--<div class="widget">
                            <h3 class="widget-title">
                                <a data-toggle="collapse" href="#widget-body-5" role="button" aria-expanded="true" aria-controls="widget-body-5">Brand</a>
                            </h3>

                            <div class="collapse show" id="widget-body-5">
                                <div class="widget-body">
                                    <ul class="cat-list">
                                        <li><a href="#">Adidas</a></li>
                                        <li><a href="#">Calvin Klein (26)</a></li>
                                        <li><a href="#">Diesel (3)</a></li>
                                        <li><a href="#">Lacoste (8)</a></li>
                                    </ul>
                                </div>-->
                        <!-- End .widget-body -->
                        <!--</div>-->
                        <!-- End .collapse -->
                        <!--</div>-->
                        <!-- End .widget -->

                        <!--<div class="widget">
                            <h3 class="widget-title">
                                <a data-toggle="collapse" href="#widget-body-6" role="button" aria-expanded="true" aria-controls="widget-body-6">Color</a>
                            </h3>

                            <div class="collapse show" id="widget-body-6">
                                <div class="widget-body">
                                    <ul class="config-swatch-list">
                                        <li class="active">
                                            <a href="#" style="background-color: #000;"></a>
                                            <span>Black</span>
                                        </li>
                                        <li>
                                            <a href="#" style="background-color: #0188cc;"></a>
                                            <span>Blue</span>
                                        </li>
                                        <li>
                                            <a href="#" style="background-color: #81d742;"></a>
                                            <span>Green</span>
                                        </li>
                                        <li>
                                            <a href="#" style="background-color: #6085a5;"></a>
                                            <span>Indigo</span>
                                        </li>
                                        <li>
                                            <a href="#" style="background-color: #ab6e6e;"></a>
                                            <span>Red</span>
                                        </li>
                                        <li>
                                            <a href="#" style="background-color: #ddb373;"></a>
                                            <span>Brown</span>
                                        </li>
                                        <li>
                                            <a href="#" style="background-color: #6b97bf;"></a>
                                            <span>Light-Blue</span>
                                        </li>
                                        <li>
                                            <a href="#" style="background-color: #eded68;"></a>
                                            <span>Yellow</span>
                                        </li>
                                    </ul>
                                </div>-->
                        <!-- End .widget-body -->
                        <!--</div>-->
                        <!-- End .collapse -->
                        <!--</div>-->
                        <!-- End .widget -->

                        <!--<div class="widget widget-featured">
                            <h3 class="widget-title">Featured</h3>

                            <div class="widget-body">
                                <div class="owl-carousel widget-featured-products">
                                    <div class="featured-col">
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-10.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>-->
                        <!-- End .ratings -->
                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>-->
                        <!-- End .product-ratings -->
                        <!--</div>-->
                        <!-- End .product-container -->
                        <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>-->
                        <!-- End .price-box -->
                        <!--</div>-->
                        <!-- End .product-details -->
                        <!--</div>
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-11.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>-->
                        <!-- End .ratings -->
                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>-->
                        <!-- End .product-ratings -->
                        <!--</div>-->
                        <!-- End .product-container -->
                        <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>-->
                        <!-- End .price-box -->
                        <!--</div>-->
                        <!-- End .product-details -->
                        <!--</div>
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-12.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>-->
                        <!-- End .ratings -->
                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>-->
                        <!-- End .product-ratings -->
                        <!--</div>-->
                        <!-- End .product-container -->
                        <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>-->
                        <!-- End .price-box -->
                        <!--</div>-->
                        <!-- End .product-details -->
                        <!--</div>
                                    </div>-->
                        <!-- End .featured-col -->

                        <!--<div class="featured-col">
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-13.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>-->
                        <!-- End .ratings -->
                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>-->
                        <!-- End .product-ratings -->
                        <!--</div>-->
                        <!-- End .product-container -->
                        <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>-->
                        <!-- End .price-box -->
                        <!--</div>-->
                        <!-- End .product-details -->
                        <!--</div>
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-14.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>-->
                        <!-- End .ratings -->
                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>-->
                        <!-- End .product-ratings -->
                        <!--</div>-->
                        <!-- End .product-container -->
                        <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>-->
                        <!-- End .price-box -->
                        <!--</div>-->
                        <!-- End .product-details -->
                        <!--</div>
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-8.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>-->
                        <!-- End .ratings -->
                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>-->
                        <!-- End .product-ratings -->
                        <!--</div>-->
                        <!-- End .product-container -->
                        <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>-->
                        <!-- End .price-box -->
                        <!--</div>-->
                        <!-- End .product-details -->
                        <!--</div>
                                    </div>-->
                        <!-- End .featured-col -->
                        <!--</div>-->
                        <!-- End .widget-featured-slider -->
                        <!--</div>-->
                        <!-- End .widget-body -->
                        <!--</div>-->
                        <!-- End .widget -->

                        <!--<div class="widget widget-block">
                            <h3 class="widget-title">Custom HTML Block</h3>
                            <h5>This is a custom sub-title.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi. </p>-->
                        <!--</div>--><!-- End .widget -->
                    </div><!-- End .sidebar-wrapper -->
                </aside><!-- End .col-lg-3 -->
            </div><!-- End .row -->
        </div><!-- End .container -->

        <div class="mb-3"></div><!-- margin -->
    </main><!-- End .main -->
    <?php require 'templates/footer.php'; ?>
</body>

</html>