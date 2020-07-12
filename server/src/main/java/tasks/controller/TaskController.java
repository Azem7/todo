package tasks.controller;

import tasks.entity.Task;
import tasks.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TaskController {

    @Autowired
    TasksRepository tasksRepository;

    @RequestMapping(
            method = RequestMethod.GET,
            path = "/",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<Task> getPerson() {
        List<Task> tasksList = tasksRepository.findAll();
        return tasksList;
    }
}
