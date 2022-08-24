<!-- Footer -->
<footer class="text-center text-lg-start bg-white text-muted">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
            <span>Conéctate con nosotros en nuestras redes:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div class="footer-links">
            <a href="" class="me-4 link-grayish">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 link-grayish">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 link-grayish">
                <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 link-grayish">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 link-grayish">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 link-grayish">
                <i class="fab fa-github"></i>
            </a>
        </div>
        <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
        <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
                <!-- Grid column -->
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <!-- Content -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem me-3 text-grayish"></i>Horario de atencion
                    </h6>
                    <p>
                        <?= $empresa_r['empresa_horario_atencion'] ?>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <!-- <p>
                    <h6 class="text-uppercase fw-bold mb-4">Algunos productos</h6>
                        <a href="#!" class="text-reset">Angular</a>
                    </p> -->

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">Links</h6>
                    <p>
                        <a href="<?= $proyect['url'] ?>" class="text-reset">Inicio</a>
                    </p>
                    <p>
                        <a href="<?= $proyect['url'] ?>checkin" class="text-reset">Registrarse</a>
                    </p>
                    <p>
                        <a href="<?= $proyect['url'] ?>login" class="text-reset">Iniciar Sesion</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">Contactos</h6>
                    <p><i class="fas fa-home me-3 text-grayish"></i><?= $empresa_r['empresa_ubicacion'] ?></p>
                    <p>
                        <i class="fas fa-envelope me-3 text-grayish"></i>
                        <?= $empresa_r['empresa_email'] ?>
                    </p>
                    <p><i class="fas fa-phone me-3 text-grayish"></i><?= $empresa_r['empresa_telefono'] ?></p>

                </div>
                <!-- Grid column -->
            </div>
            <!-- Grid row -->
        </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
        © <?= date('Y') ?> Copyright:
        <a class="text-reset fw-bold" href="<?= $proyect['url'] ?>"><?= $empresa_r['empresa_nombre'] ?></a>
    </div>
    <!-- Copyright -->
</footer>
<!-- Footer -->