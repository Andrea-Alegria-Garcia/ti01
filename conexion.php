<?php
class Conexion{
    var $conn;

    function conectar(){
        $this->conn=mysql_connect("localhost","root","root")
        or die("Conexion fallida".mysql_error());

        mysql_select_db($this->conn,"Mysql")
        or die("No se puedo conectar a la base de datos");

        return $this->conn;
    }

    function buscarUsuario($user,$pass){
        $this->conectar();

        if(!$this->conn{
            exit("<H1>Error en la conexion...</H1>");
        }
        else{
            $consulta="SELECT * FROM usuario WHERE usuario=".$user."AND pass=".$pass."";

            $result=mysqli_query($this->conn,$consulta);

            $num=mysql_num_rows($result);

            return $num;
        }
    }
    function registrarUsuario($consulta){
        $this->conectar();

        if(!$this->conn){
            exit("<H1>Error en la conexion...</H1>");
        }
        else{
            $result=mysql_query($this->conn,$consulta);
            return $result;
        }
    }
}
?>