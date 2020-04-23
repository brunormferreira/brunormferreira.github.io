// =================================================
// USE REACT CONTEXT API TO MANAGE CAROUSEL STATE
// =================================================

import React, { createContext, useReducer } from "react";

const initialState = {
  content: {
    currentIndex: 0,
  },
};

const store = createContext(initialState);
const { Provider } = store;

const actions = {
  SCROLL_TO_ABOUT: "scroll_to_about",
  SCROLL_TO_SKILLS: "scroll_to_skills",
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actions.SCROLL_TO_ABOUT:
        return {
          ...state,
          content: {
            currentIndex: 0,
          },
        };
      case actions.SCROLL_TO_SKILLS:
        return {
          ...state,
          content: {
            currentIndex: 1,
          },
        };
      default:
        throw new Error("Invalid Dispatch Action");
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, actions };
