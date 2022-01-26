<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Producto</title>
</head>

<body>
    <?php require 'templates/header.php'; ?>
    <main class="main">
        <div class="container">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item"><a href="#">producto</a></li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-lg-9 main-content">
                    <div class="product-single-container product-single-default">
                        <div class="row">
                            <div class="col-lg-7 col-md-6 product-single-gallery">
                                <div class="product-slider-container">
                                    <!--<div class="product-single-carousel owl-carousel owl-theme">-->
                                    <div class="product-item">
                                        <img class="" src="<?php echo $product[0]->ubicacion; ?>" />
                                    </div>
                                    <!--<div class="product-item">
                                            <img class="product-single-image" src="assets/images/products/zoom/product-2.jpg" data-zoom-image="assets/images/products/zoom/product-2-big.jpg" />
                                        </div>
                                        <div class="product-item">
                                            <img class="product-single-image" src="assets/images/products/zoom/product-3.jpg" data-zoom-image="assets/images/products/zoom/product-3-big.jpg" />
                                        </div>
                                        <div class="product-item">
                                            <img class="product-single-image" src="assets/images/products/zoom/product-4.jpg" data-zoom-image="assets/images/products/zoom/product-4-big.jpg" />
                                        </div>-->
                                    <!--</div>-->
                                    <!-- End .product-single-carousel -->
                                    <!--<span class="prod-full-screen">
                                        <i class="icon-plus"></i>
                                    </span>-->
                                </div>
                                <div class="prod-thumbnail owl-dots" id='carousel-custom-dots'>
                                    <!--<div class="owl-dot">
                                        <img src="assets/images/products/zoom/product-1.jpg" />
                                    </div>--->
                                    <!--<div class="owl-dot">
                                        <img src="assets/images/products/zoom/product-2.jpg" />
                                    </div>
                                    <div class="owl-dot">
                                        <img src="assets/images/products/zoom/product-3.jpg" />
                                    </div>
                                    <div class="owl-dot">
                                        <img src="assets/images/products/zoom/product-4.jpg" />
                                    </div>-->
                                </div>
                            </div><!-- End .product-single-gallery -->

                            <div class="col-lg-5 col-md-6 product-single-details">
                                <h1 class="product-title"><?php echo $product[0]->nombre; ?></h1>

                                <div class="ratings-container">
                                    <!--<div class="product-ratings">
                                        <span class="ratings" style="width:60%"></span>-->
                                    <!-- End .ratings -->
                                    <!--</div>-->
                                    <!-- End .product-ratings -->

                                    <!--<a href="#" class="rating-link">( 6 Reviews )</a>-->
                                </div><!-- End .product-container -->

                                <hr class="short-divider">

                                <div class="price-box">
                                    <!--<span class="old-price">$81.00</span>
                                    <span class="product-price">$101.00</span>-->
                                </div><!-- End .price-box -->

                                <div class="product-desc">
                                    <p></p>
                                </div><!-- End .product-desc -->
                                <form action="?controller=carrito&method=add" method="POST">
                                <div class="product-filters-container">
                                    <div class="product-single-filter">
                                        <!--<label>Color:</label>
                                        <ul class="config-swatch-list">
                                            <li class="active">
                                                <a href="#" style="background-color: #0188cc;"></a>
                                            </li>
                                            <li>
                                                <a href="#" style="background-color: #ab6e6e;"></a>
                                            </li>
                                            <li>
                                                <a href="#" style="background-color: #ddb577;"></a>
                                            </li>
                                            <li>
                                                <a href="#" style="background-color: #6085a5;"></a>
                                            </li>
                                        </ul>-->
                                        <!--<div class="select-custom">
                                        <select class="form-control" name="" id="">
                                            <option value="">Red</option>
                                            <option value="">Blue</option>
                                            <option value="">Yellow</option>
                                        </select>
                                        </div>-->
                                    </div><!-- End .product-single-filter -->
                                    <div class="product-single-filter">
                                        <!--<div class="form-group">
                                            <label for="">Prueba</label>
                                            <div class="select-custom">
                                                <select name="" id="" class="form-control">
                                                <option value="">Seleccione...</option>
                                                <option value="">Schale</option>
                                                <option value="">Prueba</option>
                                                </select>
                                            </div>
                                        </div>-->
                                        <!--<label>Prueba:</label>-->
                                        <!--<ul class="config-size-list">
                                            <li class="active"><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>-->
                                        <!--<select name="" id="" class="form-control">
                                            <option value="" selected>Seleccione...</option>
                                            <option value="">Schale</option>
                                            <option value="">Prueba</option>
                                        </select>-->
                                    </div><!-- End .product-single-filter -->
                                    <?php if(isset($voltajes)) : ?>
                                    <div class="product-single-filter">
                                        <label>Voltaje:</label>
                                        <!--<ul class="config-size-list">
                                            <li class="active"><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>-->
                                        <select name="voltaje" id="voltaje" class="form-control">
                                            <option value="0">Seleccione...</option>
                                            <?php 
                                                foreach ($voltajes as $voltaje) {
                                                    echo '<option value="'.$voltaje->idVoltaje.'">'.$voltaje->voltaje.'</option>';
                                                }
                                            ?>
                                        </select>
                                    </div><!-- End .product-single-filter -->
                                    <?php else : ?>
                                    <?php endif ?>
                                    <?php if(isset($medidas)) : ?>
                                    <div class="product-single-filter">
                                        <label>Medidas:</label>
                                        <!--<ul class="config-size-list">
                                            <li class="active"><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>-->
                                        <select name="medidas" id="medidas" class="form-control">
                                            <option value="0">Seleccione...</option>
                                            <?php 
                                                foreach ($medidas as $medida) {
                                                    echo '<option value="'.$medida->idMedida.'">'.$medida->medida.'</option>';
                                                }
                                            ?>
                                        </select>
                                    </div><!-- End .product-single-filter -->
                                    <?php else : ?>
                                    <?php endif ?>
                                </div><!-- End .product-filters-container -->

                                <hr class="divider">
                                    <div class="product-action">
                                        <div class="product-single-qty">
                                            <input class="horizontal-quantity form-control" type="text" name="quantity" id="quantity">
                                        </div><!-- End .product-single-qty -->
                                        <input type="hidden" value="<?php echo $product[0]->idProducto ?>" name="id">
                                        <!--<a href="?controller=carrito&method=add&id=$_POST['quantity']" class="btn btn-danger add-cart" title="Cotizar">Cotizar</a>-->
                                        <button class="btn btn-danger add-cart" id="btn-submit" disabled>Cotizar</button>
                                    </div><!-- End .product-action -->
                                </form>

                                <hr class="divider mb-1">

                                <div class="product-single-share">
                                    <label class="sr-only">Share:</label>

                                    <div class="social-icons mr-2">
                                        <!--<a href="https://www.facebook.com/Nuruena.sas/" class="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></a>
                                        <a href="#" class="social-icon social-twitter icon-twitter" target="_blank" title="Whats"></a>
                                        <a href="#" class="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin"></a>
                                        <a href="#" class="social-icon social-gplus fab fa-google-plus-g" target="_blank" title="Google +"></a>
                                        <a href="#" class="social-icon social-mail icon-mail-alt" target="_blank" title="Mail"></a>-->
                                    </div><!-- End .social-icons -->

                                    <!--<a href="#" class="add-wishlist" title="Add to Wishlist">Add to Wishlist</a>-->
                                </div><!-- End .product single-share -->
                            </div><!-- End .product-single-details -->
                        </div><!-- End .row -->
                    </div><!-- End .product-single-container -->

                    <!--<div class="product-single-tabs">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="false">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="product-tab-size" data-toggle="tab" href="#product-size-content" role="tab" aria-controls="product-size-content" aria-selected="true">Size Guide</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="product-tab-tags" data-toggle="tab" href="#product-tags-content" role="tab" aria-controls="product-tags-content" aria-selected="false">Tags</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="product-tab-reviews" data-toggle="tab" href="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">Reviews</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                                <div class="product-desc-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                    <ul>
                                        <li><i class="fa fa-check-circle"></i>Any Product types that You want - Simple, Configurable</li>
                                        <li><i class="fa fa-check-circle"></i>Downloadable/Digital Products, Virtual Products</li>
                                        <li><i class="fa fa-check-circle"></i>Inventory Management with Backordered items</li>
                                    </ul>
                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>--><!-- End .product-desc-content -->
                                <!--</div>--><!-- End .tab-pane -->

