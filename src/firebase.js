import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBXvC8KDbVcB8dtScAOD3BkOzjuAh2pjn0",
    authDomain: "disneyplus-clone-ba9b9.firebaseapp.com",
    databaseURL: "https://disneyplus-clone-ba9b9-default-rtdb.firebaseio.com",
    projectId: "disneyplus-clone-ba9b9",
    storageBucket: "disneyplus-clone-ba9b9.appspot.com",
    messagingSenderId: "838306216250",
    appId: "1:838306216250:web:6a34e41ea2811d7d4eb803"
 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db; 