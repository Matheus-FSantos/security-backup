package org.bitbucket.MatheusFSantos.hrpayroll.controller;

import java.util.Map;

import org.bitbucket.MatheusFSantos.hrpayroll.model.domain.Payment;
import org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.domain.PayrollExceptions;
import org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.domain.WorkerExceptions;
import org.bitbucket.MatheusFSantos.hrpayroll.model.service.PaymentService;
import org.bitbucket.MatheusFSantos.hrpayroll.model.validation.ParamsValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

	@Autowired
	private PaymentService paymentService;
	
	@GetMapping
	public ResponseEntity<?> getPayment(@RequestParam(required=true) Map<String, String> requestParams) throws PayrollExceptions, WorkerExceptions {
		
		ParamsValidation.validation(requestParams);
			
		Payment payment = this.paymentService.getPayment(requestParams.get("workerId"), requestParams.get("days"));
		return ResponseEntity.ok().body(payment);
		
	}
	
}