import React, { useState } from "react";
import { createContext } from "react";
import Header from "../components/header";
import Body from "../components/body";

export const AppContext = createContext(null);


const Querycontext = () => {
  const [query, setQuery] = React.useState({
    searchQuery:""
    });

    const[data, setData] = React.useState([])
    const[hits, setHits] = useState(0)

 

  return (
    <AppContext.Provider value={{ query, setQuery ,data ,setData,hits, setHits}}>
      <Header />
      <Body />
    </AppContext.Provider>
  );
};

export default Querycontext;
