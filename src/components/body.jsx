import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../Context/querycontext";
import Gallery from "./Gallery";
import "./style.scss"
import MiniHeader from "./miniheader";
import SecondHeader from "./secondheader";
import { useSelector } from "react-redux";



const Body = () =>{
    
    

    const {query,data, setData,setHits ,setFeedback} = useContext(AppContext)

    const apikey = "36442909-5ba159e769d3fab129ac65640"

    const selectedImageType = useSelector((state) => state.selectedImageType)
    const selectedOrder = useSelector((state) => state.selectedOrder)
    const safeSearch = useSelector((state) => state.safeSearch)



    
    useEffect(() => {

        function getimage(){
            fetch (`https://pixabay.com/api/?key=${apikey}&q=${encodeURIComponent(query.searchQuery)}&page=3&per_page=100&image_type=${selectedImageType && selectedImageType.value}&order=${selectedOrder && selectedOrder.value}&safesearch=${safeSearch}`)
           .then(response => response.json())
           .then(response => {
                             setData(response.hits)
                             setHits(response.total)
                        }                 
            )
           
        }
        
        getimage()

      

    },[query,setData,setHits,selectedImageType,selectedOrder,safeSearch])

    if(data > 0){
        setFeedback(true)
        
    }
   
    const apidata = data.map(dt => {
       
        return(
            <Gallery
                key={dt.id}
                tags = {dt.tags}
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
                    <SecondHeader/>           
                           
                <div className="mapped--div">
                   
                        {apidata}
                   
                    
                </div>
            </div>
        </div>
       
    </div>    
    )
}
export default Body;

