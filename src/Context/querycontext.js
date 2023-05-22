import React, { useState } from "react";
import { createContext } from "react";
import Header from "../components/header";
import Body from "../components/body";
//import Gallery from "../components/Gallery";

export const AppContext = createContext(null);

const Querycontext = () => {
  const [query, setQuery] = React.useState({
    searchQuery: ""
  });

  const [data, setData] = React.useState([]);
  const [hits, setHits] = useState(0);
  const[selectedOption, setselectOption] = useState()
 /*const [feedback, setFeedback] = useState(false); */

  return (
    <AppContext.Provider
      value={{ query, setQuery, data, setData, hits, setHits, selectedOption,setselectOption}}
    >
      <Header />
      <Body />
    </AppContext.Provider>
  );
};

export default Querycontext;
