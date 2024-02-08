import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { initializeApp } from 'firebase/app'
import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper'

import Login from './components/login'
import Produtos from './components/produtos'
import * as S from './styled'

export default function Index() {
  const [selectedOption, setSelectedOption] = useState('login')

  return (
    <S.Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <RadioButton
          value="option1"
          status={selectedOption === 'login' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedOption('login')}
        />
        <Text>login</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 16,
          marginBottom: 30,
        }}
      >
        <RadioButton
          value="lista"
          status={selectedOption === 'lista' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedOption('lista')}
        />
        <Text>lista</Text>
      </View>
      {selectedOption === 'login' ? <Login /> : <Produtos />}
    </S.Container>
  )
}
