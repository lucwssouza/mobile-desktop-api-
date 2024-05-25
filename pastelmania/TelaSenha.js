import React, { useState } from "react";
import { View, TextInput, Button, Image, Alert, TouchableOpacity } from "react-native";
import axios from 'axios';
import styles from './style/global';

function TelaSenha({ navigation }) {
    const [email, setEmail] = useState('');
    const [codigo, setCodigo] = useState('');
    const [codigoEnviado, setCodigoEnviado] = useState(false);

    const enviarCodigo = async () => {
        if (email.trim() === '') {
            Alert.alert('Erro', 'Por favor, insira seu email.');
            return;
        }

        try {
            const response = await axios.post('http://172.16.42.90/api_pastelmania/select_email/', { email });
            if (response.data.success) {
                setCodigoEnviado(true);
                Alert.alert('Sucesso', 'Código enviado para o seu email!');
            } else {
                Alert.alert('Erro', response.data.message);
            }
        } catch (error) {
            console.error('Erro:', error);
            Alert.alert('Erro', 'Não foi possível verificar o email.');
        }
    };

    const verificarCodigo = () => {
        if (codigo.trim() === '') {
            Alert.alert('Erro', 'Digite o código');
        } else {
            Alert.alert('Verificado', 'O código foi verificado com sucesso!');
            navigation.navigate('TelaSenhanova', { email: email });
        }

    };

    return (
        <View style={styles.containerlogin}>
            <TouchableOpacity style={{ width: '100%' }}
                onPress={() => navigation.navigate('TelaLogin')}>
                <Image
                    style={styles.backSenha}
                    source={require("./assets/voltar.png")} />
            </TouchableOpacity>
            <Image
                style={styles.logo}
                source={require("./assets/pastelmania.png")} />
            <View style={styles.recuperarBox}>
                <TextInput
                    style={styles.inputlogin}
                    placeholder='Digite seu email'
                    value={email}
                    onChangeText={setEmail}
                />
                <Button title="Enviar código" onPress={enviarCodigo} color={'#28B463'} />
            </View>
            {codigoEnviado && (
                <View style={styles.recuperarBox}>
                    <TextInput
                        style={styles.inputlogin}
                        placeholder='Digite o código recebido'
                        value={codigo}
                        onChangeText={setCodigo}
                    />
                    <Button title="Verificar código" onPress={verificarCodigo} color={'#28B463'} />
                </View>
            )}
        </View>
    );
}

export default TelaSenha;
