<?php
// print_r($_POST);
session_start();
include('banco.php');
include('class.php');
$db = new banco;


// if (isset($_SESSION['username'])) {

    if (isset($_POST['edit_prod'])) {
        $inputData = [
            'idusuario' => mysqli_real_escape_string($db->conn, $_POST['id']),
            'nome' => mysqli_real_escape_string($db->conn, $_POST['nome']),
            'email' => mysqli_real_escape_string($db->conn, $_POST['email']),
            'senha' => mysqli_real_escape_string($db->conn, $_POST['senha']),
        ];

        $acao = 1;

        $usuario = new usuario;

        $comando = $usuario->editar_usuario($inputData, $acao);

        if ($comando) {
            $texto = "<span style='color:red'>" . $_POST['nome'] . "</span>";
            $_SESSION['message'] = "Produto atualizado: " . $texto;
            header('location: busca.php');
            exit();
        } else {
            $_SESSION['message'] = "Não foi possível atualizar o produto.";
            header('location: busca.php');
            exit();
        }
    }
// } else {
//     header('location: buscap.php');
//     exit();
// }
?>
