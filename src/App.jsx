import { useState } from "react";
import Fortmularios from "./components/Formularios";
import Header from "./components/Header";
import ListadoDePacientes from "./components/ListadoDePacientes";

function App() {
const [pacientes, setPacientes] = useState([]);
const [paciente, setPaciente] = useState({});

  return (
    <div className="container mx-auto mt-20 xl:p-4">
      <Header />
      <div className=" mt-12 md:flex">
        <Fortmularios 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        />
        <ListadoDePacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        paciente = {paciente}
        />
      </div>
    </div>
  );
}

export default App;
