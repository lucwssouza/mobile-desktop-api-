<?php
session_start();
include('banco.php');
include('class.php');
$db = new banco;

if (isset($_SESSION['username'])) {
    $id = $_GET['idusuario'];
    $acao = 1;

    $usuario = new usuario;
    $comando = $usuario->excluir_usuario($id, $acao);

    if ($comando > 0) {
        $texto = "<span style='color:red'> ".$_GET['nome']."</span>";
        $_SESSION['message'] = "Produto retirado: ".$texto;
        header("Location: busca.php?a=2");
        exit(0);
    } else {
        $_SESSION['message'] = "Erro ao excluir o produto.";
        header("Location: busca.php");
        exit(0);
    }
} else {
    header("location: busca.php");
}
?>
