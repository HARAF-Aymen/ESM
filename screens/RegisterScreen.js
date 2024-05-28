import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            Alert.alert("Password Mismatch", "The passwords do not match.");
            return;
        }
        // Simulate successful registration
        Alert.alert("Registration Successful", "You can now login with your credentials.",
            [{ text: "OK", onPress: () => navigation.navigate('Login') }]
        );
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <LinearGradient
                colors={['#6a11cb', '#2575fc']}
                style={styles.gradient}
            >
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Register</Text>
                    <View style={styles.inputGroup}>
                        <Ionicons name="person-outline" size={24} color="white" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="#ccc"
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Ionicons name="mail-outline" size={24} color="white" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Ionicons name="lock-closed-outline" size={24} color="white" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Ionicons name="lock-closed-outline" size={24} color="white" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            autoCapitalize="none"
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Register</Text>
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
        width: '100%',
    },
    formContainer: {
        width: '85%',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
    },
    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    inputGroup: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
        paddingLeft: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    }
});

export default RegisterScreen;
