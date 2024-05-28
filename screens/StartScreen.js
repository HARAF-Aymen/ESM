import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import mainBg from '../assets/mainbg.jpg';  // Corrected path with file extension

function StartScreen({ navigation }) {
    return (
        <ImageBackground 
            source={mainBg}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.title}>SHEMS</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for better readability
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007BFF', // Bootstrap primary blue
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20,
        minWidth: 200,
        alignItems: 'center', // Center text horizontally
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default StartScreen;
