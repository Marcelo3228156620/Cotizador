<?php

include_once 'session.php';

class Carrito extends Session {

    function __construct()
    {
        parent::__construct('carrito');
    }

    public function load() {
        if($this->getValue() == NULL) {
            return '[]';
        }
        return $this->getValue();
    }

    public function add($id) {
        if($this->getValue() == NULL) {
            $items = [];
        } else {
            $items = json_decode($this->getValue(), 1);

            for($i=0; $i<sizeof($items); $i++) {
                if($items[$i]['id'] == $id) {
                    $items[$i]['cantidad']++;
                    $this->setValue(json_encode($items));

                    return $this->getValue();
                }
            }
        }

        //operaciones cuando el carrito tiene un nuevo elemento
        $item = ['id' => (int)$id, 'cantidad' => 1];

        array_push($items, $item);

        $this->setValue(json_encode($items));

        return $this->getValue();
    }

    public function addItem($id, $quantity) {
        /*intval($quantity);
        print(gettype($quantity));
        die();*/
        if($this->getValue() == NULL) {
            $items = [];
        } else {
            $items = json_decode($this->getValue(), 1);

            for($i=0; $i<sizeof($items); $i++) {
                if($items[$i]['id'] == $id) {
                    $items[$i]['cantidad']+=intval($quantity);

                    $this->setValue(json_encode($items));

                    return $this->getValue();
                }
            }
        }

        //operaciones cuando el carrito tiene un nuevo elemento
        $item = ['id' => (int)$id, 'cantidad' => $quantity];

        array_push($items, $item);
        /*print_r($items);
        die();*/
        $this->setValue(json_encode($items));

        return $this->getValue();
    }

    public function remove($id) {
        if($this->getValue() == NULL) {
           $items = [];
        } else {
            $items = json_decode($this->getValue(), 1);

            for ($i=0; $i < sizeof($items); $i++) { 
                
               if($items[$i]['id'] == $id) {
                   $items[$i]['cantidad']--;

                   if($items[$i]['cantidad'] == 0) {
                       unset($items[$i]);
                       $items = array_values($items);
                   }

                   $this->setValue(json_encode($items));
                   return true;
               }
            }
        }
   }

   public function removeProduct($id) {
        if($this->getValue() == NULL) {
            $items = [];
        } else {
            $items = json_decode($this->getValue(), 1);

            for ($i=0; $i < sizeof($items); $i++) { 
                /*print_r($items);
                die();*/
                if($items[$i]['id'] == $id) {
                    unset($items[$i]);
                    $items = array_values($items);
                    /*if($items[$i]['cantidad'] == 0) {
                        unset($items[$i]);
                        $items = array_values($items);
                    }*/

                    $this->setValue(json_encode($items));
                    return true;
                }
            }
        }
   }
}