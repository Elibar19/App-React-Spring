import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaEmpleados from "./empleados/ListaEmpleados";
import NavBar from "./plantilla/NavBar";
import AgregarEmpleado from "./empleados/AgregarEmpleado";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<ListaEmpleados/>}/>
      <Route exact path="/agregar" element={<AgregarEmpleado/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
