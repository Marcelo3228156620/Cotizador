<footer class="footer bg-lightx">
            <div class="footer-middle">
                <div class="container">
                    <div class="newsletter-section mb-6">
                        <div class="info-box icon-top text-center justify-content-center">
                            <i class="far fa-envelope"></i>
                            <div class="info-box-content">
                                <h2 class="ls-n-10 mb-0">INSCRÍBASE EN NUESTRO BOLETÍN</h2>
                                <P>Y RECIBA INFORMACIÓN DE PROMOCIONES Y CAPACITACIONES</P>
                            </div>
                        </div>
                        <div class="col-md-10 offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 offset-md-1">
                            <form id="frmcontacto" action="#" class="mb-0 d-flex newsletter-form" novalidate="">
                                <input type="email" name="email" class="form-control" placeholder="Ingrese su email..." size="40" required="" data-parsley-id="11">
                                <button type="submit" class="btn btn-dark">Subscribase</button>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="widget">
                                <img src="assets/images/logoFooter.png" alt="">
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">

                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="widget">
                                <ul class="links">
                                    <?php foreach ($categorias as $categoria) : ?>
                                    <li>
                                        <a href="?controller=producto&method=productsBy&a=c&id=<?php echo $categoria->idCategoria ?>&pag=1" target="_self"><?php echo $categoria->nombre ?></a>
                                    </li>
                                    <?php endforeach ?>
                                    <!--<li>
                                        <a href="#" target="_self">Registros Valvulas y Complementos</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_self">Acabados</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_self">Impermeabilizantes y Aditivos</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_self">Bricolaje</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_self">Geosistemas</a>
                                    </li>-->
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="widget">
                                <ul class="links">
                                    <li>
                                        <a href="?controller=producto&method=act" target="_self">ACTUALIDAD & CAPACITACIONES</a>
                                    </li>
                                    <li>
                                        <a href="?controller=views&method=contacto" target="_self">CONTÁCTENOS</a>
                                    </li>
                                    <li>
                                        <a href="?controller=views&method=quienes_somos" target="_self">QUIENES SOMOS</a>
                                    </li>
                                    <li>
                                        <a href="?controller=views&method=nuestras_marcas" target="_self">NUESTRAS MARCAS</a>
                                    </li>
                                    <li>
                                        <a href="?controller=views&method=servicio" target="_self">SERVICIOS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p class="footer-copyright py-3 pr-4 mb-0">© Nurueña. 2021. Todos los derechos reservados</p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/Nuruena.sas/" class="social-icons" target="_blank">
                            <img src="assets/images/icons/red-fb.png" alt="Facebook">
                        </a>
                        <a href="https://www.youtube.com/channel/UCZe-_4edBgWetupzTkZzk5A" class="social-icons" target="_blank">
                            <img src="assets/images/icons/red-yt.png" alt="Youtube">
                        </a>
                        <a href="https://www.instagram.com/nuruena.sas" class="social-icons" target="_blank">
                            <img src="assets/images/icons/red-ig.png" alt="Instagram">
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        <!--<footer class="footer bg-dark">
            <div class="footer-middle">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="widget">
                                <h4 class="widget-title">Contact Info</h4>
                                <ul class="contact-info">
                                    <li>
                                        <span class="contact-info-label">Address</span>123 Street Name, City, England
                                    </li>
                                    <li>
                                        <span class="contact-info-label">Phone</span>Toll Free <a href="tel:">(123) 456-7890</a>
                                    </li>
                                    <li>
                                        <span class="contact-info-label">Email</span> <a href="mailto:mail@example.com">mail@example.com</a>
                                    </li>
                                    <li>
                                        <span class="contact-info-label">Working Days/Hours</span>
                                        Mon - Sun / 9:00AM - 8:00 PM
                                    </li>
                                </ul>
                                <div class="social-icons">
                                    <a href="#" class="social-icon social-instagram icon-instagram" target="_blank" title="Instagram"></a>
                                    <a href="#" class="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></a>
                                    <a href="#" class="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></a>
                                </div>--><!-- End .social-icons -->
                            <!--</div>--><!-- End .widget -->
                        <!--</div>--><!-- End .col-lg-3 -->

                        <!--<div class="col-lg-3 col-sm-6">
                            <div class="widget">
                                <h4 class="widget-title">Customer Service</h4>

                                <ul class="links">
                                    <li><a href="#">Help & FAQs</a></li>
                                    <li><a href="#">Order Tracking</a></li>
                                    <li><a href="#">Shipping & Delivery</a></li>
                                    <li><a href="#">Orders History</a></li>
                                    <li><a href="#">Advanced Search</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Corporate Sales</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>--><!-- End .widget -->
                        <!--</div>--><!-- End .col-lg-3 -->

                        <!--<div class="col-lg-3 col-sm-6">
                            <div class="widget">
                                <h4 class="widget-title">Popular Tags</h4>

                                <div class="tagcloud">
                                    <a href="#">Bag</a>
                                    <a href="#">Black</a>
                                    <a href="#">Blue</a>
                                    <a href="#">Clothes</a>
                                    <a href="#">Hub</a>
                                    <a href="#">Shirt</a>
                                    <a href="#">Shoes</a>
                                    <a href="#">Skirt</a>
                                    <a href="#">Sports</a>
                                    <a href="#">Sweater</a>
                                </div>
                            </div>--><!-- End .widget -->
                        <!--</div>--><!-- End .col-lg-3 -->

                        <!--<div class="col-lg-3 col-sm-6">
                            <div class="widget widget-newsletter">
                                <h4 class="widget-title">Subscribe newsletter</h4>
                                <p>Get all the latest information on events, sales and offers. Sign up for newsletter:</p>
                                <form action="#" class="mb-0">
                                    <input type="email" class="form-control m-b-3" placeholder="Email address" required>

                                    <input type="submit" class="btn btn-primary shadow-none" value="Subscribe">
                                </form>
                            </div>--><!-- End .widget -->
                        <!--</div>--><!-- End .col-lg-3 -->
                    <!--</div>--><!-- End .row -->
                <!--</div>--><!-- End .container -->
            <!--</div>--><!-- End .footer-middle -->

            <!--<div class="container">
                <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p class="footer-copyright py-3 pr-4 mb-0">&copy; Porto eCommerce. 2020. All Rights Reserved</p>

                    <img src="assets/images/payments.png" alt="payment methods" class="footer-payments py-3">-->
                <!--</div>--><!-- End .footer-bottom -->
            <!--</div>--><!-- End .container -->
        <!--</footer>--><!-- End .footer -->

    <div class="mobile-menu-overlay"></div>

    <div class="mobile-menu-container">
        <div class="mobile-menu-wrapper">
            <span class="mobile-menu-close"><i class="icon-cancel"></i></span>
            <nav class="mobile-nav">
                <ul class="mobile-menu mb-3">
                    <li class="active"><a href="index.html">Home</a></li>
                    <li>
                        <a href="category.html">Categories</a>
                        <ul>
                            <li><a href="category-banner-full-width.html">Full Width Banner</a></li>
                            <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                            <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                            <li><a href="category-sidebar-left.html">Left Sidebar</a></li>
                            <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                            <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                            <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                            <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                            <li><a href="#">List Types</a></li>
                            <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll<span class="tip tip-new">New</span></a></li>
                            <li><a href="category.html">3 Columns Products</a></li>
                            <li><a href="category-4col.html">4 Columns Products</a></li>
                            <li><a href="category-5col.html">5 Columns Products</a></li>
                            <li><a href="category-6col.html">6 Columns Products</a></li>
                            <li><a href="category-7col.html">7 Columns Products</a></li>
                            <li><a href="category-8col.html">8 Columns Products</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="product.html">Products</a>
                        <ul>
                            <li>
                                <a href="#">Variations</a>
                                <ul>
                                    <li><a href="product.html">Horizontal Thumbs</a></li>
                                    <li><a href="product-full-width.html">Vertical Thumbnails<span class="tip tip-hot">Hot!</span></a></li>
                                    <li><a href="product.html">Inner Zoom</a></li>
                                    <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                                    <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Variations</a>
                                <ul>
                                    <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                    <li><a href="product-simple.html">Simple Product</a></li>
                                    <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Product Layout Types</a>
                                <ul>
                                    <li><a href="product.html">Default Layout</a></li>
                                    <li><a href="product-extended-layout.html">Extended Layout</a></li>
                                    <li><a href="product-full-width.html">Full Width Layout</a></li>
                                    <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                                    <li><a href="product-sticky-both.html">Sticky Both Side Info<span class="tip tip-hot">Hot!</span></a></li>
                                    <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Pages<span class="tip tip-hot">Hot!</span></a>
                        <ul>
                            <li><a href="cart.html">Shopping Cart</a></li>
                            <li>
                                <a href="#">Checkout</a>
                                <ul>
                                    <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                    <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                                    <li><a href="checkout-review.html">Checkout Review</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="#" class="login-link">Login</a></li>
                            <li><a href="forgot-password.html">Forgot Password</a></li>
                        </ul>
                    </li>
                    <li><a href="blog.html">Blog</a>
                        <ul>
                            <li><a href="single.html">Blog Post</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="#">Special Offer!<span class="tip tip-hot">Hot!</span></a></li>
                    <li><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!<span class="tip tip-new">New</span></a></li>
                </ul>

                <ul class="mobile-menu">
                    <li><a href="my-account.html">Track Order </a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="category.html">Our Stores</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="#">Help &amp; FAQs</a></li>
                </ul>
            </nav>

            <div class="social-icons">
                <a href="#" class="social-icon" target="_blank"><i class="icon-facebook"></i></a>
                <a href="#" class="social-icon" target="_blank"><i class="icon-twitter"></i></a>
                <a href="#" class="social-icon" target="_blank"><i class="icon-instagram"></i></a>
            </div>
        </div>
    </div>

    <!--<div class="newsletter-popup mfp-hide" id="newsletter-popup-form" style="background: #f1f1f1 no-repeat center/cover url(assets/images/newsletter_popup_bg.jpg)">
		<div class="newsletter-popup-content">
			<img src="assets/images/logo-black.png" alt="Logo" class="logo-newsletter">
			<h2>BE THE FIRST TO KNOW</h2>
			<p>Subscribe to the Porto eCommerce newsletter to receive timely updates from your favorite products.</p>
			<form action="#">
				<div class="input-group">
					<input type="email" class="form-control" id="newsletter-email" name="newsletter-email" placeholder="Email address" required>
					<input type="submit" class="btn" value="Go!">
				</div>--><!-- End .from-group -->
			<!--</form>
			<div class="newsletter-subscribe">
				<div class="checkbox">
					<label>
						<input type="checkbox" value="1">
						Don't show this popup again
					</label>
				</div>
			</div>-->
		<!--</div>--><!-- End .newsletter-popup-content -->
	<!--</div>--><!-- End .newsletter-popup -->

    <div class="modal fade" id="addCartModal" tabindex="-1" role="dialog" aria-labelledby="addCartModal" aria-hidden="true">
	  <div class="modal-dialog" role="document">
		<div class="modal-content">
		  <div class="modal-body add-cart-box text-center">
			<p>Acaba de agregar este producto al<br>cotizador:</p>
			<h4 id="productTitle"></h4>
			<img src="#" id="productImage" width="100" height="100" alt="adding cart image">
			<div class="btn-actions">
				<a href="?controller=producto&method=cart"><button class="btn-primary">Ver cotización</button></a>
				<a href="#"><button class="btn-primary" data-dismiss="modal">Seguir cotizando</button></a>
			</div>
		  </div>
		</div>
	  </div>
	</div>
    <!-- DIV CON MENSAJE ENVIADO -->
    <!--<div class="swal2-container swal2-center" style="overflow-y: auto;">
        <div class="swal2-popup swal2-modal swal2-icon-success" aria-labelledby="swal2-title" aria-describedby="swal2-content" tabindex="-1" role="dialog" aria-live="assertive" aria-modal="true">
            <div class="swal2-header">
                <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;">
                    <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                    <span class="swal2-success-line-tip"></span>
                    <span class="swal2-success-line-long"></span>
                    <div class="swal2-success-ring"></div>
                    <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                </div>
                <h2 id="swal2-title" class="swal2-title" style="display: flex;">Gracias</h2>
            </div>
            <div class="swal2-content">
                <div id="swal2-content" class="swal2-html-container" style="display: block;">Hemos recibido su mensaje</div>
            </div>
            <div class="swal2-actions">
                <button class="swal2-confirm swal2-styled" type="button">Ok</button>
            </div>
        </div>
    </div>-->
    <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6022ba2e918aa261273d3bf0/1eu3qehnd';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

	<a id="scroll-top" href="#top" title="Top" role="button"><i class="icon-angle-up"></i></a>
    <a href="https://api.whatsapp.com/send?phone=573138898494" class="floatWhats"><i class="fab fa-whatsapp fa-fw" aria-hidden="true"></i></a>

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