import React from "react";
import Detalle from "./Detalle";
//import { useEffect,useState } from "react";

const Aves = ({ aves }) => {
  return (
    
    <div className="galeria">
      {aves.map((item) => (
        <div key={item.uid} className="tarjeta">
          <div className="face front">
            <div>
              <img src={item.images.full} alt="..." />
              <h3>{item.name.spanish}</h3>
            </div>
          </div>
          <div className="face back">
            <h3>{item.name.english}</h3>
            <p>({item.name.latin})</p>
            <div className="link">
            <a href="!#"><Detalle spanish={item.name.english} english={item.name.spanish}/></a>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default Aves;
