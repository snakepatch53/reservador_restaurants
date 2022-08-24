<?php
include('./model/dao/Mysql.php');
include('./model/dao/ProductoDao.php');
include('./model/dao/EmpresaDao.php');
$ProductoDao = new ProductoDao();
$EmpresaDao = new EmpresaDao();
$productos_rs = $ProductoDao->select();
$empresa_r = mysqli_fetch_assoc($EmpresaDao->select());
$producto_array = array();
foreach ($productos_rs as $producto) {
    $producto_array[] = $producto;
}
$producto_json = json_encode($producto_array);


session_start();
$usuario_id = isset($_SESSION['usuario_id']) ? $_SESSION['usuario_id'] : 0;
$usuario_nombres = isset($_SESSION['usuario_nombres']) ? $_SESSION['usuario_nombres'] : "";
$usuario_apellidos = isset($_SESSION['usuario_apellidos']) ? $_SESSION['usuario_apellidos'] : "";
$usuario_cedula = isset($_SESSION['usuario_cedula']) ? $_SESSION['usuario_cedula'] : "";
$usuario_telefono = isset($_SESSION['usuario_telefono']) ? $_SESSION['usuario_telefono'] : "";
$usuario_email = isset($_SESSION['usuario_email']) ? $_SESSION['usuario_email'] : "";
$usuario_genero = isset($_SESSION['usuario_genero']) ? $_SESSION['usuario_genero'] : "";
$usuario_nacimiento = isset($_SESSION['usuario_nacimiento']) ? $_SESSION['usuario_nacimiento'] : "";
$usuario_pass = isset($_SESSION['usuario_pass']) ? $_SESSION['usuario_pass'] : "";
$usuario_foto = isset($_SESSION['usuario_foto']) ? $_SESSION['usuario_foto'] : "";
$usuario_foto = ($usuario_foto != "" and $usuario_foto != null) ? $proyect['url'] . "view/src/files/usuario_foto/" . $usuario_foto : $proyect['url'] . "view/img/user.png";
// session_destroy();
?>
<script>
    const producto_array = JSON.parse('<?= $producto_json ?>');
    const root_url = '<?= $proyect['url'] ?>';
    const SESSION = JSON.parse('<?= json_encode($_SESSION) ?>');
</script>