// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0FJprFLhCeGQXKTgeaSG-7GrN3tiRtjk',
  authDomain: 'teste-de-role.firebaseapp.com',
  projectId: 'teste-de-role',
  storageBucket: 'teste-de-role.appspot.com',
  messagingSenderId: '436852893416',
  appId: '1:436852893416:web:0fa60fd8b5b8b556dacb5d',
  measurementId: 'G-S95ZXVQ9TJ',
}

export const app = initializeApp(firebaseConfig)

// Initialize Firebase
// const analytics = getAnalytics(app)
