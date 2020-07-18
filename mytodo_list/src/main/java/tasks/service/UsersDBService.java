package tasks.service;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tasks.entity.User;
import tasks.repository.UsersRepository;

import java.util.Collection;

@Service
public class UsersDBService implements IService<User> {
	
	@Autowired
	private UsersRepository usersRepository;

	@Override
	public Collection<User> findAll() {
		return usersRepository.findAll();
	}

	@Override
	public User findById(int id) {
		return usersRepository.findById(id).get();
	}

	@Override
	public User saveOrUpdate(User user) {
		return usersRepository.saveAndFlush(user);
	}

	@Override
	public String deleteById(int id) {
		JSONObject jsonObject = new JSONObject();
		try {
			usersRepository.deleteById(id);
			jsonObject.put("message", "User deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}

}
