import React, { useState, useEffect } from 'react';
import { Text, View, Image, SafeAreaView, FlatList, Alert, TouchableOpacity } from "react-native";
import styles from './style/global';
import { useCarrinho } from './components/Carrinho';

function TelaProdutos({ navigation }) {
    const { adicionarAoCarrinho } = useCarrinho();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('http://172.16.42.90/api_pastelmania/select_produtos/')
            .then(response => response.json())
            .then(data => setProdutos(data.map(produto => ({ ...produto, quantidade: 1, precoTotal: produto.preco }))))
            .catch(error => Alert.alert('Erro', 'Sem Registro'));
    }, []);

    const incrementCount = (index) => {
        setProdutos(prevProdutos => {
            const newProdutos = [...prevProdutos];
            newProdutos[index].quantidade += 1;
            newProdutos[index].precoTotal = newProdutos[index].quantidade * newProdutos[index].preco;
            return newProdutos;
        });
    };

    const decrementCount = (index) => {
        setProdutos(prevProdutos => {
            const newProdutos = [...prevProdutos];
            if (newProdutos[index].quantidade > 1) {
                newProdutos[index].quantidade -= 1;
                newProdutos[index].precoTotal = newProdutos[index].quantidade * newProdutos[index].preco;
            }
            return newProdutos;
        });
    };

    const handlePress = (produto) => {
        adicionarAoCarrinho({
            nome: produto.nome,
            quantidade: produto.quantidade,
            precoUnitario: produto.preco,
            precoTotal: produto.precoTotal,
            foto: produto.foto
        });
        Alert.alert('Obrigado!', 'Produto adicionado ao carrinho!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.menuprodutos}>
                <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('TelaInicial')}>
                    <Image style={styles.backProdutos} source={require("./assets/voltar.png")} />
                </TouchableOpacity>
                <Text style={styles.titleprodutos}>Produtos</Text>
            </View>
            <SafeAreaView style={styles.scroll}>
                <FlatList
                    data={produtos}
                    keyExtractor={item => item.idprodutos.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={styles.menucard}>
                            <View>
                                {item.foto === "" ? (
                                    <Image source={require('./assets/sem.png')} style={{ width: 100, height: 100 }} />
                                ) : (
                                    <Image source={{ uri: `${item.foto}` }} style={{ width: 100, height: 100 }} />
                                )}
                            </View>
                            <View style={styles.descprod}>
                                <Text style={styles.item}>{item.nome}</Text>
                                <View style={styles.containerCount}>
                                    <TouchableOpacity style={styles.button_compra} onPress={() => decrementCount(index)}>
                                        <Text style={styles.buttonTexto_compra}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.counter}>{item.quantidade}</Text>
                                    <TouchableOpacity style={styles.button_compra} onPress={() => incrementCount(index)}>
                                        <Text style={styles.buttonTexto_compra}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.price}>R$ {item.precoTotal}</Text>
                                <View style={styles.finalizar}>
                                    <TouchableOpacity onPress={() => handlePress(item)}>
                                        <Image source={require("./assets/icon-carrinho.png")}
                                            style={{ width: 33, height: 33 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        </View>
    );
}

export default TelaProdutos;
