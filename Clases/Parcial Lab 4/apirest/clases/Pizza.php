<?php
/**
 * 
 */
include_once("AccesoDatos.php");
class pizza
{
    public $id;
    public $sabor;
    public $tipo;
    public $cantidad;
    //public $Pizza;
    //public $password;
    public $foto;
    //public $habilitado;

    function __construct($sabor = null,$tipo = null,$cantidad = null,$foto = null,$id = null)
    {
        if ($sabor != null && $tipo != null && $cantidad != null ) {
            $this->sabor = $sabor;
            $this->tipo = $tipo;
            $this->cantidad = $cantidad;
        }
		if($id != null){
			$this->id = $id;
        }
        if($foto != null){
			$this->foto = $foto;
        }

    }
    public function Guardar(){
        $itsOk = false;
        $existePizza = $this->VerificarPizza();
        if ($existePizza['resultado'] == false) {
            $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO `pizza`(`sabor`, `cantidad`, `tipo`, `foto`)VALUES (:sabor,:cantidad,:tipo,:foto)");
            $consulta->bindValue(':sabor', $this->sabor, PDO::PARAM_STR);
            $consulta->bindValue(':cantidad', $this->cantidad, PDO::PARAM_INT);
            $consulta->bindValue(':tipo', $this->tipo, PDO::PARAM_STR);
            $consulta->bindValue(':foto', $this->foto, PDO::PARAM_STR);
            $itsOk = $consulta->execute();
        }
        if ($itsOk) {
            $ret['respuesta'] = "La Pizza Se Guardo Exitosamente";
        }
        else {
            $ret['respuesta'] = "ERROR, Pizza Ya Existente";
        }
        return $ret;
		
    }
    public static function Modificar($nuevaPizza,$Pizza){
        $itsOk = false;
        $Pizza = Pizza::TraerPizzaPorPizza($Pizza);
        if ($Pizza != false) {
            $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		    $consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `pizza` SET `sabor`=:sabor,`tipo`=:tipo,`cantidad`=:cantidad,`foto`=:foto/*,`Habilitado`=:habilitado*/ WHERE Pizza = :PizzaBuscado");
		    $consulta->bindValue(':sabor', $nuevaPizza->sabor, PDO::PARAM_STR);
            $consulta->bindValue(':tipo', $nuevaPizza->tipo, PDO::PARAM_STR);
            $consulta->bindValue(':cantidad', $nuevaPizza->cantidad, PDO::PARAM_INT);
            $consulta->bindValue(':PizzaBuscado', $Pizza, PDO::PARAM_STR);
            $consulta->bindValue(':foto', $this->foto, PDO::PARAM_STR);            
            //$consulta->bindValue(':habilitado', $nuevaPizza->habilitado, PDO::PARAM_INT);
            $itsOk = $consulta->execute();
        }
        if ($itsOk) {
            $ret['respuesta'] = "La Pizza Se Modifico Exitosamente";
        }
        else {
            $ret['respuesta'] = "ERROR, Pizza Inexistente";
        }
        return $ret;
		
    }
    public static function TraerTodosPizzas(){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT `id` AS id, `sabor` AS sabor, `tipo` AS tipo, `cantidad` AS cantidad, `foto` /*`Habilitado` AS habilitado*/ FROM pizza WHERE 1");
		$consulta->execute();
		return $consulta->fetchAll(PDO::FETCH_CLASS, 'pizza');
    }
    public static function TraerPizzaPorPizza($Pizza){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT `id` AS id, `sabor` AS sabor, `tipo` AS tipo, `cantidad` AS cantidad, `foto` /*`Habilitado` AS habilitado*/ FROM Pizza WHERE Pizza = :Pizza");
        $consulta->bindValue(':pizza', $Pizza, PDO::PARAM_STR);
		$consulta->execute();
        $consulta->setFetchMode(PDO::FETCH_CLASS, 'pizza');
		$PizzaBuscado= $consulta->fetch();
		return $PizzaBuscado;
    }
    public function VerificarPizza(){
        $objetoAccesoDatos = AccesoDatos::DameUnObjetoAcceso();
        $consulta = $objetoAccesoDatos->RetornarConsulta("SELECT * FROM Pizza WHERE sabor = :sabor AND tipo = :tipo AND cantidad = :cantidad AND foto = :foto");
        $consulta->bindValue(':sabor', $this->sabor, PDO::PARAM_STR);
        $consulta->bindValue(':cantidad', $this->cantidad, PDO::PARAM_INT);
        $consulta->bindValue(':tipo', $this->tipo, PDO::PARAM_STR);
        $consulta->bindValue(':foto', $this->foto, PDO::PARAM_STR);
        $consulta->setFetchMode(PDO::FETCH_CLASS, "pizza");
        if ($consulta->execute() && $ret['Pizza'] = $consulta->fetch()) {
            $ret['resultado'] = true;
            
        }
        else {
            $ret['resultado'] = false;
        }
        return $ret;
    }
    /*public static function LogInVerificar($Pizza,$password){
        $objetoAccesoDatos = AccesoDatos::DameUnObjetoAcceso();
        $consulta = $objetoAccesoDatos->RetornarConsulta("SELECT `ID` AS id, `sabor` AS sabor, `tipo` AS tipo, `cantidad` AS cantidad,`Pizza` AS Pizza, `password` AS password, `foto`   FROM Pizza WHERE Pizza = :Pizza AND password = :password");
        $consulta->bindValue(':Pizza', $Pizza, PDO::PARAM_STR);
        $consulta->bindValue(':password', $password, PDO::PARAM_STR);
        $consulta->setFetchMode(PDO::FETCH_CLASS, "Pizza");
        if ($consulta->execute() && $ret['Pizza'] = $consulta->fetch()) {
            $ret['logIn'] = true;
        }
        else {
            $ret['logIn'] = false;
        }
        return $ret;
    }*/
    /*public function ActualizarEstado(){
        $ret;
        $habilitar = !($this->habilitado);
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `Pizza` SET habilitado = :habilitado WHERE Pizza = :Pizza");
        $consulta->bindValue(':habilitado', $habilitar, PDO::PARAM_INT);
        $consulta->bindValue(':Pizza', $this->Pizza, PDO::PARAM_INT);
        $ret['consulta'] = $consulta->execute();
        if ($habilitar) {
            $ret['resultado'] = "habilitado";
        }
        else{
            $ret['resultado'] = "Activo";
        }
        return $ret;
    }
    public static function Deshabilitar($Pizza){
        $ret;
        $habilitar = 0;
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `Pizza` SET habilitado = :habilitado WHERE Pizza = :Pizza");
        $consulta->bindValue(':habilitado', $habilitar, PDO::PARAM_INT);
        $consulta->bindValue(':Pizza', $Pizza, PDO::PARAM_INT);
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
		$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `Pizza` SET `Password` = :password WHERE mail = :mail");
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
    public static function Despedir($sabor,$tipo,$cantidad,$foto){
        $objetoAccesoDato = AccesoDatos::DameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM `Pizza` WHERE sabor = :sabor AND cantidad = :cantidad AND tipo = :tipo AND foto = :foto");
        $consulta->bindValue(':sabor', $sabor, PDO::PARAM_STR);
        $consulta->bindValue(':cantidad', $cantidad, PDO::PARAM_INT);
        $consulta->bindValue(':tipo', $tipo, PDO::PARAM_STR);
        $consulta->bindValue(':foto', $foto, PDO::PARAM_STR);
        if($consulta->execute()&& $consulta->rowCount() == 0)
        {
            $ret['resultado'] = "Pizza Inexistente";
        }
        else{
            $ret['resultado'] = "Borrada!";
        }
		return $ret;
    }





}

?>