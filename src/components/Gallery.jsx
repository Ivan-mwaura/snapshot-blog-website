import React, { useContext, useState } from "react";
import { BookmarkCheck, BookmarkPlus, Download, Heart } from "react-bootstrap-icons";
import "../components/style.scss";
import { saveAs } from "file-saver";
import { AppContext } from "../Context/querycontext";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function calculateDimensions() {
  const width = getRandomNumber(220, 250);
  const height = getRandomNumber(200, 340);
  return {
    width: `${width}px`,
    height: `${height}px`,
  };
}

function Gallery({ webformatURL ,user,userProfile,tags}) {
  const [hovered, setHover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [dimensions] = useState(calculateDimensions());
  const[like, setLike]= useState(false)
  const[favourite, setFavourite] = useState(false)

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

  const{feedback} = useContext(AppContext)

  return (
        
    !feedback ?  <div
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
      <img
        src={webformatURL}
        alt=""
        className={`searched--image ${imageLoaded ? "fade-in" : ""}`}
        onLoad={handleImageLoad}
        style={dimensions}
        
      />
    </div> : null

  ); 
}

export default Gallery;
