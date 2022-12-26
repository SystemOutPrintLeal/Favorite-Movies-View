import FavoriteMovies from './pages/FavoriteMovies';
import {GlobalStyle} from './globalStyle'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


function App() {

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCTF1xWirj7sO9_Y3_0IY-XwMicKHtLiQI",
    authDomain: "desafio-environbit.firebaseapp.com",
    databaseURL: "https://desafio-environbit-default-rtdb.firebaseio.com",
    projectId: "desafio-environbit",
    storageBucket: "desafio-environbit.appspot.com",
    messagingSenderId: "1097336431634",
    appId: "1:1097336431634:web:6f73c52d9c9864ac09e4cb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <>
      <GlobalStyle/>
      <FavoriteMovies/>
    </>
  );
}

export default App;
