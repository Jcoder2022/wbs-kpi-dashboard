package com.wbs.wbskpidashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.wbs.wbskpidashboard.repository.BusinessTeamKPIRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class BusinessTeamKPIController {

    @Autowired
    private BusinessTeamKPIRepository businessTeamKPIRepository;
    
    @GetMapping("wbs-kpi-dashboard/team/{teamId}")
    public String getMethodName(@PathVariable Integer teamId) {

        return new String();
    }
    
}
