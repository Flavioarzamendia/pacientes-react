import { useState} from "react";
import { useEffect } from "react";
import Fortmularios from "./components/Formularios";
import Header from "./components/Header";
import ListadoDePacientes from "./components/ListadoDePacientes";

function App() {
const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
const [paciente, setPaciente] = useState({});



useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify( pacientes ));
}, [pacientes])

const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualizados)
}

  return (
    <div className="container mx-auto mt-0 xl:p-4">
      <Header />
      <div className=" mt-12 md:flex">
        <Fortmularios 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente ={setPaciente}
        />
        <ListadoDePacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        paciente = {paciente}
        eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
