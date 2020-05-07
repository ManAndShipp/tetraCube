import React, { createContext, useReducer } from "react";

const initialState = {
  apiUrl: "https://client.crystal-sound.com",
  user: {}
};


const Ctx = createContext({
  store: initialState
});

const reduser = (store, action) => {
  switch (action.type) {
    case "setUser":
      return { ...store, user: action.payload };
  }
};

const Store = props => {
  const [store, dispatch] = useReducer(reduser, initialState);
  const events = {
    setUser: user =>
      dispatch({
        type: "setUser",
        payload: user
      }),
  };

  return (
    <Ctx.Provider value={{ ...events, store }}>{props.children}</Ctx.Provider>
  );
};

export { Store, Ctx };
