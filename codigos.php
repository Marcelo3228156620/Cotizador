function(e) {
  var t, n = this,
    i = we.getSelectorFromElement(this);
  i && (t = document.querySelector(i));
  var r = $t(t).data(tn) ? "toggle" : l({}, $t(t).data(), $t(this).data());
  "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
  var o = $t(t).one(an.SHOW, function(e) {
    e.isDefaultPrevented() || o.one(an.HIDDEN, function() {
      $t(n).is(":visible") && n.focus()
    })
  });
  vn._jQueryInterface.call($t(t), r, this)
}




<!--<div class="col-lg-6 product-single-details">
			<h1 class="product-title">Silver Porto Headset</h1>

			<div class="ratings-container">
				<div class="product-ratings">
					<span class="ratings" style="width:60%"></span>--><!-- End .ratings -->
				<!--</div>--><!-- End .product-ratings -->

				<!--<a href="#" class="rating-link">( 6 Reviews )</a>
			</div>--><!-- End .product-container -->

			<!--<div class="price-box">
				<span class="old-price">$81.00</span>
				<span class="product-price">$101.00</span>
			</div>--><!-- End .price-box -->

			<div class="product-desc">
				<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
			</div><!-- End .product-desc -->

			<!--<div class="product-filters-container">
				<div class="product-single-filter">
					<label>Colors:</label>
					<ul class="config-swatch-list">
						<li class="active">
							<a href="#" style="background-color: #0188cc;"></a>
						</li>
						<li>
							<a href="#" style="background-color: #ab6e6e;"></a>
						</li>
						<li>
							<a href="#" style="background-color: #ddb577;"></a>
						</li>
						<li>
							<a href="#" style="background-color: #6085a5;"></a>
						</li>
					</ul>
				</div>--><!-- End .product-single-filter -->
			<!--</div>--><!-- End .product-filters-container -->

			<hr class="divider">

			<div class="product-action">
				<div class="product-single-qty">
					<input class="horizontal-quantity form-control" type="text">
				</div><!-- End .product-single-qty -->

				<a href="cart.html" class="btn btn-dark add-cart" title="Add to Cart">Add to Cart</a>
			</div><!-- End .product-action -->

			<hr class="divider">

			<div class="product-single-share">
				<label class="sr-only">Share:</label>

				<!-- www.addthis.com share plugin-->
				<div class="addthis_inline_share_toolbox"></div>

				<a href="#" class="add-wishlist" title="Add to Wishlist">Add to Wishlist</a>
			</div><!-- End .product single-share -->
		</div><!-- End .product-single-details -->