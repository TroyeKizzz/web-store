import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  runTransaction,
  setDoc,
} from "firebase/firestore";

class UserService {
  #auth = auth;
  #user;
  #usersCollectionRef = collection(db, "users");
  constructor() {
    onAuthStateChanged(this.#auth, (currentUser) => {
      this.#user = currentUser;
    });
  }

  async login(data) {
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
  }

  async logout() {
    return signOut(this.#auth);
  }

  async register(data) {
    try {
      const result = await createUserWithEmailAndPassword(
        this.#auth,
        data.email,
        data.password
      );
      this.#user = result.user;
      await updateProfile(this.#user, { displayName: data.name });
      const userDoc = doc(this.#usersCollectionRef, result.user.uid);
      await setDoc(userDoc, {
        name: result.displayName,
        createdAt: new Date(),
      });
      return result.user;
    } catch (error) {
      console.log(error.message);
    }
  }

  getUser = () => this.#user;

  async buyFromCart(cart) {
    try {
      const newOrder = doc(
        collection(this.#usersCollectionRef, this.#user.uid, "orders")
      );
      await runTransaction(db, async (transaction) => {
        const order = {
          items: cart.map((g) => ({
            game: doc(db, `/games/${g.game.id}`),
            qty: g.qty,
          })),
          date: new Date(),
        };
        let updates = [];
        for (const index in cart) {
          if (Object.hasOwnProperty.call(cart, index)) {
            const g = cart[index];
            if (g.qty === 0) continue;
            const docRef = doc(db, "games", g.game.id);
            const gDoc = await transaction.get(docRef);
            const quantity = gDoc.data().quantity;
            updates.push({ ref: docRef, qty: quantity - g.qty });
          }
        }
        transaction.set(newOrder, order);
        updates.forEach((u) => transaction.update(u.ref, { quantity: u.qty }));
      });
      return newOrder;
    } catch (e) {
      console.log(e);
    }
  }

  async getMyOrders() {
    try {
      const docs = await getDocs(
        collection(this.#usersCollectionRef, this.#user.uid, "orders")
      );
      return await Promise.all(
        docs.docs.map(async (doc) => ({
          ...doc.data(),
          id: doc.id,
          items: await Promise.all(
            doc.data().items.map(async (row) => {
              const game = await getDoc(row.game);
              return { ...row, game: { ...game.data(), id: game.id } };
            })
          ),
        }))
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export default UserService;

/*
        setOrder(
          data.items.map(async (g) => {
            const game = await getDoc(doc(db, g.game));
            console.log(game);
            return { game, qty: g.qty };
          })
        )*/
