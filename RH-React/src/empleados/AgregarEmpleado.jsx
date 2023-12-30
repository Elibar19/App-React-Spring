import React from 'react'

export default function AgregarEmpleado() {
    return (
        <div className="container">
            <div className='container text-center'>
                <h3>Agregar Empleado</h3>
            </div>
            <form>
                <div className="mb-3">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" required={true}/>
                </div>
                <div className="mb-3">
                    <label for="departamento" className="form-label">Departamento</label>
                    <input type="text" className="form-control" id="departamento" name="departamento" required={true}/>
                </div>
                <div className="mb-3">
                    <label for="sueldo" className="form-label">Sueldo</label>
                    <input type="number" step="any" className="form-control" id="sueldo" name="sueldo" required={true}/>
                </div>
                <div className='text-center'>
                <button type="submit" className="btn btn-primary btn-sm me-3">Agregar</button>
                <a href="/" className='btn btn-danger btn-sm'>Regresar</a>
                </div>
            </form>
        </div>
    )
}
