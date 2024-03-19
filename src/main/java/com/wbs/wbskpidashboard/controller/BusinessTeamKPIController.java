package com.wbs.wbskpidashboard.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.wbs.wbskpidashboard.model.BusinessTeam;
import com.wbs.wbskpidashboard.model.BusinessTeamKPI;
import com.wbs.wbskpidashboard.repository.BusinessTeamKPIRepository;
import com.wbs.wbskpidashboard.repository.BusinessTeamRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class BusinessTeamKPIController {

    @Autowired
    private BusinessTeamKPIRepository businessTeamKPIRepository;

    @Autowired
    private BusinessTeamRepository businessTeamRepository;

    
    @GetMapping("wbs-kpi-dashboard/team/{teamId}")
    public List<BusinessTeamKPI> getMethodName(@PathVariable Long teamId) {
        
        List<BusinessTeamKPI> businessTeamKPIs = new ArrayList<>();
        Optional<BusinessTeam> businessTeam = businessTeamRepository.findById(teamId);

        if(businessTeam.isPresent()){
           return businessTeamKPIRepository.findByTeamName(businessTeam.get().getTeamName());
        }
        else return businessTeamKPIs  ;  
        
    }
    

    @GetMapping("wbs-kpi-dashboard/kpi/{kpiMeasure}/day/{date}")

    public List<BusinessTeamKPI> getKPIMeasure(@PathVariable String kpiMeasure,@PathVariable LocalDate date){
        
        return businessTeamKPIRepository.findByKpiBusinessMeasureAndDataForDay(kpiMeasure,date);
    }

    
}
