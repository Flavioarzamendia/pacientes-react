import { useState} from "react";
import { useEffect } from "react";
import Error from "./Error";

const Formularios = ({pacientes, setPacientes, paciente ,setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0  ) {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setAlta(paciente.alta)
        setSintomas(paciente.sintomas)
        
    }
}, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion del formulario

    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
     
    };
    
    

    if (paciente.id ){
      // editando el registro
     objetoPaciente.id = paciente.id;

     const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

     setPacientes(pacientesActualizados);
     setPaciente({})
    
    }
    else {
      //nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    
    //reinicio del formulario

    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className=" font-bold text-white text-3xl text-center bg-purple-700 p-5 rounded-md mx-2">
        Seguimiento De Pacientes
      </h2>
      <p className=" text-lg mt-5 text-center mb-10 font-bold bg-green-100 p-1 mx-2 rounded-md">
        Añade Pacientes y {""}
        <span className=" text-indigo-600 ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error && <Error>
          <p>Es obligatorio Llenar todos los campos</p>
          </Error>}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className=" block font-bold text-gray-700 uppercase"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className=" block font-bold text-gray-700 uppercase"
          >
            Nombre Del Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className=" block font-bold text-gray-700 uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="juanpablo@gmail.com"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className=" block font-bold text-gray-700 uppercase"
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className=" block font-bold text-gray-700 uppercase"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente" : "Agragar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formularios;
