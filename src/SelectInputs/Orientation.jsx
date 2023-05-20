import React from "react";
import Select from 'react-select';

const Orientation = () =>{

    const options = [
        { value: 'any', label: 'Any' },
        { value: 'horizontal', label: 'horizontal' },      
    ]

    const customStyles ={
        control: (provided) =>({
            ...provided,
            borderRadius:'5px',
            border:'none',
            width:'150px',
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
        <Select options={options} styles={customStyles} placeholder ='Orientation'/>
    </div>
)
}
export default Orientation;
