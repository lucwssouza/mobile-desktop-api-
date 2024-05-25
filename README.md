# **Projeto de Sistema Integrado**

## **Descrição Geral**

Este projeto é um sistema integrado dividido em três partes principais: o painel web, o aplicativo mobile e a API. Cada componente tem um papel essencial no funcionamento do sistema, e a integração entre eles é fundamental para o sucesso do projeto.

### Estrutura do Projeto

1. **Painel Web**
2. **Aplicativo Mobile**
3. **API**

---

## **Painel Web**

O Painel Web é desenvolvido em PHP e proporciona a interface administrativa do sistema. Ele permite a gestão de dados e o monitoramento das operações realizadas através do aplicativo mobile.

### Requisitos

- **Servidor Web:** Para que o Painel Web funcione corretamente, é necessário hospedar os arquivos PHP em um servidor web compatível.
- **PHP:** Certifique-se de que o servidor tenha o PHP instalado e configurado.
- **Banco de Dados:** Um banco de dados MySQL deve estar disponível e configurado para armazenar os dados do sistema.

### Instalação

1. Faça o upload dos arquivos do Painel Web para o servidor.
2. Configure o arquivo `banco.php` com as informações do banco de dados.
3. Acesse o Painel Web através do navegador utilizando o endereço do servidor onde os arquivos foram hospedados.

---

## **Aplicativo Mobile**

O Aplicativo Mobile oferece uma interface amigável para os usuários interagirem com o sistema. Ele é desenvolvido em React Native e pode ser executado em dispositivos Android e iOS.

### Requisitos

- **Node.js e npm:** Certifique-se de ter o Node.js e o npm instalados na sua máquina.
- **React Native CLI:** Instale o React Native CLI globalmente utilizando `npm install -g react-native-cli`.
- **Emulador:** Para uma melhor visualização e testes, recomenda-se utilizar um emulador de dispositivo mobile.

### Instalação

1. Clone o repositório do projeto mobile para a sua máquina local.
2. Navegue até o diretório do projeto e execute `npm install` para instalar as dependências.
3. Inicie um emulador de sua preferência.
4. Execute o aplicativo com `npx react-native run-android` para Android ou `npx react-native run-ios` para iOS.

---

## **API**

A API serve como intermediária entre o Painel Web e o Aplicativo Mobile, gerenciando a comunicação e a troca de dados. Ela é desenvolvida utilizando PHP e SQL.

### Requisitos

- **Node.js:** Certifique-se de ter o Node.js instalado na sua máquina.
- **Banco de Dados:** A API se conecta ao mesmo banco de dados utilizado pelo Painel Web.

### Instalação

1. Clone o repositório da API para a sua máquina local.
2. Navegue até o diretório do projeto e execute `npm install` para instalar as dependências.
3. Configure o arquivo `.env` com as informações do banco de dados e outras variáveis de ambiente necessárias.
4. Inicie a API com `npm start`.

---

## **Contribuição**

Se você deseja contribuir para este projeto, por favor, siga as diretrizes de contribuição:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nova-feature`).
5. Crie um Pull Request.

---

## **Contato**

Para mais informações ou dúvidas, entre em contato.

Obrigado!
