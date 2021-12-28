<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>ADMIN</title>

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
                                <li><a href="">MI Menu</a></li>
                                <li><a href="">MI Menu</a></li>
                                <li><a href="">MI Menu</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-middle">
            <div class="container">
                <div class="header">
                    <div class="header-icon header-icon header-search header-search-inline header-search-category w-lg-max text-right">
                        <a href="#" class="search-toggle" role="button"><i class="icon-search-3"></i></a>
                        <form action="?controller=cotizacion&method=search" method="POST">
                            <div class="header-search-wrapper">
                                <input type="search" class="form-control" name="idCotizacion" id="idCotizacion" placeholder="Buscar factura....">
                                <button class="btn icon-search-3 p-0" type="submit"></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="float-right">
                    <a href="?controller=cotizacion&method=admin" class="btn btn-block">Limpiar</a>                 
                </div>
            </div>
        </div>
    </header>
    <main class="main">
        <div class="container">
            <div class="col-md-12">
                <table class="table table-cart">
                    <thead>
                        <tr>
                            <th>N° Cotización</th>
                            <th>Fecha cotización</th>
                            <th>Cotización SAP</th>
                            <th>Cliente</th>
                            <th>Funcion</th>
                        </tr>
                    </thead>
                    <tbody>               
                        <?php foreach ($cotizaciones as $cotizacion) : ?>
                        <tr>
                            <td><?php echo $cotizacion->idCotizacion ?></td>
                            <td><?php echo $cotizacion->fecha ?></td>
                            <td><?php echo $cotizacion->cotizacionSap ?></td>
                            <td><?php echo $cotizacion->nombre.' '.$cotizacion->apellido ?></td>
                            <td><!--<a class="header-icon" href="?controller=exportar&method=exportar&id=<?php //echo $cotizacion->idCotizacion ?>"><i class="far fa-file-excel"></i></a>-->
                                <a class="header-icon" href="?controller=cotizacion&method=edit&id=<?php echo $cotizacion->idCotizacion ?>"><i class="fas fa-edit"></i></a>
                                <a class="header-icon" href="?controller=cotizacion&method=view&id=<?php echo $cotizacion->idCotizacion ?>"><i class="fas fa-eye"></i></a></td>
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