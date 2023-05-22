import React from "react";
import Querycontext from "../Context/querycontext";
import Gallery from "../components/Gallery";
import { Route, Routes } from "react-router";
import Footer from "../components/footer";

const Mainpage = () => {
    return(
        <div>
            
            <Querycontext/>
            <Routes>    
                <Route path="*" default element = {<Gallery/>}/>
                
            </Routes>
            {/*<Gallery/>*/}
            <Footer/>
                    
        </div>
    )
   
}
export default Mainpage;