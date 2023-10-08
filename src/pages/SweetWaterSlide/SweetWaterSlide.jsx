import React from "react"
import {principal} from './SweetWaterSlide.module.scss';
import { RoundedButton } from "../../components";

const SweetWaterSlide= ({ goNext }) => {
  return (
    <div className={principal}> {/* Aplica la clase "principal" para aplicar los estilos */}
      <img
        src="imagen-lago.jpg" // Agrega la ruta de la imagen que deseas mostrar en el componente
        alt="Lago cristalino con vida acuática"
      />
      <h1>El Oro Líquido</h1>
      <p>
        El agua dulce es fundamental para la vida en la Tierra. Desde los océanos
        hasta los ríos y los lagos, es esencial para la supervivencia de todas las
        formas de vida.
      </p>
      <RoundedButton text="Siguiente" onClick={goNext}/>
    </div>
  );
};

export default SweetWaterSlide;