
import Paciente from "./Paciente";

const ListadoDePacientes = ({ pacientes, setPaciente, eliminarPaciente  }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {pacientes && pacientes.length ? (
        <>
          <h2 className=" font-bold text-white  text-3xl text-center bg-purple-700 p-5 mx-2 rounded-md">
            Listado De Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10 font-bold bg-green-100 p-1 mx-2 rounded-md">
            Administra tus {""}
            <span className=" text-indigo-600">citas y pacientes</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id}
             paciente={paciente} 
             setPaciente={setPaciente}
             eliminarPaciente={eliminarPaciente}
             />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-white  text-3xl text-center bg-red-600 p-5  w-full rounded-md">
            No Hay Pacientes
            </h2>
        </>
      )}
    </div>
  );
};

export default ListadoDePacientes;
