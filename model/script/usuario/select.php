<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/UsuarioDao.php';
$_entity = new UsuarioDao();
$rs = $_entity->select();
$array = array();
while ($r = mysqli_fetch_assoc($rs)) {
    $array[] = $r;
}
echo json_encode($array);
