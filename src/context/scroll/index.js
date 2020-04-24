import React, { createContext, useReducer, useContext } from "react";
import reducer from './reducer';

const ScrollContext = createContext()

const initialState = {
  content: {
    currentIndex: 0,
  },
}

export const ScrollContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    state,
    dispatch,
  }

  return (
    <ScrollContext.Provider
      value={value}
      {...props}
    />
  )
}

export const useScrollContext = () => {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollContext')
  }
  return context
}