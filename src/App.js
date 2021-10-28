// IMPORT useState
import { useState } from 'react';
import React from 'react';
import './styles.css';
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData"

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] 
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage]  = useState(imagesArr[0].img);
  const [clicked, setClicked]  = useState({border : 'transparent'});
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL

  const handleClick = (e, url) => {
    // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
    setBigImage(url)
    setClicked({border : 'transparent'})
    // e.preventDefault();
    e.target.style.border = '5px solid green'
  }

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  const images = imagesArr.map((ele,index) => {
    // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
    console.log(ele)
    return (<img 
    className="thumb"
    src={ele.img}
    alt={ele.city}
    key={index}
    onClick={(e) => handleClick(e, ele.img)}
    style= {clicked}
    // s ? {border : '5px solid green'} : {border : 'transparent'} 
    // style="border: 5px solid green;
    />
    )
  })


  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt='bigImage' />
      </div>
    </div>
  );
}
