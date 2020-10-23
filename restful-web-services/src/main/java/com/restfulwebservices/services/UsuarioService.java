package com.restfulwebservices.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.restfulwebservices.models.Usuario;

public interface UsuarioService {
	public abstract List<Usuario> getUsuarios();
	public abstract ResponseEntity<Object> getUsuario(int id);
	public abstract ResponseEntity<Object> createUsuario(Usuario persona);
	public abstract void updateUsuario(int id, Usuario persona);
	public abstract void deleteUsuario(int id);
}