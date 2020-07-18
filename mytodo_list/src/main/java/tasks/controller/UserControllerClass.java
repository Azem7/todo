package tasks.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tasks.controller.interfaces.InstructionsInterface;
import tasks.entity.User;
import tasks.service.IService;

import java.util.Collection;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:3000")
public class UserControllerClass implements InstructionsInterface<User> {
	
	@Autowired
	private IService<User> iService;

	@Override
	public ResponseEntity<Collection<User>> findAll() {
		return new ResponseEntity<>(iService.findAll(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<User> findById(int id) {
		return new ResponseEntity<>(iService.findById(id), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<User> save(User user) {
		return new ResponseEntity<>(iService.saveOrUpdate(user), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<User> update(User user) {
		return new ResponseEntity<>(iService.saveOrUpdate(user), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteById(int id) {
		return new ResponseEntity<>(iService.deleteById(id), HttpStatus.OK);
	}

}
