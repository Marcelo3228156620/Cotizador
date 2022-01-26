<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Productos</title>
</head>

<body>
	<?php require 'templates/header.php'; ?>
	<?php
	if (isset($_GET['a'])) {
		$act = $_GET['a'];
		$id = $_GET['id'];
	}
	if (isset($_GET['pag'])) {
		$pag = $_GET['pag'];
	}
	$paginas2 = $paginas - 2;
	?>
	<main class="main">
		<!--<div class="category-banner-container bg-gray">
				<div class="category-banner banner text-uppercase" style="background: no-repeat 60%/cover url('assets/images/slider/Banner_Apolo_P1.jpg');">
					<div class="container position-relative">
						<div class="row">
							<div class="pl-lg-5 pb-5 pb-md-0 col-md-5 col-xl-4 col-lg-4 offset-1">
								<h3 class="ml-lg-5 mb-2 ls-10">Electronic<br>Deals</h3>
								<a href="#" class="ml-lg-5 btn btn-dark btn-black ls-10">Get Yours!</a>
							</div>
							<div class="pl-lg-5 col-md-4 offset-md-0 offset-1 pt-4">
								<div class="coupon-sale-content">
									<h4 class="m-b-2 coupon-sale-text bg-white ls-10 text-transform-none">Exclusive COUPON</h4>
									<h5 class="mb-2 coupon-sale-text d-block ls-10 p-0"><i class="ls-0">UP TO</i><b class="text-dark">$100</b> OFF</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>-->
		<div class="page-header page-header-bg text-left" style="background: 60%/cover #fff url('assets/images/slider/Banner_Apolo_P1.jpg');">
			<div class="container">
				<?php if(isset($id)) : ?>
					<?php if($act == 'c') : ?>
						<?php foreach($categorias as $categoria) : ?>
							<?php if($id == $categoria->idCategoria) : ?>
								<h1><?php echo $categoria->nombre ?></h1>
							<?php endif ?>
						<?php endforeach ?>
				<?php else : ?>
						<?php foreach($subcategorias as $subcategoria) : ?>
							<?php if($id == $subcategoria->idSubCategoria) : ?>
								<h1><?php echo $subcategoria->nombre ?></h1>
							<?php endif ?>
						<?php endforeach ?>
				<?php endif ?>
				<?php else : ?>
					<h1>Buscar</h1>
				<?php endif ?>
				
			</div>
		</div>

		<div class="container">
			<!--<h2 class="section-title heading-border ls-20 border-0">
                Subcategorias
            </h2>
            <div class="banners-container">
					<div class="banners-slider owl-carousel owl-theme">
						<div class="banner banner1 banner-sm-vw">
							<figure>
								<img src="assets/images/banners/banner-1.jpg" alt="banner">
							</figure>
							<div class="banner-layer banner-layer-middle">
								<h3 class="m-b-2">Porto Watches</h3>
								<h4 class="m-b-3 ls-10 text-primary"><sup class="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
								<a href="#" class="btn btn-sm btn-dark ls-10">Shop Now</a>
							</div>
						</div>-->
			<!-- End .banner -->

			<!--<div class="banner banner2 banner-sm-vw text-uppercase">
							<figure>
								<img src="assets/images/banners/banner-2.jpg" alt="banner">
							</figure>
							<div class="banner-layer banner-layer-middle text-center">
								<div class="row align-items-lg-center">
									<div class="col-lg-7 text-lg-right">
										<h3 class="m-b-1">Deal Promos</h3>
										<h4 class="pb-4 pb-lg-0 mb-0 text-body">Starting at $99</h4>
									</div>
									<div class="col-lg-5 text-lg-left px-0 px-xl-3">
										<a href="#" class="btn btn-sm btn-dark ls-10">Shop Now</a>
									</div>
								</div>
							</div>
						</div>-->
			<!-- End .banner -->

			<!--<div class="banner banner3 banner-sm-vw">
							<figure>
								<img src="assets/images/banners/banner-3.jpg" alt="banner">
							</figure>
							<div class="banner-layer banner-layer-middle text-right">
								<h3 class="m-b-2">Handbags</h3>
								<h4 class="m-b-2 text-secondary text-uppercase">Starting at $99</h4>
								<a href="#" class="btn btn-sm btn-dark ls-10">Shop Now</a>
							</div>
						</div>-->
			<!-- End .banner -->
			<!--<div class="banner banner4 banner-sm-vw">
                                <figure>
                                    <img src="assets/images/banners/banner-3.jpg" alt="banner">
                                </figure>
                                <div class="banner-layer banner-layer-middle text-right">
                                    <h3 class="m-b-2">Handbags</h3>
                                    <h4 class="m-b-2 text-secondary text-uppercase">Starting at $99</h4>
                                    <a href="#" class="btn btn-sm btn-dark ls-10">Shop Now</a>
                                </div>
                            </div>-->
			<!-- End .banner -->
			<!--</div>
				</div>-->
			<nav aria-label="breadcrumb" class="breadcrumb-nav">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="?controller=producto"><i class="icon-home"></i></a></li>
					<li class="breadcrumb-item active" aria-current="page"><a href="#">Productos</a></li>
					<!--<li class="breadcrumb-item"><a href="#">Men</a></li>
						<li class="breadcrumb-item active" aria-current="page">Accessories</li>-->
				</ol>
			</nav>

			<div class="row">
				<div class="col-lg-9 main-content">


					<div class="row" id="products">
						<?php foreach ($products as $producto) : ?>
							<div class="col-6 col-sm-4">
								<div class="product-default">
									<figure>
										<a href="?controller=producto&method=viewProduct&id=<?php echo $producto->idProducto ?>">
											<div class="image-product">
												<img src="<?php echo $producto->ubicacion ?>" alt="<?php echo $producto->producto ?>">
											</div>
										</a>
									</figure>
									<div class="product-details">
										<input type="hidden" id="<?php echo $producto->idProducto ?>" class="btnAddCart" value="">
										<!--<div class="category-wrap">-->
										<div class="category-list">
											<a href="?controller=producto&method=productsBy&a=m&id=<?php echo $producto->marca_id ?>&pag=1" class="product-category"><?php echo $producto->producto ?></a>
										</div>
										<!--<a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>-->
										<!--</div>-->
										<h6 class="product-title">
											<a href="?controller=producto&method=viewProduct&id=<?php echo $producto->idProducto ?>"><?php echo $producto->nombre ?></a>
										</h6>
										<!--<h3 class="product-title">
											<p>Referencia <?php echo $producto->codigo ?></p>
										</h3>-->
										<div class="product-action">
											<!--<button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal" onclick="nueva(<?php echo $producto->idProducto ?>)" id="btnAdd">Cotizar</button>-->
											<a href="?controller=producto&method=productView&id=<?php echo $producto->idProducto ?>" class="btn-icon btn-add-cart btn-quickview-product">Cotizar</a>
										</div>
									</div><!-- End .product-details -->
								</div>
							</div><!-- End .col-sm-4 -->
						<?php endforeach ?>
					</div><!-- End .row -->

					<?php if (isset($_GET['sf'])) : ?>
						<nav class="toolbox toolbox-pagination">
							<div class="toolbox-item toolbox-show">
							</div><!-- End .toolbox-item -->
							<ul class="pagination toolbox-item" id="pagination">
								<li class="page-item <?php echo $pag <= 1 ? 'disabled' : '' ?>">
									<a class="page-link page-link-btn" href="?controller=producto&method=productsBy&a=<?php echo $act ?>&id=<?php echo $id ?>&sf=f&f=<?php echo $_GET['f'] ?>&pag=<?php echo $_GET['pag'] - 1 ?>"><i class="icon-angle-left"></i></a>
								</li>
								<?php for ($i = 0; $i < $paginas; $i++) : ?>
									<li class="page-item <?php echo  $i >= $paginas2 ? '' : ($i > 3 ? 'disabled' : '') ?><?php echo $pag == $i + 1 ? 'active' : '' ?>">
										<a class="page-link" href="?controller=producto&method=productsBy&a=<?php echo $act ?>&id=<?php echo $id ?>&sf=f&f=<?php echo $_GET['f'] ?>&pag=<?php echo $i + 1 ?>"><?php echo $i + 1 ?><span class="sr-only">(current)</span></a>
									</li>
								<?php endfor ?>
								<li class="page-item <?php echo $pag >= $paginas ? 'disabled' : '' ?>">
									<a class="page-link page-link-btn" href="?controller=producto&method=productsBy&a=<?php echo $act ?>&id=<?php echo $id ?>&sf=f&f=<?php echo $_GET['f'] ?>&pag=<?php echo $_GET['pag'] + 1 ?>"><i class="icon-angle-right"></i></a>
								</li>
							</ul>
						</nav>
					<?php elseif ($_GET['method'] == 'search') : ?>
						<nav class="toolbox toolbox-pagination">
							<div class="toolbox-item toolbox-show">
							</div><!-- End .toolbox-item -->
							<ul class="pagination toolbox-item" id="pagination">
								<li class="page-item <?php echo $pag <= 1 ? 'disabled' : '' ?>">
									<a class="page-link page-link-btn" href="?controller=producto&method=search&pag=<?php echo $_GET['pag'] - 1 ?>&name=<?php echo $_REQUEST['name'] ?>"><i class="icon-angle-left"></i></a>
								</li>
								<?php for ($i = 0; $i < $paginas; $i++) : ?>
									<li class="page-item <?php echo  $i >= $paginas2 ? '' : ($i > 3 ? 'disabled' : '') ?><?php echo $pag == $i + 1 ? 'active' : '' ?>">
										<a class="page-link" href="?controller=producto&method=search&pag=<?php echo $i + 1 ?>&name=<?php echo $_REQUEST['name'] ?>"><?php echo $i + 1 ?><span class="sr-only">(current)</span></a>
									</li>
								<?php endfor ?>
								<li class="page-item <?php echo $pag >= $paginas ? 'disabled' : '' ?>">
									<a class="page-link page-link-btn" href="?controller=producto&method=search&pag=<?php echo $_GET['pag'] + 1 ?>&name=<?php echo $_REQUEST['name'] ?>"><i class="icon-angle-right"></i></a>
								</li>
							</ul>
						</nav>
					<?php else : ?>
						<nav class="toolbox toolbox-pagination">
							<div class="toolbox-item toolbox-show">
							</div><!-- End .toolbox-item -->
							<ul class="pagination toolbox-item" id="pagination">
								<li class="page-item <?php echo $pag <= 1 ? 'disabled' : '' ?>">
									<a class="page-link page-link-btn" href="?controller=producto&method=productsBy&a=<?php echo $act ?>&id=<?php echo $id ?>&pag=<?php echo $_GET['pag'] - 1 ?>"><i class="icon-angle-left"></i></a>
								</li>
								<?php for ($i = 0; $i < $paginas; $i++) : ?>
									<li class="page-item <?php echo  $i >= $paginas2 ? '' : ($i > 3 ? 'disabled' : '') ?><?php echo $pag == $i + 1 ? 'active' : '' ?>">
										<a class="page-link" href="?controller=producto&method=productsBy&a=<?php echo $act ?>&id=<?php echo $id ?>&pag=<?php echo $i + 1 ?>"><?php echo $i + 1 ?><span class="sr-only">(current)</span></a>
									</li>
								<?php endfor ?>
								<li class="page-item <?php echo $pag >= $paginas ? 'disabled' : '' ?>">
									<a class="page-link page-link-btn" href="?controller=producto&method=productsBy&a=<?php echo $act ?>&id=<?php echo $id ?>&pag=<?php echo $_GET['pag'] + 1 ?>"><i class="icon-angle-right"></i></a>
								</li>
							</ul>
						</nav>
					<?php endif ?>
				</div><!-- End .col-lg-9 -->

				<div class="sidebar-overlay"></div>
				<div class="sidebar-toggle"><i class="fas fa-sliders-h"></i></div>
				<aside class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
					<div class="sidebar-wrapper">
						<?php if (!empty($filtros)) : ?>
							<div class="widget">
								<h3 class="widget-title">
									<a data-toggle="collapse" href="#widget-body-6" role="button" aria-expanded="true" aria-controls="widget-body-6">Filtro</a>
								</h3>
								<div class="collapse show" id="widget-body-6">
									<div class="widget-body">
										<ul class="config-swatch-list" name="orderByFilter" id="orderByFilter">
											<?php foreach ($filtros as $filtro) : ?>
												<?php if ($filtro->subCategoria_id == $id) :
													if ($filtro->idFiltro != null) :
														if ($filtro->idFiltro == $_GET['f']) :
															echo '<li class="active" name="filter" id="' . $filtro->idFiltro . '"><a href="?controller=producto&method=productsBy&a=' . $act . '&id=' . $id . '&sf=f&f=' . $filtro->idFiltro . '&pag=1"></a><span>' . $filtro->nombre . '</span></li>';
														else :
															echo '<li name="filter" id="' . $filtro->idFiltro . '"><a href="?controller=producto&method=productsBy&a=' . $act . '&id=' . $id . '&sf=f&f=' . $filtro->idFiltro . '&pag=1"></a><span>' . $filtro->nombre . '</span></li>';
														endif ?>
													<?php else :
													endif ?>
												<?php else :
												endif ?>
											<?php endforeach ?>
										</ul>
									</div>
									<!-- End .widget-body -->
								</div>
							</div>
						<?php else :
						?>
						<?php endif ?>
						<div class="widget">
							<h3 class="widget-title">
								<a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Categorias</a>
							</h3>

							<div class="collapse show" id="widget-body-2">
								<div class="widget-body">
									<ul class="cat-list">
										<?php foreach ($categorias as $categoria) : ?>
											<li><a href="?controller=producto&method=productsBy&a=c&id=<?php echo $categoria->idCategoria ?>&pag=1"><?php echo $categoria->nombre ?></a>
											</li>
										<?php endforeach ?>
									</ul>
								</div><!-- End .widget-body -->
							</div><!-- End .collapse -->
						</div><!-- End .widget -->

						<!--<div class="widget">
								<h3 class="widget-title">
									<a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Categorias p</a>
								</h3>

								<div class="collapse show" id="widget-body-3">
									<div class="widget-body">
										<ul class="cat-list">
                                                <li><a href="#widget-category-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="widget-category-3">
													Accessories
													<span class="products-count">(2)</span>
													<span class="toggle"></span>
												</a>
												<div id="widget-category-3" class="collapse show" style="">
													<ul class="cat-sublist">
														<li>Caps
															<span class="products-count">(1)</span>
														</li>
														<li>Watches
															<span class="products-count">(3)</span>
														</li>
													</ul>
												</div>
												</li>
										</ul>
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
										<?php foreach ($marcas as $marca) : ?>
											<li><a href="?controller=producto&method=productsBy&a=m&id=<?php echo $marca->idMarca ?>&pag=1"><?php echo $marca->nombre ?></a></li>
										<?php endforeach ?>
									</ul>
								</div><!-- End .widget-body -->
							</div><!-- End .collapse -->
						</div><!-- End .widget -->
					</div><!-- End .sidebar-wrapper -->
				</aside><!-- End .col-lg-3 -->
			</div><!-- End .row -->
		</div><!-- End .container -->

		<div class="mb-3"></div><!-- margin -->
	</main><!-- End .main -->
	<?php require 'templates/footer.php'; ?>
</body>

</html>