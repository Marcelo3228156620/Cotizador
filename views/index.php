<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nurueña SAS</title>
</head>

<body>
    <?php require 'templates/header.php'; ?>
    <main class="main">
        <div class="home-slider owl-carousel owl-theme owl-carousel-lazy show-nav-hover nav-big mb-2 text-uppercase" data-owl-options="{
				'loop': true, 'autoplay':true
			}">
            <div class="home-slide home-slide1 banner">
                <a class="d-none d-lg-block" href="?controller=producto&method=mostrarProducto" target="_self">
                    <img class="owl-lazy slide-bg" src="assets/images/slider/Banner_Apolo_P1.jpg" data-src="assets/images/slider/Banner_Apolo_P1.jpg" alt="slider image">
                </a>
                <div class="container">
                    <div class="banner-layer banner-layer-middle">
                    </div><!-- End .banner-layer -->
                </div>
            </div><!-- End .home-slide -->

            <div class="home-slide home-slide1 banner">
                <img class="owl-lazy slide-bg" src="assets/images/slider/Banner_Rappi_P4.jpg" data-src="assets/images/slider/Banner_Rappi_P4.jpg" alt="slider image">
                <div class="container">
                    <div class="banner-layer banner-layer-middle">
                    </div><!-- End .banner-layer -->
                </div>
            </div><!-- End .home-slide -->

            <div class="home-slide home-slide2 banner banner-md-vw">
                <img class="owl-lazy slide-bg" src="assets/images/slider/Banner_Coflex_P2.jpg" data-src="assets/images/slider/Banner_Coflex_P2.jpg" alt="slider image">
                <div class="container">
                    <div class="banner-layer banner-layer-middle d-flex justify-content-center">
                        <div class="mx-auto">
                        </div>
                    </div><!-- End .banner-layer -->
                </div>
            </div><!-- End .home-slide -->
        </div><!-- End .home-slider -->

        <div class="container">
            <div class="banners-container">
                <div class="banners-slider owl-carousel owl-theme owl-loaded owl-drag">
                    <div class="owl-stage-outer">
                        <div class="owl-stage">
                            <div class="owl-item active">
                                <div class="banner banner1 banner-sm-vw">
                                    <figure>
                                        <a href="?controller=manuales&method=manuales">
                                            <img src="img/subMenu/ban_manuales.jpg" alt="banner">
                                        </a>
                                    </figure>
                                </div><!-- End .banner -->
                            </div>

                            <div class="owl-item active">
                                <div class="banner banner1 banner-sm-vw">
                                    <figure>
                                        <a href="?controller=marca&method=marcaByList">
                                            <img src="img/subMenu/Banner_precios.jpg" alt="banner">
                                        </a>
                                    </figure>
                                </div><!-- End .banner -->
                            </div>

                            <div class="owl-item active">
                                <div class="banner banner1 banner-sm-vw">
                                    <figure>
                                        <a href="https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=3877" target="_blank">
                                            <img src="img/subMenu/banner_pse.jpg" alt="banner">
                                        </a>
                                    </figure>
                                </div><!-- End .banner -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br>

        <section class="new-products-section bggray">
            <div class="container">
                <div class="row text-center caxsalls">
                    <?php foreach ($categorias as $categoria) : ?>
                        <div class="col-12 col-sm-2  my-auto mx-auto">
                            <a class="nav-link <?php echo $result = $categoria->idCategoria == 1 ? 'active' : ''; ?>" href="#" data-id="<?php echo $categoria->idCategoria ?>"><?php echo $categoria->nombre ?></a>
                        </div>
                    <?php endforeach ?>
                </div>
                <?php foreach ($categorias as $categoria) : ?>
                    <div id="caxsa<?php echo $categoria->idCategoria ?>" class="categories-slider owl-carousel owl-theme show-nav nav-outer caxsa owl-loaded owl-drag" <?php echo $result = $categoria->idCategoria != 1 ? 'style=display:none;' : ''; ?>>
                        <div class="owl-stage-outer">
                            <div class="owl-stage">
                                <?php foreach ($subcategorias as $sub) : ?>
                                    <?php if ($categoria->idCategoria == $sub->categoria_id) { ?>
                                        <div class="owl-item active">
                                            <!-- active -->
                                            <div class="product-category">
                                                <a href="?controller=producto&method=productsBy&a=s&id=<?php echo $sub->idSubCategoria ?>&pag=1" target="_self">
                                                    <figure>
                                                        <img src="<?php echo $sub->ubicacion ?>" alt="<?php echo $sub->nombre ?>">
                                                    </figure>
                                                    <div class="category-content">
                                                        <h3><?php echo $sub->nombre ?></h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    <?php } ?>
                                <?php endforeach ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach ?>
            </div>
        </section>
        <section class="featured-products-section">
            <div class="container">
                <h2 class="section-title heading-border ls-20 border-0">Productos Destacados</h2>

                <div class="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center" data-owl-options="{
						'dots': false,
						'nav': true
					}">
                    <?php foreach ($productos as $producto) : ?>
                        <?php if($producto->estado == 'si') : ?>
                        <div class="product-default">
                            <figure>
                                <a href="?controller=producto&method=viewProduct&id=<?php echo $producto->idProducto ?>">
                                    <div class="image-product">
                                        <img src="<?php echo $producto->ubicacion ?>" alt="<?php echo $producto->nombre ?>">
                                    </div>
                                </a>
                            </figure>

                            <div class="product-details">
                                <input type="hidden" id="<?php echo $producto->idProducto ?>" class="btnAddCart" value="" />
                                <div class="category-list">
                                    <a href="?controller=producto&method=productsBy&a=m&id=<?php echo $producto->marca_id ?>&pag=1" class="product-category"><?php echo $producto->producto ?></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="?controller=producto&method=viewProduct&id=<?php echo $producto->idProducto ?>"><?php echo $producto->nombre ?></a>
                                </h3>
                                <h3 class="product-title">
                                    <p>Referencia <?php echo $producto->codigo ?></p>
                                </h3>
                                <div class="product-action">
                                    <a href="?controller=producto&method=productView&id=<?php echo $producto->idProducto ?>" class="btn-icon btn-add-cart btn-quickview-product">Cotizar</a>
                                </div>
                            </div><!-- End .product-details -->
                        </div>
                        <?php else : ?>
                        <?php endif ?>
                    <?php endforeach ?>
                </div><!-- End .featured-proucts -->
            </div>
        </section>

        <section>
            <h2 class="section-title heading-border border-0 mb-2">SERVICIOS</h2>
        </section>
        <section class="bggray npnm">
            <div class="container">
                <div class="home-top-container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="banner banner-image">
                                <a href="?controller=views&method=servicio#punto-de-venta">
                                    <img src="img/Servicios/s-puntoVenta.jpg" alt="PUNTO DE VENTA">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 top-banners">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="banner banner-image">
                                        <a href="?controller=views&method=servicio#servicio-tecnico">
                                            <img src="img/Servicios/s-tecnico.jpg" alt="SERVICIO TÉCNICO">
                                        </a>
                                    </div>
                                    <div class="banner banner-image">
                                        <a href="?controller=views&method=servicio#operacion-logistica">
                                            <img src="img/Servicios/s-logistica.jpg" alt="OPERACIÓN LOGÍSTICA">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="banner banner-image">
                                        <a href="?controller=views&method=servicio#financiacion-de-compra">
                                            <img src="img/Servicios/s-financiacion.png" alt="FINANCIACIÓN DE COMPRA">
                                        </a>
                                    </div>
                                    <div class="banner banner-image">
                                        <a href="?controller=views&method=servicio#asesoria-y-capacitacion">
                                            <img src="img/Servicios/s-asesoria.jpg" alt="ASESORÍA Y CAPACITACIÓN">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="blog-section">
            <div class="container">
                <h2 class="section-title heading-border border-0 mb-2">nuestras marcas</h2>
                <div class="row">
                    <?php foreach ($marcas as $marca) : ?>
                        <div class="col-6 col-sm-2 form-group">
                            <a href="?controller=producto&method=productsBy&a=m&id=<?php echo $marca->idMarca ?>&pag=1">
                                <img src="<?php echo $marca->ubicacion ?>" alt="<?php echo $marca->nombre ?>" width="140">
                            </a>
                        </div>
                    <?php endforeach ?>
                    <!--<div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO_SIKA.jpg" alt="SIKA" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO_FV.jpg" alt="FV" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="?controller=producto&method=productsBySub&id=302">
                            <img src="img/marcas/LOGO_LORENZETTI.jpg" alt="LORENZETTI" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO_GRICOL.jpg" alt="GRICOL" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO-PAVCO.jpg" alt="PAVCO" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO_COFLEX_PRO.jpg" alt="COFLEX-PRO" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO_HELBERT.jpg" alt="HELBERT" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO_APOLO.jpg" alt="APOLO" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO_COFLEX.jpg" alt="COFLEX" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO-DICOL.jpg" alt="DICOL" width="140">
                        </a>
                    </div>
                    <div class="col-6 col-sm-2 form-group">
                        <a href="#">
                            <img src="img/marcas/LOGO_SOCODA.jpg" alt="SOCODA" width="140">
                        </a>
                    </div>-->
                </div>
            </div>
        </section>

        <!--<section class="new-products-section">
            <div class="container">
                <h2 class="section-title heading-border ls-20 border-0">Nuevos productos</h2>

                <div class="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center" data-owl-options="{
						'dots': false,
						'nav': true,
						'responsive': {
							'992': {
								'items': 5
							}
						}
					}">
                    <?php
                    //foreach ($productos as $producto) : ?>
                        <div class="product-default">
                            <figure>
                                <a href="#">
                                    <img src="<?php //echo $producto->ubicacion ?>" alt="product">
                                </a>
                            </figure>
                            <div class="product-details">
                                <input type="hidden" id="<?php //echo $producto->idProducto ?>" class="btnAddCart" value="" />
                                <div class="category-list">
                                    <a href="?controller=producto&method=productsBy&a=m&id=<?php //echo $producto->marca_id ?>&pag=1" class="product-category"><?php echo $producto->producto ?></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="?controller=producto&method=viewProduct&id=<?php //echo $producto->idProducto ?>"><?php echo $producto->nombre ?></a>
                                </h3>
                                <h3 class="product-title">
                                    <p>Ref Fabrica. <?php //echo $producto->codigo ?></p>
                                </h3>-->
                                <!-- End .price-box -->
                                <!--<div class="product-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal" onclick="nueva(<?php echo $producto->idProducto ?>)" id="btnAdd">Cotizar</button>-->
                                    <!--<a href="ajax/product-quick-view1.html" class="btn-quickview" title="Quick View"><i class="fas fa-external-link-alt"></i></a>-->
                                <!--</div>
                            </div>--><!-- End .product-details -->
                        <!--</div>
                    <?php //endforeach ?>
                </div-->><!-- End .featured-proucts -->

                <!--<div class="banner banner-big-sale mb-5" style="background: #2A95CB center/cover url('assets/images/banners/banner-4.jpg');">
                    <div class="banner-content row align-items-center py-4 mx-0">
                        <div class="col-md-9">
                            <h2 class="text-white text-uppercase ls-n-20 mb-md-0 px-4">
                                <b class="d-inline-block mr-4 mb-1 mb-md-0">Big Sale</b>
                                All new fashion brands items up to 70% off
                                <small class="text-transform-none align-middle">Online Purchases Only</small>
                            </h2>
                        </div>
                        <div class="col-md-3 text-center text-md-right">
                            <a class="btn btn-light btn-white btn-lg mr-3" href="#">View Sale</a>
                        </div>
                    </div>
                </div>

                <h2 class="section-title heading-border border-0 mb-5">Browse Categories</h2>

                <div class="categories-slider owl-carousel owl-theme show-nav-hover nav-outer">
                    <div class="product-category">
                        <a href="#">
                            <figure>
                                <img src="assets/images/products/categories/category-1.jpg" alt="category">
                            </figure>
                            <div class="category-content">
                                <h3>Dress</h3>
                                <span><mark class="count">3</mark> products</span>
                            </div>
                        </a>
                    </div>
                    <div class="product-category">
                        <a href="#">
                            <figure>
                                <img src="assets/images/products/categories/category-2.jpg" alt="category">
                            </figure>
                            <div class="category-content">
                                <h3>Watches</h3>
                                <span><mark class="count">3</mark> products</span>
                            </div>
                        </a>
                    </div>
                    <div class="product-category">
                        <a href="#">
                            <figure>
                                <img src="assets/images/products/categories/category-3.jpg" alt="category">
                            </figure>
                            <div class="category-content">
                                <h3>Watches</h3>
                                <span><mark class="count">3</mark> products</span>
                            </div>
                        </a>
                    </div>
                    <div class="product-category">
                        <a href="#">
                            <figure>
                                <img src="assets/images/products/categories/category-2.jpg" alt="category">
                            </figure>
                            <div class="category-content">
                                <h3>Watches</h3>
                                <span><mark class="count">3</mark> products</span>
                            </div>
                        </a>
                    </div>
                    <div class="product-category">
                        <a href="#">
                            <figure>
                                <img src="assets/images/products/categories/category-2.jpg" alt="category">
                            </figure>
                            <div class="category-content">
                                <h3>Watches</h3>
                                <span><mark class="count">3</mark> products</span>
                            </div>
                        </a>
                    </div>
                    <div class="product-category">
                        <a href="#">
                            <figure>
                                <img src="assets/images/products/categories/category-2.jpg" alt="category">
                            </figure>
                            <div class="category-content">
                                <h3>Watches</h3>
                                <span><mark class="count">3</mark> products</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>-->

        <!--<section class="feature-boxes-container">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="feature-box px-sm-5 feature-box-simple text-center">
                            <i class="icon-earphones-alt"></i>

                            <div class="feature-box-content">
                                <h3 class="m-b-1">Customer Support</h3>
                                <h5 class="m-b-3">You Won't Be Alone</h5>

                                <p>We really care about you and your website as much as you do. Purchasing Porto or any other theme from us you get 100% free support.</p>
                            </div>-->
                <!-- End .feature-box-content -->
                <!--</div>-->
                <!-- End .feature-box -->
                <!--</div>-->
                <!-- End .col-md-4 -->

                <!--<div class="col-md-4">
                        <div class="feature-box px-sm-5 feature-box-simple text-center">
                            <i class="icon-credit-card"></i>

                            <div class="feature-box-content">
                                <h3 class="m-b-1">Fully Customizable</h3>
                                <h5 class="m-b-3">Tons Of Options</h5>

                                <p>With Porto you can customize the layout, colors and styles within only a few minutes. Start creating an amazing website right now!</p>
                            </div>-->
                <!-- End .feature-box-content -->
                <!--</div>-->
                <!-- End .feature-box -->
                <!--</div>-->
                <!-- End .col-md-4 -->

                <!--<div class="col-md-4">
                        <div class="feature-box px-sm-5 feature-box-simple text-center">
                            <i class="icon-action-undo"></i>

                            <div class="feature-box-content">
                                <h3 class="m-b-1">Powerful Admin</h3>
                                <h5 class="m-b-3">Made To Help You</h5>

                                <p>Porto has very powerful admin features to help customer to build their own shop in minutes without any special skills in web development.</p>
                            </div>-->
                <!-- End .feature-box-content -->
                <!--</div>-->
                <!-- End .feature-box -->
                <!--</div>-->
                <!-- End .col-md-4 -->
                <!--</div>-->
                <!-- End .row -->
                <!--</div>-->
                <!-- End .container-->
                <!--</section>-->
                <!-- End .feature-boxes-container -->

                <!--<section class="promo-section bg-dark" data-parallax="{'speed': 1.8, 'enableOnMobile': true}" data-image-src="assets/images/banners/banner-5.jpg">
            <div class="promo-banner banner container text-uppercase">
                <div class="banner-content row align-items-center text-center">
                    <div class="col-md-4 ml-xl-auto text-md-right">
                        <h2 class="mb-md-0 text-white">Top Fashion<br>Deals</h2>
                    </div>
                    <div class="col-md-4 col-xl-3 pb-4 pb-md-0">
                        <a href="#" class="btn btn-dark btn-black ls-10">View Sale</a>
                    </div>
                    <div class="col-md-4 mr-xl-auto text-md-left">
                        <h4 class="mb-1 coupon-sale-text p-0 d-block ls-10 text-transform-none"><b>Exclusive COUPON</b></h4>
                        <h5 class="mb-2 coupon-sale-text text-white ls-10 p-0"><i class="ls-0">UP TO</i><b class="text-white bg-secondary">$100</b> OFF</h5>
                    </div>
                </div>
            </div>
        </section>

        <section class="blog-section">
            <div class="container">
                <h2 class="section-title heading-border border-0 mb-2">Latest News</h2>

                <div class="owl-carousel owl-theme" data-owl-options="{
						'loop': false,
						'margin': 20,
						'autoHeight': true,
						'autoplay': false,
						'dots': false,
						'items': 2,
						'responsive': {
							'576': {
								'items': 3
							},
							'768': {
								'items': 4
							}
						}
					}">
                    <article class="post">
                        <div class="post-media">
                            <a href="single.html">
                                <img src="assets/images/blog/home/post-1.jpg" alt="Post" width="225" height="280">
                            </a>
                            <div class="post-date">
                                <span class="day">26</span>
                                <span class="month">Feb</span>
                            </div>
                        </div>-->
                <!-- End .post-media -->

                <!--<div class="post-body">
                            <h2 class="post-title">
                                <a href="single.html">Top New Collection</a>
                            </h2>
                            <div class="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
                            </div>-->
                <!-- End .post-content -->
                <!--<a href="single.html" class="post-comment">0 Comments</a>
                        </div>-->
                <!-- End .post-body -->
                <!--</article>-->
                <!-- End .post -->

                <!--<article class="post">
                        <div class="post-media">
                            <a href="single.html">
                                <img src="assets/images/blog/home/post-2.jpg" alt="Post" width="225" height="280">
                            </a>
                            <div class="post-date">
                                <span class="day">26</span>
                                <span class="month">Feb</span>
                            </div>
                        </div>-->
                <!-- End .post-media -->

                <!--<div class="post-body">
                            <h2 class="post-title">
                                <a href="single.html">Fashion Trends</a>
                            </h2>
                            <div class="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
                            </div>-->
                <!-- End .post-content -->
                <!--<a href="single.html" class="post-comment">0 Comments</a>
                        </div>-->
                <!-- End .post-body -->
                <!--</article>-->
                <!-- End .post -->

                <!--<article class="post">
                        <div class="post-media">
                            <a href="single.html">
                                <img src="assets/images/blog/home/post-3.jpg" alt="Post" width="225" height="280">
                            </a>
                            <div class="post-date">
                                <span class="day">26</span>
                                <span class="month">Feb</span>
                            </div>
                        </div>-->
                <!-- End .post-media -->

                <!--<div class="post-body">
                            <h2 class="post-title">
                                <a href="single.html">Right Choices</a>
                            </h2>
                            <div class="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
                            </div>-->
                <!-- End .post-content -->
                <!--<a href="single.html" class="post-comment">0 Comments</a>
                        </div>-->
                <!-- End .post-body -->
                <!--</article>-->
                <!-- End .post -->

                <!--<article class="post">
                        <div class="post-media">
                            <a href="single.html">
                                <img src="assets/images/blog/home/post-4.jpg" alt="Post" width="225" height="280">
                            </a>
                            <div class="post-date">
                                <span class="day">26</span>
                                <span class="month">Feb</span>
                            </div>
                        </div>-->
                <!-- End .post-media -->

                <!--<div class="post-body">
                            <h2 class="post-title">
                                <a href="single.html">Perfect Accessories</a>
                            </h2>
                            <div class="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
                            </div>-->
                <!-- End .post-content -->
                <!--<a href="single.html" class="post-comment">0 Comments</a>
                        </div>-->
                <!-- End .post-body -->
                <!--</article>-->
                <!-- End .post -->
                <!--</div>

                <hr class="mt-0 m-b-5">

                <div class="brands-slider owl-carousel owl-theme images-center pb-2">
                    <img src="assets/images/brands/brand1.png" width="140" height="60" alt="brand">
                    <img src="assets/images/brands/brand2.png" width="140" height="60" alt="brand">
                    <img src="assets/images/brands/brand3.png" width="140" height="60" alt="brand">
                    <img src="assets/images/brands/brand4.png" width="140" height="60" alt="brand">
                    <img src="assets/images/brands/brand5.png" width="140" height="60" alt="brand">
                    <img src="assets/images/brands/brand6.png" width="140" height="60" alt="brand">
                </div>-->
                <!-- End .brands-slider -->

                <!--<hr class="mt-4 m-b-5">

                <div class="product-widgets-container row mb-2 pb-2">
                    <div class="col-lg-3 col-sm-6 pb-5 pb-md-0">
                        <h4 class="section-sub-title mb-2">Featured Products</h4>
                        <div class="product-default left-details product-widget">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/small/product-1.jpg">
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
                                    <img src="assets/images/products/small/product-2.jpg">
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
                <!--<span class="tooltiptext tooltip-top">5.00</span>
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
                                    <img src="assets/images/products/small/product-3.jpg">
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
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-5 pb-md-0">
                        <h4 class="section-sub-title mb-2">Best Selling Products</h4>
                        <div class="product-default left-details product-widget">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/small/product-4.jpg">
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
                <!--<span class="tooltiptext tooltip-top">5.00</span>
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
                                    <img src="assets/images/products/small/product-5.jpg">
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
                                    <img src="assets/images/products/small/product-6.jpg">
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
                <!--<span class="tooltiptext tooltip-top">5.00</span>
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
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-5 pb-md-0">
                        <h4 class="section-sub-title mb-2">Latest Products</h4>
                        <div class="product-default left-details product-widget">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/small/product-7.jpg">
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
                                    <img src="assets/images/products/small/product-8.jpg">
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
                <!--<span class="tooltiptext tooltip-top">5.00</span>
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
                                    <img src="assets/images/products/small/product-9.jpg">
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
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-5 pb-md-0">
                        <h4 class="section-sub-title mb-2">Top Rated Products</h4>
                        <div class="product-default left-details product-widget">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/small/product-10.jpg">
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
                                    <img src="assets/images/products/small/product-1.jpg">
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
                <!--<span class="tooltiptext tooltip-top">5.00</span>
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
                                    <img src="assets/images/products/small/product-2.jpg">
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
                    </div>
                </div>-->
                <!-- End .row -->
                <!--</div>
        </section>-->
    </main><!-- End .main -->
    <?php require 'templates/footer.php'; ?>
</body>

</html>