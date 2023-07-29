package org.bitbucket.MatheusFSantos.hrpayroll.controller.advice;

import org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.DTO.PayrollExceptionsDTO;
import org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.DTO.WorkerExceptionsDTO;
import org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.domain.PayrollExceptions;
import org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.domain.WorkerExceptions;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class PaymentControllerAdvice {

	@ExceptionHandler(PayrollExceptions.class)
	public ResponseEntity<?> handlePayrollExceptions(PayrollExceptions payrollExceptions) {
		return ResponseEntity.badRequest().body(new PayrollExceptionsDTO(payrollExceptions));
	}
	
	@ExceptionHandler(WorkerExceptions.class)
	public ResponseEntity<?> handleWorkerExceptions(WorkerExceptions workerExceptions) {
		return ResponseEntity.badRequest().body(new WorkerExceptionsDTO(workerExceptions));
	}
	
}
