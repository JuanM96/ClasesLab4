<?php
class Empleado
{
    public $nombre;
    public $legajo;
    public $tipo;
    public $edad;
    public $id;
    public $password;
    public $foto;
    
    function __construct($nombre = null,$password = null,$edad = null,$legajo = null,$tipo = null,$foto = null,$id = null)
    {
        if ($nombre != null && $password != null && $edad != null && $tipo != null && $legajo != null && $foto != null ) {
            $this->nombre = $nombre;
            $this->password = $password;
            $this->edad = $edad;
            $this->tipo = $tipo;
            $this->legajo = $legajo;
            $this->foto = $foto;
        }
        if ($id != null) {
            $this->id = $id;
        }
        
    }
    public function Guardar(){
        $itsOk = false;
        $existenombre = $this->VerificarEmpleado();
        if ($existenombre['resultado'] == false) {
            $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO `empleado`(`nombre`, `password`, `tipo`, `legajo`, `edad`, `foto`)VALUES (:nombre,:password,:tipo,:legajo,:edad,:foto)");
            $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
            $consulta->bindValue(':password', $this->password, PDO::PARAM_STR);
            $consulta->bindValue(':tipo', $this->tipo, PDO::PARAM_STR);
            $consulta->bindValue(':legajo', $this->legajo, PDO::PARAM_INT);
            $consulta->bindValue(':edad', $this->edad, PDO::PARAM_INT);
            $consulta->bindValue(':foto', $this->foto, PDO::PARAM_STR);
            $itsOk = $consulta->execute();
        }
        if ($itsOk) {
            $ret['respuesta'] = "Resgistrado Exitosamente";
        }
        else {
            $ret['respuesta'] = "ERROR,Empleado ya registrado";
        }
        return $ret;
    }
    public function VerificarEmpleado(){
        $objetoAccesoDatos = AccesoDatos::DameUnObjetoAcceso();
        $consulta = $objetoAccesoDatos->RetornarConsulta("SELECT * FROM empleado WHERE nombre = :nombre");
        $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
        $consulta->setFetchMode(PDO::FETCH_CLASS, "Empleado");
        if ($consulta->execute() && $ret['empleado'] = $consulta->fetch()) {
            $ret['resultado'] = true;
        }
        else {
            $ret['resultado'] = false;
        }
        return $ret;
    }
    public static function LogInVerificar($nombre,$password,$tipo){
        $objetoAccesoDatos = AccesoDatos::DameUnObjetoAcceso();
        $consulta = $objetoAccesoDatos->RetornarConsulta("SELECT * FROM empleado WHERE nombre = :nombre AND password = :password AND tipo = :tipo");
        $consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
        $consulta->bindValue(':password', $password, PDO::PARAM_STR);
        $consulta->bindValue(':tipo', $tipo, PDO::PARAM_STR);
        $consulta->setFetchMode(PDO::FETCH_CLASS, "Empleado");
        if ($consulta->execute() && $ret['empleado'] = $consulta->fetch()) {
            $ret['logIn'] = true;
        }
        else {
            $ret['logIn'] = false;
        }
        return $ret;
    }
    public static function TraerTodosEmpleados(){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM empleado WHERE 1");
		$consulta->execute();
		return $consulta->fetchAll(PDO::FETCH_CLASS, 'Empleado');
    }
    public static function TraerEmpleadoPorNombre($Nombre){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM empleado WHERE nombre = :Nombre");
        $consulta->bindValue(':Nombre', $Nombre, PDO::PARAM_STR);
		$consulta->execute();
        $consulta->setFetchMode(PDO::FETCH_CLASS, 'Empleado');
		$NombreBuscado= $consulta->fetch();
		return $NombreBuscado;
    }
    public static function Despedir($id){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM `empleado` WHERE id = :id");
        $consulta->bindValue(':id', $id, PDO::PARAM_INT);
        if($consulta->execute()&& $consulta->rowCount() == 0)
        {
            $ret['resultado'] = "Empleado Inexistente";
        }
        else{
            $ret['resultado'] = "Despedido!";
        }
		return $ret;
    }
}

?>