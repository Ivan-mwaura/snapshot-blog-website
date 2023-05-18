import React, { useContext } from "react";
import  { AppContext } from "../Context/querycontext";


const SecondHeader = () =>{

    const {query,setQuery,hits} = useContext(AppContext)
 
    const handleQuery1= () =>{
        setQuery(
            {
                searchQuery:"mountain"
            }
        )
    }

    const handleQuery2= () =>{
        setQuery(
            {
                searchQuery:"beaches"
            }
        )
    }

    const handleQuery3= () =>{
        setQuery(
            {
                searchQuery:"birds"
            }
        )
    }
    const handleQuery4= () =>{
        setQuery(
            {
                searchQuery:"food"
            }
        )
    }
    const handleQuery5= () =>{
        setQuery(
            {
                searchQuery:"nature"
            }
        )
    }
    const handleQuery6= () =>{
        setQuery(
            {
                searchQuery:"wildlife"
            }
        )
    }
    const handleQuery7= () =>{
        setQuery(
            {
                searchQuery:"oceans"
            }
        )
    }
    const handleQuery8= () =>{
        setQuery(
            {
                searchQuery:"pets"
            }
        )
    }


    return(
        <div className="second-header-container">
            <div className="second-header-content">
                <h1>{hits}&nbsp;&nbsp; {query.searchQuery === "" ? "Background" : query.searchQuery} Photos and Images </h1>
            </div>
            <div className="buttons">    
                        <h1>Suggestions<br/>&nbsp;&nbsp;For you </h1>&nbsp;&nbsp;
                       <button className="btn" onClick={handleQuery1}>Mountain</button> &nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery2}>Beaches</button>&nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery3}>Birds</button>&nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery4}>Food</button>&nbsp;&nbsp; 
                        <button className="btn" onClick={handleQuery5}>Nature</button> &nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery6}>Wildlife</button>&nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery7}>Oceans</button>&nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery8}>Pets</button>&nbsp;&nbsp;                                                      
            </div>
        </div>
    )
}
export default SecondHeader;