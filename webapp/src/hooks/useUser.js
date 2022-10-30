import { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, []);

  return user;
};

export default useUser;
