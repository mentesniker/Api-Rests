package com.restfulwebservices.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restfulwebservices.services.UsuarioService;
import com.restfulwebservices.models.Usuario;

@RestController
public class UsuarioCtrl {
	
	@Autowired
	private UsuarioService usuarioService;
	
	
	@GetMapping("/usuario")
	public List<Usuario> getPersonas(){
		return usuarioService.getUsuarios();
	}
	
	@GetMapping("/usuario/{id}")
	public ResponseEntity<Object> getUsuario(@PathVariable int id){
		return usuarioService.getUsuario(id);
	}
	
	@PostMapping("/usuario")
	public ResponseEntity<Object> createUsuario(@Valid @RequestBody Usuario usuario){
		ResponseEntity<Object> savedUsuario = usuarioService.createUsuario(usuario);
		return null;
	}
	
	@PutMapping("/usuario/{id}")
	public void updateUsuario(@Valid @RequestBody Usuario usuario, @PathVariable int id) {
		usuarioService.updateUsuario(id, usuario);
	}
	
	@DeleteMapping("/usuario/{id}")
	public void deleteUsuario(@PathVariable int id) {
		usuarioService.deleteUsuario(id);
	}
}