import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {

    let navigate = useNavigate(); //se utiliza para redireccionar

    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: ""
    });

    const { nombre, departamento, sueldo } = empleado;

    const onInputChange = (e) => {
        //spread operator expande los aributos del objeto, crea una copia superficial del mismo, 
        //si name coincide con un atributo de empleado(se usa corchetes para acceder al atributo), 
        //se le asigna value. Todo envuelto en llaves para crear un objeto
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/rh-app/empleados";
        await axios.post(urlBase, empleado);
        navigate("/");
    }

    return (
        <div className="container">
            <div className='container text-center'>
                <h3>Agregar Empleado</h3>
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={(e) => onInputChange(e)}
                        required={true} />
                </div>
                <div className="mb-3">
                    <label for="departamento" className="form-label">Departamento</label>
                    <input type="text" className="form-control" id="departamento" name="departamento"
                        value={departamento} onChange={(e) => onInputChange(e)} required={true} />
                </div>
                <div className="mb-3">
                    <label for="sueldo" className="form-label">Sueldo</label>
                    <input type="number" step="any" className="form-control" id="sueldo" name="sueldo"
                        value={sueldo} onChange={(e) => onInputChange(e)} required={true} />
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary btn-sm me-3">Agregar</button>
                    <a href="/" className='btn btn-danger btn-sm'>Regresar</a>
                </div>
            </form>
        </div>
    )
}
