<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require_once 'Pizza.php';
//require_once 'LogEmpleado.php';
require_once 'AutentificadorJWT.php';
require_once './composer/vendor/autoload.php';
class pizzaApi
{
    public function Alta($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $pizza = new pizza($ArrayDeParametros['sabor'],$ArrayDeParametros['tipo'],$ArrayDeParametros['cantidad'],$ArrayDeParametros['foto']);
        return $response->withJson($pizza->Guardar());
    }
    public function Modificar($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $pizzaBuscado = $ArrayDeParametros['pizzaBuscado'];
        $pizza = new pizza($ArrayDeParametros['sabor'],$ArrayDeParametros['tipo'],$ArrayDeParametros['cantidad'],$ArrayDeParametros['foto']);
        return $response->withJson(pizza::Modificar($pizza,$pizzaBuscado));
    }
    public function Baja($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        return $response->withJson(pizza::Despedir($ArrayDeParametros['sabor'],$ArrayDeParametros['tipo'],$ArrayDeParametros['cantidad'],$ArrayDeParametros['foto']));
    }
    public function traerPizzas($request, $response, $args){
        return $response->withJson(pizza::TraerTodospizzas());
    }
    /*public function traerUsuarioPorUsuario($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        return $response->withJson(usuario::TraerUsuarioPorUsuario($ArrayDeParametros['usuario']));
    }*/
    /*public function RecuperarPassword($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        return $response->withJson(usuario::RecuperarPassword($ArrayDeParametros['mail']));
    }*/
}
?>