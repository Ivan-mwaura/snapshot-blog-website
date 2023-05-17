import React from "react";
import { createContext } from "react";
import Header from "../components/header";
import Body from "../components/body";

export const AppContext = createContext(null);


const Querycontext = () => {
  const [query, setQuery] = React.useState({
    searchQuery:""
  });

 

  return (
    <AppContext.Provider value={{ query, setQuery }}>
      <Header />
      <Body />
    </AppContext.Provider>
  );
};

export default Querycontext;
