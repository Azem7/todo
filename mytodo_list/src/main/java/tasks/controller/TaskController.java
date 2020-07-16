package tasks.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import tasks.entity.Task;
import tasks.repository.TasksRepository;

@RestController
public class TaskController {

	@Autowired
	private TasksRepository tasksRepository;

	//@RequestMapping(method = RequestMethod.GET, path = "/", produces =
	//MediaType.APPLICATION_JSON_VALUE)

	// Return all Tasks
	@GetMapping("/tasks")
	public List<Task> getAllTasks() {
		return tasksRepository.findAll();
	}


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
}
