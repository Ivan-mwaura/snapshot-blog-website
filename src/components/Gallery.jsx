import React, { useState } from "react";
import { Download } from "react-bootstrap-icons";
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

function Gallery({ webformatURL }) {
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
