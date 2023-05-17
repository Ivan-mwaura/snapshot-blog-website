import React from "react"; 
import "../components/style.scss"
import { AppContext } from "../Context/querycontext";
import { useContext } from "react";
//import { Search } from "react-bootstrap-icons";

const Header = () =>{

    const {query,setQuery} = useContext(AppContext)

   

    function handleChange(event){
      
        setQuery(prevQuery=>{
            return{
                ...prevQuery,
                [event.target.name] : event.target.value
            }
           
            
        })
    }

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

   /* function fetchImages(event){
       handleChange(event)
    }*/
    return(
        <div className="header--container">
         <nav className="header--content"> 
            <span className = "h--span"><h1 className="heading--1"><i>SnapShot</i></h1></span>
            <span className = "h--span">
            <form className="search--form">
                <input

                    type="text"
                    placeholder="Search...."
                    className="search--bar"
                    onChange={handleChange}
                    name = "searchQuery"
                    value={query.searchQuery}
                    
                />
              { /* <button className="search--button"
                onClick={fetchImages}
                >
                    <Search
                        size={25}
                    />
                </button>*/}
                </form>
            </span>
            <br/>
           
                <span className="buttons" >
                        <span className="b--span"><button className="btn" onClick={handleQuery1}>Mountain</button> &nbsp;&nbsp;</span>
                        <span className = "b--span"><button className="btn" onClick={handleQuery2}>Beaches</button>&nbsp;&nbsp;</span>
                        <span className = "b--span"><button className="btn" onClick={handleQuery3}>Birds</button>&nbsp;&nbsp;</span>   
                        <span className = "b--span"><button className="btn" onClick={handleQuery4}>Food</button>&nbsp;&nbsp;</span>
                        
                              
                </span>
                
                <br/>
                <span className="h--span">{<h2 className="heading--2">searching...<div className = "heading--2-span">{<i>{query.searchQuery}</i>}</div> </h2>}</span>
               

            </nav>
        </div>

    
    )

}

export default Header;