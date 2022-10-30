import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import GameService from "./services/GameService";
import UserService from "./services/UserService";

const firebaseConfig = {
  apiKey: "AIzaSyB1TLPMulspraPFnQZ0lg617c2DWLGdIsM",
  authDomain: "game-store-6cb68.firebaseapp.com",
  databaseURL:
    "https://game-store-6cb68-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "game-store-6cb68",
  storageBucket: "game-store-6cb68.appspot.com",
  messagingSenderId: "1001015784539",
  appId: "1:1001015784539:web:580fa0dc90efa0ae21bb7e",
  measurementId: "G-MLBRH3ZHSB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const userService = new UserService();
export const gameService = new GameService();
