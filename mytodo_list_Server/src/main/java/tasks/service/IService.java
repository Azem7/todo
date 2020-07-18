package tasks.service;

import java.util.Collection;

public interface IService<T> {
	Collection<T> findAll();
	
	T findById(int id);
	
	T saveOrUpdate(T t);
	
	String deleteById(int id);
}