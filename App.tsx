import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  // Veri tutucular (State)
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  
  // 7. Adım: Buton işlevi (Hata ayıklaması için kalsın)
  const handleLogin = () => {
      console.log('E-posta:', email); 
      console.log('Şifre:', password); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giriş Yap</Text>
      
      {/* 5. Adım: E-posta Metin Kutusu (TextInput) */}
      <TextInput
        style={styles.input}
        placeholder="E-posta adresinizi girin"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* 5. Adım: Şifre Metin Kutusu (TextInput) */}
      <TextInput
        style={styles.input}
        placeholder="Şifrenizi girin"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // Şifreyi gizle
      />

      {/* 5. Adım: Giriş Butonu */}
      <Button
        title="Giriş Yap"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Ekranı ortalamak ve kaplamak için temel stil
  container: {
    flex: 1,
    justifyContent: 'center', // Dikeyde ortala
    alignItems: 'center',     // Yatayda ortala
    backgroundColor: '#d992dbff', 
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: { // Görünür olması için kenarlık ekliyoruz
    width: '100%', // Kapsayıcıya göre %100 genişlik
    height: 45,
    borderColor: 'gray',
    borderWidth: 1, // Kenarlık
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  }
});

export default LoginScreen;