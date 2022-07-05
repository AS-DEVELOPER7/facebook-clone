import * as firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import {getFirestore}from 'firebase/firestore'
import 'firebase/storage'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyAppZkIIkusTJuSICEIK_PWz29EvrQY6y8',
  authDomain: 'facebook-clone-b25c7.firebaseapp.com',
  projectId: 'facebook-clone-b25c7',
  storageBucket: 'facebook-clone-b25c7.appspot.com',
  messagingSenderId: '210235188181',
  appId: '1:210235188181:web:fcedb7e5399a53bda3d35c',
  measurementId: 'G-WM9WQSHLP2',
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage=getStorage(app)
export { db ,storage}
