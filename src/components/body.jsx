import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../Context/querycontext";
import Gallery from "./Gallery";
import "./style.scss"
import MiniHeader from "./miniheader";



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
        console.log(dt.user)
        return(
            <Gallery
                key={dt.id}
                
                webformatURL={dt.webformatURL}
                userProfile = {dt.userImageURL}
                user = {dt.user}

            />
            
            )
    })
    
    return(

    <div>
       
       
        <div className="mapped--container">
            <div>               
                    <MiniHeader/>
                           
                <div className="mapped--div">
            
                    {apidata}
                </div>
            </div>
        </div>
       
    </div>    
    )
}
export default Body;

