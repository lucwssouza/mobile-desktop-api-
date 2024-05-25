<?php
require '../banco.php';

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verificar se o email existe
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM usuario WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $count = $stmt->fetchColumn();

    if ($count > 0) {
        // A lógica para enviar o código de recuperação de senha aqui
        $response = ['success' => true, 'message' => 'Código enviado com sucesso. Verifique seu e-mail.'];
    } else {
        $response = ['success' => false, 'message' => 'Email não encontrado.'];
    }
    echo json_encode($response);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Erro ao conectar ao banco de dados: ' . $e->getMessage()]);
}
?>
