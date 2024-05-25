<?php
session_start();
include('banco.php');
include('class.php');
$db = new banco;

if (isset($_SESSION['username'])) {

    if (isset($_POST['salva_usuario'])) {
        $inputData = [
            'nome' => mysqli_real_escape_string($db->conn, $_POST['nome']),
            'email' => mysqli_real_escape_string($db->conn, $_POST['email']),
            'senha' => mysqli_real_escape_string($db->conn, $_POST['senha']),
            'confirma_senha' => mysqli_real_escape_string($db->conn, $_POST['senha_confirma']),
        ];

        $senha = trim($_POST['senha']);
        $senha_confirma = trim($_POST['senha_confirma']);

        if ($senha != $senha_confirma) {
            $_SESSION['message'] = "Senhas diferentes";
            header("location: register.php");
            exit; 
        } elseif (empty($senha)) {
            $_SESSION['message'] = "Senha vazia";
            header("location: register.php");
            exit; 
        }

        $usuario = new usuario;
        $email_existente = $usuario->verificaEmail($inputData['email']);

        if ($email_existente) {
            $_SESSION['message'] = "Email já existe";
            header("location: register.php");
            exit; 
        } else {
            $result = $usuario->criar($inputData);

            if ($result) {
                $_SESSION['message'] = "Cadastro ok - bem vindo " . $_POST['nome'];
                header("location: home.php?c=1");
                exit;
            } else {
                $_SESSION['message'] = "Erro ao cadastrar usuário";
                header("location: register.php?c=1");
                exit;
            }
        }
    } else {
        $_SESSION['message'] = "Você está tentando acessar direto =)";
        exit; 
    }
} else {

}
?>
