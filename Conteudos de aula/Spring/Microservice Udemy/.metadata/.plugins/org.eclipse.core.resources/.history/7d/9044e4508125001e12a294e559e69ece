package org.bitbucket.MatheusFSantos.hrworker.model.DAO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.bitbucket.MatheusFSantos.hrworker.model.domain.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerReposity extends JpaRepository<Worker, UUID> {

	List<Worker> findByName(String name);
	
	List<Worker> findByNameContains(String name);
	
}
