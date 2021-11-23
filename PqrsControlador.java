package com.example.Servicliente247.controladores;

//import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Optional;

import com.example.Servicliente247.modelos.PqrsModelo;
import com.example.Servicliente247.servicios.PqrsServicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pqrs")
public class PqrsControlador {

    @Autowired
    PqrsServicio pqrsServicio;

    @PostMapping()
    public PqrsModelo guardarPqrs(@RequestBody PqrsModelo pqrs) {
        return pqrsServicio.guardaPqrs(pqrs);
    }

    @GetMapping
    public ArrayList<PqrsModelo> obtenerPqrs() {
        return pqrsServicio.obtenerPqrs();
    }

    @DeleteMapping(path = "/{id}")
    public boolean eliminarPqrsPorId(@PathVariable("id") Long id) {
        return pqrsServicio.eliminaPqrs(id);
    }

    @GetMapping(path = "/{id}")
    public Optional<PqrsModelo> obtenerPqrsPorId(@PathVariable("id") long id) {
        return pqrsServicio.obtenerPqrsPorId(id);
    }

    @GetMapping(path = "/buscar/{nombre}")
    public ArrayList<PqrsModelo> obtenerPqrsPorNombre(@PathVariable("nombre") String nombre) {
        return pqrsServicio.obtenerPqrsPorNombre(nombre);
    }

}
