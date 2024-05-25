import { StyleSheet, TextInput } from 'react-native';
import { HoverEffect } from 'react-native-gesture-handler';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E74C3C'
    },
    containerlogin: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E74C3C'
    },
    inputlogin: {
        textAlign: 'center',
        height: 40,
        marginTop: 10,
        borderWidth: 0.8,
        borderRadius: 10,
        marginBottom: 15,
        width: '70%',
        backgroundColor: 'white',
    },
    textslogin: {
        color: '#fff',
        fontSize: 17,
        margin: 10
    },
    logo: {
        width: 150,
        height: 150,
        top: -40,
        borderRadius: 16,
    },
    menucontainer: {
        // alignItems: 'center',
        justifyContent: 'center',
    },
    menuitens: {
        borderWidth: 2,
        borderColor: 'yellow',
        padding: 10,
        paddingHorizontal: 80,
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    links: {
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    viewmarquee: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: 15
    },
    menucard: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        gap: 20,
        backgroundColor: '#CB4335',
        borderWidth: 1,
        marginBottom: 30
    },

    item: {
        paddingTop: 10,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    price: {
        position: 'absolute',
        bottom: 0,
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    scroll: {
        height: '70%',
        marginTop: 0,
        alignItems: 'center',
        marginBottom: 0
    },
    titleprodutos: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    backProdutos: {
        width: 40,
        height: 40,
    },
    back: {
        width: 40,
        height: 40,
        right: 160
    },
    backSenha: {
        width: 40,
        height: 40,
        bottom: 140,
        left: 20
        // right: 160
    },
    backSenhanova: {
        width: 40,
        height: 40,
        bottom: 90,
        left: 20
        // right: 160
    },
    backinicial: {
        width: 40,
        height: 40,
        right: 160,
        bottom: 110
    },
    menuprodutos: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    radiobtn1: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    radiobtn2: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    descprod: {
        // borderWidth: 1,
        width: '50%'
    },
    opcoes: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        // borderWidth: 1,
        justifyContent: 'flex-start',
        justifyContent: 'space-around',

    },
    total: {
        borderWidth: 1,
        padding: 10,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
        backgroundColor: '#CB4335',

    },
    containerradio: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subtitlepedidos: {
        fontSize: 18,
        fontWeight: 'bold',
        left: 10,
        marginBottom: 5,
        color: '#fff'
    },
    menucardpedidos: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        gap: 20,
        backgroundColor: '#CB4335',
        borderWidth: 1,
        marginBottom: 6,
        alignItems: 'center',
    },

    itempedidos: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    pricepedidos: {
        position: 'absolute',
        left: 160,
        // paddingTop: 10,
        color: 'white',
        fontWeight: 'bold',
        // left: '85%',
    },
    backpedidos: {
        width: 40,
        height: 40,
    },
    btns: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 300
    },
    eyeIcon: {
        width: 30,
        height: 30,
        left: 5
    },
    senhaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 33,
        width: '88%',
        // borderWidth: 2
    },
    senhaNovaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingLeft: 33,
        width: '100%',
        // borderWidth: 2
    },
    infoContainer: {
        width: '80%',
        // borderWidth: 1
    },
    textInfo: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.6
    },
    textLinks: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 10
    },
    linksContainer: {
        // borderWidth: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    imgLinks: {
        borderBottomWidth: 2,
        borderColor: '#CB4335',
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    counter: {
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: '500'
    },

    containerCount: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    button_compra: {
        backgroundColor: '#e9967a',
        // width: 30,
        marginTop: 5,
        // height: 35,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    buttonTexto_compra: {
        fontSize: 14,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        // marginTop: -3,
    },
    btnfinalizar: {
        position: 'absolute',
        bottom: 30,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 30
    },
    finalizar: {
        left: 130,
        alignItems: 'center',
        width: 40,
        // borderWidth: 1
    },
    cartitem: {
        color: '#fff',
        fontWeight: '500'
    },
    lixeira: {
        left: 27,
        justifyContent: 'center'
    },
    valortotal: {
        color: '#fff',
        fontWeight: 'bold',
        // borderWidth: 1,
        marginBottom: 5
    },
    lixeiracarrinho: {
        width: 28,
        height: 28,
        tintColor: '#37474F',
        right: 15
    },
    carrinhoVazio: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: 'black'
    },
    texto_menor: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    texto_clicavel: {
        fontSize: 17,
        color: 'white',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
    inputrecuperar: {
        textAlign: 'center',
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        borderWidth: 0.8,
        borderRadius: 10,
        marginBottom: 15,
        // right: 50,
        backgroundColor: 'white',
    },
    recuperarBox: {
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        gap: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})