import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  startAfter,
  limit,
  where,
} from "firebase/firestore";

class GameService {
  #gamesCollectionRef = collection(db, "games");

  getGames = async (lastItemId, genre, orderByParameter, orderDirection) => {
    let q = query(this.#gamesCollectionRef);
    if (lastItemId) q = query(q, startAfter(lastItemId));
    if (orderByParameter)
      q = query(q, orderBy(orderByParameter, orderDirection));
    if (genre) q = query(q, where("genre", "==", genre));
    q = query(q, limit(20));

    const result = await getDocs(q);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

  getGame = async (itemId) => {
    if (typeof itemId !== "string") throw new Error("Id is required");
    const q = query(this.#gamesCollectionRef, where("id", "==", itemId));
    const result = await getDocs(q);
    console.log(result);
    return result.docs;
  };
}

export default GameService;
