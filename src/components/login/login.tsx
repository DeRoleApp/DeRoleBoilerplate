import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useState } from 'react'
import { View, TextInput, Button, Alert } from 'react-native'

import { app } from '../../firebase/config'

const Login = () => {
  const auth = getAuth(app)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const login = await signInWithEmailAndPassword(auth, email, password)
      Alert.alert(login.user.email)
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  const handleSignUp = async () => {
    try {
      const signUp = await createUserWithEmailAndPassword(auth, email, password)
      Alert.alert(signUp.user.email)
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  return (
    <View>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{
          padding: 10,
          borderRadius: 30,
          backgroundColor: '#b0e0e6',
          width: 200,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{
          padding: 10,
          borderRadius: 30,
          backgroundColor: '#b0e0e6',
          width: 200,
        }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Cadastrar" onPress={handleSignUp} />
    </View>
  )
}

export default Login
