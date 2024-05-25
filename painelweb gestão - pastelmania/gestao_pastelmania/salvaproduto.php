<?php
session_start();
include('banco.php');
include('class.php');
$db = new banco;

if (isset($_SESSION['username'])) {

    if (empty($_POST['nome']) || empty($_POST['preco']) || empty($_POST['quantidade'])) {
        $_SESSION['message'] = "Preencha os campos!";
        header("location: registerprod.php");
        exit(0);
    }

    $foto = "";
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] == 0) {
        $f_caminho = $_FILES['foto']['tmp_name'];
        $foto = file_get_contents($f_caminho);
    }

    $nome = mysqli_real_escape_string($db->conn, $_POST['nome']);
    $preco = mysqli_real_escape_string($db->conn, $_POST['preco']);
    $foto = mysqli_real_escape_string($db->conn, $_POST['foto']);
    $quantidade = mysqli_real_escape_string($db->conn, $_POST['quantidade']);

    $produto = new produto;
    $retorno = $produto->cadastrar([
        'nome' => $nome,
        'preco' => $preco,
        'foto' => $foto,
        'quantidade' => $quantidade,
    ]);

    if ($retorno) {
        $_SESSION['message'] = "Produto " . $nome . " cadastrado com sucesso!";
        header("location: home.php?a=1");
        exit(0);
    } else {
        $_SESSION['message'] = "Produto não cadastrado!";
        header("location: registerprod.php");
        exit(0);
    }

} else {
    $_SESSION['message'] = "Você está tentando acessar diretamente.";
    header("location: registerprod.php");
    exit(0);
}
?>
