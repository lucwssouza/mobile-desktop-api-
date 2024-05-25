import React, { useRef } from "react";
import { Text, Touchable, View, onPress, TextInput, Button, Image, Alert } from "react-native";
import styles from './style/global';
import { TouchableOpacity } from "react-native-gesture-handler";
import MarqueeView from '@aitfakirali/react-native-marquee';

function TelaContato({ navigation }) {
    const marqueeRef = useRef(null);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ width: '100%' }}
                onPress={() => navigation.navigate('TelaInicial')}>
                <Image
                    style={styles.backinicial}
                    source={require("./assets/voltar.png")} />
            </TouchableOpacity>
            <Image
                style={styles.logo}
                source={require("./assets/pastelmania.png")} />
                <Text></Text>
                <Text></Text>
            <View style={styles.menucontainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.textInfo}>
                        35 9999-9999 Ou acesse nosso Instagram @pastelmaniaoficial</Text>
                </View>
                <View style={styles.linksContainer}>
                    <Text style={styles.textLinks}>Links</Text>
                    <View style={styles.imgLinks}>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30}} source={require("./assets/insta.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30}} source={require("./assets/whats.png")} />
                        </TouchableOpacity>
                    </View>
                </View>

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
export default TelaContato;