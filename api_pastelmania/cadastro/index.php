<?php
date_default_timezone_set('America/Sao_Paulo');

$datax = json_decode(file_get_contents('php://input'), true);
$token = $datax['token'];

if (isset($token)) {
    if (!empty($token)) {
        if ($token === 'Q!W@ee344%%R') {
            //$response = array('success' => true, 'message' => 'ok');
            // echo json_encode($response);

            // Conectar ao banco de dados
            //require '../bancocasa.php';
            require '../banco.php';
            //require '../../../bancoservidor.php';

            try {
                $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                // Extrair os dados da solicitação
                $data = json_decode(file_get_contents('php://input'), true);

                // Obter a data atual
                $data_cadastro = date('Y-m-d H:i:s');

                $nome = $data['nome'];
                $email = $data['email'];
                $senha = $data['senha'];

                $stmt_check = $pdo->prepare("SELECT COUNT(*) FROM usuario WHERE email = :email");
                $stmt_check->bindParam(':email', $email);
                $stmt_check->execute();
                $count = $stmt_check->fetchColumn();

                if ($count > 0) {
                    $response = array('success' => false, 'message' => 'Este email já está cadastrado');
                    echo json_encode($response);
                } else {
                    // Inserir os dados na tabela 'usuario'
                    $sql = "INSERT INTO usuario(nome,email,senha,data_cadastro) VALUES (:nome,:email,:senha,:data_cadastro)";
                    $stmt = $pdo->prepare($sql);
                    $stmt->bindParam(':nome', $nome);
                    $stmt->bindParam(':email', $email);
                    $stmt->bindParam(':senha', $senha);
                    $stmt->bindParam(':data_cadastro', $data_cadastro);
                    $stmt->execute();

                    $response = array('success' => true, 'message' => 'Usuário cadastrado com sucesso');
                    echo json_encode($response);
                }
            } catch (PDOException $e) {
                $response = array('success' => false, 'message' => 'Erro ao salvar: ' . $e->getMessage());
                echo json_encode($response);
            }
        } else {
            $response = array('success' => false, 'message' => 'Token inválido');
            echo json_encode($response);
        }
    }
} else {
    $response = array('success' => false, 'message' => 'Token não enviado');
    echo json_encode($response);
}
?>
