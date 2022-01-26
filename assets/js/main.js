/*document.addEventListener('DOMContentLoaded', event =>{
	//cookies

});*/
function nueva(id) {
    addItemToCarrito(id);
}

function addItemToCarrito(id) {
    $.ajax({
        type: "POST",
        url: "controllers/api-carrito.php?action=add",
        data: "id=" + id,
        success: function(data) {
            actualizarCarritoUI();
        }
    })
}

function disabledButton() {
    //Validacion del formulario al ser llenado
    if ($("#medidas").val() !== "undefined" || $("#voltaje").val() !== "undefined") {
        //alert("Hello");
        if ($("#medidas").val() == "0" || $("#voltaje").val() == "0") {
            $("#btn-submit").prop("disabled", true);
        } else {
            $("#btn-submit").prop("disabled", false);
        }
    } else {
        alert("holas");
    }
}

$(document).ready(function() {
    var medidas = !!document.getElementById("medidas");
    var voltajes = !!document.getElementById("voltaje");
    if (voltajes) {
        $("#voltaje").change(function() {
            if ($(this).val() == "0") {
                $("#btn-submit").prop("disabled", true);
            } else {
                $("#btn-submit").prop("disabled", false);
            }
        })
    } else if (medidas) {
        $("#medidas").change(function() {
            if ($(this).val() == "0") {
                $("#btn-submit").prop("disabled", true);
            } else {
                $("#btn-submit").prop("disabled", false);
            }
        })
    } else {
        $("#btn-submit").prop("disabled", false);
    }
    //console.log("este id es Nulo ", boton);
    //Validacion del formulario al ser llenado
    /*if ($("#medidas").val() !== "undefined" || $("#voltaje").val() !== "undefined") {
        alert("Hello");*/
    $("#medidas").change(function() {
        if ($(this).val() == "0") {
            $("#btn-submit").prop("disabled", true);
        } else {
            $("#btn-submit").prop("disabled", false);
        }
    })
    $("#voltaje").change(function() {
            if ($(this).val() == "0") {
                $("#btn-submit").prop("disabled", true);
            } else {
                $("#btn-submit").prop("disabled", false);
            }
        })
        /*} else {
            alert("holas");
        }*/
})

/*function A(t, e, i) { this.element = t, this.$element = h(t); var r = this.$element.data("Parsley"); if (r) return void 0 !== i && r.parent === window.Parsley && (r.parent = i, r._resetOptions(r.options)), "object" === n(e) && l(r.options, e), r; if (!this.$element.length) throw new Error("You must bind Parsley on an existing element."); if (void 0 !== i && "Form" !== i.__class__) throw new Error("Parent instance must be a Form instance"); return this.parent = i || window.Parsley, this.init(e) }
    A.prototype = {
        init: function(t) { return this.__class__ = "Parsley", this.__version__ = "2.9.2", this.__id__ = d.generateID(), this._resetOptions(t), "FORM" === this.element.nodeName || d.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField") },
        isMultiple: function() { var t = d.getType(this.element); return "radio" === t || "checkbox" === t || "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple") },
        handleMultiple: function() {
            var t, e, r = this;
            if (this.options.multiple = this.options.multiple || (t = this.element.getAttribute("name")) || this.element.getAttribute("id"), "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return d.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), t && h('input[name="' + t + '"]').each(function(t, e) { var i = d.getType(e); "radio" !== i && "checkbox" !== i || e.setAttribute(r.options.namespace + "multiple", r.options.multiple) });
            for (var i = this._findRelated(), n = 0; n < i.length; n++)
                if (void 0 !== (e = h(i.get(n)).data("Parsley"))) { this.$element.data("FieldMultiple") || e.addElement(this.$element); break }
            return this.bind("parsleyField", !0), e || this.bind("parsleyFieldMultiple")
        },
        bind: function(t, e) {
            var i;
            switch (t) {
                case "parsleyForm":
                    i = h.extend(new y(this.element, this.domOptions, this.options), new r, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    i = h.extend(new w(this.element, this.domOptions, this.options, this.parent), new r, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    i = h.extend(new w(this.element, this.domOptions, this.options, this.parent), new C, new r, window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(t + "is not a supported Parsley type")
            }
            return this.options.multiple && d.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple), void 0 !== e ? this.$element.data("FieldMultiple", i) : (this.$element.data("Parsley", i), i._actualizeTriggers(), i._trigger("init")), i
        }
    };

//ENVIAR EMAIL SUBSCRIBIRSE
window.ParsleyValidator.addValidator('checkemail',{validateString:function(value){
	return $.ajax({
		url:'/registro',
		method:"POST",
		data:{checkemail:value},
		dataType:"json",
		success:function(data){return true;}});}});
$("form").parsley()
if($('#frmcontacto').length>0)
{$('#frmcontacto').parsley();*/
/*$('#frmcontacto').submit(function(e) {
    let mail = $("#email").val();
    alert(mail)
        $.ajax({
        	type: "POST",
        	url: "?controller=cliente&method=enviarEmail",
        	//data:{checkemail:value},
        	data: "mail="+ mail,
        	success: function (e) {

        	}
        })
        $.ajaxSetup({
        	headers:{
        		'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
        	}
        });
        e.preventDefault();
        if($(this).parsley().isValid()){
        	$.post("/contacto",$(this).serialize(),function(){
        		Swal.fire({
        			title:"Gracias!",
        			text:"Hemos recibido su mensaje",
        			icon:"success",showCancelButton:false,
        			closeOnConfirm:true,
        		},function(){});
        	});
        }
});
}*/



function subcategoria(id) {
    $.ajax({
        type: "POST",
        url: "?controller=subcategoria&method=mostrar",
        data: "id=" + id,
        success: function(data) {
            var info = JSON.parse(data);
            var htmls = "";
            var i;
            for (i = 0; i < info.length; i++) {
                htmls += '<div class="col-lg-4">' +
                    '<a href="#">' + info[i].nombre + '</a>' +
                    '</div>';
            }
            console.log(htmls);
            $('#sub').html(htmls);
        }
    })
}

function removeItem(id) {
    removeItemFromCarrito(id);
}

function removeProduct(id) {
    $.ajax({
        type: "POST",
        url: "controllers/api-carrito.php?action=delete",
        data: "id=" + id,
        success: function(data) {
            actualizarCarritoUI();
        }
    })
}

function removeItemFromCarrito(id) {
    $.ajax({
        type: "POST",
        url: "controllers/api-carrito.php?action=remove",
        data: "id=" + id,
        success: function(data) {
            actualizarCarritoUI();
        }
    })
}

