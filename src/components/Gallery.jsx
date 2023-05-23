import React, {useEffect, useState } from "react";
import { BookmarkCheck, BookmarkPlus, Download, Heart } from "react-bootstrap-icons";
import "../components/style.scss";
import { saveAs } from "file-saver";
import {useSelector } from "react-redux";
//import { AppContext } from "../Context/querycontext";




function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function Gallery({ webformatURL ,user,userProfile,tags}) {
  const [hovered, setHover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [dimensions, setDimension] = useState();
  const[like, setLike]= useState(false)
  const[favourite, setFavourite] = useState(false)

  const selectedOption = useSelector((state) => state.selectedOption );
  

  useEffect(() => {
    const image = new Image();
    image.src = webformatURL;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [webformatURL]);
  

  useEffect(()=>{

    function handleSize(){
      setDimension(dimension())
    }

    setDimension(dimension())

    function dimension (){

      let width ,height;
  
    if(selectedOption &&selectedOption.value === 'vertical'){
        if(window.innerWidth < 600){
          width = 420;
          height = 250;
        }
        else{
          width = getRandomNumber(220, 250);
           height = getRandomNumber(250, 330);
        }
      
    }
    else if(selectedOption &&selectedOption.value === 'horizontal'){
      width = 250;
      height = 250;
    }
    else{
      if(window.innerWidth < 600){
        width = 450;
        height = 260;
      }
      else{
        width = getRandomNumber(220, 250);
         height = getRandomNumber(250, 330);
      }

    }
      
          
      return {
        width: `${width}px`,
        height: `${height}px`,
      };
     
    }

    window.addEventListener('resize', handleSize)

    return ( ()=>{
      window.removeEventListener('resize', handleSize)
    })
    
  },[selectedOption])

 

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  function handleImageLoad() {
    setImageLoaded(true);
  }

  function handledownload() {
   console.log("click download")
    // Download logic
    const fileName = "Image.jpg"
    const fileURL = webformatURL

    saveAs(fileURL,fileName);

  }
  function handleLike(){
    setLike((prevLike )=> !prevLike )
  }
  function handleFavourite(){
    setFavourite((prevFavourite => !prevFavourite))
    
  }

  //const{feedback} = useContext(AppContext)

  return (
        
     <div
      className={`gallery--div ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={dimensions}
      
    >
      {hovered && (
        <div className="downloadicon--div"  >
          <Download
            className="download--icon"
            color="black"
            size={35}
            style={{ backgroundColor: "#ddd", padding: "5px", borderRadius: "5px" }}
            onClick={handledownload}
           
          />
         
        </div>
        
      )}
        {hovered && (
        <div className="hearticon--div" >
       
          <Heart
            className="heart--icon"
            color= {like ? "red": "white"}
            fontSize="bold"
            size={35}
            style={{  padding: "6px",
               borderRadius:"6px" ,
               border:like ? "none" : "1px solid white" ,
               backgroundColor : like ? "white" : ""
              }}
           
              onClick ={handleLike}
          />
        </div>
        
      )}
        {hovered && (
        <div className={`favourites-icon-div ${hovered ? "hovered" : ""}`}>
       
         {favourite ?  <BookmarkCheck
            className="favourites--icon"
            color={favourite ? "rgb(139, 231, 139)":"white"}
            size={35}
            style={{ padding: "5px" ,
             borderRadius:"6px" ,
             border: favourite ? "none" : "1px solid white",
             backgroundColor: favourite ? "white": "",
             
            }}
            onClick={handleFavourite}
          /> : <BookmarkPlus
          className="favourites--icon"
          color={favourite ? "rgb(139, 231, 139)":"white"}
          size={35}
          style={{ padding: "5px" ,
           borderRadius:"6px" ,
           border: favourite ? "none" : "1px solid white",
           backgroundColor: favourite ? "white": "",
           
          }}
          onClick={handleFavourite}
        />}
        </div>
        
      )}
      {hovered && (
        <div className="user--profile"> 
            <h1 className="user--name">{user}</h1>
        </div>
      )}
      {hovered && (
        
            <img src={userProfile} alt="" className="user--image" />
     
      )}
       {hovered && (
        <div className="picture--tag"> 
            <p className="tag" >{tags}</p>
        </div>
      )}
      <div className="image-container">
        <img
         src={webformatURL}
          alt=""
          className={`searched--image ${imageLoaded ? "fade-in" : ""}`}
          onLoad={handleImageLoad}
          style={dimensions}   
      />
      </div>
      
    </div>

  ); 
}

export default Gallery;
