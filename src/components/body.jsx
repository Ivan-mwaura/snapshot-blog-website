import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../Context/querycontext";
import Gallery from "./Gallery";
import "./style.scss"



const Body = () =>{
    
    const[data, setData] = React.useState([])

    const {query} = useContext(AppContext)

    const apikey = "36442909-5ba159e769d3fab129ac65640"


    function getimage(){
        fetch (`https://pixabay.com/api/?key=${apikey}&q=${encodeURIComponent(query.searchQuery)}&per_page=175`)
       .then(response => response.json())
       .then(response => setData(response.hits) )
    }
    
    useEffect(() => {
        getimage()
    })

    const apidata = data.map(dt => {
        return(
            <Gallery
                key={dt.id}
                
                webformatURL={dt.webformatURL}
                
            />
            )
    })
    
    return(
        <div className="mapped--container">
            <div className="mapped--div">
                
                {apidata}
            </div>
        </div>
       
       
    )
}
export default Body;

