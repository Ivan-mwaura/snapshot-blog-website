import React, { useState } from "react";
import { Question, Sliders,  } from "react-bootstrap-icons";
import Switch from 'react-switch';

const MiniHeader = () =>{

    const [isChecked, setisChecked] = useState(false)

    function handleChecked (checked){
        setisChecked(checked)
    }

    return (
        <div className="mini-header-container">
                 
             <div className="mini-header-left">

                <select  className = "explore">
                <option value="">All Images</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>
        
                <select  className = "explore">
                <option value="">Orientation</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>

                <select  className = "explore">
                <option value="">Size</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>
                <select  className = "explore">
                <option value="">Color</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>
                <select  className = "explore">
                <option value="">Published date</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>

         </div> 
         <div className="filter--container">
            <button>
                 <Sliders className="filter"/> filter   
            </button>
              
         </div>
         
         <span className ="mini-header-right">
            <span className ="switch">
                <Switch
                    checked = {isChecked}
                    onChange={handleChecked}
                
                />&nbsp;&nbsp;
            </span> <span className ="switch--mode">Safe search</span>
           

            <span className="question">
                <Question/>
            </span>

            <select  className = "most--relevant">
                <option value="">Most relevant</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            
        </span>
        
        </div>
        
        
    )
}
export default MiniHeader;