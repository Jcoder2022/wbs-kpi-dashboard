package com.wbs.wbskpidashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class WbsKpiDashboardApplication {

	public static void main(String[] args) {
		SpringApplication.run(WbsKpiDashboardApplication.class, args);
	}

}
