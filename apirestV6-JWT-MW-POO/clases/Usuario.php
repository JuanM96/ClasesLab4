<?php
/**
 * 
 */
include_once("AccesoDatos.php");
class usuario
{
    public $id;
    public $nombre;
    public $apellido;
    public $email;
    public $usuario;
    public $password;
    public $habilitado;

    function __construct($nom = null,$apellido = null,$email = null,$usuario = null,$pass = null,$habilitado = null,$id = null)
    {
        if ($nom != null && $apellido != null && $email != null && $usuario != null && $pass != null) {
            $this->nombre = $nom;
            $this->apellido = $apellido;
            $this->email = $email;
            $this->$usuario = $usuario;
            $this->password = $pass;
        }
		if($habilitado != null){
            $this->habilitado = $habilitado;
		}
		if($id != null){
			$this->id = $id;
		}

    }
    public function Guardar(){
        $itsOk = false;
        $existeUsuario = $this->VerificarUsuario();
        if ($existeUsuario['resultado'] == false) {
            $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO `usuario`(`Nombre`, `Apellido`, `Email`, `Usuario`, `Password`)VALUES (:nombre,:apellido,:email,:usuario,:password)");
		    $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
            $consulta->bindValue(':apellido', $this->apellido, PDO::PARAM_STR);
            $consulta->bindValue(':email', $this->email, PDO::PARAM_STR);
            $consulta->bindValue(':usuario', $this->usuario, PDO::PARAM_STR);
            $consulta->bindValue(':password', $this->password, PDO::PARAM_STR);
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
    // public static function Modificar($nuevoUsuario,$dni){
    //     $itsOk = false;
    //     $Usuario = $this->TraerUsuarioPorDni($dni);
    //     if ($Usuario != false) {
    //         $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
	// 	    $consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `Usuario` SET `Nombre`=:nombre,`Apellido`=:apellido,`Email`=:email,`DNI`=:dni,`Password`=:password,`habilitado`=:habilitado,`Admin`=:admin WHERE dni = :dniBuscado");
	// 	    $consulta->bindValue(':nombre', $nuevoUsuario->nombre, PDO::PARAM_STR);
    //         $consulta->bindValue(':apellido', $nuevoUsuario->apellido, PDO::PARAM_STR);
    //         $consulta->bindValue(':email', $nuevoUsuario->email, PDO::PARAM_STR);
    //         $consulta->bindValue(':dni', $nuevoUsuario->dni, PDO::PARAM_STR);
    //         $consulta->bindValue(':dniBuscado', $dni, PDO::PARAM_STR);
    //         $consulta->bindValue(':password', $nuevoUsuario->password, PDO::PARAM_STR);
    //         $consulta->bindValue(':admin', $nuevoUsuario->admin, PDO::PARAM_STR);
    //         $consulta->bindValue(':habilitado', $nuevoUsuario->habilitado, PDO::PARAM_INT);
    //         $itsOk = $consulta->execute();
    //     }
    //     if ($itsOk) {
    //         $ret['respuesta'] = "El Empeado Se Modifico Exitosamente";
    //     }
    //     else {
    //         $ret['respuesta'] = "ERROR, Usuario Inexistente";
    //     }
    //     return $ret;
		
    // }
    public static function TraerTodosUsuarios(){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT `ID` AS id, `Nombre` AS nombre, `Apellido` AS apellido, `Email` AS email, `Usuario` AS usuario, `Password` AS password, `Habilitado` AS habilitado FROM usuario WHERE 1");
		$consulta->execute();
		return $consulta->fetchAll(PDO::FETCH_CLASS, 'usuario');
    }
    public static function TraerUsuarioPorUsuario($usuario){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT `ID` AS id, `Nombre` AS nombre, `Apellido` AS apellido, `Email` AS email, `Usuario` AS usuario, `Password` AS password, `Habilitado` AS habilitado FROM usuario WHERE usuario = :usuario");
        $consulta->bindValue(':usuario', $this->usuario, PDO::PARAM_STR);
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
        $consulta = $objetoAccesoDatos->RetornarConsulta("SELECT `ID` AS id, `Nombre` AS nombre, `Apellido` AS apellido, `Email` AS email,`Usuario` AS usuario, `Password` AS password, `Habilitado` AS habilitado  FROM usuario WHERE usuario = :usuario AND Password = :password AND habilitado = 0");
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
    public function ActualizarEstado(){
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
    // public static function Despedir($dni){
    //     $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
    //     $consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM `Usuario` WHERE dni = :dni");
    //     $consulta->bindValue(':dni', $dni, PDO::PARAM_BOOL);
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