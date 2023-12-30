package eb.rh.servicio;

import eb.rh.modelo.Empleado;
import eb.rh.repositorio.EmpleadoRepositorio;

import java.util.List;

public interface IEmpleadoServicio {
    public List<Empleado> listarEmpleados();
    public Empleado buscarEmpleadoPorId(Integer idEmpleado);
    public Empleado guardarEmpleado(Empleado empleado);
    public void eliminarEmpleado(Empleado empleado);

}
