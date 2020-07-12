package tasks.repository;

import tasks.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TasksRepository extends JpaRepository<Task, Integer>  {

}
