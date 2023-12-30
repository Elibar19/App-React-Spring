package eb.rh.controlador;

import eb.rh.modelo.Empleado;
import eb.rh.servicio.EmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("rh-app")
@CrossOrigin(value = "http://localhost:5173") //indica desde donde va a recibir la informacion.
public class EmpleadoController {
    private static final Logger logger = LoggerFactory.getLogger(EmpleadoController.class); //envia informacion a consola

    @Autowired
    private EmpleadoServicio empleadoServicio;

    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados(){
        var empleados = empleadoServicio.listarEmpleados();
        //enviamos la info de cada empleado a consola
        empleados.forEach((empleado -> logger.info(empleado.toString())));
        return empleados;
    }
    
    @PostMapping("/empleados")
    public Empleado guardarEmpleado(@RequestBody Empleado empleado){
        return empleadoServicio.guardarEmpleado(empleado);
    }

}
