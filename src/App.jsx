import { useState } from "react";
import Fortmularios from "./components/Formularios";
import Header from "./components/Header";
import ListadoDePacientes from "./components/ListadoDePacientes";

function App() {
const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20 xl:p-4">
      <Header />
      <div className=" mt-12 md:flex">
        <Fortmularios 
        pacientes={pacientes}
        setPacientes={setPacientes}
        />
        <ListadoDePacientes />
      </div>
    </div>
  );
}

export default App;
