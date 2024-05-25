<?php 
session_start();
include ('class.php');
include ('banco.php');
// echo "<pre>";
// print_r($_POST);
// echo "</pre>";

$db = new banco;
//if (isset($_SESSION['username'])) {

if(isset($_POST['email'])){
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $teste = [  
    'email' => mysqli_real_escape_string($db->conn, $email),
    'senha' => mysqli_real_escape_string($db->conn, $senha)];

    $validar =  new usuario;
    $resultado = $validar->validar($teste);
    // header('location: home.php');





    
   if($resultado == 1){
     $_SESSION['message'] = "Bem vindo(a): &nbsp;".$email;
     
     $_SESSION['username'] = $email;

 header('location: home.php');
}else{
     $_SESSION['message'] = "Login incorreto";
 header('location: index.php');
}



}else{
    $_SESSION['message'] = "deu errado";
    //  header('location: index.php');
}
//}else{
//     header("location: index.php");
//}

?>