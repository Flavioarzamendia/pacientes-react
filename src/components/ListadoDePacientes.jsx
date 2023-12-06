import Paciente from "./Paciente";

const ListadoDePacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      <h2 className=" font-black  text-3xl text-center">
        Listado De Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10 font-bold">
        Administra tus {""}
        <span className=" text-indigo-600">citas y pacientes</span>
      </p>
      <Paciente/>
      <Paciente/>
      
    </div>
  );
};

export default ListadoDePacientes;
