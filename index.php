<?php
// ob_start();
include('./config.php');

// if ($_SERVER['HTTPS'] != "on" or strpos($_SERVER['HTTP_HOST'], 'www') !== false) {
//     header("location: " . $proyect['root_absolute']);
// }

include './model/library/Router/Route.php';
include './model/library/Router/Router.php';
include './model/library/Router/RouteNotFoundException.php';

$router = new Router\Router($proyect['name']);

$router->add('/(|inicio|index|index.php)', function () {
    global $proyect;
    $currentPage = 'inicio';
    include('./view/page.public/inicio.php');
}, ['GET']);

$router->add('/menu', function () {
    global $proyect;
    $currentPage = 'menu';
    include('./view/page.public/menu.php');
}, ['GET']);

$router->add('/profile', function () {
    global $proyect;
    $currentPage = 'profile';
    include('./view/page.public/profile.php');
}, ['GET']);

$router->add('/login', function () {
    global $proyect;
    $currentPage = 'login';
    include('./view/page.public/login.php');
}, ['GET']);

$router->add('/checkin', function () {
    global $proyect;
    $currentPage = 'checkin';
    include('./view/page.public/checkin.php');
}, ['GET']);

// ERROR 404
$router->add('/.*', function () {
    global $proyect;
    echo "404 error";
});

// EJECUTAR RUTAS
$router->route();
