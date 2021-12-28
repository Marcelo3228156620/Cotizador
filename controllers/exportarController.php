<?php 
require 'models/exportar.php';
require 'vendor/autoload.php';
 
/*use PhpOffice\PhpSpreadsheet\{Spreadsheet, IOFactory};*/
use PhpOffice\PhpSpreadsheet\Style\{Border, Fill, Style};
//use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Worksheet;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
/*use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Style;*/

class exportarController
{
    private $excel;
    private $exportarModel;

    public function __construct()
    {
        $this->exportarModel = new Exportar;
    }

    public function exportar()
    {
        if(isset($_GET['id'])){
            $id = $_GET['id'];
            $spreadsheet = new Spreadsheet();
            $datos = $this->exportarModel->select($id);
            $spreadsheet->getDefaultStyle()->getFont()->setName('Arial');
            $spreadsheet->getDefaultStyle()->getFont()->setSize(12);
            //MARGENES DE LA PAGINA
            /*$spreadsheet->getActiveSheet()->getPageMargins()->setTop(1);
            $spreadsheet->getActiveSheet()->getPageMargins()->setRight(0.75);
            $spreadsheet->getActiveSheet()->getPageMargins()->setLeft(0.75);
            $spreadsheet->getActiveSheet()->getPageMargins()->setBottom(1);*/
            //END MARGENES 
            //ENCABEZADO Y PIE DE PAGINA
            /*$spreadsheet->getActiveSheet()->getHeaderFooter()
            ->setOddHeader('&C&HPlease treat this document as confidential!');
            $spreadsheet->getActiveSheet()->getHeaderFooter()
            ->setOddFooter('&L&B' . $spreadsheet->getProperties()->getTitle() . '&RPage &P of &N');*/
            //FIN ENCABEZADO
            //FACTURACION
            //Traer datos
            $hojasActivas = $spreadsheet->getActiveSheet(0);
            $hojasActivas->setTitle("Cotizacion");
            $hojasActivas->setCellValue('B4', 'Nombre:');
            $hojasActivas->setCellValue('C4', $datos[0]->nombre.' '.$datos[0]->apellido);
            $hojasActivas->setCellValue('B6', 'Correo:');
            $hojasActivas->setCellValue('C6', $datos[0]->correo);
            $hojasActivas->setCellValue('B8', 'Telefono:');
            $hojasActivas->setCellValue('C8', $datos[0]->telefono);
            
            $hojasActivas->setCellValue('B10', 'COTIZACIÓN');
            $hojasActivas->setCellValue('B11', 'CODIGO');
            $hojasActivas->setCellValue('C11', 'PRODUCTO');
            $hojasActivas->setCellValue('D11', 'CANTIDAD');
            $fila= 12;

            foreach($datos as $dato) {
                $hojasActivas->setCellValue('B' . $fila, $dato->codigo);
                $hojasActivas->setCellValue('C' . $fila, $dato->producto);
                $hojasActivas->setCellValue('D' . $fila, $dato->cantidad);
                $fila++;
            }

            //Estilos
            $hojasActivas->getColumnDimension('A')->setAutoSize(true);
            $hojasActivas->getColumnDimension('B')->setAutoSize(true);
            $hojasActivas->getColumnDimension('C')->setAutoSize(true);
            $hojasActivas->getColumnDimension('D')->setAutoSize(true);
            $hojasActivas->getStyle('B1:B8')->getFont()->setBold(true);
            $hojasActivas->mergeCells('B10:D10');
            $hojasActivas->getStyle('B10:D10')->getAlignment()->setHorizontal('center');
            $hojasActivas->getStyle('B11:D11')->getAlignment()->setHorizontal('center');
            $hojasActivas->getStyle('B')->getAlignment()->setHorizontal('center');
            $hojasActivas->getStyle('D')->getAlignment()->setHorizontal('center');
            $spreadsheet->getActiveSheet()->getStyle('B10:D10')->getFont()->setBold(true)->setSize(15);
            $spreadsheet->getActiveSheet()->getStyle('B11:D11')->getFont()->setBold(true)->setSize(12);
            $spreadsheet->getActiveSheet()->getStyle('B10:D11')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('b60723');
            $spreadsheet->getActiveSheet()->getStyle('B10:D11')->getFont()->getColor()->setRGB('f4f4f4');
            $styleArray = [
                'borders' => [
                    'outline' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                        'color' => ['argb' => '5E5959'],
                    ],
                ],
            ];
            $hojasActivas->getStyle('B10:D'.$fila)->applyFromArray($styleArray);


        /*$spreadsheet->setActiveSheetIndex(0);
        $spreadsheet->getActiveSheet(0)
        ->mergeCells('A1:D1')
        /*->mergeCells('A')
        ->setTitle('Resumen')
        ->setCellValue('A1', 'Reporte de Herramientas Blaster')
        ->setCellValue('A2', '1-1-1')
        ->setCellValue('A3', 'Campaña Isla 5');

        $spreadsheet->getActiveSheet()->getStyle('A1:A3')->getFont()->setBold(true)->setSize(18);
        $spreadsheet->getActiveSheet()
        ->mergeCells('C5:L5')
        ->mergeCells('C6:D6')
        ->mergeCells('E6:I6')
        ->mergeCells('J6:L6')
        ->setCellValue('C5', 'Cotización')
    ->setCellValue('C6', 'IDENTIFICADORES')
    ->setCellValue('E6', 'FECHAS')
    ->setCellValue('J6', 'METRICAS POR HORA')
    ->setCellValue('C7', 'ID de Campaña')
    ->setCellValue('D7', 'Nombre de Campaña')
    ->setCellValue('E7', 'Hora de Inicio')
    ->setCellValue('F7', 'Hora Fin')
    ->setCellValue('G7', 'Primer Llamada')
    ->setCellValue('H7', 'Ultima Llamada')
    ->setCellValue('I7', 'Telefono de Contacto')
    ->setCellValue('J7', 'Total de Creditos')
    ->setCellValue('K7', 'Telefonos Programadas')
    ->setCellValue('L7', 'Llamadas Exitosas');

    $spreadsheet->getActiveSheet()->getStyle('C5:L5')->getFont()->setBold(true)->setSize(20);
$spreadsheet->getActiveSheet()->getStyle('C6:L6')->getFont()->setBold(true)->setSize(12);
$spreadsheet->getActiveSheet()->getStyle('C5:L5')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('C6:D6')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('E6:I6')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('J6:L6')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getColumnDimension('C')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('D')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('F')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('G')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('H')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('I')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('J')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('K')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('L')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getColumnDimension('M')->setAutoSize(true);
$spreadsheet->getActiveSheet()->getStyle('C7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('D7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('E7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('F7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('G7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('H7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('I7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('J7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('K7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('L7')->getAlignment()->setHorizontal('center');
$spreadsheet->getActiveSheet()->getStyle('C5:L7')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('9FD5D1');
$spreadsheet->getActiveSheet()->getStyle('C5:L7')->getFont()->getColor()->setRGB('FFFFFF');*/




        /*$excel = new Spreadsheet();
        $res = $this->exportarModel->select($id);
        $hojasActivas = $excel->getActiveSheet(0);
        $hojasActivas->setTitle("Cotizacion");

        $hojasActivas->getStyle('A1:A8')->getFont()->setBold(true);
        $hojasActivas->getColumnDimension('A')->setAutoSize(true);
        $hojasActivas->getColumnDimension('B')->setAutoSize(true);
        $hojasActivas->getColumnDimension('C')->setAutoSize(true);
        $hojasActivas->mergeCells('B4:E4');
        $hojasActivas->mergeCells('B6:E6');
        $hojasActivas->setCellValue('A4', 'Nombre:');
        $hojasActivas->setCellValue('B4', $res[0]->nombre.'  '.$res[0]->apellido);

        $hojasActivas->setCellValue('A6', 'Correo:');
        $hojasActivas->setCellValue('B6', $res[0]->correo);
        $hojasActivas->setCellValue('A8', 'Telefono:');
        $hojasActivas->setCellValue('B8', $res[0]->telefono);
        $hojasActivas->setCellValue('A10', 'CODIGO');
        $hojasActivas->setCellValue('B10', 'PRODUCTO');
        $hojasActivas->setCellValue('C10', 'CANTIDAD');
        $fila= 11;*/
        /*$styleArray = [
            'borders' => [
                'outline' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                    'color' => ['argb' => 'FFFF0000'],
                ],
            ],
        ];*/

        /*$hojasActivas->getStyle('B2:G8')->applyFromArray($styleArray);*/
        //$excel->getActiveSheet()->getStyle('A1')->getFont()->getColor()->setRGB('FFFFFF');
        //$excel->getActiveSheet()->getStyle('A1:A3')->getFont()->setBold(true)->setSize(12);
        /*foreach($res as $re) {
            $hojasActivas->setCellValue('A' . $fila, $re->codigo);
            $hojasActivas->setCellValue('B' . $fila, $re->producto);
            $hojasActivas->setCellValue('C' . $fila, $re->cantidad);
            $fila++;
        }*/

        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename=Cotizacion N '.$datos[0]->idCotizacion.'.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        $writer->save('php://output');
exit;

/*$writer = IOFactory::createWriter($excel, 'Xlsx');
$writer->save('php://output');
exit;*/
/*header('location:?controller=user&method=admin');*/
        }
    }
}
