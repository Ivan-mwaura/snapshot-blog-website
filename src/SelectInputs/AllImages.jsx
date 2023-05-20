import React from "react";
import Select from 'react-select';

const AllImages = () =>{

    const options = [
        { value: 'photos', label: 'Photos' },
        { value: 'illustrations', label: 'Illustrations' },
        { value: 'vectors', label: 'Vectors' },
        { value: 'videos', label: 'Videos' },
        { value: 'music', label: 'Music' },
        { value: 'sound effects', label: 'Sound Effects' },
        { value: 'gifs', label: 'Gifs' },
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
        <Select options={options} styles={customStyles} placeholder = 'All Images'/>
    </div>
)
}
export default AllImages
