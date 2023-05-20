import React from "react";
import Select from 'react-select';

const PublishedDate= () =>{

    const options = [
        {  label: 'Any' },
        { value: '<12', label: '<12 hours' },
        { value: '<24', label: '<24 hours' },
        { value: '<72', label: '<72 hours' },
        { value: '<6', label: '<6 Months' },
        { value: '<7', label: '<7 Months' },       
        
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
        <Select options={options} styles={customStyles} placeholder = 'Published Date'/>
    </div>
)
}
export default PublishedDate;
