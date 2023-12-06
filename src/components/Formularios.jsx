import { useState, useEffect } from "react";

const Formularios = ({pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError]= useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion del formulario
    if([nombre, propietario, email, alta, sintomas].includes("")){

      setError(true);
      return;

    }
    setError(false);
   //objeto de paciente
     const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
     }
     
     setPacientes([...pacientes, objetoPaciente]);

     setNombre("");
     setPropietario("");
     setEmail("");
     setAlta("");
     setSintomas("");
    
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl text-center">
        Seguimiento De Pacientes
      </h2>
      <p className=" text-lg mt-5 text-center mb-10 font-bold">
        Añade Pacientes y {""}
        <span className=" text-indigo-600 ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error && <div className="bg-red-800 text-white text-center p-3 rounded-md mb-2 font-bold uppercase"><p>Es obligatorio Llenar todos los campos</p></div>}

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
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formularios;
