import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase'

function LoginScreen() {
  const navigation = useNavigation();
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
          <Image
            style={styles.logo}
            source={require("../assets/logoblack.png")} 
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Email" 
            // value = {email}
            // onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput 
            placeholder="Password" 
            // value = {password}
            // onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>  
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.createAccountButton} onPress={() => {navigation.navigate('signup');}}>
            <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton} onPress={() => {navigation.navigate('FeaturesOverview');}}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 60,
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    minWidth: 200,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttons: {
    width: '100%',
  },
  createAccountButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,  
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',  
    marginBottom: 10, 
  },
  signInButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,  
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default LoginScreen;