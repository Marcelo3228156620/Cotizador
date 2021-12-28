<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listas de precios</title>
</head>

<body>
    <?php require 'templates/header.php'; ?>
    <main class="main">
        <div class="page-header page-header-bg text-left" style="background: 70%/cover #fff url('img/Cabeceras/nuestras-marcas.jpg');">
            <div class="container">
                <h1>LISTAS DE PRECIOS</h1>
            </div>
        </div>
        <div class="about-section">
            <div class="container">
                <div class="row">
                    <?php foreach ($marcas as $marca) : ?>
                        <div class="col-6 col-sm-2 form-group">
                            <a href="<?php echo $marca->listaUbicacion ?>">
                                <img src="<?php echo $marca->ubicacion ?>" alt="<?php echo $marca->nombre ?>">
                            </a>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>        
    </main>
    <?php require 'templates/footer.php'; ?>
</body>

</html>