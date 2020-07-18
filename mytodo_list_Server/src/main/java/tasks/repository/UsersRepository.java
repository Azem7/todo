package tasks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tasks.entity.User;

public interface UsersRepository extends JpaRepository<User, Integer> {

}
