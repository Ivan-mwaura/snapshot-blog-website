import React from "react"; 
import "../components/style.scss"
import { AppContext } from "../Context/querycontext";
import { useContext } from "react";
import { Bell, Justify, Upload } from "react-bootstrap-icons";
import logo from "../Images/logo_1.jpg"
import Explore from "../SelectInputs/Explore";

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



    return(
        <div className="header--container">
         <nav className="header--content"> 
            <img src={logo} alt="" className="logo--title"/> 
        
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
               

           {/*
           <select  className = "explore">
                <option value="">Explore</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            */} 
              
                </form>
            </span>

            <div className="explore">
                <Explore/>
            </div>
          <span className ="notification">
            <Bell
            size={20}
            //style={{backgroundColor: "#d7dbdf"}}
            />
            </span>
            <Justify
                    size={70}
                    className="justify--icon"
                />

           <span className="profile">
                {/*<img src="" alt="" className="profile--photo"/>*/}
            </span>
            
          <span className = "upload">
            <button className="upload--button">
                <Upload
                    size={20}
                    color="white"
                />Upload
            </button>
          </span>

            </nav>
        </div>

    
    )

}

export default Header;
