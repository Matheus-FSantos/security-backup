package org.bitbucket.MatheusFSantos.hrworker.model.configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.bitbucket.MatheusFSantos.hrworker.model.domain.Worker;
import org.bitbucket.MatheusFSantos.hrworker.model.exception.domain.WorkerExceptions;
import org.bitbucket.MatheusFSantos.hrworker.model.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataBase {

    @Bean
    CommandLineRunner init(@Autowired WorkerService workerService) {
        return args -> {
            List<Worker> workers = new ArrayList<Worker>();
            workers.add(new Worker(null, "Matheus Ferreira Santos", 150.0));
            workers.add(new Worker(null, "Joyce Pereira Albuquerque", 150.0));
            workers.add(new Worker(null, "Roberto do Nascimento Júnior", 114.0));
            workers.add(new Worker(null, "Flavio Dino Prado do Nascimento", 430.0));
            workers.add(new Worker(null, "Edson Filho de Souza", 160.90));
            workers.add(new Worker(null, "Leticia Miranda", 1000.0));
            workers.add(new Worker(null, "Fernanda dos Santos Filho", 540.0));

            workers.forEach(worker -> {
                try {
                    workerService.save(worker);
                } catch (WorkerExceptions e) {
                    System.out.println(e.getMessage());
                }
            });

        };
    }
	
	

}
