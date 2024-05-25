<?php
class usuario
{
    public $conn;
    public function __construct()
    {
        $db = new banco;
        $this->conn = $db->conn;
    }

    public function criar($inputData)
{
    date_default_timezone_set('America/Sao_Paulo');
    
    $nome = $inputData['nome'];
    $email = $inputData['email'];
    $senha = $inputData['senha'];
    $data = date('Y-m-d H:i:s'); 

    $sql = "INSERT INTO usuario (nome, email, senha, data_cadastro) VALUES ('$nome', '$email', '$senha', '$data')";
    $result = $this->conn->query($sql);

    if ($result == 1) {
        return true;
    } else {
        return false;
    }
}

    public function verificaEmail($email)
    {
    $query = "SELECT * FROM usuario WHERE email = '$email'";
    $result = mysqli_query($this->conn, $query);

    if (mysqli_num_rows($result) > 0) {
        return true;
    } else {
        return false;
        }
    }

    public function validar($inputData)
    {
        $email = $inputData['email'];
        $senha = $inputData['senha'];

        $sql = "select * from usuario where email='" . $email . "' and senha='" . $senha . "'";
        $result = $this->conn->query($sql);
        $linha = $result->fetch_array();
        $result = $result->num_rows;

        if ($result == 1) {

            $_SESSION["nome"] = $linha['nome'];
            return true;
        } else {
            echo "n salvou";
            return false;
        }
    }


    public function buscar_um_usuario($nome)
    {
        $sql = "SELECT * FROM usuario WHERE nome LIKE '%" . $nome . "%' AND (apagado IS NULL OR apagado = '') ";
        // AND (apagado IS NULL OR apagado = '') 
        // adicionar  essa linha na query dps
        $dados = $this->conn->query($sql);
        return $dados;
    }

    public function excluir_usuario($id, $acao)
    {
        if ($acao == 1) {
            $sql = "UPDATE `usuario` SET `apagado` = '1' WHERE `idusuario` = ? LIMIT 1";
            $stmt = $this->conn->prepare($sql);
            $stmt->bind_param('i', $id);
            $stmt->execute();
            $resultado = $stmt->affected_rows;
            return $resultado;
        }
    }

    public function editar_usuario($inputData, $acao)
    {
    date_default_timezone_set('America/Sao_Paulo');

        $idusuario = $inputData['idusuario'];
        $nome = $inputData['nome'];
        $email = $inputData['email'];
        $senha = $inputData['senha'];
        $data = date('Y-m-d H:i:s'); 


        if ($acao == 1) {
          echo  $sql = "UPDATE `pastelmania`.`usuario` SET `nome` = '" . $nome . "', `email` = '" . $email . "', 
            `senha` = '" . $senha . "', `data_edicao` = '" . $data ."' WHERE `idusuario` = '" . $idusuario . "' limit 1";
            $result = $this->conn->query($sql);
            $result = $this->conn->query($sql);

            if ($result == 1) {
                //echo "ok";
                return true;
            } else {
                //echo "nok";
                return false;
            }
        }
    }

    public function countUsuarios() {
        $sql = "SELECT COUNT(*) as total from usuario where apagado is NULL or apagado = '';";
        $result = $this->conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['total'];
        } else {
            return 0;
        }
    }
    public function ultimos_usuarios() {
        $sql = "SELECT * from usuario order by idusuario desc limit 10;";
        $dados = $this->conn->query($sql);
        return $dados;
    }

}

class produto
 {
    public $conn;
    public function __construct()
    {
        $db = new banco;
        $this->conn = $db->conn;
    }
    public function cadastrar($inputData)
{
    date_default_timezone_set('America/Sao_Paulo');
    
    $nome = $inputData['nome'];
    $preco = $inputData['preco'];
    $foto = $inputData['foto'];
    $quantidade = $inputData['quantidade'];
    $data = date('Y-m-d H:i:s'); 

    $stmt = $this->conn->prepare("INSERT INTO produtos (nome, preco, foto, quantidade, data_cadastro) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sdsis", $nome, $preco, $foto, $quantidade, $data);
    
    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }
}

    
    

    public function buscar_um_produto($nome)
{
    $sql = "SELECT * FROM produtos WHERE nome LIKE '%" . $nome . "%' AND (apagado IS NULL OR apagado = '')";
    // AND (apagado IS NULL OR apagado = '')
    // adicionar na query dps
    $dados = $this->conn->query($sql);
    return $dados;
}


    public function excluir_produto($id, $acao)
    {
        if ($acao == 1) {
            $sql = "UPDATE `produtos` SET `apagado` = '1' WHERE `idprodutos` = ? LIMIT 1";
            $stmt = $this->conn->prepare($sql);
            $stmt->bind_param('i', $id);
            $stmt->execute();
            $resultado = $stmt->affected_rows;
            return $resultado;
        }
    }

    public function editar_produto($inputData, $acao)
    {

        date_default_timezone_set('America/Sao_Paulo');

        $idproduto = $inputData['idprodutos'];
        $nome = $inputData['nome'];
        $preco = $inputData['preco'];
        $quantidade = $inputData['quantidade'];
        $data = date('Y-m-d H:i:s'); 


        if ($acao == 1) {
          echo  $sql = "UPDATE `pastelmania`.`produtos` SET `nome` = '" . $nome . "', `preco` = '" . $preco . "', 
            `quantidade` = '" . $quantidade . "', `data_edicao` = '" . $data ."' WHERE `idprodutos` = '" . $idproduto . "' limit 1";
            $result = $this->conn->query($sql);
            $result = $this->conn->query($sql);

            if ($result == 1) {
                //echo "ok";
                return true;
            } else {
                //echo "nok";
                return false;
            }
        }
    }

    public function countProdutos() {
        $sql = "SELECT COUNT(*) as total FROM produtos WHERE apagado IS NULL OR apagado = '';";
        $result = $this->conn->query($sql);
    
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['total'];
        } else {
            return 0;
        }
    }
} 
