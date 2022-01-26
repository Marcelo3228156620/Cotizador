
<div class="product-single-container product-single-default product-quick-view" id="product-quick-view">
    <div class="row row-sparse">
        <div class="col-lg-6">
            <div class="product-slider-container">
                <div class="product-item">
                    <img class="product-single-image" src="<?php echo $product[0]->ubicacion; ?>" alt="">
                </div>
            </div>
        </div>
        <div class="col-lg-6 product-single-details">
            <h1 class="product-title"><?php echo $product[0]->nombre; ?></h1>
            <div class="product-desc">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
            </div>
            <form action="?controller=carrito&method=add" method="POST">
            <?php if (isset($medidas)) : ?>
                <div class="product-single-filter">
                    <label for="">Medidas:</label>
                    <select name="medidas" id="medidas" class="form-control" onchange="disabledButton()">
                        <option value="0" selected>Seleccione...</option>
                        <?php
                        foreach ($medidas as $medida) {
                            echo '<option value="' . $medida->idMedida . '">' . $medida->medida . '</option>';
                        }
                        ?>
                    </select>
                </div>
            <?php endif ?>
            <?php if (isset($voltajes)) : ?>
                <div class="product-single-filter">
                    <label for="">Voltaje:</label>
                    <select name="voltaje" id="voltaje" class="form-control" onchange="disabledButton()">
                        <option value="0" selected>Seleccione...</option>
                        <?php
                        foreach ($voltajes as $voltaje) {
                            echo '<option value="' . $voltaje->idVoltaje . '">' . $voltaje->voltaje . '</option>';
                        }
                        ?>
                    </select>
                </div>
            <?php endif ?>
            <hr class="divider">
            <div class="product-action">
                <div class="product-single-qty">
                    <input type="text" class="horizontal-quantity form-control" name="quantity" id="quantity">
                </div>
                <input type="hidden" value="<?php echo $product[0]->idProducto ?>" name="id">
                <button class="btn btn-danger add-cart" id="btn-submit" <?php  echo isset($voltajes)?"disabled":(isset($medidas)?"disabled":"");//if(isset($voltajes) || isset($medidas)){echo "disabled";} ?>>Cotizar</button>
            </div>
            </form>
            <hr class="divider">
        </div>
    </div>
</div>
