package tasks.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tasks.entity.Task;

public interface TasksRepository extends JpaRepository<Task, Integer> {

}
