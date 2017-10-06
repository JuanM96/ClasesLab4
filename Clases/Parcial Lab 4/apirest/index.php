<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


require './composer/vendor/autoload.php';
require_once '/clases/AccesoDatos.php';

require_once '/clases/AutentificadorJWT.php';
require_once '/clases/MWparaCORS.php';
require_once '/clases/MWparaAutentificar.php';
require_once '/clases/UsuarioApi.php';
require_once '/clases/PizzaApi.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

/*

¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).

  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/

$app = new \Slim\App(["settings" => $config]);



/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
/*$app->group('/cd', function () {
 
  $this->get('/', \cdApi::class . ':traerTodos')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
 
  $this->get('/{id}', \cdApi::class . ':traerUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');

  $this->post('/', \cdApi::class . ':CargarUno');

  $this->delete('/', \cdApi::class . ':BorrarUno');

  $this->put('/', \cdApi::class . ':ModificarUno');
     
})->add(\MWparaAutentificar::class . ':VerificarUsuario')->add(\MWparaCORS::class . ':HabilitarCORS8080');*/

/*$app->group('/usuario', function () {
    $this->post('/alta', \UsuarioApi::class . ':AltaUsuario');
    $this->post('/baja', \UsuarioApi::class . ':BajaUsuario');
    $this->post('/modificacion', \UsuarioApi::class . ':ModificarUsuario');
    $this->get('/traerTodos', \UsuarioApi::class . ':traerUsuarios');
    $this->post('/traerUno', \UsuarioApi::class . ':traerUsuarioPorUsuario');
})/*->add(\MWparaAutentificar::class . ':VerificarUsuario')->add(\MWparaCORS::class . ':HabilitarCORSTodos');*/

$app->group('/pizza', function () {
    $this->post('/alta', \pizzaApi::class . ':Alta');
    $this->post('/baja', \pizzaApi::class . ':Baja');
    $this->post('/modificacion', \pizzaApi::class . ':Modificar');
    $this->get('/traerTodos', \pizzaApi::class . ':traerpizzas');
    //$this->post('/traerUno', \pizzaApi::class . ':traerpizzaPorpizza');
})/*->add(\MWparaAutentificar::class . ':VerificarUsuario')*/->add(\MWparaCORS::class . ':HabilitarCORSTodos');
/*$app->group('/ingreso', function () {
    $this->post('/logIn', \UsuarioApi::class . ':LogIn');
});*/

$app->run();