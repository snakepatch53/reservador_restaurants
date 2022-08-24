<nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="<?= $proyect['url'] ?>"><?= $empresa_r['empresa_nombre'] ?></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <?php if (isset($_SESSION['usuario_id'])) { ?>
                <strong class="ms-auto text-white"><?= $_SESSION['usuario_nombres'] ?></strong>
            <?php } ?>
            <ul class="navbar-nav ms-auto mb-lg-0 align-items-center">
                <li class="nav-item">
                    <a class="nav-link <?= $currentPage == 'inicio' ? 'active' : '' ?>" href="<?= $proyect['url'] ?>">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?= $currentPage == 'menu' ? 'active' : '' ?>" href="<?= $proyect['url'] ?>menu">Menu</a>
                </li>
                <?php if (empty($_SESSION['usuario_id'])) { ?>
                    <li class="nav-item">
                        <a class="nav-link <?= $currentPage == 'login' ? 'active' : '' ?>" href="<?= $proyect['url'] ?>login">Iniciar Sesion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= $currentPage == 'checkin' ? 'active' : '' ?>" href="<?= $proyect['url'] ?>checkin">Registrarse</a>
                    </li>
                <?php } else { ?>
                    <li class="nav-item">
                        <a class="nav-link <?= $currentPage == 'profile' ? 'active' : '' ?>" href="<?= $proyect['url'] ?>profile">Perfil</a>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link bg-transparent border-0" onclick="logout()">Cerrar Sesion</button>
                    </li>
                <?php } ?>
                <li>
                    <button type="button" class="btn rounded-5 btn-outline-light d-flex justify-content-center align-items-center" style="width:35px; height:35px;" data-bs-toggle="modal" data-bs-target="#shopModal">
                        <i class="fa-solid fa-cart-shopping" style="font-size:15px;"></i>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</nav>




<!-- Modal -->
<div class="modal fade" id="shopModal" tabindex="-1" aria-labelledby="shopModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Carrito de Pedidos</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Precio</th>
                                            <th>Subtotal</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="shopcar">
                                        <!-- INSERT A PRODUCTS -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Cerrar
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <button type="button" class="btn btn-outline-primary" id="element-pedir-button">
                    Hacer Pedido
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </div>




    </div>
</div>


<!-- modal mensaje -->
<div class="modal fade" id="modalAlert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Solicitu procesada!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Su pedido se ha enviado correctamente, nos pondremos en contacto inmediatamente..
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">De acuerdo!</button>
            </div>
        </div>
    </div>
</div>