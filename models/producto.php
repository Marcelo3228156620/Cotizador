<?php

    class Producto
    {
        private $idProducto;
        private $codigo;
        private $nombre;
        private $referenciaProveedor;
        private $marca;
        private $nombreImg;
        private $ubicacion;
        private $subcategoria;
        private $pdo;

        public function __construct()
        {
            try {
                $this->pdo = new Database;
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function getAll()
        {
            try {
                $strSql = "SELECT e.*, m.nombre AS producto FROM producto AS e
                INNER JOIN marca AS m
                ON m.idMarca = e.marca_id";
                return $this->pdo->select($strSql);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function productLimit($iniciar)
        {
            $strSql = "SELECT e.*, m.nombre AS producto FROM producto
            AS e
                INNER JOIN marca AS m
                ON m.idMarca = e.marca_id LIMIT $iniciar,12";
            /*$arrayData = ['iniciar' => $iniciar];*/
            /*print_r($arrayData);
            die();*/
            return $this->pdo->select($strSql);
        }

        public function productLim($id)
        {
            $strSql = "SELECT p.*, m.nombre AS producto FROM producto AS p 
            INNER JOIN marca AS m
            ON m.idMarca = p.marca_id WHERE marca_id=:id LIMIT 8";
            $arrayData = ['id' => $id];
            return $this->pdo->select($strSql, $arrayData);
        }

        public function productsBy($id, $foreignKey, $ini)
        {
            $strSql = "SELECT  e.*, m.nombre AS producto FROM producto AS e
            INNER JOIN marca AS m
            ON m.idMarca = e.marca_id WHERE $foreignKey=:id LIMIT $ini,12";
            $arrayData = ['id' => $id];
            return $this->pdo->select($strSql, $arrayData);
        }

        public function productsSub($id)
        {
            $strSql = "SELECT  e.*, m.nombre AS producto FROM producto AS e
            INNER JOIN marca AS m
            ON m.idMarca = e.marca_id WHERE subcategoria_id=:id";
            $arrayData = ['id' => $id];
            return $this->pdo->select($strSql, $arrayData);
        }

        public function productsCat($id)
        {
            $strSql = "SELECT  e.*, m.nombre AS producto FROM producto AS e
            INNER JOIN marca AS m
            ON m.idMarca = e.marca_id WHERE categoria_id=:id";
            $arrayData = ['id' => $id];
            return $this->pdo->select($strSql, $arrayData);
        }

        public function productsMarca($id)
        {
            $strSql = "SELECT e.*, m.nombre AS producto FROM producto AS e
            INNER JOIN marca AS m
            ON m.idMarca = e.marca_id WHERE marca_id=:id";
            $arrayData = ['id' => $id];
            return $this->pdo->select($strSql, $arrayData);
        }

        public function getById($id)
        {
            try {
                $strSql = "SELECT * FROM producto WHERE idProducto=:id";
                $arrayData = ['id' => $id];
                return $this->pdo->select($strSql, $arrayData);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function getByIdCart($id)
        {
            try {
                $strSql = "SELECT * FROM producto WHERE idProducto=:id";
                $arrayData = ['id' => $id];
                $row = $this->pdo->selectfetch($strSql, $arrayData);
                $item = [
                        'idProducto'    => $row['idProducto'],
                        'nombre'        => $row['nombre'],
                        'marca_id'         => $row['marca_id'],
                        'ubicacion'     => $row['ubicacion']
                    ];
                return json_encode(['statuscode' => 200, 'item' => $item]);
            } catch (PDOException $e) {
                die($e->getMessage());
            }
        }

        public function changeName()
        {
            $string = "";
            $posible = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_";
            $i = 0;
            while ($i <= 18) {
                $char = substr($posible, mt_rand(0, strlen($posible)-1),1);
                $string .= $char;
                $i++;
            }
            return $string;
        }

        public function upload_file($file = false, $path = false)
        {
            //Verificar que si se haya recibido el archivo
            $upload = true;
            if ($_FILES['file']['error'] > 0) {
                echo "Error al ccargar el archivo: " . $_FILES['file']['name'];
                $upload = false;
            } else {
                //Verificamos el formato del archivo
                if(!($_FILES['file']['type'] === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
                    echo "Formato de archivo no  permitido";
                    $upload = false;
                }
            }
            if($upload) {
                $type = explode('.', $_FILES['file']['name']);
                $num = count($type);
                $extension = $type[$num-1];
                $real_file = $path.$file.'.'.$extension;
                if(file_exists($real_file)) {
                    move_uploaded_file($_FILES['file']['tmp_name'], $real_file);
                    return $real_file;
                } else {
                    move_uploaded_file($_FILES['file']['tmp_name'], $real_file);
                    return $real_file;
                }
            }
        }

        public function searchProducts($bool, $search, $ini)
        {
            if($bool) {
                $strSql = "SELECT e.*, m.nombre AS producto FROM producto AS e
                INNER JOIN marca AS m
                ON m.idMarca = e.marca_id WHERE e.nombre LIKE '%$search%' OR e.codigo LIKE '%$search%' LIMIT $ini,12";
                return $this->pdo->select($strSql);
            } else {
                $strSql = "SELECT e.*, m.nombre AS producto, MATCH (e.nombre, e.codigo) AGAINST ( '$search' ) FROM producto AS e
                INNER JOIN marca AS m
                ON m.idMarca = e.marca_id WHERE MATCH (e.nombre, e.codigo) AGAINST ( '$search' )";
                return $this->pdo->select($strSql);
            }
        }

        public function searchProductsByCat($bool, $search, $cat, $ini)
        {
            if($bool) {
                $strSql = "SELECT e.*, m.nombre AS producto FROM producto AS e
                INNER JOIN marca AS m
                ON m.idMarca = e.marca_id WHERE e.nombre LIKE '%$search%' OR e.codigo LIKE '%$search%' AND categoria_id LIKE '%$cat%' LIMIT $ini,12";
                return $this->pdo->select($strSql);
            } else {
                $strSql = "SELECT e.*, m.nombre AS producto, MATCH (e.nombre, e.codigo) AGAINST ( '$search' ) FROM producto AS e
                INNER JOIN marca AS m
                ON m.idMarca = e.marca_id WHERE MATCH (e.nombre, e.codigo) AGAINST ( '$search' ) AND categoria_id LIKE '%$cat%' LIMIT $ini,12";
                return $this->pdo->select($strSql);
            }
        }

        public function countProducts($bool, $search)
        {
            if($bool) {
                $strSql = "SELECT count(*) as filas FROM producto WHERE nombre LIKE '%$search%'";
                $filas = $this->pdo->selectfetch($strSql);
                $paginas = $filas['filas'] / 12;
                return ceil($paginas);
            } else {
                $strSql = "SELECT count(*) AS filas FROM producto WHERE MATCH (nombre, codigo) AGAINST ( '$search' )";
                $filas = $this->pdo->selectfetch($strSql);
                $paginas = $filas['filas'] / 12;
                return ceil($paginas);
            }
        }

        public function countProductsByCat($bool, $search, $cat)
        {
            if($bool) {
                $strSql = "SELECT count(*) as filas FROM producto WHERE categoria_id LIKE '%$cat%' AND nombre LIKE '%$search%'";
                $filas = $this->pdo->selectfetch($strSql);
                $paginas = $filas['filas'] / 12;
                return ceil($paginas);
            } else {
                $strSql = "SELECT count(*) AS filas, MATCH (nombre, codigo) AGAINST ( '$search' ) FROM producto WHERE MATCH (nombre, codigo) AGAINST ( '$search' ) AND categoria_id LIKE '%$cat%'";
                $filas = $this->pdo->selectfetch($strSql);
                $paginas = $filas['filas'] / 12;
                return ceil($paginas);
            }
        }

        public function upload_book($pathFile = false)
        {
            /*//Llamar la libreria para leer los archivos Excel
            require '../libs/PHPExcel-1.8/Classes/PHPExcel/IOFactory.php';
            //Llamar la funcion cargar de la libreria 
            $objPHPExcel = PHPExcel_IOFactory::load($pathFile);
            //Poner la hoja de calculo 1 en la primera posicion
            $objPHPExcel->setActiveSheetIndex(0);
            //Obtener la fila mas Alta de la hoja 1
            $rows = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();
            echo "Hola";
            echo $rows;*/
            $reader = new SpreadsheetReader($pathFile);

            $sheetCount = count($reader->Sheets());
            
            for ($i=0; $i < $sheetCount; $i++) { 
                $reader->ChangeSheet($i);

                foreach($reader as $row) {
                    if(isset($row[0])) {
                        //$codigo = mysqli_real_escape_string();
                    }
                }
            }
        }
    }