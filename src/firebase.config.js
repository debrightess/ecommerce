import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB4cbStBQMViQZRziOSjjKueYyj5CepnJk',
  authDomain: 'maltimart-43fd4.firebaseapp.com',
  projectId: 'maltimart-43fd4',
  storageBucket: 'maltimart-43fd4.appspot.com',
  messagingSenderId: '275202695524',
  appId: '1:275202695524:web:c523ce7d4d5767ea4c5a71',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
