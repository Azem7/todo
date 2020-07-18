package tasks.controller.interfaces;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

public interface InstructionsInterface<T> {
	@GetMapping
    ResponseEntity<Collection<T>> findAll();
	
	@GetMapping("{id}")
    ResponseEntity<T> findById(@PathVariable int id);
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<T> save(@RequestBody T t);
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<T> update(@RequestBody T t);
	
	@DeleteMapping("{id}")
    ResponseEntity<String> deleteById(@PathVariable int id);
}
