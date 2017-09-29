<?php
/**
 * 
 */
include_once("AccesoDatos.php");
class usuario
{
    public $id;
    public $nombre;
    public $sexo;
    public $mail;
    public $usuario;
    public $password;
    public $foto;
    //public $habilitado;

    function __construct($nom = null,$sexo = null,$mail = null,$usuario = null,$pass = null,$habilitado = null,$foto = null,$id = null)
    {
        if ($nom != null && $sexo != null && $mail != null && $usuario != null && $pass != null) {
            $this->nombre = $nom;
            $this->sexo = $sexo;
            $this->mail = $mail;
            $this->usuario = $usuario;
            $this->password = $pass;
        }
		/*if($habilitado != null){
            $this->habilitado = $habilitado;
		}*/
		if($id != null){
			$this->id = $id;
        }
        if($foto != null){
			$this->foto = $foto;
        }
        elseif($foto == null){
            $this->foto = "http://localhost:8080/apirest/fotos/pordefecto.jpg";
        }

    }
    public function Guardar(){
        $itsOk = false;
        $existeUsuario = $this->VerificarUsuario();
        if ($existeUsuario['resultado'] == false) {
            $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO `usuario`(`nombre`, `mail`, `sexo`, `usuario`, `password`, `foto`)VALUES (:nombre,:mail,:sexo,:usuario,:password,:foto)");
            $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
            $consulta->bindValue(':mail', $this->mail, PDO::PARAM_STR);
            $consulta->bindValue(':sexo', $this->sexo, PDO::PARAM_STR);
            $consulta->bindValue(':usuario', $this->usuario, PDO::PARAM_STR);
            $consulta->bindValue(':password', $this->password, PDO::PARAM_STR);
            $consulta->bindValue(':foto', $this->foto, PDO::PARAM_STR);
            $itsOk = $consulta->execute();
        }
        if ($itsOk) {
            $ret['respuesta'] = "El Usuario Se Guardo Exitosamente";
        }
        else {
            $ret['respuesta'] = "ERROR, Usuario Ya Existente";
        }
        return $ret;
		
    }
    public static function Modificar($nuevoUsuario,$usuario){
        $itsOk = false;
        $Usuario = usuario::TraerUsuarioPorUsuario($usuario);
        if ($Usuario != false) {
            $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		    $consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `usuario` SET `nombre`=:nombre,`sexo`=:sexo,`mail`=:mail,`usuario`=:usuario,`password`=:password,`foto`=:foto/*,`Habilitado`=:habilitado*/ WHERE usuario = :usuarioBuscado");
		    $consulta->bindValue(':nombre', $nuevoUsuario->nombre, PDO::PARAM_STR);
            $consulta->bindValue(':sexo', $nuevoUsuario->sexo, PDO::PARAM_STR);
            $consulta->bindValue(':mail', $nuevoUsuario->mail, PDO::PARAM_STR);
            $consulta->bindValue(':usuario', $nuevoUsuario->usuario, PDO::PARAM_STR);
            $consulta->bindValue(':usuarioBuscado', $usuario, PDO::PARAM_STR);
            $consulta->bindValue(':password', $nuevoUsuario->password, PDO::PARAM_STR);
            $consulta->bindValue(':foto', $this->foto, PDO::PARAM_STR);            
            //$consulta->bindValue(':habilitado', $nuevoUsuario->habilitado, PDO::PARAM_INT);
            $itsOk = $consulta->execute();
        }
        if ($itsOk) {
            $ret['respuesta'] = "El Usuario Se Modifico Exitosamente";
        }
        else {
            $ret['respuesta'] = "ERROR, Usuario Inexistente";
        }
        return $ret;
		
    }
    public static function TraerTodosUsuarios(){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT `id` AS id, `nombre` AS nombre, `sexo` AS sexo, `mail` AS mail, `usuario` AS usuario, `password` AS password, `foto` /*`Habilitado` AS habilitado*/ FROM usuario WHERE 1");
		$consulta->execute();
		return $consulta->fetchAll(PDO::FETCH_CLASS, 'usuario');
    }
    public static function TraerUsuarioPorUsuario($usuario){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT `id` AS id, `nombre` AS nombre, `sexo` AS sexo, `mail` AS mail, `usuario` AS usuario, `password` AS password, `foto` /*`Habilitado` AS habilitado*/ FROM usuario WHERE usuario = :usuario");
        $consulta->bindValue(':usuario', $usuario, PDO::PARAM_STR);
		$consulta->execute();
        $consulta->setFetchMode(PDO::FETCH_CLASS, 'usuario');
		$UsuarioBuscado= $consulta->fetch();
		return $UsuarioBuscado;
    }
    public function VerificarUsuario(){
        $objetoAccesoDatos = AccesoDatos::DameUnObjetoAcceso();
        $consulta = $objetoAccesoDatos->RetornarConsulta("SELECT * FROM usuario WHERE usuario = :usuario");
        $consulta->bindValue(':usuario', $this->usuario, PDO::PARAM_STR);
        $consulta->setFetchMode(PDO::FETCH_CLASS, "usuario");
        if ($consulta->execute() && $ret['usuario'] = $consulta->fetch()) {
            $ret['resultado'] = true;
            
        }
        else {
            $ret['resultado'] = false;
        }
        return $ret;
    }
    public static function LogInVerificar($usuario,$password){
        $objetoAccesoDatos = AccesoDatos::DameUnObjetoAcceso();
        $consulta = $objetoAccesoDatos->RetornarConsulta("SELECT `ID` AS id, `nombre` AS nombre, `sexo` AS sexo, `mail` AS mail,`usuario` AS usuario, `password` AS password, `foto` /*`Habilitado` AS habilitado*/  FROM usuario WHERE usuario = :usuario AND password = :password/* AND habilitado = 1*/");
        $consulta->bindValue(':usuario', $usuario, PDO::PARAM_STR);
        $consulta->bindValue(':password', $password, PDO::PARAM_STR);
        $consulta->setFetchMode(PDO::FETCH_CLASS, "usuario");
        if ($consulta->execute() && $ret['usuario'] = $consulta->fetch()) {
            $ret['logIn'] = true;
        }
        else {
            $ret['logIn'] = false;
        }
        return $ret;
    }
    /*public function ActualizarEstado(){
        $ret;
        $habilitar = !($this->habilitado);
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `usuario` SET habilitado = :habilitado WHERE usuario = :usuario");
        $consulta->bindValue(':habilitado', $habilitar, PDO::PARAM_INT);
        $consulta->bindValue(':usuario', $this->usuario, PDO::PARAM_INT);
        $ret['consulta'] = $consulta->execute();
        if ($habilitar) {
            $ret['resultado'] = "habilitado";
        }
        else{
            $ret['resultado'] = "Activo";
        }
        return $ret;
    }
    public static function Deshabilitar($usuario){
        $ret;
        $habilitar = 0;
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `usuario` SET habilitado = :habilitado WHERE usuario = :usuario");
        $consulta->bindValue(':habilitado', $habilitar, PDO::PARAM_INT);
        $consulta->bindValue(':usuario', $usuario, PDO::PARAM_INT);
        $ret['consulta'] = $consulta->execute();
        if ($ret['consulta']) {
            $ret['resultado'] = "Deshabilitado";
        }
        else{
            $ret['resultado'] = "ERROR";
        }
        return $ret;
    }*/
    /*public static function RecuperarPassword($mail){
        $passwordBase = "123456"
        $ret;
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `usuario` SET `Password` = :password WHERE mail = :mail");
        $consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
        $consulta->bindValue(':password', $passwordBase, PDO::PARAM_STR);
		$ret['resultado'] = $consulta->execute();
        if($ret['resultado']){
            $ret['password'] = $passwordBase;
            $ret['mensaje'] = "Use esta password para logear y cambiar a su password correspondiente";
        }
        else{
            $ret['error'] = "Error mail desconocido";
        }
    }*/
    // public static function Despedir($usuario){
    //     $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
    //     $consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM `Usuario` WHERE usuario = :usuario");
    //     $consulta->bindValue(':usuario', $usuario, PDO::PARAM_BOOL);
    //     if($consulta->execute()&& $consulta->rowCount() == 0)
    //     {
    //         $ret['resultado'] = "Usuario Inexistente";
    //     }
    //     else{
    //         $ret['resultado'] = "Despedido!";
    //     }
	// 	return $ret;
    // }





}

?>