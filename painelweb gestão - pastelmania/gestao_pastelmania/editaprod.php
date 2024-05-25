<?php
print_r($_POST);
session_start();
include('banco.php');
include('class.php');
$db = new banco;


// if (isset($_SESSION['username'])) {

    if (isset($_POST['edit_prod'])) {
        $inputData = [
            'idprodutos' => mysqli_real_escape_string($db->conn, $_POST['id']),
            'nome' => mysqli_real_escape_string($db->conn, $_POST['nome']),
            'preco' => mysqli_real_escape_string($db->conn, $_POST['preco']),
            'quantidade' => mysqli_real_escape_string($db->conn, $_POST['quantidade']),
        ];

        $acao = 1;

        $produto = new produto;

        $comando = $produto->editar_produto($inputData, $acao);

        if ($comando) {
            $texto = "<span style='color:red'>" . $_POST['nome'] . "</span>";
            $_SESSION['message'] = "Produto atualizado: " . $texto;
            header('location: buscap.php');
            exit();
        } else {
            $_SESSION['message'] = "Não foi possível atualizar o produto.";
            header('location: buscap.php');
            exit();
        }
    }
// } else {
//     header('location: buscap.php');
//     exit();
// }
?>
