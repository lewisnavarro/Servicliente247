package com.example.Servicliente247.repositorios;

import java.util.ArrayList;

import com.example.Servicliente247.modelos.PqrsModelo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PqrsRepositorio extends MongoRepository<PqrsModelo, Long> {
    ArrayList<PqrsModelo> findByNombre(String nombre);
}
