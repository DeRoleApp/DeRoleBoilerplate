import { initializeApp } from 'firebase/app'
import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  getFirestore,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, Button } from 'react-native'

import { app } from '../../firebase/config'

const Produtos = () => {
  const db = getFirestore(app)

  const [usersList, setUsersList] = useState([])
  const { reset, control, handleSubmit } = useForm()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'))
        const list = []

        querySnapshot.forEach((doc) => {
          const data = doc.data()
          list.push(data)
        })

        setUsersList(list)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  const onSubmit = async ({ username, email, password }) => {
    try {
      await addDoc(collection(db, 'users'), {
        username: username,
        email: email,
        password: password,
      })

      reset()
    } catch (error) {
      console.log(error)
    }
  }

  // eslint-disable-next-line react/prop-types
  const Input = ({ title }) => (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={{
            height: 30,
            width: 100,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder={title}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          secureTextEntry={title === 'password'}
        />
      )}
      name={title}
    />
  )

  return (
    <>
      <Input title={'username'} />
      <Input title={'email'} />
      <Input title={'password'} />

      <Button onPress={handleSubmit(onSubmit)} title="Continuar" />

      {usersList?.map((user, idx) => (
        <Text
          style={{
            color: 'red',
          }}
          key={idx}
        >
          {user.username} - {user.email} - {user.password}
        </Text>
      ))}
    </>
  )
}

export default Produtos
