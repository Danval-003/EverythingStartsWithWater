import React,{ useState } from 'react';
import cascade from "./../../assets/cascade.png"
import paisaje from "./../../assets/paisaje.png"
import lake from "./../../assets/lake.svg"
import taiga from "./../../assets/taiga.svg"
import './ImageGalery.css'

const ImageGalery = () => {
    const [isHeads1, setIsHeads1] = useState(true);
  const [isHeads2, setIsHeads2] = useState(true);

  const handleClick1 = () => {
    setIsHeads1(!isHeads1);
  };

  const handleClick2 = () => {
    setIsHeads2(!isHeads2);
  };

  return (
    <div className="image-gallery">
      <img src={isHeads1 ? cascade : paisaje} alt="Coin" onClick={handleClick1} />
      <img src={isHeads2 ? lake : taiga} alt="Coin" onClick={handleClick2} />
    </div>
  );
};
  

export default ImageGalery;
