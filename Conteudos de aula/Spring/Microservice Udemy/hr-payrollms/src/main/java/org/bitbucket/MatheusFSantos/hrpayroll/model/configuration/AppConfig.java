package org.bitbucket.MatheusFSantos.hrpayroll.model.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
	
	@Bean
	public RestTemplate registerRestTemplate() {
		return new RestTemplate();
	}
	
}
