<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manuales</title>
</head>

<body>
    <?php require 'templates/header.php'; ?>
    <?php
        if(isset($_REQUEST['m'])) {
            $id = $_REQUEST['m'];
        } 
    /*print_r($marcas) ;
die();*/ ?>
    <main class="main">
        <div class="page-header page-header-bg text-left" style="background: 70%/cover #fff url('img/Cabeceras/manuales.jpg');">
            <div class="container">
                <h1>MANUALES, FICHAS TÉCNICAS Y CERTIFICADOS</h1>
            </div>
        </div>
        <div class="about-section">
            <div class="container">
            <?php foreach ($marcas as $marca) : ?>
                <?php if($marca->idMarca == $id) : ?>
                <div class="row">
                    <div class="col-12 col-lg-2 my-auto">
                        <img src="<?php echo $marca->ubicacion ?>" alt="<?php echo $marca->nombre ?>" width="140">
                    </div>
                    <div class="col-12 col-lg-10 my-auto">
                        <h3><?php echo $marca->nombre ?></h3>
                    </div>
                </div>
                <?php else : ?>
                <?php endif ?>
                <?php endforeach ?>
                <br>
                <?php if(!empty($manuales)) : ?>
                <div class="contmms">
                    <a name="manuales"></a>
                    <h2 class="cabetitulo">MANUALES TÉCNICOS</h2>
                    <UL class="fa-ul">
                        <?php foreach ($manuales as $manual) : ?>
                        <li>
                            <span class="fa-li">
                                <li class="fas fa-download"></li>
                            </span>
                            <a href="<?php echo $manual->ubicacionArc ?>" target="_blank"><?php echo $manual->nombre ?></a>
                        </li>
                        <?php endforeach ?>
                    </UL>
                </div>
                <?php else : ?>
                <?php endif ?> 
                <br>
                <br>
                <br>
            </div>
        </div>
    </main>
    <?php require 'templates/footer.php'; ?>
</body>

</html>