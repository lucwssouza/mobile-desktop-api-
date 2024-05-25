<?php
require '../banco.php';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$sql = "SELECT * FROM produtos where apagado is NULL or apagado = ''";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response = array();

    while($row = $result->fetch_assoc()) {
       // $response[] = $row;
		$row['idprodutos'] = intval($row['idprodutos']);
        // Adicionar os dados do usuário ao array
        $response[] = $row;		
    }

    //header('Content-Type: application/json');
    //echo json_encode($usuarios);
	header('Content-Type: application/json');
	echo  json_encode($response, JSON_PRETTY_PRINT);
} else {
    echo "Nenhum produto encontrado.";
}

$conn->close();
?>
