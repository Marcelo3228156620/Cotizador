<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Subir Productos</h1>
    <form action="?controller=producto&method=upload" method="POST" enctype="multipart/form-data">
        <input type="file" id="file" name="file">
        <button>Enviar</button>
    </form>
</body>
</html>