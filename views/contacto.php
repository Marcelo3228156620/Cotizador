<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
</head>
<body>
<?php require 'templates/header.php'; ?>
    <main class="main">
			<div class="container">
				<!--<div id="map"></div>--><!-- End #map -->
                <div class="embed-responsive embed-responsive-21by9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38230.5737638959!2d-74.0963378758505!3d4.606685992094712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f997216f2ccc7%3A0x991c568608ef9247!2sNurue%C3%B1a%20S.A.S!5e0!3m2!1ses!2sco!4v1613057766290!5m2!1ses!2sco" style="border:0;" frameborder="0"></iframe>
                </div>

				<div class="row">
					<div class="col-md-8">
						<h2 class="light-title"><strong>CONTÁCTENOS</strong></h2>

						<form action="#" id="frmcontacto" novalidate="">
							<div class="form-group required-field">
								<label for="contact-name">Nombre Completo</label>
								<input type="text" class="form-control" id="contact-name" name="contact-name" required>
							</div><!-- End .form-group -->

							<div class="form-group required-field">
								<label for="contact-email">Email</label>
								<input type="email" class="form-control" id="contact-email" name="contact-email" required>
							</div><!-- End .form-group -->

							<div class="form-group">
								<label for="contact-phone">Teléfono</label>
								<input type="tel" class="form-control" id="contact-phone" name="contact-phone">
							</div><!-- End .form-group -->

							<div class="form-group required-field">
								<label for="contact-message">Comentarios</label>
								<textarea cols="30" rows="1" id="contact-message" class="form-control" name="contact-message" required></textarea>
							</div><!-- End .form-group -->

							<div class="form-footer">
								<button type="submit" class="btn btn-primary">Enviar</button>
							</div><!-- End .form-footer -->
						</form>
					</div><!-- End .col-md-8 -->

					<div class="col-md-4">
						<h2 class="light-title"><strong>DATOS DE CONTACTO</strong></h2>

						<div class="contact-info">
							<div>
								<i class="icon-phone"></i>
								<p><a href="tel:0313906666">390 6666 EXT 1010</a></p>
								<p><a href="tel:0313906666">390 6666 EXT 1011</a></p>
							</div>
							<div>
								<i class="icon-mail-alt"></i>
								<p><a href="mailto:asesor.mostrador1@fenusa.com.co">asesor.mostrador1@fenusa.com.co</a></p>
								<p><a href="mailto:fenusa@fenusa.com.co">fenusa@fenusa.com.co</a></p>
							</div>
                            <div>
                                <i class="icon-direction"></i>
                                <p>
                                    <strong>PALOQUEMAO:</strong>
                                    <br>
                                    Cra. 25 N. 13 – 40 Bogotá D.C.
                                </p>
                                <br>
                                <p>
                                    <strong>MOSQUERA:</strong>
                                    <br>
                                    Av Troncal de Occidente N. 18 – 07 Parque Industrial Santo Domigo, Bodega J2.
                                </p>
                            </div>
						</div><!-- End .contact-info -->
					</div><!-- End .col-md-4 -->
				</div><!-- End .row -->
			</div><!-- End .container -->

			<div class="mb-8"></div><!-- margin -->
		</main><!-- End .main -->
<?php require 'templates/footer.php'; ?>
</body>
</html>