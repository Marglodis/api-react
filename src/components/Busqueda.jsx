import React from "react";

const Busqueda = ({ busqueda, setBusqueda}) => {
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className="headerfull">
      <div className="titulo2">
        <h1>AVES DE CHILE</h1>
      </div>
      <div className="encabezado">
        <div className="buscar">
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={busqueda}
            onChange={handleChange}
          ></input>
          <div className="btn">
            <img src="logobird.png" alt="aves"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Busqueda;
