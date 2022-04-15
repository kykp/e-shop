import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  status: true,
  order: [],
  visibleBasket: false,
  alert: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { item },
    });
  };
  value.removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: id } });
  };

  value.showBasket = () => {
    dispatch({ type: "SHOW_BASKET" });
  };
  value.increment = (id) => {
    dispatch({ type: "INCREMENT", payload: { id } });
  };
  value.decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: { id } });
  };

  value.deleteName = () => {
    dispatch({ type: "DELETE_NAME" });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
