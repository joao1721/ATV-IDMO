
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import StackRoutes from './stackRoutes';
import Inicio from '../pages/Inicio';
import Contato from '../pages/Contato';
import Cursos from '../pages/Cursos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'gray'
                }
            }}>



            <Tab.Screen
                name='InicioStack'
                component={Inicio}
                options={{
                    tabBarLabel: 'Tela Inicial',
                    headerTintColor: '#ff0000',
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='home' color='red' size={size}></FontAwesome>
                        )
                    }

                }}
            />

            <Tab.Screen
                name='Cursos'
                component={Cursos}
                options={{
                    title: 'Cursos',
                    headerTintColor: '#ff0000',
                    headerStyle: {
                        backgroundColor: 'gray'
                    },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='book' color='red' size={size}></FontAwesome>
                        )
                    }
                }}

            />
            <Tab.Screen
                name='Contato'
                component={Contato}
                options={{
                    title: 'Contato',
                    headerTintColor: '#ff0000',
                    headerStyle: {
                        backgroundColor: 'gray'
                    },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='phone' color='red' size={size}></FontAwesome>
                        )
                    }
                }}

            />

        </Tab.Navigator>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
