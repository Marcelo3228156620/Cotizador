<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Editar cotización</title>

    <meta name="keywords" content="HTML5 Template" />
    <meta name="description" content="Porto - Bootstrap eCommerce Template">
    <meta name="author" content="SW-THEMES">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/images/icons/Logo_peque_ferreteria.fw.png">


    <link rel="stylesheet" href="assets/css/ea92915d6480870b41e84eda217fd24a7831739103.css">
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
                <div class="header-left header-dropdowns ml-0 ml-sm-auto w-sm-100">
                    <div class="header-dropdown dropdown-expanded d-none d-lg-block">
                        <div class="header-menu">
                            <ul>
                                <!--<li><a href="">MI Menu</a></li>-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main class="main">
        <div class="container">
            <div class="col-lg-12 order-lg-last dashboard-content">
                <h2>Cotización</h2>
                <div class="row">
                    <div class="col-sm-11">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group required-field">
                                    <input type="hidden" id="idCotizacion" name="idCotizacion" value="<?php echo $cotizacion[0]->idCotizacion ?>">
                                    <label for="idCotizacion">Cotización</label>
                                    <input type="text" id="idCotizacion" name="idCotizacion" class="form-control" value="<?php echo $cotizacion[0]->idCotizacion ?>" disabled>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group required-field">
                                    <label for="fecha">Cliente</label>
                                    <input type="text" id="cliente_id" name="cliente_id" class="form-control" value="<?php echo $cotizacion[0]->nombre . ' ' . $cotizacion[0]->apellido ?>" disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-11">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group required-field">
                                    <label for="">Telefono</label>
                                    <input type="text" id="telefono" name="telefono" class="form-control" value="<?php echo $cotizacion[0]->telefono ?>" disabled>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group required-field">
                                    <label for="">Correo</label>
                                    <input type="text" id="correo" name="correo" class="form-control" value="<?php echo $cotizacion[0]->correo ?>" disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <table class="table table-cart">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($cotizacion as $cotizacion) : ?>
                            <tr>
                                <td><?php echo $cotizacion->codigo ?></td>
                                <td><?php echo $cotizacion->producto ?></td>
                                <td><?php echo $cotizacion->cantidad ?></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
    <!--<script src="assets/js/391eb14bcf94e8fe2051c0ca78be528014587267177.js"></script>-->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/optional/isotope.pkgd.min.js"></script>
    <script src="assets/js/plugins.min.js"></script>


    <!-- Main JS File -->
    <script src="assets/js/main.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>

</html>