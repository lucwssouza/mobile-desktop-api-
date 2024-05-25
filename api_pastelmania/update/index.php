<?php
require '../banco.php';

header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
$token = $data['token'];
$email = $data['email'];
$senha = $data['senha'];

if (isset($token) && $token === 'Q!W@ee344%%R') {
    try {
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "UPDATE usuario SET senha = :senha WHERE email = :email";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':senha', $senha);  
        $stmt->bindParam(':email', $email);
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Senha atualizada com sucesso.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Erro ao atualizar a senha.']);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erro de conexão com o banco de dados: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Token inválido.']);
}
?>
