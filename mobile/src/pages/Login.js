import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api';

import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  
  const [user, setUser] = useState('');

  async function handleLogin() {

    const response = await api.post('/Tindev/devs', { 
      username: user 
    });

    const { _id } = response.data;

    navigation.navigate('Main', { _id });
  }

  return (
    <KeyboardAvoidingView 
      behavior="padding"
      enable={Platform.OS == 'ios'}
      style={styles.container}
    >
      <Image source={logo} />

      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário do GitHub" 
        placeholderTextColor="#999" 
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText} >Enviar</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#BF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});