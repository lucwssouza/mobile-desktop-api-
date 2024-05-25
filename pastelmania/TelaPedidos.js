import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, Alert, Button } from "react-native";
import styles from './style/global';
import { RadioButton } from 'react-native-paper';
import { useCarrinho } from './components/Carrinho';

function TelaPedidos({ navigation, route }) {
    const { itensCarrinho, total } = route.params;
    const { limparCarrinho } = useCarrinho();
    const [metodoEntrega, setMetodoEntrega] = useState('Delivery');
    const [metodoPagamento, setMetodoPagamento] = useState('Dinheiro');

    const emitirNotaFiscal = () => {
        let notaFiscal = "Nota Fiscal\n";
        itensCarrinho.forEach(item => {
            notaFiscal += `Produto: ${item.nome}, Quantidade: ${item.quantidade}, Preço Unitário: R$ ${item.precoUnitario}, Valor Total: R$ ${(item.precoUnitario * item.quantidade)}\n`;
        });
        notaFiscal += `Total: R$ ${total}\n`;
        notaFiscal += `Método de Entrega: ${metodoEntrega}\n`;
        notaFiscal += `Método de Pagamento: ${metodoPagamento}`;
        Alert.alert("Obrigado pela sua compra!", notaFiscal, [
            {
                text: 'OK', onPress: () => {
                    limparCarrinho();
                    navigation.navigate("TelaInicial");
                }
            }
        ]);
    };


    return (
        <View style={styles.container}>
            <View style={styles.menuprodutos}>
                <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('TelaProdutos')}>
                    <Image style={styles.backpedidos} source={require("./assets/voltar.png")} />
                </TouchableOpacity>
                <Text style={styles.titleprodutos}>Finalizar compra</Text>
            </View>
            <SafeAreaView style={styles.scroll}>
                <ScrollView>
                    {itensCarrinho.map((item, index) => (
                        <View key={index} style={styles.menucardpedidos}>
                            <Image style={{ height: 60, width: 60 }} source={{ uri: `${item.foto}` }} />
                            <View style={styles.descprod}>
                                <Text style={styles.cartitem}>{item.nome}</Text>
                                <Text style={styles.cartitem}>Quantidade: {item.quantidade}</Text>
                                <Text style={styles.cartitem}>Preço Unitário: R$ {item.precoUnitario}</Text>
                            </View>
                        </View>
                    ))}
                    <Text style={styles.total}>Total: R$ {total}</Text>
                    <Text style={styles.subtitlepedidos}>Tipos de Entrega</Text>
                    <RadioButton.Group onValueChange={value => setMetodoEntrega(value)} value={metodoEntrega}>
                        <View style={styles.opcoes}>
                            <View style={styles.radiobtn1}>
                                <RadioButton value="Delivery" />
                                <Text>Delivery</Text>
                            </View>
                            <View style={styles.radiobtn2}>
                                <RadioButton value="Retirar no local" />
                                <Text>Retirar no local</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                    <Text style={styles.subtitlepedidos}>Formas de Pagamento</Text>
                    <RadioButton.Group onValueChange={value => setMetodoPagamento(value)} value={metodoPagamento}>
                        <View style={styles.opcoes}>
                            <View style={styles.radiobtn1}>
                                <RadioButton value="Dinheiro" />
                                <Text>Dinheiro</Text>
                            </View>
                            <View style={styles.radiobtn2}>
                                <RadioButton value="Cartão de crédito" />
                                <Text>Cartão de crédito</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                    <Text></Text>
                    <Button title="Finalizar compra" onPress={emitirNotaFiscal} color={'#28B463'} />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default TelaPedidos;
