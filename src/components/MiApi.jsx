import { useEffect,useState } from "react";

const MiApi = () => {

    const [dato,setDato] = useState([]);
    const idave ="";

    const consultaAPI = async () =>{
        try {
        const url = "https://aves.ninjas.cl/api/birds";

        const response = await fetch (url);    
        const datos = await response.json();
        console.log("Objeto Data de la api: ", datos);
        setDato(datos);
        }
        catch (e){
            alert("Algo anda mal con la API. Intente nuevamente", e.message);
        }
        
    };
useEffect(()=>{   
    consultaAPI();
},[idave]);



return (
    <div>
        <h1>Contenido de Consulta</h1>
        <ul>
            {dato.map((d)=>(<li key={d.uid}>{d.name.spanish} - {d.name.latin} - {d._links.self} - </li>))}
        </ul>
    </div>
);
}


export default MiApi; 
