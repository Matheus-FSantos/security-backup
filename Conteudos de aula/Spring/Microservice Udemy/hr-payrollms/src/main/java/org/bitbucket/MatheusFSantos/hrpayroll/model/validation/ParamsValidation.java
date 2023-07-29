package org.bitbucket.MatheusFSantos.hrpayroll.model.validation;

import java.util.Map;

import org.bitbucket.MatheusFSantos.hrpayroll.model.expcetion.domain.PayrollExceptions;

public class ParamsValidation {
	
	public static void validation(Map<String, String> requestParams) throws PayrollExceptions {
		if(!requestParams.containsKey("workerId") || !requestParams.containsKey("days"))
			throw new PayrollExceptions("Invalid params");
	}

}
