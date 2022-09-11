import React from "react";
import Modal from "./Modal";


const Aves = ({ aves =[]}) => {
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
            <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target={`#${item.uid}`}>
            Detalles
            </button>
            </div>
            <Modal id={item.uid} titulo={item.name.spanish} descripcion={item.name.english}/>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Aves;
