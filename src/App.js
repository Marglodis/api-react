import MiApi from "./components/MiApi";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container">
      <MiApi />
          
      <Footer api="https://aves.ninjas.cl/api/birds" />
      
      

    </div>
  );
}

export default App;