const bCarrito = document.querySelector('.btn-carrito');
const cartCount = document.querySelector('.cart-count');
const items = document.querySelector('.items');

bCarrito.addEventListener('click', (e) => {

    actualizarCarritoUI();
    const carritoContainer = document.querySelector('#tabla-product');
    if (carritoContainer.style.display == '') {
        /*document.getElementById('prueba').classList.add('show');*/
        carritoContainer.style.display = 'block';

        actualizarCarritoUI();
    } else {
        carritoContainer.style.display = '';
    }

});

function actualizarCarritoUI() {
    $.ajax({
        type: "POST",
        url: "?controller=carrito&method=mostrar",
        success: function(data) {
            var info = JSON.parse(data);
            let html = ``;
            //console.log(info);
            info.items.forEach(element => {
                html += `
					<div class="product">
						<div class="product-details">
							<input type="hidden" value='${element.idProducto}'/>
							<h4 class="product-title">
								<a href="#">${element.nombre} ${element.nfiltro}</a>
							</h4>
							<span class="cart-product-info">
								<span class="cart-product-qty">${element.cantidad}</span>
							</span>
						</div>

						<figure class="product-image-container">
							<a href="product.html" class="product-image">
								<img src="${element.ubicacion}" alt="product" width="80" height="80">
							</a>
							<a href="#" onclick ="removeProduct('${element.idProducto}')"class="btn-remove icon-cancel remove" title="Remove Product"></a>
						</figure>
					</div>`;
            })
            $('#tabla-product').html(html)
            document.cookie = `items=${info.info.count}`;
            cartCount.innerHTML = `${info.info.count}`;
            items.innerHTML = `${info.info.count} item`;

            /*document.querySelectorAll('.remove').forEach(boton =>{
            	boton.addEventListener('click', e =>{
            		alert("hola");
            		const id = boton.parentElement.children[0].value;
            		console.log(id);
            	})
            })*/
        }
    })
}
/*function actualizarCarritoUI(){
	fetch('http://localhost/cotizadorNuruena/controllers/api-carrito.php?action=mostrar')
	.then(response => response.json())
	.then(data => {
		let tablaCont = document.querySelector('#tabla');
		let html = '';

		data.items.forEach(element =>{
			html = `
				<div class='fila'>
					<div clas=''imagen'>
						<img src='${element.ubicacion}' />
					</div>

					<div class='info'></div>
			`;
		});

		tablaCont.innerHTML = html;

		document.cookie = `items=${data.info.count}`;

		bCarrito.innerHTML = `(${data.info.count}) Carrito`;
	});
}*/
/*function addItemToCarrito(id){
	fetch('http://localhost/cotizadorNuruena/controllers/api-carrito.php?action=add&id=' + id)
	.then(res => res.json())
	.then(data =>{
		console.log('data.status');
		actualizarCarritoUI();
	});
}*/


/*$(document).on('change', '#orderby', function(event) {
	$.ajax({
		type: "POST",
		url: "?controller=product&method=productByFiltro",
		data: "filtro=" + $('#orderby').val(),
		success: function (r) {
			
		}
	})
});*/
//$("#orderBy option[value='"+ valor +"']").attr("selected",true);
/*const select = document.querySelector('#orderBy');

select.addEventListener('change', (event) => {
	$.ajax({
		type: "POST",
		url: "?controller=producto&method=productByFiltro",
		data: "filtro=" + $('#orderBy').val(),
		success: function (r) {
			var info = JSON.parse(r);
			var html = '';
			var i;
			for (i = 0; i < info.length; i++) {
				html += '<div class="col-6 col-sm-4">' +
				'<div class="product-default">' +
					'<figure>' +
						'<a href="#">' +
							'<img src="' + info[i].ubicacion + '" alt="">' +
						'</a>' +
					'</figure>' +
					'<div class="product-details">' +
						'<input type="hidden" id="' + info[i].idProducto + '" class="btnAddCart" value="">' +
						'<div class="category-list">' +
							'<a href="#" class="product-category">' + info[i].producto + '</a>' +
						'</div>' +
						'<h6 class="product-title">' +
							'<a href="?controller=producto&method=viewProduct&id=' + info[i].idProducto + '">' + info[i].nombre + '</a>' +
						'</h6>' +
						'<h3 class="product-title">' +
							'<p>Referencia ' + info[i].codigo + '</p>' +
						'</h3>' +
						'<div class="product-action">' +
							'<button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal" onclick="nueva(' + info[i].idProducto + ')" id="btnAdd">Cotizar</button>' +
						'</div>' +
					'</div>' +
				'</div>' +					
				'</div>';
			}
			$('#products').html(html);
		}
	})
});*/

/*$("#orderByFilter li").click(function() {
	cadena = "f="+this.id;
	document.getElementById(this.id).classList.add('active');
	$.ajax({
		type: "POST",
		url: "?controller=producto&method=productByFiltro",
		data: cadena,
		success: function (r) {
			var info = JSON.parse(r);
			var html = '';
			var pag = '';
			var i;
			//alert(info.length);
			for (i = 0; i < info.length; i++) {
				html += '<div class="col-6 col-sm-4">' +
				'<div class="product-default">' +
					'<figure>' +
						'<a href="#">' +
							'<img src="' + info[i].ubicacion + '" alt="">' +
						'</a>' +
					'</figure>' +
					'<div class="product-details">' +
						'<input type="hidden" id="' + info[i].idProducto + '" class="btnAddCart" value="">' +
						'<div class="category-list">' +
							'<a href="#" class="product-category">' + info[i].producto + '</a>' +
						'</div>' +
						'<h6 class="product-title">' +
							'<a href="?controller=producto&method=viewProduct&id=' + info[i].idProducto + '">' + info[i].nombre + '</a>' +
						'</h6>' +
						'<h3 class="product-title">' +
							'<p>Referencia ' + info[i].codigo + '</p>' +
						'</h3>' +
						'<div class="product-action">' +
							'<button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal" onclick="nueva(' + info[i].idProducto + ')" id="btnAdd">Cotizar</button>' +
						'</div>' +
					'</div>' +
				'</div>' +					
				'</div>';
			}
			for (i = 1; i<info.length; i++) {
				pag += '<li class="page-item">' +
							'<a class="page-link" href="?controller=producto&method=productsBy&a=f">' + i + '<span class="sr-only">(current)</span></a>' +
						'</li>';
			} 

			$('#products').html(html);
			$('#pagination').html(pag);
		}
	})
	$.ajax({
		type: "POST",
		url: "?controller=paginacion&method=paginacion",
		data: "",
		success: function (r) {
			
		}
	})

});*/
/*$(document).on('change', 'orderBy', function(){
	alert("hola"+$("#orderBy").val())
});*/
/*$(document).ready(function () {
	$('#orderby').change(function () {
		alert("hola");
		recarga();
	})
});

function recarga() {
	$.ajax({
		type: "POST",
		url: "?controller=producto&method=productByFiltro",
		data: "filtro=" + $('#orderby').val(),
		success: function (r) {
			
		}
	})
};*/

