package org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.domain;

import java.io.Serial;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

public class PayrollExceptions extends Exception {
	
	@Serial
	private static final long serialVersionUID = 1L;
	
	private final List<String> exceptionMessages;
	
	private final String exceptionService;
	
	private final LocalDateTime exceptionDate;
	
	public PayrollExceptions(List<String> exceptionMessages) {
		this.exceptionMessages = exceptionMessages;
		this.exceptionService = "Payroll Microservice";
		this.exceptionDate = LocalDateTime.now();
	}

	public PayrollExceptions(String exceptionMessage) {
		this.exceptionMessages = Collections.singletonList(exceptionMessage);
		this.exceptionService = "Payroll Microservice";
		this.exceptionDate = LocalDateTime.now();
	}
	
	public List<String> getExceptionMessages() {
		return this.exceptionMessages;
	}
	
	public String getExceptionService() {
		return this.exceptionService;
	}
	
	public LocalDateTime getExceptionDate() {
		return this.exceptionDate;
	}

}
