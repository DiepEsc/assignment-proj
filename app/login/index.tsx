import { useAppDispatch } from '@/hooks/redux';
import { actions, selectIsLoggedIn, selectLoginState } from '@/redux/slices/loginSlice';
import { Redirect } from 'expo-router';
import React, { PropsWithChildren, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';


export default function LoginScreen() {

  const dispatch = useAppDispatch();
  const loginState = useSelector(selectLoginState);

  const [username, setUsername] = useState('dev');
  const [password, setPassword] = useState('rockets');

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    Keyboard.dismiss();
    dispatch(actions.login({ username, password }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  if (loginState.isLoggedIn) {
    return (
      <Redirect href="/home" />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={[styles.input, styles.inputDecoration, { width: '100%' }]}
        placeholder="Username"
        autoCapitalize="none"
        returnKeyType="next"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <View style={[styles.passwordContainer, styles.inputDecoration]}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          returnKeyType="done"
          onSubmitEditing={handleLogin}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={styles.eyeToggle}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

      <Button onPress={handleLogin} title="Login" disabled={loginState.isLoggingIn} />
      <Text style={styles.error}>{loginState.loginError?.message ?? " "}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    marginStart: 20,
    marginEnd: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
  },
  inputDecoration: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeToggle: {
    width: 40,
    marginLeft: 10,
    fontSize: 16,
    color: 'blue',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});
