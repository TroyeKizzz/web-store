import { useState, useEffect } from "react";
import { registerListener, removeListener } from "../events";

const useCart = () => {
  const [cart, setCart] = useState(userCart);

  const getCart = () => {
    setCart(userCart);
  };

  const addToCart = (game) => {
    const index = userCart.findIndex((g) => g.game.id === game.id);
    console.log(index);
    if (index !== -1) {
      userCart[index].qty++;
    } else {
      userCart.push({ qty: 1, game });
    }
  };

  const setQtyInCart = (game, qty) => {
    const index = userCart.findIndex((g) => g.game.id === game.id);
    if (index !== -1) {
      userCart[index].qty = qty;
    }
  };

  const getCartLength = () => {
    let len = 0;
    userCart.forEach((g) => {
      len += g.qty;
    });
    return len;
  };

  const emptyCart = () => {
    userCart.forEach((g) => (g.qty = 0));
  };

  const randId = Math.floor(Math.random() * 100000 + 1);
  useEffect(() => {
    registerListener("cart-outdated", `cart-outdated-${randId}`, getCart);
    return () => {
      removeListener("cart-outdated", `cart-outdated-${randId}`);
    };
  }, []);

  return [cart, { addToCart, setQtyInCart, getCartLength, emptyCart }];
};

export default useCart;

let userCart = [];
