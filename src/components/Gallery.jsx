import React, { useState } from "react";
import { BookmarkPlus, Download, Heart } from "react-bootstrap-icons";
import "../components/style.scss";

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
    // Download logic
  }

  return (
        
    <div
      className={`gallery--div ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={dimensions}
    >
      {hovered && (
        <div className="downloadicon--div">
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
        <div className="hearticon--div">
       
          <Heart
            className="heart--icon "
            color="white"
            fontSize="bold"
            size={35}
            style={{  padding: "6px", borderRadius:"6px" ,border:"1px solid white" }}
            onClick={handledownload}
          />
        </div>
        
      )}
        {hovered && (
        <div className="favourites-icon-div">
       
          <BookmarkPlus
            className="favourites--icon"
            color="white"
            size={35}
            style={{ padding: "5px" , borderRadius:"6px" ,border:"1px solid white"}}
            onClick={handledownload}
          />
        </div>
        
      )}
      {hovered && (
        <div className="user--profile"> 
            <h1 className="user--name">{user}</h1>
        </div>
      )}
      {hovered && (
        
            <img src={userProfile} alt="" className="user--image"/>
     
      )}
       {hovered && (
        <div className="picture--tag"> 
            <p className="tag">{tags}</p>
        </div>
      )}
      <img
        src={webformatURL}
        alt=""
        className={`searched--image ${imageLoaded ? "fade-in" : ""}`}
        onLoad={handleImageLoad}
        style={dimensions}
      />
    </div>

  );
}

export default Gallery;
