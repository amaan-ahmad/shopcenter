import React, { useState, createContext, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_CART } from "../graphql/queries";

const CartContext = createContext(undefined);
const CartDispatchContext = createContext(undefined);

function CartProvider({ children }) {
  const [getInitCart, { data, loading, error }] = useLazyQuery(GET_CART);
  const [cartItems, setCartItems] = useState([]);
  const [isUpdated, setIsUpdated] = useState();

  useEffect(() => {
    if (!cartItems) {
      console.log("fetching....");
      getInitCart();
      setCartItems(data?.cart);
      setIsUpdated(false);
    }

    if (isUpdated) {
      getInitCart();
      if (!loading && !error) setCartItems(data?.cart);
    }
  }, [cartItems, data, getInitCart, isUpdated, setIsUpdated, loading, error]);

  const state = {
    isUpdated,
    cartItems,
  };

  const dispatch = {
    setIsUpdated,
    setCartItems,
  };

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext, CartDispatchContext };
