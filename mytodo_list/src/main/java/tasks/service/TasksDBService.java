package tasks.service;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tasks.entity.Task;
import tasks.repository.TasksRepository;

import java.util.Collection;

@Service
public class TasksDBService implements IService<Task> {
	
	@Autowired
	private TasksRepository tasksRepository;

	@Override
	public Collection<Task> findAll() {
		return tasksRepository.findAll();
	}

	@Override
	public Task findById(int id) {
		return tasksRepository.findById(id).get();
	}

	@Override
	public Task saveOrUpdate(Task task) {
		return tasksRepository.saveAndFlush(task);
	}

	@Override
	public String deleteById(int id) {
		JSONObject jsonObject = new JSONObject();
		try {
			tasksRepository.deleteById(id);
			jsonObject.put("message", "Task deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}

}
