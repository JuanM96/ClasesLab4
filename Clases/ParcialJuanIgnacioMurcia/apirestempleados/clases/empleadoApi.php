<?php
require_once 'empleado.php';
require_once 'AutentificadorJWT.php';
require_once './composer/vendor/autoload.php';
class empleadoApi
{
	public function Alta($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $Empleado = new Empleado($ArrayDeParametros['nombre'],$ArrayDeParametros['password'],$ArrayDeParametros['tipo'],$ArrayDeParametros['legajo'],$ArrayDeParametros['edad'],$ArrayDeParametros['foto']);
        return $response->withJson($Empleado->Guardar());
    }
    public function Baja($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $id = $ArrayDeParametros['id'];
        return $response->withJson(Empleado::Despedir($id));
    }
    public function LogIn($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $usuario = $ArrayDeParametros['nombre'];
        $password = $ArrayDeParametros['password'];
        $tipo = $ArrayDeParametros['tipo'];
        $ret = Empleado::LogInVerificar($usuario,$password,$tipo);
        if ($ret['logIn']){
            $Empleado = Empleado::TraerEmpleadoPorNombre($usuario);
            $ret['token'] = autentificadorJWT::CrearToken(array(
                'nombre'=> $Empleado->nombre,
                'password'=> $Empleado->password,
                'tipo'=> $Empleado->tipo
                //'admin' => $Empleado->admin,
            ));
            //$logEmpleado = new logEmpleado($Empleado);
            //$logEmpleado->Guardar();
        }
		return $response->withJson($ret);
    }
	public function traerEmpleados($request, $response, $args){
        return $response->withJson(Empleado::TraerTodosEmpleados());
    }
 	

     
	
}