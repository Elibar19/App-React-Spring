import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function ListaEmpleados() {
  const urlBase = "http://localhost:8080/rh-app/empleados"; //URL DEL BACK

  const [empleados, setEmpleados] = useState([]); //REVISA CAMBIOS DE ESTADO

  //SE EJECUTA CUANDO CARGA POR PRIMERA VEZ LA PAGINA
  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    console.log("Lista empleados");
    console.log(resultado.data);
    setEmpleados(resultado.data);
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Sistema de Recursos Humanos</h3>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
          </tr>
        </thead>
        <tbody>
            
          { //ITERAMOS CADA EMPLEADO
            empleados.map((empleado, indice) => (
            <tr key={indice}>
              <th scope="row">{empleado.idEmpleado}</th>
              <td>{empleado.nombre}</td>
              <td>{empleado.departamento}</td>
              <td><NumericFormat value={empleado.sueldo} 
                displayType={"text"} decimalSeparator=","
                thousandSeparator="." prefix={"$"}
                decimalScale={2} fixedDecimalScale/></td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}
