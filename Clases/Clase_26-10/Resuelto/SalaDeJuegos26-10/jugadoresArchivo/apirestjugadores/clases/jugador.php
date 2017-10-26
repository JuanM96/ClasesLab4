<?php
class jugador
{
	

 	
     public function TraerTodos($request, $response, $args) {
     	$tamaño = filesize("usuarios.json");
      	$archivo=fopen("usuarios.json", 'r');
      	 $objeto=fread($archivo,$tamaño);
      	 $objeto=json_decode($objeto);
	    $newResponse = $response->withJson($objeto, 200);  
	    return $newResponse;
      
    }
     
	
}