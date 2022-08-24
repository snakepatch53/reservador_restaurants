<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/panel.php
*/
session_start();
if (isset($_SESSION['usuario_id'])) {
    if ($_SESSION['usuario_admin'] == true) {
        $viewPage = 0;
        $user_photo_url = ($_SESSION['usuario_foto'] !== null and $_SESSION['usuario_foto'] !== "") ? 'files/usuario_foto/' . $_SESSION['usuario_foto'] : 'img/avatar.png'
?>
        <!DOCTYPE html>
        <html lang="es">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
            <link rel="icon" href="view/src/img/logo.png">
            <title>PANEL - RESERVADOR</title>
            <link rel="stylesheet" href="view/css/config.css">
            <link rel="stylesheet" href="view/css/panel.css">
        </head>

        <body>
            <input type="checkbox" id="idea_input_check_header_tool">
            <div class="idea_header">
                <div class="idea_title">
                    <span class="idea_title1">LA MADRINA</span>
                    <span class="idea_title2">L.M.</span>
                </div>
                <label for="idea_input_check_header_tool" class="idea_menu">
                    <img src="view/src/icon/menu.png" class="idea_header_label_tool_img">
                </label>
                <input type="checkbox" id="idea_input_check_profile">
                <label for="idea_input_check_profile" class="idea_profile">
                    <span><?= $_SESSION['usuario_nombres'] ?></span>
                    <!-- <img src="view/src/img/avatar.png"> -->
                    <img src="view/src/<?= $user_photo_url ?>">
                    <div class="idea_profile_options">
                        <!-- <img src="view/src/img/avatar.png"> -->
                        <img src="view/src/<?= $user_photo_url ?>">
                        <span><?= $_SESSION['usuario_nombres'] ?></span>
                        <button id="idea_btn_logount">CERRAR SESION</button>
                    </div>
                </label>
            </div>
            <div class="idea_tool">
                <img src="view/src/img/logo.png" class="logo">
                <div class="idea_options">
                    <!--
<div class="idea_option">
<input type="checkbox" id="idea_check_option_1">
<a href="panel.php?page=">
<label for="idea_check_option_1">
<span>inicio</span>
<img src="view/src/icon/in.png">
</label>
</a>
<div class="idea_sub_options">
<a href="panel.php?page=">
<span>Sub Option 1</span>
<img src="view/src/icon/in.png">
</a>
</div>
</div>
-->
                    <!-- <div class="idea_option">
                    <a href="panel.php?page=inicio">
                        <label>
                            <span>inicio</span>
                            <img src="view/src/icon/in.png">
                        </label>
                    </a>
                </div> -->

                    <div class="idea_option">
                        <a href="panel.php?page=empresa">
                            <label>
                                <span>Informacion</span>
                                <img src="view/src/icon/in.png">
                            </label>
                        </a>
                    </div>

                    <div class="idea_option">
                        <a href="panel.php?page=usuario">
                            <label>
                                <span>Usuarios</span>
                                <img src="view/src/icon/in.png">
                            </label>
                        </a>
                    </div>

                    <div class="idea_option">
                        <a href="panel.php?page=producto">
                            <label>
                                <span>Productos</span>
                                <img src="view/src/icon/in.png">
                            </label>
                        </a>
                    </div>

                    <div class="idea_option">
                        <a href="panel.php?page=pedido">
                            <label>
                                <span>Pedidos</span>
                                <img src="view/src/icon/in.png">
                            </label>
                        </a>
                    </div>

                    <!-- <div class="idea_option">
                    <a href="panel.php?page=pedido_producto">
                        <label>
                            <span>Pedido_producto</span>
                            <img src="view/src/icon/in.png">
                        </label>
                    </a>
                </div> -->

                </div>
            </div>
            <!-- SCRIPTS | START -->
            <script src="control/dao/config.js"></script>
            <script src="control/dao/EmpresaDao.js"></script>
            <script src="control/dao/UsuarioDao.js"></script>
            <script src="control/dao/ProductoDao.js"></script>
            <script src="control/dao/PedidoDao.js"></script>
            <script src="control/dao/Pedido_productoDao.js"></script>
            <script src="control/script/panel.js"></script>
            <!-- SCRIPTS | END -->
            <div class="idea_content">
                <?php
                $viewPage = 'view/page/';
                if (isset($_GET['page'])) {
                    include $viewPage . $_GET['page'] . '.php';
                } else {
                    include $viewPage . 'pedido.php';
                }
                ?>
            </div>
        </body>

        </html>
<?php
    } else {
        header("location: ./");
    }
} else {
    header("location: login_panel.php");
}
?>