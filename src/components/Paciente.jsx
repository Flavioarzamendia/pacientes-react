const Paciente = ({paciente, setPaciente, eliminarPaciente }) => {
  const {nombre, propietario, email, alta, sintomas,id} = paciente
  const handleEliminar = () => {
    const respuesta = confirm("deseas eliminar este paciente?");
    if(respuesta){
        eliminarPaciente(id)
    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">
      <p className=" font-bold">
        Nombre: {""}
        <span className=" font-normal normal-case">{nombre}</span>
      </p>
      <p className=" font-bold">
        Propietario: {""}
        <span className=" font-normal normal-case">{propietario}</span>
      </p>
      <p className=" font-bold">
        Email: {""}
        <span className=" font-normal normal-case">{email}</span>
      </p>
      <p className=" font-bold">
        Fecha del Alta: {""}
        <span className=" font-normal normal-case">{alta}</span>
      </p>
      <p className=" font-bold">
        Síntomas: {""}
        <span className=" font-normal normal-case">{sintomas}</span>
      </p>
      <div className="block  md:flex justify-between mt-10 ">
        <button 
        type="button" className="mb-5  py-2 md:py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={() => setPaciente(paciente)}
        >Editar</button>
         <button 
        type="button" className="mb-5 py-2 ml-2 md:py-2 px-7 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
