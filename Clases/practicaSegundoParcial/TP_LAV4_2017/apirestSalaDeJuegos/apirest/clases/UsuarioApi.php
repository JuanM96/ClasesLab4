<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require_once 'Usuario.php';
//require_once 'LogEmpleado.php';
require_once 'AutentificadorJWT.php';
require_once '../composer/vendor/autoload.php';
class UsuarioApi
{
    public function AltaUsuario($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $Usuario = new usuario($ArrayDeParametros['nombre'],$ArrayDeParametros['apellido'],$ArrayDeParametros['email'],$ArrayDeParametros['usuario'],$ArrayDeParametros['password']);
        return $response->withJson($Usuario->Guardar());
    }
    public function ModificarUsuario($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $usuarioBuscado = $ArrayDeParametros['usuarioBuscado'];
        $Usuario = new usuario($ArrayDeParametros['nombre'],$ArrayDeParametros['apellido'],$ArrayDeParametros['email'],$ArrayDeParametros['usuario'],$ArrayDeParametros['password']);
        return $response->withJson(usuario::Modificar($Usuario,$usuarioBuscado));
    }
    public function BajaUsuario($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $usuario = $ArrayDeParametros['usuario'];
        return $response->withJson(usuario::Deshabilitar($usuario));
    }
    public function ActualizarEstadoUsuario($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $usuario = intval($ArrayDeParametros['usuario']);
        $Usuario = usuario::TraerUsuarioPorusuario($usuario);
        return $response->withJson($Usuario->ActualizarEstado());
    }
    public function LogIn($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        $usuario = $ArrayDeParametros['usuario'];
        $password = $ArrayDeParametros['password'];
        $ret = usuario::LogInVerificar($usuario,$password);
        if ($ret['logIn']){
            $Usuario = usuario::TraerUsuarioPorUsuario($usuario);
            $ret['token'] = autentificadorJWT::CrearToken(array(
                'usuario'=> $Usuario->usuario,
                //'admin' => $Usuario->admin,
            ));
            //$logEmpleado = new logEmpleado($usuario);
            //$logEmpleado->Guardar();
        }
		return $response->withJson($ret);
    }
    public function traerUsuarios($request, $response, $args){
        return $response->withJson(usuario::TraerTodosUsuarios());
    }
    public function traerUsuarioPorUsuario($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        return $response->withJson(usuario::TraerUsuarioPorUsuario($ArrayDeParametros['usuario']));
    }
    public function RecuperarPassword($request, $response, $args){
        $ArrayDeParametros = $request->getParsedBody();
        return $response->withJson(usuario::RecuperarPassword($ArrayDeParametros['email']));
    }
}
?>