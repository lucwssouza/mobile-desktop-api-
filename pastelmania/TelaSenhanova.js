import React, { useState } from "react";
import { View, TextInput, Button, Image, Alert, TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from './style/global';
import axios from 'axios';

function TelaSenhanova({ route, navigation }) {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const email = route.params?.email;
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [senhaVisivel2, setSenhaVisivel2] = useState(false);

    const redefinirSenha = () => {
        if (senha !== confirmarSenha) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }
        if (senha.trim() === '') {
            Alert.alert('Erro', 'A senha não pode estar vazia.');
            return;
        }

        axios({
            method: 'post',
            url: 'http://172.16.42.90/api_pastelmania/update/',
            data: {
                email: email,
                senha: senha,
                token: 'Q!W@ee344%%R'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.data.success) {
                    Alert.alert('Sucesso', 'Senha atualizada com sucesso!');
                    navigation.navigate('TelaLogin');
                } else {
                    Alert.alert('Erro', response.data.message);
                }
            })
            .catch(error => {
                console.error('Erro ao enviar dados:', error);
                Alert.alert('Erro', 'Não foi possível atualizar a senha.');
            });
    };

    return (
        <View style={styles.containerlogin}>
            <TouchableOpacity style={{ width: '100%' }}
                onPress={() => navigation.goBack()}>
                <Image
                    style={styles.backSenhanova}
                    source={require("./assets/voltar.png")} />
            </TouchableOpacity>
            <Image
                style={styles.logo}
                source={require("./assets/pastelmania.png")} />
            <Text style={styles.textslogin}>Insira nova senha</Text>
            <View style={styles.senhaNovaContainer}>
                <TextInput
                    style={styles.inputlogin}
                    placeholder='Nova senha'
                    secureTextEntry={!senhaVisivel}
                    onChangeText={setSenha}
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
            <View style={styles.senhaNovaContainer}>
                <TextInput
                    style={styles.inputlogin}
                    placeholder='Repita nova senha'
                    secureTextEntry={!senhaVisivel2}
                    onChangeText={setConfirmarSenha}
                />
                <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setSenhaVisivel2(!senhaVisivel2)}
                >
                    <Image
                        source={senhaVisivel2 ? require('./assets/olhoaberto.png') : require('./assets/olhofechado.png')}
                        style={styles.eyeIcon}
                    />
                </TouchableOpacity>
            </View>
            <Button title="Salvar" onPress={redefinirSenha} color={'#28B463'} />
        </View>
    );
}

export default TelaSenhanova;
