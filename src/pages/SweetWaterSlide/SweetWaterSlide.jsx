import React from "react"
import {principal} from './SweetWaterSlide.module.scss';
import { RoundedButton } from "../../components";
import lago from './../../assets/lago.gif'

const SweetWaterSlide= ({ goNext, texts }) => {
  return (
    <div className={principal}> {/* Aplica la clase "principal" para aplicar los estilos */}
      
      <h1>{texts[0]}</h1>
      <p>
        {texts[1]}
      </p>
      <p>
        {texts[2]}
      </p>
      <RoundedButton text={texts[3]} onClick={goNext}/>
    </div>
  );
};

export default SweetWaterSlide;