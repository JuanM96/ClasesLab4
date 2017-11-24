<?php
require_once 'persona.php';
require_once 'AutentificadorJWT.php';
require_once './composer/vendor/autoload.php';
class personaApi
{
	public function Alta($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $Persona = new Persona($ArrayDeParametros['nombre'],$ArrayDeParametros['apellido'],$ArrayDeParametros['sexo'],$ArrayDeParametros['direccion'],$ArrayDeParametros['latitud'],$ArrayDeParametros['longitud']);
        return $response->withJson($Persona->Guardar());
    }
    public function Modificar($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $nombreBuscado = $ArrayDeParametros['nombreBuscado'];
        $Persona = new Persona($ArrayDeParametros['nombre'],$ArrayDeParametros['apellido'],$ArrayDeParametros['sexo'],$ArrayDeParametros['direccion'],$ArrayDeParametros['latitud'],$ArrayDeParametros['longitud']);
        return $response->withJson($Persona->Modificar($Persona,$nombreBuscado));
    }
	public function traerPersonas($request, $response, $args){
        return $response->withJson(Persona::TraerTodasPersonas());
    }
 	

     
	
}