const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">
      <p className=" font-bold">
        Nombre: {""}
        <span className=" font-normal normal-case">Hook</span>
      </p>
      <p className=" font-bold">
        Propietario: {""}
        <span className=" font-normal normal-case">Flavio</span>
      </p>
      <p className=" font-bold">
        Email: {""}
        <span className=" font-normal normal-case">correo@correo.com</span>
      </p>
      <p className=" font-bold">
        Fecha del Alta: {""}
        <span className=" font-normal normal-case">03/11/2023</span>
      </p>
      <p className=" font-bold">
        Síntomas: {""}
        <span className=" font-normal normal-case">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          numquam saepe temporibus nostrum culpa! Et natus voluptates distinctio
          praesentium expedita pariatur, eligendi dolorum, quod, accusantium
          deleniti illum reprehenderit recusandae.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
