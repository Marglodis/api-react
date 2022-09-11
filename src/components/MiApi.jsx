import { useEffect, useState } from "react";
import Aves from "./Aves";
import Busqueda from "./Busqueda";
import Paginacion from "./Paginacion";

const MiApi = () => {
  const [birds, setBirds] = useState([]);
  const urlAPI = "https://aves.ninjas.cl/api/birds";
  const [currentPage, setCurrentPage] = useState(1);
  const [birdsPerPage] = useState(20);
  const [busqueda, setBusqueda] = useState("");
  const consultaAPI = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBirds(data.sort((a, b) => (a.name.spanish > b.name.spanish ? 1 : -1)));
    } catch (e) {
      alert("Algo anda mal con la API.", e.message);
      return null;
    }
  };
  useEffect(() => {
    consultaAPI(urlAPI);
  }, []);

  const results = !busqueda
    ? birds
    : birds.filter((dato) =>
        dato.name.spanish.toLowerCase().includes(busqueda.toLocaleLowerCase())
      );

  const indexOfLastPost = currentPage * birdsPerPage;
  const indexOfFirstPost = indexOfLastPost - birdsPerPage;

  const currentBirds = !busqueda
    ? results.slice(indexOfFirstPost, indexOfLastPost)
    : results;

  // Cambiar de Página
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Busqueda
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        resultado={currentBirds}
      />
      <div>
        <Paginacion
          birdsPerPage={birdsPerPage}
          totalBirds={results.length}
          paginate={paginate}
        />
        <Aves aves={currentBirds} />
        <Paginacion
          birdsPerPage={birdsPerPage}
          totalBirds={results.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default MiApi;
