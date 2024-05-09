import React, { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  basket: [],
};

const ADD_TO_BASKET = "ADD_TO_BASKET";
const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

const basketReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

const getInitialState = () => {
  const storedBasket = localStorage.getItem("basket");
  return {
    basket: storedBasket ? JSON.parse(storedBasket) : [],
  };
};

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  const addToBasket = (item) => {
    dispatch({ type: ADD_TO_BASKET, payload: item });
  };

  const removeFromBasket = (itemId) => {
    dispatch({ type: REMOVE_FROM_BASKET, payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: UPDATE_QUANTITY, payload: { id: itemId, quantity } });
  };

  // The value object contains the state and action creators
  const value = {
    basket: state.basket,
    addToBasket,
    removeFromBasket,
    updateQuantity,
    getTotalPrice: () =>
      state.basket.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

// Custom hook to access the basket context
export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
