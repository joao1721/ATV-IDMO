import { Text, StyleSheet, Image, ScrollView, Platform, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const curso1 = require('../../assets/curso1.jpg');
const curso2 = require('../../assets/curso2.jpg');
const curso3 = require('../../assets/curso3.png');
export default function Cursos() {
    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]} >
            <ScrollView style={{ overflow: 'hidden', }}>
                <View  style={styles.container}>
                    <Text style={styles.title}>Cursos</Text>
                    <Image style={{ width: 220, height: 110, marginTop: 90, }} source={curso1}></Image>
                    <Text style={styles.course}>Desenvolvimento de Sistemas</Text>
                    <Text style={styles.description}>Os cursos do SENAI-SP nas áreas de Tecnologia da Informação e Informática abrangem: Técnico de Redes de Computadores, Desenvolvimento de Sistemas Informática para Internet, entre outros.</Text>
                    <Image style={{ width: 220, height: 110, marginTop: 80, }} source={curso2}></Image>
                    <Text style={styles.course}>Mecatronica</Text>
                    <Text style={styles.description}>O curso de Aperfeiçoamento Profissional de Acionamento Eletrônico de Máquinas Elétricas tem por objetivo realizar instalação e parametrização de inversores de frequência, conversores e Soft-Starter</Text>
                    <Image style={{ width: 220, height: 110, marginTop: 80, }} source={curso3}></Image>
                    <Text style={styles.course}>5s</Text>
                    
                    <Text style={styles.description}>O Curso de Aperfeiçoamento Profissional ? 5S tem por objetivo o desenvolvimento de competências para analisar e solucionar os problemas de processo e qualidade, aplicando a ferramenta 5S. </Text>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        padding: 10,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333',
       
    },
    course: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333333',
        margin: 10
    },
    description: {
        fontSize: 16,
        marginBottom: 15,
        color: '#333333',
        margin: 10
    },
});