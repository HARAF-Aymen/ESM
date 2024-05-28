import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';

function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            navigation.navigate('Main');
        } else {
            Alert.alert("Login Failed", "Invalid username or password.");
        }
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.gradient}>
                <View style={styles.loginContainer}>
                    <Text style={styles.title}>Login</Text>
                    <View style={styles.inputContainer}>
                        <Icon name="user" size={20} color="#fff" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="#ddd"
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={20} color="#fff" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#ddd"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            autoCapitalize="none"
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '85%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        paddingBottom: 5,
        marginBottom: 20,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        paddingLeft: 10,
    },
    icon: {
        width: 30, // ensures the icon has space
    },
    button: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#6a11cb',
        fontSize: 18,
        fontWeight: '500',
    }
});

export default LoginScreen;
