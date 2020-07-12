package tasks.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tasks.entity.Task;
import tasks.repository.TasksRepository;

@RestController
public class TaskController {

	// @Autowired
	private TasksRepository tasksRepository;

	// @RequestMapping(method = RequestMethod.GET, path = "/", produces =
	// MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(method = { RequestMethod.PUT })
	// Return all Tasks
	@GetMapping("/tasks")
	public List<Task> getAllTasks() {
		return tasksRepository.findAll();
	}

	// Put request
	@PostMapping("/task")
	public Task createNote(@Validated @RequestBody Task task) {
		return tasksRepository.save(task);
	}

	// Get request
	@GetMapping("/task/{id}")
	public Task getNoteById(@PathVariable(value = "id") Integer taskId)
			throws Throwable {
		return tasksRepository.findById(taskId).orElseThrow(null);
	}

	// Update request
	@PutMapping("/task/{id}")
	public Task updateNote(@PathVariable(value = "id") Integer taskId,
			@Validated @RequestBody Task taskInfo) throws Throwable {

		Task task = tasksRepository.findById(taskId).orElseThrow(null);

		task.setDueDate(taskInfo.getDueDate());
		task.setTask(taskInfo.getTask());
		task.setCreationDate(taskInfo.getCreationDate());

		Task newtask = tasksRepository.save(task);

		return newtask;
	}

	// Delete request
	@DeleteMapping("/task/{id}")
	public ResponseEntity<?> deleteTask(
			@PathVariable(value = "id") Integer taskId) throws Throwable {
		Task task = tasksRepository.findById(taskId).orElseThrow(null);

		tasksRepository.delete(task);

		return ResponseEntity.ok().build();
	}
}
