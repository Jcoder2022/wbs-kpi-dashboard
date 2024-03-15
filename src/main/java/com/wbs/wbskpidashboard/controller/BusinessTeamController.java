package com.wbs.wbskpidashboard.controller;

import org.springframework.web.bind.annotation.RestController;

import com.wbs.wbskpidashboard.model.BusinessTeam;
import com.wbs.wbskpidashboard.repository.BusinessTeamRepository;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class BusinessTeamController {
    
    private BusinessTeamRepository businessTeamRepository;

    public BusinessTeamController(BusinessTeamRepository businessTeamRepository){
        this.businessTeamRepository = businessTeamRepository;
    }


    @GetMapping("wbs-kpi-dashboard/teams")
    public List<BusinessTeam> getAllTeams() {
       return (List<BusinessTeam>) businessTeamRepository.findAll();
    }
    
    
}
