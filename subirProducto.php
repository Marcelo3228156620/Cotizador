<?php
include('dbconect.php');
require_once('vendor/php-excel-reader/excel_reader2.php');
require_once('vendor/SpreadsheetReader.php');

if (isset($_POST["import"]))
{
    
$allowedFileType = ['application/vnd.ms-excel','text/xls','text/xlsx','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  
  if(in_array($_FILES["file"]["type"],$allowedFileType)){

        $targetPath = 'files/'.$_FILES['file']['name'];
        move_uploaded_file($_FILES['file']['tmp_name'], $targetPath);
        
        $Reader = new SpreadsheetReader($targetPath);
        
        $sheetCount = count($Reader->sheets());
        for($i=0;$i<$sheetCount;$i++)
        {
            $Reader->ChangeSheet($i);
            
            foreach ($Reader as $Row)
            {
          
              $codigo = "";
              if(isset($Row[0])) {
                  $codigo = mysqli_real_escape_string($con,$Row[0]);
              }

              $nombre = "";
              if(isset($Row[1])) {
                  $nombre = mysqli_real_escape_string($con,$Row[1]);
              }

              $referenciaProveedor = "";
              if(isset($Row[2])) {
                  $referenciaProveedor = mysqli_real_escape_string($con,$Row[2]);
              }

              $marca_id = "";
              if(isset($Row[3])) {
                  $marca_id = mysqli_real_escape_string($con,$Row[3]);
              }

              $imagen = "";
              if(isset($Row[4])) {
                  $imagen = mysqli_real_escape_string($con,$Row[4]);
              }

              $ubicacion = "";
              if(isset($Row[5])) {
                  $ubicacion = mysqli_real_escape_string($con,$Row[5]);
              }

              $subcategoria_id = "";
              if(isset($Row[6])) {
                  $subcategoria_id = mysqli_real_escape_string($con,$Row[6]);
              }

              $categoria_id = "";
              if(isset($Row[7])) {
                  $categoria_id = mysqli_real_escape_string($con,$Row[7]);
              }

              $filtroUno_id = "";
              if(isset($Row[8])) {
                  $filtroUno_id = mysqli_real_escape_string($con,$Row[8]);
              }

              $estado = "";
              if(isset($Row[9])) {
                  $estado = mysqli_real_escape_string($con,$Row[9]);
              }
                
                if (!empty($codigo) || !empty($nombre) || !empty($referenciaProveedor) || !empty($marca_id) || !empty($imagen) || !empty($ubicacion) || !empty($subcategoria_id) || !empty($categoria_id) || !empty($filtroUno_id) || !empty($estado)) {
                  $query = "insert into producto(codigo, nombre, referenciaProveedor, marca_id, imagen, ubicacion, subcategoria_id, categoria_id, filtroUno_id, estado) values('".$codigo."','".$nombre ."','".$referenciaProveedor."','".$marca_id."','".$imagen."','".$ubicacion."','".$subcategoria_id."', '".$categoria_id."', ".$filtroUno_id.", '".$estado."')";

                    $resultados = mysqli_query($con, $query);
                    
                    if (!empty($resultados)) {
                        $type = "success";
                        $message = "Excel importado correctamente";
                    } else {
                        $type = "error";
                        $message = "Hubo un problema al importar registros";
                    }
                }
             }
        
         }
  }
  else
  { 
        $type = "error";
        $message = "El archivo enviado es invalido. Por favor vuelva a intentarlo";
  }
}
?>
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="favicon.ico">
<title>subir subcategoria</title>

<!-- Bootstrap core CSS -->
<link href="dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Custom styles for this template -->
<link href="assets/sticky-footer-navbar.css" rel="stylesheet">
<link href="assets/style.css" rel="stylesheet">

</head>

<body>
<header> 
  <!-- Fixed navbar -->

<!-- Begin page content -->

<div class="container">
  <h3 class="mt-5">subir producto</h3>
  <hr>
  <div class="row">
    <div class="col-12 col-md-12"> 
      <!-- Contenido -->
    
    <div class="outer-container">
        <form action="" method="post"
            name="frmExcelImport" id="frmExcelImport" enctype="multipart/form-data">
            <div>
                <label>Elija Archivo Excel</label> <input type="file" name="file"
                    id="file" accept=".xls,.xlsx">
                <button type="submit" id="submit" name="import"
                    class="btn-submit">Importar Registros</button>
        
            </div>
        </form>
    </div>
    <div id="response" class="<?php if(!empty($type)) { echo $type . " display-block"; } ?>"><?php if(!empty($message)) { echo $message; } ?></div>
    
         
<?php
    $sqlSelect = "SELECT * FROM producto";
    
    $result = mysqli_query($con, $sqlSelect);

if (mysqli_num_rows($result) > 0)
{
?>
        
    <table class='tutorial-table'>
        <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Referencia Proveedor</th>
              <th>Marca</th>
              <th>Imagen</th>
              <th>Ubicacion</th>
              <th>Subcategoria</th>
            </tr>
        </thead>
<?php
    while ($row = mysqli_fetch_array($result)) {
?>                  
        <tbody>
        <tr>
          <td><?php  echo $row['codigo']; ?></td>
          <td><?php  echo $row['nombre']; ?></td>
          <td><?php  echo $row['referenciaProveedor']; ?></td>
          <td><?php  echo $row['marca_id']; ?></td>
          <td><?php  echo $row['imagen']; ?></td>
          <td><?php  echo $row['ubicacion']; ?></td>
          <td><?php  echo $row['subcategoria_id']; ?></td>
        </tr>
<?php
    }
?>
        </tbody>
    </table>
<?php 
} 
?>
      <!-- Fin Contenido --> 
    </div>
  </div>
  <!-- Fin row --> 

  
</div>
<!-- Fin container -->
<footer class="footer">
  <div class="container"> <span class="text-muted">
    <p>Códigos <a href="https://www.baulphp.com/importar-archivo-de-excel-a-mysql-usando-php" target="_blank">BaulPHP</a></p>
    </span> </div>
</footer>
<script src="assets/jquery-1.12.4-jquery.min.js"></script> 

<!-- Bootstrap core JavaScript
    ================================================== --> 
<!-- Placed at the end of the document so the pages load faster --> 

<script src="dist/js/bootstrap.min.js"></script>
</body>
</html>