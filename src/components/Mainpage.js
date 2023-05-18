import React from "react";

import Querycontext from "../Context/querycontext";
import Gallery from "./Gallery";
import { Route, Routes } from "react-router";
//import MiniHeader from "./miniHeader";
const Mainpage = () => {
    return(
        <div>
            
            <Querycontext/>
            <Routes>    
                <Route path="*" default element = {<Gallery/>}/>
            </Routes>
           
           
           
        </div>
    )
   
}
export default Mainpage;