import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

class UserService {
  #auth = auth;
  #user;
  constructor() {
    onAuthStateChanged(this.#auth, (currentUser) => {
      this.#user = currentUser;
    });
  }

  login = async (data) => {
    try {
      const result = await signInWithEmailAndPassword(
        this.#auth,
        data.email,
        data.password
      );
      this.#user = result.user;
      return result.user;
    } catch (error) {
      console.log(error.message);
    }
  };

  logout = async () => {
    return signOut(this.#auth);
  };

  register = async (data) => {
    try {
      const result = await createUserWithEmailAndPassword(
        this.#auth,
        data.email,
        data.password
      );
      this.#user = result.user;
      await updateProfile(this.#user, { displayName: data.name });
      return result.user;
    } catch (error) {
      console.log(error.message);
    }
  };

  getUser = () => this.#user;
}

export default UserService;
