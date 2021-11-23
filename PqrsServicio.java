package com.example.Servicliente247.servicios;

import java.util.ArrayList;
import java.util.Optional;

import com.example.Servicliente247.modelos.PqrsModelo;
import com.example.Servicliente247.repositorios.PqrsRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PqrsServicio {

    @Autowired
    PqrsRepositorio pqrsRep;

    public PqrsModelo guardaPqrs(PqrsModelo pqrs) {
        return pqrsRep.save(pqrs);
    }

    public ArrayList<PqrsModelo> obtenerPqrs() {
        return (ArrayList<PqrsModelo>) pqrsRep.findAll();
    }

    public boolean eliminaPqrs(Long id) {
        if (pqrsRep.existsById(id)) {
            pqrsRep.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public Optional<PqrsModelo> obtenerPqrsPorId(Long id) {
        return pqrsRep.findById(id);
    }

    public ArrayList<PqrsModelo> obtenerPqrsPorNombre(String nombre) {
        return pqrsRep.findByNombre(nombre);
    }

}
