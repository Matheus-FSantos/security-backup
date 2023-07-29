package org.bitbucket.MatheusFSantos.hrworker.controller.advice;

import org.bitbucket.MatheusFSantos.hrworker.model.exception.DTO.WorkerExceptionsDTO;
import org.bitbucket.MatheusFSantos.hrworker.model.exception.domain.WorkerExceptions;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class WorkerControllerAdvice {

	@ExceptionHandler(WorkerExceptions.class)
	public ResponseEntity<?> handleWorkerExceptions(WorkerExceptions workerExceptions) {
		return ResponseEntity.badRequest().body(new WorkerExceptionsDTO(workerExceptions));
	}
	
}
