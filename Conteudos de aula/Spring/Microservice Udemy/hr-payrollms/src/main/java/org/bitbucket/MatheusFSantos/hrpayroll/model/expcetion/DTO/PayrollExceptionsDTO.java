package org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.DTO;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.domain.PayrollExceptions;

import com.fasterxml.jackson.annotation.JsonFormat;

public class PayrollExceptionsDTO implements Serializable {
	
	@Serial
	private static final long serialVersionUID = 1L;

	private final List<String> exceptionMessages;
	
	private final String exceptionService;
	
	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	private final LocalDateTime exceptionDate;
	
	public PayrollExceptionsDTO(PayrollExceptions payrollExceptions) {
		this.exceptionMessages = payrollExceptions.getExceptionMessages();
		this.exceptionService = payrollExceptions.getExceptionService();
		this.exceptionDate = payrollExceptions.getExceptionDate();
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
