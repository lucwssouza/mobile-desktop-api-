<?php
session_start();
include('banco.php');
include('class.php');
$db = new banco;

if (isset($_SESSION['username'])) {
    $id = $_GET['idprodutos'];
    $acao = 1;

    $produto = new produto;
    $comando = $produto->excluir_produto($id, $acao);

    if ($comando > 0) {
        $texto = "<span style='color:red'> ".$_GET['nome']."</span>";
        $_SESSION['message'] = "Produto retirado: ".$texto;
        header("Location: buscap.php?a=2");
        exit(0);
    } else {
        $_SESSION['message'] = "Erro ao excluir o produto.";
        header("Location: buscap.php");
        exit(0);
    }
} else {
    header("location: buscap.php");
}
?>
