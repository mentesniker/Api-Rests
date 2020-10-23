package com.restfulwebservices.services;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.restfulwebservices.models.Persona;

public interface PersonaService {
	public abstract List<Persona> getPersonas();
	public abstract ResponseEntity<Object> getPersona(int id);
	public abstract ResponseEntity<Object> createPersona(Persona persona);
	public abstract void updatePersona(int id, Persona persona);
	public abstract void deletePersona(int id);
}