<!--<div class="tab-pane fade show active" id="product-size-content" role="tabpanel" aria-labelledby="product-tab-size">
    <div class="product-size-content">
        <div class="row">
            <div class="col-md-4">
                <img src="assets/images/products/single/body-shape.png" alt="body shape">
            </div>--><!-- End .col-md-4 -->

            <!--<div class="col-md-8">
                <table class="table table-size">
                    <thead>
                        <tr>
                            <th>SIZE</th>
                            <th>CHEST (in.)</th>
                            <th>WAIST (in.)</th>
                            <th>HIPS (in.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XS</td>
                            <td>34-36</td>
                            <td>27-29</td>
                            <td>34.5-36.5</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>36-38</td>
                            <td>29-31</td>
                            <td>36.5-38.5</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>38-40</td>
                            <td>31-33</td>
                            <td>38.5-40.5</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>40-42</td>
                            <td>33-36</td>
                            <td>40.5-43.5</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>42-45</td>
                            <td>36-40</td>
                            <td>43.5-47.5</td>
                        </tr>
                        <tr>
                            <td>XLL</td>
                            <td>45-48</td>
                            <td>40-44</td>
                            <td>47.5-51.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>--><!-- End .row -->
    <!--</div>--><!-- End .product-size-content -->
<!--</div>--><!-- End .tab-pane -->

<!--<div class="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
    <div class="product-tags-content">
        <form action="#">
            <h4>Add Your Tags:</h4>
            <div class="form-group">
                <input type="text" class="form-control form-control-sm" required>
                <input type="submit" class="btn btn-primary" value="Add Tags">
            </div>--><!-- End .form-group -->
        <!--</form>
        <p class="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
    </div>--><!-- End .product-tags-content -->
<!--</div>--><!-- End .tab-pane -->

<!--<div class="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
    <div class="product-reviews-content">
        <div class="row">
            <div class="col-xl-7">
                <h2 class="reviews-title">3 reviews for Product Long Name</h2>

                <ol class="comment-list">
                    <li class="comment-container">
                        <div class="comment-avatar">
                            <img src="assets/images/avatar/avatar1.jpg" width="65" height="65" alt="avatar" />
                        </div>--><!-- End .comment-avatar-->

                        <!--<div class="comment-box">
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:80%"></span>--><!-- End .ratings -->
                                <!--</div>--><!-- End .product-ratings -->
                            <!--</div>--><!-- End .ratings-container -->

                            <!--<div class="comment-info mb-1">
                                <h4 class="avatar-name">John Doe</h4> - <span class="comment-date">Novemeber 15, 2019</span>
                            </div>--><!-- End .comment-info -->

                            <!--<div class="comment-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            </div>--><!-- End .comment-text -->
                        <!--</div>--><!-- End .comment-box -->
                    <!--</li>--><!-- comment-container -->

                    <!--<li class="comment-container">
                        <div class="comment-avatar">
                            <img src="assets/images/avatar/avatar2.jpg" width="65" height="65" alt="avatar" />
                        </div>--><!-- End .comment-avatar-->

                        <!--<div class="comment-box">
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:80%"></span>--><!-- End .ratings -->
                                <!--</div>--><!-- End .product-ratings -->
                            <!--</div>--><!-- End .ratings-container -->

                            <!--<div class="comment-info mb-1">
                                <h4 class="avatar-name">John Doe</h4> - <span class="comment-date">Novemeber 15, 2019</span>
                            </div>--><!-- End .comment-info -->

                            <!--<div class="comment-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            </div>--><!-- End .comment-text -->
                        <!--</div>--><!-- End .comment-box -->
                    <!--</li>--><!-- comment-container -->

                    <!--<li class="comment-container">
                        <div class="comment-avatar">
                            <img src="assets/images/avatar/avatar3.jpg" width="65" height="65" alt="avatar" />
                        </div>--><!-- End .comment-avatar-->

                        <!--<div class="comment-box">
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:80%"></span>--><!-- End .ratings -->
                                <!--</div>--><!-- End .product-ratings -->
                            <!--</div>--><!-- End .ratings-container -->

                            <!--<div class="comment-info mb-1">
                                <h4 class="avatar-name">John Doe</h4> - <span class="comment-date">Novemeber 15, 2019</span>
                            </div>--><!-- End .comment-info -->

                            <!--<div class="comment-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            </div>--><!-- End .comment-text -->
                        <!--</div>--><!-- End .comment-box -->
                    <!--</li>--><!-- comment-container -->
                <!--</ol>--><!-- End .comment-list -->
            <!--</div>-->

            <!--<div class="col-xl-5">
                <div class="add-product-review">
                    <form action="#" class="comment-form m-0">
                        <h3 class="review-title">Add a Review</h3>

                        <div class="rating-form">
                            <label for="rating">Your rating</label>
                            <span class="rating-stars">
                                <a class="star-1" href="#">1</a>
                                <a class="star-2" href="#">2</a>
                                <a class="star-3" href="#">3</a>
                                <a class="star-4" href="#">4</a>
                                <a class="star-5" href="#">5</a>
                            </span>

                            <select name="rating" id="rating" required="" style="display: none;">
                                <option value="">Rate…</option>
                                <option value="5">Perfect</option>
                                <option value="4">Good</option>
                                <option value="3">Average</option>
                                <option value="2">Not that bad</option>
                                <option value="1">Very poor</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Your Review</label>
                            <textarea cols="5" rows="6" class="form-control form-control-sm"></textarea>
                        </div>--><!-- End .form-group -->


                        <!--<div class="row">
                            <div class="col-md-6 col-xl-12">
                                <div class="form-group">
                                    <label>Your Name</label>
                                    <input type="text" class="form-control form-control-sm" required>
                                </div>--><!-- End .form-group -->
                            <!--</div>

                            <div class="col-md-6 col-xl-12">
                                <div class="form-group">
                                    <label>Your E-mail</label>
                                    <input type="text" class="form-control form-control-sm" required>
                                </div>--><!-- End .form-group -->
                            <!--</div>
                        </div>

                        <input type="submit" class="btn btn-dark ls-n-15" value="Submit">
                    </form>
                </div>--><!-- End .add-product-review -->
            <!--</div>
        </div>
    </div>--><!-- End .product-reviews-content -->
<!--</div>--><!-- End .tab-pane -->
<!--</div>--><!-- End .tab-content -->
<!--</div>--><!-- End .product-single-tabs -->
                </div><!-- End .col-lg-9 -->

                <div class="sidebar-overlay"></div>
                <div class="sidebar-toggle"><i class="fas fa-sliders-h"></i></div>
                <aside class="sidebar-product col-lg-3 mobile-sidebar">
                    <div class="sidebar-wrapper">
                        <div class="widget widget-collapse">
                            <h3 class="widget-title">
                                <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Categorias</a>
                            </h3>

                            <div class="collapse show" id="widget-body-1">
                                <div class="widget-body">
                                    <ul class="cat-list">
                                        <?php foreach ($categorias as $categoria) : ?>
                                            <li><a href="?controller=producto&method=productsBy&a=c&id=<?php echo $categoria->idCategoria ?>&pag=1"><?php echo $categoria->nombre; ?></a></li>
                                            <!--<li><a href="#">Cameras</a></li>
                                        <li><a href="#">Head Phones</a></li>
                                        <li><a href="#">Games</a></li>-->
                                        <?php endforeach ?>
                                    </ul>
                                </div><!-- End .widget-body -->
                            </div><!-- End .collapse -->
                        </div><!-- End .widget -->

                        <!--<div class="widget">
                            <a href="#">
                                <img src="assets/images/banners/banner-sidebar.jpg" class="w-100" alt="Banner Desc">
                            </a>
                        </div>--><!-- End .widget -->

                        <!--<div class="widget widget-collapse">
                            <h3 class="widget-title">
                                <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Marcas</a>
                            </h3>

                            <div class="collapse show" id="widget-body-1">
                                <div class="widget-body">
                                    <ul class="cat-list">
                                        <?php //foreach ($marcas as $marca) : ?>
                                            <li><a href="?controller=producto&method=productsByCat&id=<?php //echo $marca->idMarca ?>"><?php //echo $marca->nombre; ?></a></li>-->
                                            <!--<li><a href="#">Cameras</a></li>
                                        <li><a href="#">Head Phones</a></li>
                                        <li><a href="#">Games</a></li>-->
                                        <?php //endforeach ?>
                                    <!--</ul>
                                </div>--><!-- End .widget-body -->
                            <!--</div>--><!-- End .collapse -->
                        <!--</div>--><!-- End .widget -->

                        <!--<div class="widget widget-featured">
                            <h3 class="widget-title">Featured</h3>

                            <div class="widget-body">
                                <div class="owl-carousel widget-featured-products">
                                    <div class="featured-col">
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-1.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>--><!-- End .ratings -->
                                                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>--><!-- End .product-ratings -->
                                                <!--</div>--><!-- End .product-container -->
                                                <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>--><!-- End .price-box -->
                                            <!--</div>--><!-- End .product-details -->
                                        <!--</div>
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-2.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>--><!-- End .ratings -->
                                                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>--><!-- End .product-ratings -->
                                                <!--</div>--><!-- End .product-container -->
                                                <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>--><!-- End .price-box -->
                                            <!--</div>--><!-- End .product-details -->
                                        <!--</div>
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-3.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>--><!-- End .ratings -->
                                                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>--><!-- End .product-ratings -->
                                                <!--</div>--><!-- End .product-container -->
                                                <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>--><!-- End .price-box -->
                                            <!--</div>--><!-- End .product-details -->
                                        <!--</div>
                                    </div>--><!-- End .featured-col -->

                                    <!--<div class="featured-col">
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-4.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>--><!-- End .ratings -->
                                                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>--><!-- End .product-ratings -->
                                                <!--</div>--><!-- End .product-container -->
                                                <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>--><!-- End .price-box -->
                                            <!--</div>--><!-- End .product-details -->
                                        <!--</div>
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-5.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>--><!-- End .ratings -->
                                                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>--><!-- End .product-ratings -->
                                                <!--</div>--><!-- End .product-container -->
                                                <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>--><!-- End .price-box -->
                                            <!--</div>--><!-- End .product-details -->
                                        <!--</div>
                                        <div class="product-default left-details product-widget">
                                            <figure>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-6.jpg">
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>--><!-- End .ratings -->
                                                        <!--<span class="tooltiptext tooltip-top"></span>
                                                    </div>--><!-- End .product-ratings -->
                                                <!--</div>--><!-- End .product-container -->
                                                <!--<div class="price-box">
                                                    <span class="product-price">$49.00</span>
                                                </div>--><!-- End .price-box -->
                                            <!--</div>--><!-- End .product-details -->
                                        <!--</div>
                                    </div>--><!-- End .featured-col -->
                                <!--</div>--><!-- End .widget-featured-slider -->
                            <!--</div>--><!-- End .widget-body -->
                        <!--</div>--><!-- End .widget -->
                    </div>
                </aside><!-- End .col-md-3 -->
            </div><!-- End .row -->

            <div class="products-section pt-0">
                <h2 class="section-title">Productos relacionados</h2>

                <div class="products-slider owl-carousel owl-theme dots-top">
                    <?php foreach ($productos as $producto) : ?>
                        <div class="product-default">
                            <figure>
                                <a href="?controller=producto&method=viewProduct&id=<?php echo $producto->idProducto ?>">
                                    <img src="<?php echo $producto->ubicacion ?>" alt="">
                                </a>
                            </figure>
                            <div class="product-details">
                                <input type="hidden" id="<?php echo $producto->idProducto ?>">
                                <div class="category-list">
                                    <a href="?controller=producto&method=productsBy&a=m&id=<?php echo $producto->marca_id ?>&pag=1"><?php echo $producto->producto ?></a>
                                </div>
                                <h3 class="product-title">
                                    <a href="?controller=producto&method=viewProduct&id=<?php echo $producto->idProducto ?>"><?php echo $producto->nombre ?></a>
                                </h3>
                                <h3 class="product-title">
                                    <p><?php echo $producto->codigo ?></p>
                                </h3>
                                <!-- End .price-box -->
                                <div class="product-action">
                                <a href="?controller=producto&method=productView&id=<?php echo $producto->idProducto ?>" class="btn-icon btn-add-cart btn-quickview-product">Cotizar</a>
                                </div>
                            </div>
                        </div>
                    <?php endforeach ?>
                    <!--<div class="product-default inner-quickview inner-icon">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-14.jpg">
                            </a>
                            <div class="label-group">
                                <span class="product-label label-sale">-20%</span>
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
                            </div>
                            <h3 class="product-title">
                                <a href="product.html">Product Short Name</a>
                            </h3>
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>-->
                    <!-- End .ratings -->
                    <!--<span class="tooltiptext tooltip-top"></span>
                                </div>-->
                    <!-- End .product-ratings -->
                    <!--</div>-->
                    <!-- End .ratings-container -->
                    <!--<div class="price-box">
                                <span class="old-price">$59.00</span>
                                <span class="product-price">$49.00</span>
                            </div>-->
                    <!-- End .price-box -->
                    <!--</div>-->
                    <!-- End .product-details -->
                    <!--</div>-->
                    <!--<div class="product-default inner-quickview inner-icon">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-13.jpg">
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
                            </div>
                            <h3 class="product-title">
                                <a href="product.html">Product Short Name</a>
                            </h3>
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>-->
                    <!-- End .ratings -->
                    <!--<span class="tooltiptext tooltip-top"></span>
                                </div>-->
                    <!-- End .product-ratings -->
                    <!--</div>-->
                    <!-- End .ratings-container -->
                    <!--<div class="price-box">
                                <span class="old-price">$59.00</span>
                                <span class="product-price">$49.00</span>
                            </div>-->
                    <!-- End .price-box -->
                    <!--</div>-->
                    <!-- End .product-details -->
                    <!--</div>-->
                    <!--<div class="product-default inner-quickview inner-icon">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-12.jpg">
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
                            </div>
                            <h3 class="product-title">
                                <a href="product.html">Product Short Name</a>
                            </h3>
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>-->
                    <!-- End .ratings -->
                    <!--<span class="tooltiptext tooltip-top"></span>
                                </div>-->
                    <!-- End .product-ratings -->
                    <!--</div>-->
                    <!-- End .ratings-container -->
                    <!--<div class="price-box">
                                <span class="old-price">$59.00</span>
                                <span class="product-price">$49.00</span>
                            </div>-->
                    <!-- End .price-box -->
                    <!--</div>-->
                    <!-- End .product-details -->
                    <!--</div>-->
                    <!--<div class="product-default inner-quickview inner-icon">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-11.jpg">
                            </a>
                            <div class="label-group">
                                <span class="product-label label-hot">HOT</span>
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
                            </div>
                            <h3 class="product-title">
                                <a href="product.html">Product Short Name</a>
                            </h3>
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>-->
                    <!-- End .ratings -->
                    <!--<span class="tooltiptext tooltip-top"></span>
                                </div>-->
                    <!-- End .product-ratings -->
                    <!--</div>-->
                    <!-- End .ratings-container -->
                    <!--<div class="price-box">
                                <span class="old-price">$59.00</span>
                                <span class="product-price">$49.00</span>
                            </div>-->
                    <!-- End .price-box -->
                    <!--</div>-->
                    <!-- End .product-details -->
                    <!--</div>-->
                    <!--<div class="product-default inner-quickview inner-icon">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-10.jpg">
                            </a>
                            <div class="label-group">
                                <span class="product-label label-hot">HOT</span>
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
                            </div>
                            <h3 class="product-title">
                                <a href="product.html">Product Short Name</a>
                            </h3>
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>-->
                    <!-- End .ratings -->
                    <!--<span class="tooltiptext tooltip-top"></span>
                                </div>-->
                    <!-- End .product-ratings -->
                    <!--</div>-->
                    <!-- End .ratings-container -->
                    <!--<div class="price-box">
                                <span class="old-price">$59.00</span>
                                <span class="product-price">$49.00</span>
                            </div>-->
                    <!-- End .price-box -->
                    <!--</div>-->
                    <!-- End .product-details -->
                    <!--</div>-->
                    <!--<div class="product-default inner-quickview inner-icon">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-9.jpg">
                            </a>
                            <div class="label-group">
                                <span class="product-label label-sale">-30%</span>
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
                            </div>
                            <h3 class="product-title">
                                <a href="product.html">Product Short Name</a>
                            </h3>
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>-->
                    <!-- End .ratings -->
                    <!--<span class="tooltiptext tooltip-top"></span>
                                </div>-->
                    <!-- End .product-ratings -->
                    <!--</div>-->
                    <!-- End .ratings-container -->
                    <!--<div class="price-box">
                                <span class="old-price">$59.00</span>
                                <span class="product-price">$49.00</span>
                            </div>-->
                    <!-- End .price-box -->
                    <!--</div>-->
                    <!-- End .product-details -->
                    <!--</div>-->
                    <!--<div class="product-default inner-quickview inner-icon">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-8.jpg">
                            </a>
                            <div class="label-group">
                                <span class="product-label label-sale">-20%</span>
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
                            </div>
                            <h3 class="product-title">
                                <a href="product.html">Product Short Name</a>
                            </h3>
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>-->
                    <!-- End .ratings -->
                    <!--<span class="tooltiptext tooltip-top"></span>
                                </div>-->
                    <!-- End .product-ratings -->
                    <!--</div>-->
                    <!-- End .ratings-container -->
                    <!--<div class="price-box">
                                <span class="old-price">$59.00</span>
                                <span class="product-price">$49.00</span>
                            </div>-->
                    <!-- End .price-box -->
                    <!--</div>-->
                    <!-- End .product-details -->
                    <!--</div>-->
                </div><!-- End .products-slider -->
            </div><!-- End .products-section -->

            <div class="mb-lg-4"></div><!-- margin -->
        </div><!-- End .container -->
    </main><!-- End .main -->
    <?php require 'templates/footer.php'; ?>
</body>

</html>