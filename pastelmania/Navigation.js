import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CarrinhoProvider } from "./components/Carrinho";
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaInicial from "./TelaInicial";
import TelaProdutos from "./TelaProdutos";
import TelaPedidos from "./TelaPedidos";
import TelaInformacoes from "./TelaInformacoes";
import TelaContato from "./TelaContato";
import TelaCarrinho from "./TelaCarrinho";
import TelaSenha from "./TelaSenha";
import TelaSenhanova from "./TelaSenhanova";
import Tela2 from "./Tela2";

const Stack = createStackNavigator();

function Navigation() {
    return (
        <CarrinhoProvider>
            < NavigationContainer >
                <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="TelaLogin" component={TelaLogin} />
                    <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
                    <Stack.Screen name="TelaInicial" component={TelaInicial} />
                    <Stack.Screen name="TelaProdutos" component={TelaProdutos} />
                    <Stack.Screen name="TelaPedidos" component={TelaPedidos} />
                    <Stack.Screen name="TelaInformacoes" component={TelaInformacoes} />
                    <Stack.Screen name="TelaContato" component={TelaContato} />
                    <Stack.Screen name="TelaCarrinho" component={TelaCarrinho} />
                    <Stack.Screen name="TelaSenha" component={TelaSenha} />
                    <Stack.Screen name="TelaSenhanova" component={TelaSenhanova} />
                    <Stack.Screen name="Tela2" component={Tela2} />
                </Stack.Navigator>
            </NavigationContainer >
        </CarrinhoProvider>
    );
}

export default Navigation;