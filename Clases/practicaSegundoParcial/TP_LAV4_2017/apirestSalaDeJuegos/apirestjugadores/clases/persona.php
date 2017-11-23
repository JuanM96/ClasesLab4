<?php
class Persona
{
    public $nombre;
    public $id;
    public $apellido;
    public $sexo;
    public $direccion;
    public $latitud;
    public $longitud;
    function __construct($nombre = null,$apellido = null,$sexo = null,$direccion = null,$latitud = null,$id = null)
    {
        if ($nombre != null && $apellido != null && $sexo != null ) {
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->sexo = $sexo;
            $this->direccion = $direccion;
            $this->latitud = $latitud;
            $this->longitud = $longitud;
        }
        if ($id != null) {
            $this->id = $id;
        }
    }
    public function Guardar(){
        $itsOk = false;
        //$existeNombre = $this->VerificarNombre();
        //if ($existeNombre['resultado'] == false) {
            $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO `persona`(`nombre`, `apellido`, `sexo`, `direccion`, `latitud`, `longitud`)VALUES (:nombre,:apellido,:sexo,:direccion,:latitud,:longitud)");
            $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
            $consulta->bindValue(':apellido', $this->apellido, PDO::PARAM_STR);
            $consulta->bindValue(':sexo', $this->sexo, PDO::PARAM_STR);
            $consulta->bindValue(':direccion', $this->direccion, PDO::PARAM_STR);
            $consulta->bindValue(':latitud', $this->latitud, PDO::PARAM_STR);
            $consulta->bindValue(':longitud', $this->longitud, PDO::PARAM_STR);
            $itsOk = $consulta->execute();
        //}
        if ($itsOk) {
            $ret['respuesta'] = "Resgistrado Exitosamente";
        }
        else {
            $ret['respuesta'] = "ERROR";
        }
        return $ret;
    }
    public static function Modificar($nuevaPersona,$nombre){
        $itsOk = false;
        //$Usuario = usuario::TraerUsuarioPorUsuario($usuario);
        //if ($Usuario != false) {
            $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		    $consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `persona` SET `nombre`=:nombre,`apellido`=:apellido,`sexo`=:sexo,`direccion`=:direccion,`latitud`=:latitud WHERE nombre = :nombreBuscado");
		    $consulta->bindValue(':nombre', $nuevaPersona->nombre, PDO::PARAM_STR);
            $consulta->bindValue(':apellido', $nuevaPersona->apellido, PDO::PARAM_STR);
            $consulta->bindValue(':sexo', $nuevaPersona->sexo, PDO::PARAM_STR);
            $consulta->bindValue(':direccion', $nuevaPersona->direccion, PDO::PARAM_STR);
            $consulta->bindValue(':nombreBuscado', $nombre, PDO::PARAM_STR);
            $consulta->bindValue(':latitud', $nuevaPersona->latitud, PDO::PARAM_STR);
            $itsOk = $consulta->execute();
        //}
        if ($itsOk) {
            $ret['respuesta'] = "El Usuario Se Modifico Exitosamente";
        }
        else {
            $ret['respuesta'] = "ERROR";
        }
        return $ret;
		
    }
    /*public function VerificarNombre(){
        $objetoAccesoDatos = AccesoDatos::DameUnObjetoAcceso();
        $consulta = $objetoAccesoDatos->RetornarConsulta("SELECT * FROM persona WHERE nombre = :nombre");
        $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
        $consulta->setFetchMode(PDO::FETCH_CLASS, "Persona");
        if ($consulta->execute() && $ret['Persona'] = $consulta->fetch()) {
            $ret['resultado'] = true;
        }
        else {
            $ret['resultado'] = false;
        }
        return $ret;
    }*/
    public static function TraerTodasPersonas(){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM persona WHERE 1");
		$consulta->execute();
		return $consulta->fetchAll(PDO::FETCH_CLASS, 'Persona');
    }
    public static function TraerPersonaPornombre($nombre){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM persona WHERE nombre = :nombre");
        $consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
		$consulta->execute();
        $consulta->setFetchMode(PDO::FETCH_CLASS, 'Persona');
		$nombreBuscado= $consulta->fetch();
		return $nombreBuscado;
    }
}

?>