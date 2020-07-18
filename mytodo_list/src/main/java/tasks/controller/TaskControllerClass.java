package tasks.controller;

import tasks.entity.Task;
import tasks.controller.interfaces.InstructionsInterface;
import tasks.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins="http://localhost:3000")
public class TaskControllerClass implements InstructionsInterface<Task> {
	
	@Autowired
	private IService<Task> taskService;

	@Override
	public ResponseEntity<Collection<Task>> findAll() {
		return new ResponseEntity<>(taskService.findAll(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Task> findById(int id) {
		return new ResponseEntity<>(taskService.findById(id), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Task> save(Task task) {
		return new ResponseEntity<>(taskService.saveOrUpdate(task), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Task> update(Task task) {
		return new ResponseEntity<>(taskService.saveOrUpdate(task), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteById(int id) {
		return new ResponseEntity<>(taskService.deleteById(id), HttpStatus.OK);
	}

	// Old
	/*
	// post request
	 @PostMapping(path = "/add_task",produces = MediaType.APPLICATION_JSON_VALUE)
	 public @ResponseBody String addNewTask(@Validated @RequestParam String taskParam, @RequestParam String description, @RequestParam Date creationDate, @RequestParam Date dueDate) {
		Task task = new Task();
		task.setCreationDate(creationDate);
		task.setDescription(description);
		task.setTask(taskParam);
		task.setDueDate(dueDate);
	 tasksRepository.save(task);
	 return "saved";
	 }

	// Get request
	@GetMapping("/task/{id}")
	public Task getNoteById(@PathVariable(value = "id") Integer taskId)
			throws Exception {
		return tasksRepository.findById(taskId).orElseThrow( () -> new Exception("Error : Task was not found"));
	}

	// Update request
	@PutMapping("/task/{id}")
	public Task updateNote(@PathVariable(value = "id") Integer taskId,
			@Validated @RequestBody Task taskInfo) throws Exception {
		Task task = tasksRepository.findById(taskId).orElseThrow(() -> new Exception("Error : Task was not found"));
		task.setDueDate(taskInfo.getDueDate());
		task.setDescription(taskInfo.getDescription());
		task.setTask(taskInfo.getTask());
		task.setCreationDate(taskInfo.getCreationDate());
		Task newtask = tasksRepository.save(task);
		return newtask;
	}

	// Delete request
	@DeleteMapping("/task/{id}")
	public ResponseEntity<?> deleteTask(
			@PathVariable(value = "id") Integer taskId) throws Exception {
		Task task = tasksRepository.findById(taskId).orElseThrow(() -> new Exception("Error : Task was not found"));
		tasksRepository.delete(task);
		return ResponseEntity.ok().build();
	}
	 */

}
