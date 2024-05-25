import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, Button, TouchableOpacity } from "react-native";
import styles from './style/global';
import { useCarrinho } from './components/Carrinho';

function TelaCarrinho({ navigation }) {
    const { itensCarrinho, removerDoCarrinho } = useCarrinho();

    const calcularTotal = () => {
        return itensCarrinho.reduce((acc, item) => acc + (item.quantidade * (item.precoUnitario || 0)), 0);
    };

    return (
        <View style={styles.container}>
            <View style={styles.menuprodutos}>
                <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('TelaInicial')}>
                    <Image style={styles.backProdutos} source={require("./assets/voltar.png")} />
                </TouchableOpacity>
                <Text style={styles.titleprodutos}>Carrinho</Text>
            </View>
            <SafeAreaView style={styles.scroll}>
                <ScrollView>
                    {itensCarrinho.length > 0 ? (
                        itensCarrinho.map((item, index) => (
                            <View key={index} style={styles.menucard}>
                                <Image style={{ height: 58, width: 58 }} source={{ uri: `${item.foto}` }} />
                                <View style={styles.descprod}>
                                    <Text style={styles.cartitem}>{item.nome}</Text>
                                    <Text style={styles.cartitem}>Quantidade: {item.quantidade}</Text>
                                    <Text style={styles.cartitem}>Preço Unitário: R$ {item.precoUnitario ? item.precoUnitario : '0.00'}</Text>
                                </View>
                                <View style={styles.lixeira}>
                                    <TouchableOpacity onPress={() => removerDoCarrinho(item.nome)}>
                                        <Image source={require("./assets/icon-lixeira.png")} style={styles.lixeiracarrinho} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.carrinhoVazio}>Seu carrinho está vazio.</Text>
                    )}
                </ScrollView>
            </SafeAreaView>
            <View style={styles.btnfinalizar}>
                <Text style={styles.valortotal}>Valor total: R$ {calcularTotal()}</Text>
                <Button
                    title="Finalizar compra"
                    color={'#28B463'}
                    onPress={() => navigation.navigate('TelaPedidos', { itensCarrinho, total: calcularTotal() })}
                    disabled={itensCarrinho.length === 0}
                />

            </View>
        </View>
    );
}

export default TelaCarrinho;