/* ================================================
---------------------- Main.js ----------------- */
(function($) {
    'use strict';
    var Porto = {
        initialised: false,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            // Call Porto Functions
            this.checkMobile();
            this.stickyHeader();
            this.headerSearchToggle();
            this.mMenuIcons();
            this.mMenuToggle();
            this.mobileMenu();
            this.scrollToTop();
            this.quantityInputs();
            this.countTo();
            this.tooltip();
            this.popover();
            this.changePassToggle();
            this.changeBillToggle();
            this.catAccordion();
            this.ajaxLoadProduct();
            this.toggleFilter();
            this.toggleSidebar();
            this.productTabSroll();
            this.scrollToElement();
            this.loginPopup();
            this.modalView();
            this.productManage();
            this.ratingTooltip();
            this.windowClick();
            this.popupMenu();
            this.topNotice();
            this.ratingForm();
            this.parallax();
            this.sideMenu();

            /* Menu via superfish plugin */
            if ($.fn.superfish) {
                this.menuInit();
            }

            /* Call function if Owl Carousel plugin is included */
            if ($.fn.owlCarousel) {
                this.owlCarousels();
            }

            /* Call function if noUiSlider plugin is included - for category pages */
            if (typeof noUiSlider === 'object') {
                this.filterSlider();
            }

            /* Call if not mobile and plugin is included */
            if ($.fn.themeSticky) {
                this.stickySidebar();
            }

            /* Call function if Light Gallery plugin is included */
            if ($.fn.magnificPopup) {
                this.lightBox();
            }

            /* Word rotate if Morphext plugin is included */
            if ($.fn.Morphext) {
                this.wordRotate();
            }

            /* Images grid if isotope plugin is included */
            if ($.fn.isotope) {
                this.isotopes();
            }
            /* Zoom image if elevateZoom plugin is included */
            if ($.fn.elevateZoom) {
                this.zoomImage();
            }
        },
        checkMobile: function() {
            /* Mobile Detect*/
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.mobile = true;
            } else {
                this.mobile = false;
            }
        },
        menuInit: function() {
            // General Menu
            $('.menu:not(.menu-vertical)').superfish({
                popUpSelector: 'ul, .megamenu',
                hoverClass: 'show',
                delay: 0,
                speed: 80,
                speedOut: 80,
                autoArrows: true
            });

            // Vertical Menu
            $('.menu.menu-vertical').superfish({
                popUpSelector: 'ul, .megamenu',
                hoverClass: 'show',
                delay: 0,
                speed: 200,
                speedOut: 200,
                autoArrows: true,
                animation: {
                    left: "100%",
                    opacity: "show"
                },
                animationOut: {
                    left: "90%",
                    opacity: "hide"
                }
            });

            // Calculate fixed-width megamenu's position.
            var calculateMegaMenuPosition = function() {
                $('.menu:not(.menu-vertical) .megamenu-fixed-width').each(function() {
                    var $menu = $(this),
                        $left = $menu.parent().offset().left - 15,
                        $width = $menu.outerWidth(),
                        $right_max = $(window).width() - 45,
                        $right_space = $right_max - $left - $width;

                    if ($right_space < 0) {
                        $menu.css('left', $right_space + 'px');
                    } else {
                        $menu.css('left', '-15px');
                    }
                });
            }
            calculateMegaMenuPosition();

            // Recalculate menu position on resize event.
            $.fn.smartresize ?
                $(window).smartresize(calculateMegaMenuPosition) :
                $(window).on('resize', calculateMegaMenuPosition);
        },
        stickyHeader: function() {
            var isInitialised = false;
            var objectsArray = null;
            var optionsArray = null;


            // Fix Sticky Header
            var fixStickyHeader = function($stickyHeader, options, stickyOffset) {

                // If already fixed, return.
                if ($stickyHeader.hasClass('fixed')) {
                    return;
                }

                // Set wrapper's min-height - sticky header's placeholder.
                $stickyHeader.parent().css('min-height', options.height);

                // Show moved objects on sticky
                options.move &&
                    options.move.forEach(function(moveOption) {

                        // Show clones
                        if (moveOption.clone) {
                            $stickyHeader.find(moveOption.item).show();

                            // Wrap with placeholders to replace, and move
                        } else {
                            var moveTo = $stickyHeader.find(options.moveTo),
                                moveIndex = 0;

                            $(moveOption.item).each(function() {
                                var moveItem = $(this);

                                // Wrap with placeholders
                                moveItem.wrap('<div class="sticky-placeholder" style="' +
                                    'width:' + moveItem.outerWidth() + 'px;' +
                                    'height:' + moveItem.outerHeight() + 'px;' +
                                    'margin:' + moveItem.css('margin') +
                                    ';" data-sticky-placeholder="' + (
                                        moveOption.indexStart + (++moveIndex) // move index
                                    ) + '"></div>'
                                );

                                // Move
                                'end' == moveOption.position ?
                                    moveItem.appendTo(moveTo) :
                                    moveItem.prependTo(moveTo);
                            });
                        }
                    });

                // Change
                options.changes &&
                    options.changes.forEach(function(change) {
                        change.removeClass && $stickyHeader.find(change.item).removeClass(change.removeClass);
                        change.addClass && $stickyHeader.find(change.item).addClass(change.addClass);
                    });

                // Fix sticky header
                $stickyHeader
                    .addClass('fixed')
                    .css('top', -options.height)
                    .animate({ top: stickyOffset });
            };

            // Unfix Sticky Header
            var unfixStickyHeader = function($stickyHeader, options) {

                // If already unfixed, return.
                if (!$stickyHeader.hasClass('fixed')) {
                    return;
                }

                // Unfix sticky header
                $stickyHeader.removeClass('fixed');
                $stickyHeader.css('top', '');

                // Change
                options.changes &&
                    options.changes.forEach(function(change) {
                        change.removeClass && $stickyHeader.find(change.item).addClass(change.removeClass);
                        change.addClass && $stickyHeader.find(change.item).removeClass(change.addClass);
                    });

                // Hide or replace moved objects on unsticky
                options.move &&
                    options.move.forEach(function(moveOption) {
                        // Hide clones
                        if (moveOption.clone) {
                            $stickyHeader.find(moveOption.item).hide();

                            // Replace placeholders with originals
                        } else {
                            var moveIndex = 0;

                            $stickyHeader
                                .find(moveOption.item)
                                .each(function() {
                                    $('.sticky-placeholder[data-sticky-placeholder="' + (
                                        moveOption.indexStart + (++moveIndex)
                                    ) + '"]').replaceWith($(this));
                                });
                        }
                    });

                // Unset wrapper's min-height - sticky header's placeholder.
                $stickyHeader.parent().css('min-height', '');
            };

            // Setup sticky header on only desktop.
            var setupStickyHeader = function() {
                var moveCount = 0; // Count of items to move
                optionsArray = [];

                // Init Sticky Header
                objectsArray = $('.sticky-header').each(function() {
                    var $this = $(this),
                        userOptions = $this.data('sticky-options'),
                        options = {};

                    if (userOptions) {
                        options = JSON.parse(userOptions.replace(/'/g, '"').replace(';', ''));
                    }

                    // Number objects to move.
                    options.move &&
                        options.move.forEach(function(moveOption) {
                            if (!moveOption.clone) {
                                moveOption.indexStart = moveCount;
                                moveCount += $(moveOption.item).length;
                            }
                        });

                    // Get original properties.
                    options.height = $this.outerHeight();
                    options.offset = $this.offset().top;
                    options.paddingTop = parseInt($this.css('padding-top'));

                    optionsArray.push(options);

                    // Wrap sticky header.
                    $this.wrap('<div class="sticky-wrapper"></div>');
                });

                isInitialised = true;
            };

            // Build and rebuild sticky header.
            var buildStickyHeader = function() {
                // if mobile & tablet
                if (992 > $(window).width()) {

                    // if sticky header is initialised, fix it.
                    if (isInitialised) {
                        objectsArray.each(function(index) {
                            unfixStickyHeader($(this), optionsArray[index]);
                        });
                    }

                    // if desktop
                } else {

                    // Initialize sticky header
                    isInitialised || setupStickyHeader();

                    // Calculate sticky header's top position
                    var scrollTop = $(window).scrollTop();
                    var stickyOffset = 0;

                    objectsArray.each(function(index) {
                        var $this = $(this),
                            options = optionsArray[index];

                        // On Sticky, fix
                        if (scrollTop + stickyOffset >= options.offset + options.paddingTop) {
                            $this.hasClass('fixed') || fixStickyHeader($this, options, stickyOffset);
                            stickyOffset += $this.outerHeight();

                            // On Unsticky, unfix
                        } else if ($this.hasClass('fixed') || !isInitialised) {
                            unfixStickyHeader($this, options);
                        }
                    });
                }
            }

            // init
            setTimeout(buildStickyHeader, 500);
            $(window).smartresize(buildStickyHeader);
            $(window).on('scroll', buildStickyHeader);
        },
        headerSearchToggle: function() {
            $('.header-search').length &&
                $('body')
                // Stop Propagation
                .on('click', '.header-search', function(e) {
                    e.stopPropagation();
                })

            // Search Toggle
            .on('click', '.search-toggle', function(e) {
                var $headerSearch = $(this).closest('.header-search');

                $headerSearch.toggleClass('show');
                $('.header-search-wrapper').toggleClass('show'); // Will be deprecated.

                $headerSearch.hasClass('show') && $headerSearch.find('input.form-control').focus();
                e.preventDefault();
            })

            // Search Deactive
            .on('click', function(e) {
                $('.header-search').removeClass('show');
                $('.header-search-wrapper').removeClass('show'); // Will be deprecated.
                $('body').removeClass('is-search-active');
            });

            var calcHeaderSearchPosition = function() {
                $('.header-search').each(function() {
                    var $this = $(this);
                    $this.find('.header-search-wrapper').css(
                        $(window).width() < 576 ? {
                            left: 15 - $this.offset().left + 'px',
                            right: 15 + $this.offset().left + $this.width() - $(window).width() + 'px'
                        } : {
                            left: '',
                            right: ''
                        }
                    );
                });
            };

            calcHeaderSearchPosition();

            $.fn.smartresize ?
                $(window).smartresize(calcHeaderSearchPosition) :
                $(window).on('resize', calcHeaderSearchPosition);
        },
        mMenuToggle: function() {
            // Mobile Menu Show/Hide
            $('.mobile-menu-toggler').on('click', function(e) {
                $('body').toggleClass('mmenu-active');
                $(this).toggleClass('active');
                e.preventDefault();
            });

            // Menu Show/Hide // Used in Demo 12
            $('.menu-toggler').on('click', function(e) {
                if ($(window).width() >= 992) {
                    $('.main-dropdown-menu').toggleClass('show');
                } else {
                    $('body').toggleClass('mmenu-active');
                }
                e.preventDefault();
            });

            // Hide Menu
            $('.mobile-menu-overlay, .mobile-menu-close').on('click', function(e) {
                $('body').removeClass('mmenu-active');
                $('.menu-toggler').removeClass('active');
                e.preventDefault();
            });
        },
        mMenuIcons: function() {
            // Add Mobile menu icon arrows or plus/minus to items with children
            $('.mobile-menu').find('li').each(function() {
                var $this = $(this);

                if ($this.find('ul').length) {
                    $('<span/>', {
                        'class': 'mmenu-btn'
                    }).appendTo($this.children('a'));
                }
            });
        },
        mobileMenu: function() {
            // Mobile Menu Toggle
            $('.mmenu-btn').on('click', function(e) {
                var $parent = $(this).closest('li'),
                    $targetUl = $parent.find('ul').eq(0);

                if (!$parent.hasClass('open')) {
                    $targetUl.slideDown(300, function() {
                        $parent.addClass('open');
                    });
                } else {
                    $targetUl.slideUp(300, function() {
                        $parent.removeClass('open');
                    });
                }

                e.stopPropagation();
                e.preventDefault();
            });
        },
        owlCarousels: function() {
            var sliderDefaultOptions = {
                loop: true,
                margin: 0,
                responsiveClass: true,
                nav: false,
                navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
                dots: true,
                autoplay: true,
                autoplayTimeout: 15000,
                items: 1,
            };

            var sliderInit = function($slider, sliderCustomOptions) {

                var newSliderOptions;

                if (sliderCustomOptions) {
                    newSliderOptions = $.extend(true, {}, sliderDefaultOptions, sliderCustomOptions);
                } else {
                    newSliderOptions = sliderDefaultOptions;
                }

                $slider.hasClass('nav-thin') &&
                    (newSliderOptions.navText = ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">']);

                var userOptions = $slider.data('owl-options');
                if (typeof userOptions == 'string') {
                    userOptions = JSON.parse(userOptions.replace(/'/g, '"').replace(';', ''));
                    newSliderOptions = $.extend(true, {}, newSliderOptions, userOptions);
                }

                $slider.owlCarousel(newSliderOptions);
            }


            var sliderCustomOptionsArray = {
                '.home-slider': {
                    lazyLoad: true,
                    autoplay: false,
                    dots: false,
                    nav: true,
                    autoplayTimeout: 12000,
                    animateOut: 'fadeOut',
                    navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
                    loop: true
                },
                '.testimonials-carousel': {
                    lazyLoad: true,
                    autoHeight: true,
                    responsive: {
                        992: {
                            items: 2
                        }
                    }
                },
                '.featured-products': {
                    loop: false,
                    margin: 30,
                    autoplay: false,
                    responsive: {
                        0: {
                            items: 2
                        },
                        700: {
                            items: 3,
                            margin: 15
                        },
                        1200: {
                            items: 4
                        }
                    }
                },
                '.cats-slider': {
                    loop: false,
                    margin: 20,
                    autoplay: false,
                    nav: true,
                    dots: false,
                    items: 2,
                    responsive: {
                        576: {
                            items: 3
                        },
                        992: {
                            items: 4,
                        },
                        1200: {
                            items: 5,
                        },
                        1400: {
                            items: 6
                        }
                    }
                },
                '.products-slider': {
                    loop: false,
                    margin: 20,
                    autoplay: false,
                    dots: true,
                    items: 2,
                    responsive: {
                        576: {
                            items: 3
                        },
                        992: {
                            items: 4,
                        }
                    }
                },

                '.categories-slider': {
                    loop: false,
                    margin: 20,
                    autoplay: false,
                    nav: true,
                    dots: false,
                    items: 2,
                    responsive: {
                        576: {
                            items: 3
                        },
                        992: {
                            items: 5,
                        }
                    }
                },

                '.quantity-inputs': {
                    items: 2,
                    margin: 20,
                    dots: false,
                    nav: true,
                    responsive: {
                        992: {
                            items: 4
                        },
                        768: {
                            items: 3
                        }
                    },
                    onInitialized: function() {
                        this.$element.find('.horizontal-quantity').val(1);
                    }
                },

                '.banners-slider': {
                    dots: true,
                    loop: false,
                    margin: 20,
                    responsive: {
                        576: {
                            items: 2
                        },
                        992: {
                            items: 3
                        }
                    }
                },

                '.brands-slider': {
                    loop: false,
                    margin: 20,
                    autoHeight: true,
                    autoplay: false,
                    dots: false,
                    items: 2,
                    responsive: {
                        576: {
                            items: 4
                        },
                        768: {
                            items: 6
                        }
                    }
                },

                '.widget-featured-products': {
                    lazyLoad: true,
                    nav: true,
                    navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
                    dots: false,
                    autoHeight: true
                },

                '.entry-slider': {
                    margin: 2,
                    lazyLoad: true,
                },

                // Single.html - Related posts
                '.related-posts-carousel': {
                    loop: false,
                    margin: 30,
                    autoplay: false,
                    responsive: {
                        480: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        }
                    }
                },

                '.boxed-slider': {
                    lazyLoad: true,
                    autoplayTimeout: 20000,
                    animateOut: 'fadeOut',
                    dots: false
                },

                // About Slider
                '.about-slider': {
                    margin: 2,
                    lazyLoad: true,
                },

                // Product single carousel - Default layout
                '.product-single-default .product-single-carousel': {
                    nav: true,
                    dotsContainer: '#carousel-custom-dots',
                    autoplay: false,
                    onInitialized: function() {
                        var $source = this.$element;

                        if ($.fn.elevateZoom) {
                            $source.find('img').each(function() {
                                var $this = $(this),
                                    zoomConfig = {
                                        responsive: true,
                                        zoomWindowFadeIn: 350,
                                        zoomWindowFadeOut: 200,
                                        borderSize: 0,
                                        zoomContainer: $this.parent(),
                                        zoomType: 'inner',
                                        cursor: 'grab'
                                    };
                                $this.elevateZoom(zoomConfig);
                            });
                        }
                    },
                },

                // Product single carousel - Extended layout
                '.product-single-extended .product-single-carousel': {
                    dots: false,
                    autoplay: false,
                    center: true,
                    items: 1,
                    responsive: {
                        768: {
                            items: 3
                        }
                    }
                }
            };

            // Init custom carousels
            var selectors = Object.keys(sliderCustomOptionsArray);
            selectors.forEach(function(selector) {
                $(selector).each(function() {
                    sliderInit($(this), sliderCustomOptionsArray[selector]);
                });
            });

            // Init all carousels except custom carousels.
            $('.owl-carousel').each(function() {
                if (!$(this).data('owl.carousel'))
                    sliderInit($(this), sliderInit);
            });

            // Add loaded class on lazy load
            $('.home-slider').on('loaded.owl.lazy', function(event) {
                $(event.element).closest('.home-slide').addClass('loaded');
                $(event.element).closest('.home-slider').addClass('loaded'); // For Demo 12
            });
            $('.boxed-slider').on('loaded.owl.lazy', function(event) {
                $(event.element).closest('.category-slide').addClass('loaded');
            });
            $('.about-slider').on('loaded.owl.lazy', function(event) {
                $(event.element).closest('div').addClass('loaded');
            });

            // Product Page Dot Thumbnails Carousel
            $('#carousel-custom-dots .owl-dot').click(function() {
                $('.product-single-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
            });
        },
        filterSlider: function() {
            // Slider For category pages / filter price
            var priceSlider = document.getElementById('price-slider'),
                currencyVar = '$';

            // Check if #price-slider elem is exists if not return
            // to prevent error logs
            if (priceSlider == null) return;

            noUiSlider.create(priceSlider, {
                start: [200, 700],
                connect: true,
                step: 100,
                margin: 100,
                range: {
                    'min': 0,
                    'max': 1000
                }
            });

            // Update Price Range
            priceSlider.noUiSlider.on('update', function(values, handle) {
                var values = values.map(function(value) {
                    return currencyVar + value;
                })
                $('#filter-price-range').text(values.join(' - '));
            });
        },
        stickySidebar: function() {
            var paddingOffsetTop = 10;
            $('.header .sticky-header').each(function() {
                paddingOffsetTop += $(this).height();
            });

            $(".sidebar-wrapper, .sticky-slider").themeSticky({
                autoInit: true,
                minWidth: 991,
                containerSelector: '.row, .container',
                paddingOffsetBottom: 10,
                paddingOffsetTop: paddingOffsetTop
            });
        },
        countTo: function() {
            // CountTo plugin used count animations for homepages
            if ($.fn.countTo) {
                if ($.fn.waypoint) {
                    $('.count').waypoint(function() {
                        $(this.element).countTo();
                    }, {
                        offset: '90%',
                        triggerOnce: true
                    });
                } else {
                    $('.count').countTo();
                }
            } else {
                // fallback if count plugin doesn't included
                // Get the data-to value and add it to element
                $('.count').each(function() {
                    var $this = $(this),
                        countValue = $this.data('to');
                    $this.text(countValue);
                });
            }
        },
        tooltip: function() {
            // Bootstrap Tooltip
            if ($.fn.tooltip) {
                $('[data-toggle="tooltip"]').tooltip({
                    trigger: 'hover focus' // click can be added too
                });
            }
        },
        popover: function() {
            // Bootstrap Popover
            if ($.fn.popover) {
                $('[data-toggle="popover"]').popover({
                    trigger: 'focus'
                });
            }
        },
        changePassToggle: function() {
            // Toggle new/change password section via checkbox
            $('#change-pass-checkbox').on('change', function() {
                $('#account-chage-pass').toggleClass('show');
            });
        },
        changeBillToggle: function() {
            // Checkbox review - billing address checkbox
            $('#change-bill-address').on('change', function() {
                $('#checkout-shipping-address').toggleClass('show');
                $('#new-checkout-address').toggleClass('show');
            });
        },
        catAccordion: function() {
            // Toggle "open" Class for parent elem - Home cat widget
            $('.catAccordion').on('shown.bs.collapse', function(item) {
                var parent = $(item.target).closest('li');

                if (!parent.hasClass('open')) {
                    parent.addClass('open');
                }
            }).on('hidden.bs.collapse', function(item) {
                var parent = $(item.target).closest('li');

                if (parent.hasClass('open')) {
                    parent.removeClass('open');
                }
            });
        },
        scrollBtnAppear: function() {
            if ($(window).scrollTop() >= 400) {
                $('#scroll-top').addClass('fixed');
            } else {
                $('#scroll-top').removeClass('fixed');
            }
        },
        scrollToTop: function() {
            $('#scroll-top').on('click', function(e) {
                $('html, body').animate({
                    'scrollTop': 0
                }, 1200);
                e.preventDefault();
            });
        },
        newsletterPopup: function() {
            $.magnificPopup.open({
                items: {
                    src: '#newsletter-popup-form'
                },
                type: 'inline',
                mainClass: 'mfp-newsletter',
                removalDelay: 350,
                callbacks: {
                    open: function() {
                        if ($('.sticky-header.fixed').css('margin-right')) {
                            var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) + 17 + 'px';

                            $('.sticky-header.fixed').css('margin-right', newMargin);
                            $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                            $('#scroll-top').css('margin-right', newMargin);
                        }
                    },
                    afterClose: function() {
                        if ($('.sticky-header.fixed').css('margin-right')) {
                            var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) - 17 + 'px';

                            $('.sticky-header.fixed').css('margin-right', newMargin);
                            $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                            $('#scroll-top').css('margin-right', newMargin);
                        }
                    }
                },
            });
        },
        lightBox: function() {
            // Newsletter popup
            if (document.getElementById('newsletter-popup-form')) {
                setTimeout(function() {
                    var mpInstance = $.magnificPopup.instance;
                    if (mpInstance.isOpen) {
                        mpInstance.close();
                        setTimeout(function() {
                            Porto.newsletterPopup();
                        }, 360);
                    } else {
                        Porto.newsletterPopup();
                    }
                }, 10000);
            }

            // Gallery Lightbox
            var links = [];
            var $productSliderImages = $('.product-single-carousel .owl-item:not(.cloned) img').length === 0 ? $('.product-single-gallery img') : $('.product-single-carousel .owl-item:not(.cloned) img');
            $productSliderImages.each(function() {
                links.push({ 'src': $(this).attr('data-zoom-image') });
            });

            $(".prod-full-screen").click(function(e) {
                var currentIndex;
                if (e.currentTarget.closest(".product-slider-container")) {
                    currentIndex = ($('.product-single-carousel').data('owl.carousel').current() + $productSliderImages.length - Math.ceil($productSliderImages.length / 2)) % $productSliderImages.length;
                } else {
                    currentIndex = $(e.currentTarget).closest(".product-item").index();
                }

                $.magnificPopup.open({
                    items: links,
                    navigateByImgClick: true,
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                }, currentIndex);
            });

            //SUBMENU
            $(".caxsalls a").click(
                function(e) {
                    e.preventDefault();
                    $(".caxsalls a").not(this).removeClass("active")
                    $(this).addClass("active")
                    $(".caxsa").hide();
                    $("#caxsa" + $(this).attr('data-id')).show()
                    console.log("#caxsa" + $(this).attr('data-id'))
                }
            );


            //QuickView Popup
            $('body').on('click', 'a.btn-quickview-product', function(e) {
                e.preventDefault();
                Porto.ajaxLoading();
                var ajaxUrl = $(this).attr('href');
                //alert(ajaxUrl);
                setTimeout(function() {
                    $.magnificPopup.open({
                        type: 'ajax',
                        mainClass: "mfp-ajax-product",
                        tLoading: '',
                        preloader: false,
                        removalDelay: 350,
                        items: {
                            src: ajaxUrl
                        },
                        callbacks: {
                            open: function() {
                                if ($('.sticky-header.fixed').css('margin-right')) {
                                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) + 17 + 'px';

                                    $('.sticky-header.fixed').css('margin-right', newMargin);
                                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                                    $('#scroll-top').css('margin-right', newMargin);
                                }
                            },
                            ajaxContentAdded: function() {
                                Porto.owlCarousels();
                                Porto.quantityInputs();
                                if (typeof addthis !== 'undefined') {
                                    addthis.layers.refresh();
                                } else {
                                    $.getScript("https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b927288a03dbde6");
                                }
                            },
                            beforeClose: function() {
                                $('.ajax-overlay').remove();
                            },
                            afterClose: function() {
                                if ($('.sticky-header.fixed').css('margin-right')) {
                                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) - 17 + 'px';

                                    $('.sticky-header.fixed').css('margin-right', newMargin);
                                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                                    $('#scroll-top').css('margin-right', newMargin);
                                }
                            }
                        },
                        ajax: {
                            tError: '',
                        }
                    });
                }, 500);
            });
        },
        productTabSroll: function() {
            // Scroll to product details tab and show review tab - product pages
            $('.rating-link').on('click', function(e) {
                if ($('.product-single-tabs').length) {
                    $('#product-tab-reviews').tab('show');
                } else if ($('.product-single-collapse').length) {
                    $('#product-reviews-content').collapse('show');
                } else {
                    return;
                }

                if ($('#product-reviews-content').length) {
                    setTimeout(function() {
                        var scrollTabPos = $('#product-reviews-content').offset().top - 60;

                        $('html, body').stop().animate({
                            'scrollTop': scrollTabPos
                        }, 800);
                    }, 250);
                }
                e.preventDefault();
            });
        },
        quantityInputs: function() {
            // Quantity input - cart - product pages
            if ($.fn.TouchSpin) {
                // Vertical Quantity
                $('.vertical-quantity').TouchSpin({
                    verticalbuttons: true,
                    verticalup: '',
                    verticaldown: '',
                    verticalupclass: 'icon-up-dir',
                    verticaldownclass: 'icon-down-dir',
                    buttondown_class: 'btn btn-outline',
                    buttonup_class: 'btn btn-outline',
                    initval: 1,
                    min: 1
                });
                var i = $('.vertical-quantity');
                /*var idCantidad = document.getElementById("prueba").value;
                alert(idCantidad);*/
                //hola
                i.on("touchspin.on.startspin", function() {
                    var id = document.getElementById("id").value;
                    alert(id);
                    //addItemToCarrito(id);
                });
                /*var i = $("input[name='prueba']");
                i.TouchSpin*/

                // Horizontal Quantity
                $('.horizontal-quantity').TouchSpin({
                    verticalbuttons: false,
                    buttonup_txt: '',
                    buttondown_txt: '',
                    buttondown_class: 'btn btn-outline btn-down-icon',
                    buttonup_class: 'btn btn-outline btn-up-icon',
                    initval: 1,
                    min: 1
                });
            }
        },
        ajaxLoading: function() {
            $('body').append("<div class='ajax-overlay'><i class='porto-loading-icon'></i></div>");
        },
        wordRotate: function() {
            $('.word-rotater').each(function() {
                $(this).Morphext({
                    animation: 'bounceIn',
                    separator: ',',
                    speed: 2000
                });
            });
        },
        ajaxLoadProduct: function() {
            var loadCount = 0;
            $loadButton.click(function(e) {
                e.preventDefault();
                $(this).text('Loading ...');
                $.ajax({
                    url: "ajax/category-ajax-products.html",
                    success: function(result) {
                        var grid = $('.product-ajax-grid');
                        var className = grid.find('.product-default').parent().attr('class');

                        var $newItems = $(result);
                        $newItems.find('.product-default').each(function() {
                            $(this).parent().attr('class', className);
                        });

                        setTimeout(function() {
                            $newItems.hide().appendTo(grid).fadeIn();
                            $loadButton.text('Load More');
                            ++loadCount >= 2 && $loadButton.hide();
                        }, 350);
                    },
                    failure: function() {
                        $loadButton.text("Sorry something went wrong.");
                    }
                });
            });
        },
        toggleFilter: function() {
            // toggle sidebar filter
            $('.filter-toggle a').click(function(e) {
                e.preventDefault();
                $('.filter-toggle').toggleClass('opened');
                $('main').toggleClass('sidebar-opened');
            });

            // hide sidebar filter and sidebar overlay
            $('.sidebar-overlay').click(function(e) {
                $('.filter-toggle').removeClass('opened');
                $('main').removeClass('sidebar-opened');
            });

            // show/hide sort menu
            $('.sort-menu-trigger').click(function(e) {
                e.preventDefault();
                $('.select-custom').removeClass('opened');
                $(e.target).closest('.select-custom').toggleClass('opened');
            });
        },
        toggleSidebar: function() {
            $('.sidebar-toggle').click(function() {
                $('main').toggleClass('sidebar-opened');
            });
        },
        scrollToElement: function() {
            $('.scrolling-box a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));

                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 90
                    }, 700);
                }
            });
        },
        loginPopup: function() {
            $('.login-link').click(function(e) {
                e.preventDefault();
                Porto.ajaxLoading();
                var ajaxUrl = "ajax/login-popup.html";
                setTimeout(function() {
                    $.magnificPopup.open({
                        type: 'ajax',
                        mainClass: "login-popup",
                        tLoading: '',
                        preloader: false,
                        removalDelay: 350,
                        items: {
                            src: ajaxUrl
                        },
                        callbacks: {
                            open: function() {
                                if ($('.sticky-header.fixed').css('margin-right')) {
                                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) + 17 + 'px';

                                    $('.sticky-header.fixed').css('margin-right', newMargin);
                                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                                    $('#scroll-top').css('margin-right', newMargin);
                                }
                            },
                            beforeClose: function() {
                                $('.ajax-overlay').remove();
                            },
                            afterClose: function() {
                                if ($('.sticky-header.fixed').css('margin-right')) {
                                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) - 17 + 'px';

                                    $('.sticky-header.fixed').css('margin-right', newMargin);
                                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                                    $('#scroll-top').css('margin-right', newMargin);
                                }
                            }
                        },
                        ajax: {
                            tError: '',
                        }
                    });
                }, 1500);
            });
        },
        modalView: function() {
            $('body').on('click', '.btn-add-cart', function(e) {
                $('.add-cart-box #productImage').attr('src', $(this).parents('.product-default').find('figure img').attr('src'));
                $('.add-cart-box #productTitle').text($(this).parents('.product-default').find('.product-title').text());

                if ($('.sticky-header.fixed').css('margin-right')) {
                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) + 17 + 'px';

                    $('.sticky-header.fixed').css('margin-right', newMargin);
                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                    $('#scroll-top').css('margin-right', newMargin);
                }
            });
            $('.modal#addCartModal').on('hidden.bs.modal', function(e) {
                if ($('.sticky-header.fixed').css('margin-right')) {
                    var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) - 17 + 'px';

                    $('.sticky-header.fixed').css('margin-right', newMargin);
                    $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                    $('#scroll-top').css('margin-right', newMargin);
                }
            })
        },
        productManage: function() {
            $('.product-select').click(function(e) {
                $(this).parents('.product-default').find('figure img').attr('src', $(this).data('src'));
                $(this).addClass('checked').siblings().removeClass('checked');
            });
        },
        ratingTooltip: function() {
            $('body').on('mouseenter touchstart', '.product-ratings', function(e) {
                var ratingsRes = $(this).find('.ratings').width() / $(this).width() * 5;
                $(this).find('.tooltiptext').text(ratingsRes ? ratingsRes.toFixed(2) : ratingsRes);
            });
        },
        windowClick: function() {
            $(document).click(function(e) {
                // if click is happend outside of filter menu, hide it.
                if (!$(e.target).closest('.toolbox-item.select-custom').length) {
                    $('.select-custom').removeClass('opened');
                }
            });
        },
        popupMenu: function() {
            if ($('.popup-menu').length <= 0) {
                return;
            }

            // Hide scroll bar
            var $popup_menu_ul = $('.popup-menu-ul');
            var scroll_bar_size = $popup_menu_ul.parent().width() - $popup_menu_ul.children().width();
            scroll_bar_size >= 0 &&
                $popup_menu_ul.css('margin-right', '-' + scroll_bar_size + 'px'),
                $popup_menu_ul.css('margin-top', scroll_bar_size + 'px');

            // Open
            $('.popup-menu-toggler').on('click', function(e) {
                e.preventDefault();
                $(this).siblings('.popup-menu').addClass('open');

                // Close on escape key
                $(document).on('keydown.popup-menu', function(e) {
                    if (e.which == 27) {
                        $('.popup-menu').removeClass('open');
                        $(document).off('keydown.popup-menu');
                    }
                });
            });

            // Close when close button is clicked.
            $('body').on('click', '.popup-menu-close', function(e) {
                $('.popup-menu').removeClass('open');
                $(document).off('keydown.popup-menu');
                e.preventDefault();
            });

            // Toggle submenus
            $('body').on('click', '.popup-menu a', function(e) {
                var $ul = $(this).siblings('ul');
                $ul.length && $ul.toggleClass('open'), e.preventDefault();
            });
        },
        topNotice: function() {
            if ($('.top-notice .mfp-close').length) {
                $('body').on('click', '.top-notice .mfp-close', function() {
                    var topNoticeHeight = $(this).height();
                    $(this)
                        .closest('.top-notice')
                        .fadeOut(function() {
                            $(this).addClass('closed');
                        });
                });
            }
        },
        ratingForm: function() {
            $('body').on('click', '.rating-form .rating-stars > a', function(e) {
                var $star = $(this);
                $star.addClass('active').siblings().removeClass('active');
                $star.parent().addClass('selected');
                $star.closest('.rating-form').find('select').val($star.text());
                e.preventDefault();
            });
        },

        parallax: function() {
            var wrappers = $('[data-parallax]'),
                defaultOptions = {
                    speed: 1.5,
                    horizontalPosition: '50%',
                    offset: 0,
                    enableOnMobile: true
                };

            if (!wrappers.length) {
                return;
            }

            wrappers.each(function() {
                var wrapper = $(this),
                    opts = wrapper.data('parallax');

                if (opts) {
                    opts = JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
                }

                var options = $.extend(true, {}, defaultOptions, opts),
                    $window = $(window),
                    offset,
                    yPos,
                    plxPos,
                    background;

                // Create Parallax Element
                background = $('<div class="parallax-background"></div>');

                // Set Style for Parallax Element
                var bg = wrapper.data('image-src') ? 'url(' + wrapper.data('image-src') + ')' : wrapper.css('background-image');
                background.css({
                    'background-image': bg,
                    'background-size': 'cover',
                    'background-position': '50% 0%',
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'width': '100%',
                    // 'height': '150%'
                    'height': options.speed * 100 + '%'
                });

                // Add Parallax Element on DOM
                wrapper.prepend(background);

                // Set Overlfow Hidden and Position Relative to Parallax Wrapper
                wrapper.css({
                    'position': 'relative',
                    'overflow': 'hidden'
                });

                // If enabled
                if (!Porto.mobile || options.enableOnMobile) {
                    var moveParallax = function() {
                        offset = wrapper.offset();
                        yPos = -($window.scrollTop() - (offset.top - 100)) / ((options.speed + 2));
                        plxPos = (yPos < 0) ? Math.abs(yPos) : -Math.abs(yPos);

                        background.css({
                            'transform': 'translate3d(0, ' + ((plxPos - 50) + (options.offset)) + 'px, 0)',
                            'background-position-x': options.horizontalPosition
                        });
                    };

                    $(window).on('scroll resize', moveParallax);
                    moveParallax();

                    // If disabled
                } else {
                    wrapper.addClass('parallax-disabled');
                }
            });
        },

        isotopes: function() {
            var defaultOptions = {
                itemsSelector: '.grid-item',
                masonry: {
                    columnWidth: '.grid-col-sizer'
                },
                percentPosition: true,

                // Sort
                sortBy: 'original-order',
                getSortData: {
                    'md-order': '[data-md-order] parseInt'
                },
                sortReorder: false
            };

            // Init all grids
            $('.grid').each(function() {

                var $this = $(this),
                    userOptions = $this.data('grid-options');

                if (userOptions) {
                    userOptions = JSON.parse(userOptions.replace(/'/g, '"').replace(';', ''));
                }

                var options = $.extend(true, {}, defaultOptions, userOptions);
                var gridIns = $this.isotope(options);

                if (options.sortReorder) {
                    var reorderGrid = function() {
                        var windowWidth = $(window).width();
                        gridIns.isotope({
                            sortBy: (windowWidth < 768 && windowWidth > 400) ?
                                'md-order' : 'original-order'
                        });
                    };

                    // Reorder when resize event is called.
                    $.fn.smartresize ?
                        $(window).smartresize(reorderGrid) :
                        $(window).on('resize', reorderGrid);
                }
            });
        },
        zoomImage: function() {
            $('.product-single-grid .product-single-gallery img').each(function() {
                var $this = $(this),
                    zoomConfig = {
                        responsive: true,
                        zoomWindowFadeIn: 350,
                        zoomWindowFadeOut: 200,
                        borderSize: 0,
                        zoomContainer: $this.parent(),
                        zoomType: 'inner',
                        cursor: 'grab'
                    };
                $this.elevateZoom(zoomConfig);
            });
        },
        sideMenu: function() {
            $('.side-menu').length &&
                $('body').on('click', '.side-menu-toggle', function(e) {
                    $(this).siblings('ul').slideToggle('fast');
                    $(this).parent().toggleClass('show');
                    e.stopPropagation();
                });
        }
    };

    $('body').prepend('<div class="loading-overlay"><div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>');

    //Variables
    var $loadButton = $('.loadmore');

    // Ready Event
    jQuery(document).ready(function() {
        // Init our app
        Porto.init();
    });

    // Load Event
    $(window).on('load', function() {
        $('body').addClass("loaded");
        Porto.scrollBtnAppear();
    });

    // Scroll Event
    $(window).on('scroll', function() {
        Porto.scrollBtnAppear();
    });
})(jQuery);