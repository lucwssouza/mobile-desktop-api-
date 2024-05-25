import React, { useState } from "react";
import { Text, View, TextInput, Button, Image, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './style/global';
import axios from 'axios';

function TelaCadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    cadastrar = () => {
        let token = 'Q!W@ee344%%R';
        if (senha.trim() == senha.trim()) {
            if (nome.trim() !== '' && senha.trim() !== '' && email.trim() !== '') {
                axios.post('http://172.16.42.90/api_pastelmania/cadastro/', { token, nome, email, senha })
                    .then(response => {
                        const data = response.data;
                        if (data.success) {
                            alert(nome + '\n cadastrado com sucesso!');
                            navigation.navigate('TelaLogin');
                        } else {
                            alert(data.message); // Exibe a mensagem de erro do servidor
                        }
                    })
                    .catch(error => {
                        console.log('Erro ao enviar dados:', error);
                        alert('Erro ao enviar dados para o servidor');
                    });
            } else {
                Alert.alert("Erro ", 'Preencher Campos!!!');
            }
        } else {
            alert('Senha diferentes');
        }
    }



    const [senhaVisivel, setSenhaVisivel] = useState(false);
    return (
        <View style={styles.containerlogin}>
            <Image
                style={styles.logo}
                source={require("./assets/pastelmania.png")} />
            <Text style={styles.textslogin}>Cadastro</Text>
            <TextInput
                style={styles.inputlogin}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={(text) => setNome(text)}
            />
            <TextInput
                style={styles.inputlogin}
                placeholder='Digite seu email'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <View style={styles.senhaContainer}>
                <TextInput
                    style={[styles.inputlogin, { flex: 1 }]}
                    placeholder='Digite sua senha'
                    secureTextEntry={!senhaVisivel}
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />
                <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setSenhaVisivel(!senhaVisivel)}
                >
                    <Image
                        source={senhaVisivel ? require('./assets/olhoaberto.png') : require('./assets/olhofechado.png')}
                        style={styles.eyeIcon}
                    />
                </TouchableOpacity>
            </View>
            <Button title="Cadastrar" onPress={cadastrar} color={'#28B463'} />
            <Text style={styles.textslogin}>Já possui uma conta?</Text>
            <Button title="Logar" onPress={() => navigation.navigate('TelaLogin')} color={'#28B463'} />
        </View>
    );
}

export default TelaCadastro;
