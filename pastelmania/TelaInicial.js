import React, { useRef } from "react";
import { Text, Touchable, View, onPress, TextInput, Button, Image, Alert } from "react-native";
import styles from './style/global';
import { TouchableOpacity } from "react-native-gesture-handler";
import MarqueeView from '@aitfakirali/react-native-marquee';

function TelaInicial({ navigation }) {
    const marqueeRef = useRef(null);
    const contato = () => {
        Alert.alert(
            'Contatos',
            '35 9999-9999 \nOu acesse nosso Instagram\n@pastelmaniaoficial',

        );
    }
    const informacoes = () => {
        Alert.alert(
            'Bem-vindo(a) à Pastelaria PastelMania!',
            'Localizada no centro da cidade, somos conhecidos por nossos deliciosos pastéis frescos e variedade de sabores. Desde 2023, estamos comprometidos em oferecer a melhor experiência gastronômica aos nossos clientes. Venha nos visitar e descubra por que somos a escolha número um para os amantes de pastéis em Itajubá!'
        );
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ width: '100%' }}
                onPress={() => navigation.navigate('TelaLogin')}>
                <Image
                    style={styles.backinicial}
                    source={require("./assets/voltar.png")} />
            </TouchableOpacity>
            <Image
                style={styles.logo}
                source={require("./assets/pastelmania.png")} />
            <View style={styles.menucontainer}>
                <TouchableOpacity style={styles.menuitens} onPress={() => navigation.navigate('TelaProdutos')}>
                    <Text style={styles.links}>Faça seu pedido</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuitens} onPress={() => navigation.navigate('TelaCarrinho')}>
                    <Text style={styles.links}>Carrinho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuitens} onPress={() => navigation.navigate('TelaInformacoes')}>
                    <Text style={styles.links}>Informaçoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuitens} onPress={() => navigation.navigate('TelaContato')}>
                    <Text style={styles.links}>Contato</Text>
                </TouchableOpacity>
            </View>
            <MarqueeView ref={marqueeRef} speed={0.5} style={styles.viewmarquee}>
                <View >
                    <Image style={{ width: 50, height: 50 }} source={require("./assets/caldin.png")} />
                    <Image style={{ width: 50, height: 50 }} source={require("./assets/Pastel3.png")} />
                    <Text>                                                                                                      </Text>
                </View>
            </MarqueeView>

        </View>
    );
}
export default TelaInicial;