package org.bitbucket.MatheusFSantos.hrpayroll;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@RibbonClient(name="hr-workerms")
@EnableFeignClients
@SpringBootApplication
public class HrPayrollmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrPayrollmsApplication.class, args);
	}

}
