import React, { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import Select from 'react-select';

const Explore = () => {
  const options = [
    {
      value: 'media',
      label: 'Media',
    },
    {
      value: 'discover',
      label: 'Discover',
    },
  ];

  const childrenMapping = {
    media: [
      { value: 'photos', label: 'Photos' },
      { value: 'illustrations', label: 'Illustrations' },
      { value: 'vectors', label: 'Vectors' },
      { value: 'videos', label: 'Videos' },
      { value: 'music', label: 'Music' },
      { value: 'sound effects', label: 'Sound Effects' },
      { value: 'gifs', label: 'Gifs' },
    ],
    discover: [
      { value: 'editors choice', label: 'Photos' },
      { value: 'curated collections', label: 'Curated Collections' },
      { value: 'popular images', label: 'Popular Images' },
      { value: 'popular videos', label: 'Popular videos' },
      { value: 'popular music', label: 'Popular music' },
      { value: 'popular searches', label: 'popular searches' },
    ],
  };

    const[selectedOption, setSelectedOption] = useState(null)
    const[collapse, setcollapse] = useState(true)

    const handleSelectchange= (selectedOption) =>{
        setSelectedOption(selectedOption)
        setcollapse(!collapse)
    }

    const handleCollapse = ()=>{
        setcollapse((prevState) => !prevState)
    }

    const customStyles = {
        control: (provided) => ({
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
          
        }),
        nestedOption:(provided, state) => ({
            ...provided,
           
            //backgroundColor: state.isFocused ? 'lightgreen' : 'inherit',
            color: state.isFocused ? 'black' : 'gray',
            fontSize: state.isFocused ?'15px': '15px',
            fontWeight: state.isFocused ? '500': '500',
            
        })
    }

    return(
        <div className='select--container'>
            <Select options={options} onChange={handleSelectchange} styles={customStyles}  placeholder = 'Explorer' />

            {selectedOption && (
                <div className='list--container'>
                   {childrenMapping[selectedOption.value] && (
                    <div className='list--content'>
                        <ul>
                            {collapse && <X
                            color='white'
                            size={35}
                            className='x--icon'
                            onClick={handleCollapse}
                            />}
                            
                            { collapse && childrenMapping[selectedOption.value].map((child) => (  
                                                                                                
                                    <li key = {child.value}>{child.label}</li>                                                               
                            ))}
                        </ul>
                    </div>
                   )} 
                </div>
            )}
        </div>
    )
};

export default Explore;
