<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cotizador</title>
</head>

<body>
    <?php require 'templates/header.php'; ?>
    <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item active" aria-current="page">Cotización</li>
                </ol>
            </div><!-- End .container -->
        </nav>

        <div class="container">
            <?php if (empty($carrito)) : ?>
                <div class="text-center">
                    <div class="feature-box px-sm-5 feature-box-simple text-center">
                        <i class="icon-shopping-cart"></i>
                        <div class="feature-box-content">
                            <h3>El cotizador se encuentra vacio</h3>
                        </div>
                    </div>
                </div>
                <br>
                <div class="text-center">
                    <a class="btn btn-outline-secondary btn-clear-cart" href="?controller=producto">Volver al Menu</a>
                </div>
            <?php else : ?>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="cart-table-container">
                            <table class="table table-cart" id="cart">
                                <thead>
                                    <tr>
                                        <th class="product-col">Producto</th>
                                        <th class="price-col">Cantidad</th>
                                        <th class="qty-col">Función</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($carrito as $productos) : ?>
                                        <?php foreach ($productos as $producto) : ?>
                                            <tr class="product-row">
                                                <td class="product-col">
                                                    <figure class="product-image-container">
                                                        <a href="product.html" class="product-image">
                                                            <img src="<?php echo $producto->ubicacion ?>" alt="product">
                                                        </a>
                                                    </figure>
                                                    <h4 class="product-title">
                                                        <a href="product.html"><?php echo $producto->nombre ?></a>
                                                    </h4>
                                                </td>
                                                <td>
                                                    <div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                                                        <input value="<?php echo $producto->cantidad ?>" class="form-control" type="text" name="prueba" id="prueba" onclick="alert(<?php echo $producto->idProducto ?>);">
                                                        <span class="input-group-btn-vertical">
                                                            <a href="?controller=producto&method=addItem&id=<?php echo $producto->idProducto ?>" class="btn btn-outline bootstrap-touchspin-up icon-up-dir"></a>
                                                            <a href="?controller=producto&method=removeItem&id=<?php echo $producto->idProducto ?>" class="btn btn-outline bootstrap-touchspin-down icon-down-dir"></a>
                                                        </span>
                                                    </div>
                                                    <!--<input value="<?php //echo $producto->cantidad 
                                                                        ?>" class="vertical-quantity form-control" type="text" name="prueba" id="prueba" >-->
                                                    <!--<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">-->
                                                    <!--<input value="<?php //echo $producto->cantidad 
                                                                        ?>" class="vertical-quantity form-control" type="text" name="prueba" id="prueba" >-->
                                                    <!--<span class="input-group-btn-vertical">
                                                        <button class="btn btn-outline bootstrap-touchspin-up icon-up-dir"></button> 
                                                        <button class="btn btn-outline bootstrap-touchspin-down icon-down-dir"></button> 
                                                    </span>-->
                                                    <!--</div>-->

                                                </td>
                                                <!--<input type="text" value="<?php //echo $producto->idProducto 
                                                                                ?>" name="idProducto" id="id">-->
                                                <td><a href="?controller=producto&method=removeProduct&id=<?php echo $producto->idProducto ?>" title="Eliminar producto" class="btn-delete"><span class="sr-only">Delete</span><i class="fas fa-trash"></i></a></td>
                                            </tr>
                                        <?php endforeach ?>
                                    <?php endforeach ?>
                                <!--<tr class="product-action-row">
										<td colspan="4" class="clearfix">
											<div class="float-left">
												<a href="#" class="btn-move">Move to Wishlist</a>
											</div>-->
                                <!-- End .float-left -->

                                <!--<div class="float-right">
												<a href="#" title="Edit product" class="btn-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
												<a href="#" title="Remove product" class="btn-remove"><span class="sr-only">Remove</span></a>
											</div>-->
                                <!-- End .float-right -->
                                <!--</td>
									</tr>-->
                                </tbody>

                                <!--<tfoot>
									<tr>
										<td colspan="4" class="clearfix">
											<div class="float-left">
												<a href="category.html" class="btn btn-outline-secondary">Continue Shopping</a>
											</div>-->
                                <!-- End .float-left -->

                                <!--<div class="float-right">
												<a href="#" class="btn btn-outline-secondary btn-clear-cart">Clear Shopping Cart</a>
												<a href="#" class="btn btn-outline-secondary btn-update-cart">Update Shopping Cart</a>
											</div>-->
                                <!-- End .float-right -->
                                <!--</td>
									</tr>
								</tfoot>-->
                            </table>
                        </div><!-- End .cart-table-container -->

                        <!--<div class="cart-discount">-->
                        <!--<h4>Apply Discount Code</h4>
							<form action="#">
								<div class="input-group">
									<input type="text" class="form-control form-control-sm" placeholder="Enter discount code"  required>
									<div class="input-group-append">
										<button class="btn btn-sm btn-primary" type="submit">Apply Discount</button>
									</div>
								</div>-->
                        <!-- End .input-group -->
                        <!--</form>-->
                        <!--</div>-->
                        <!-- End .cart-discount -->
                    </div><!-- End .col-lg-8 -->

                    <div class="col-lg-4">
                        <div class="cart-summary">
                            <h3>Ingrese sus datos</h3>

                            <!--<h4>
								<a data-toggle="collapse" href="#total-estimate-section" class="collapsed" role="button" aria-expanded="false" aria-controls="total-estimate-section">Estimate Shipping and Tax</a>
							</h4>-->

                            <div id="total-estimate-section">
                                <form action="?controller=cliente&method=save" method="POST">
                                    <div class="form-group form-group-sm">
                                        <label>Nombres</label>
                                        <input type="text" class="form-control form-control-sm" id="nombre" name="nombre" required>
                                    </div><!-- End .form-group -->

                                    <div class="form-group form-group-sm">
                                        <label>Apellidos</label>
                                        <input type="text" class="form-control form-control-sm" id="apellido" name="apellido" required>
                                    </div><!-- End .form-group -->

                                    <div class="form-group form-group-sm">
                                        <label>Correo electronico</label>
                                        <input type="email" class="form-control form-control-sm" id="correo" name="correo" required>
                                    </div><!-- End .form-group -->

                                    <div class="form-group form-group-sm">
                                        <label>Teléfono</label>
                                        <input type="text" class="form-control form-control-sm" id="telefono" name="telefono" required>
                                    </div><!-- End .form-group -->
                                    <div class="form-group form-group-sm">
                                        <div class="checkout-methods">
                                            <!--<a href="envio.php" class="btn btn-block btn-sm btn-primary">Solicitar cotización</a>-->
                                            <button type="submit" class="btn btn-block btn-sm btn-primary">Solicitar cotizacion</button>
                                        </div>
                                    </div>
                                </form>
                            </div><!-- End #total-estimate-section -->

                            <!--<table class="table table-totals">
								<tbody>
									<tr>
										<td>Subtotal</td>
										<td>$17.90</td>
									</tr>

									<tr>
										<td>Tax</td>
										<td>$0.00</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td>Order Total</td>
										<td>$17.90</td>
									</tr>
								</tfoot>
							</table>-->

                            <!--<div class="checkout-methods">
								<a href="checkout-shipping.html" class="btn btn-block btn-sm btn-primary">Solicitar cotización</a>
							</div>-->
                            <!-- End .checkout-methods -->
                        </div><!-- End .cart-summary -->
                    </div><!-- End .col-lg-4 -->
                </div><!-- End .row -->
            <?php endif ?>
        </div><!-- End .container -->

        <div class="mb-6"></div><!-- margin -->
    </main><!-- End .main -->
    <?php require 'templates/footer.php'; ?>
</body>

</html>