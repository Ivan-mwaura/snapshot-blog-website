import React from "react";
import Select from 'react-select';

const PublishedDate= () =>{

    const options = [
        {  label: 'Any' },
        { value: 'mostrelevant', label: 'Most Relevant' },
        { value: 'latest', label: 'latest' },
        { value: 'editors choice', label: 'Editors Choice' },
        { value: 'trending', label: 'Trending' },    
        
    ]

    const customStyles ={
        control: (provided) =>({
            ...provided,
            borderRadius:'5px',
            border:'none',
            width:'180px',
            height:'40px',

            '&:hover':{backgroundColor:' #d7dbdf', border:'none' ,borderRadius:'6px'}

        }),
        option:(provided, state) => ({
            ...provided,
            backgroundColor:state.isFocused ? 'green' : 'white',
            color: state.isFocused ? 'black' : 'inherit',
            borderRadius:'6px'
        })
    }

return(
    <div>
        <Select options={options} styles={customStyles} placeholder = 'Most Relevant'/>
    </div>
)
}
export default PublishedDate;
