import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, Image, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './style/global';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

function TelaLogin({ navigation }) {
    // const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            // setNome('');
            setEmail('');
            setSenha('');
        }, [])
    );

    // useEffect(() => {
    //     setNome('');
    //     setSenha('');
    // }, []);

    const autenticar = () => {
        const token = 'Q!W@ee344%%R';
        axios.get(`http://172.16.42.90/api_pastelmania/select_login/?token=${token}&email=${email}&senha=${senha}`)
            .then(response => {
                const users = response.data;
                console.log(users);
                if (users.length > 0) {
                    const { id, email } = users[0];
                    navigation.navigate('TelaInicial', { id, email });
                } else {
                    Alert.alert("Erro", 'Email ou senha incorretos');
                }
            })
            .catch(error => {
                console.error('Erro ao autenticar:', error);
                alert('Erro ao conectar ao serviço');
            });
    };

    return (
        <View style={styles.containerlogin}>
            <Image style={styles.logo} source={require("./assets/pastelmania.png")} />
            <Text style={styles.textslogin}>Login</Text>
            <TextInput
                style={styles.inputlogin}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />
            <View style={styles.senhaContainer}>
                <TextInput
                    style={[styles.inputlogin, { flex: 1 }]}
                    placeholder='Digite sua senha'
                    secureTextEntry={!senhaVisivel}
                    value={senha}
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
            <Button title="Logar" onPress={autenticar} color={'#28B463'} />
            <Text style={styles.textslogin}>Não tem uma conta?</Text>
            <Button title="Criar conta" onPress={() => navigation.navigate('TelaCadastro')} color={'#28B463'} />
            <View style={styles.opcoes}>
                <Text style={styles.texto_menor}>Esqueceu a sua senha? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('TelaSenha')}>
                    <Text style={styles.texto_clicavel}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default TelaLogin;
