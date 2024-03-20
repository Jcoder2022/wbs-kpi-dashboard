package com.wbs.wbskpidashboard.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.wbs.wbskpidashboard.model.BusinessTeam;
import com.wbs.wbskpidashboard.model.BusinessTeamKPI;
import com.wbs.wbskpidashboard.model.TeamSummary;
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

    
    private final static String scores = "scores";
    private final static String factoryUtilization = "factory_utilization";
    private final static String employeeEngagement = "employee_engagement";
    private final static String interestCoverage = "interest_coverage"; 
    private final static String marketingSpendRev="marketing_spend_rev";
    private final static String eCarSales="e_cars_sales";
    private final static String co2Penalty="co2_penalty";
    private final static String wacc = "wacc";


    @GetMapping("wbs-kpi-dashboard/kpi/summary")
    public Map getMethodName() {
        
        Map<String,TeamSummary> summaryMap = new HashMap<>(); 
        
        List<BusinessTeam> businessTeams = (ArrayList<BusinessTeam>) businessTeamRepository.findAll();    

        for (BusinessTeam businessTeam: businessTeams) {   
            Double avgScores =  businessTeamKPIRepository.retreiveValue(businessTeam.getTeamName(),scores);
            Double avgFactoryUtilization =  businessTeamKPIRepository.retreiveValue(businessTeam.getTeamName(),factoryUtilization);
            Double avgEmployeeEngagement = businessTeamKPIRepository.retreiveValue(businessTeam.getTeamName(),employeeEngagement);
            Double avgInterestCoverage = businessTeamKPIRepository.retreiveValue(businessTeam.getTeamName(),interestCoverage);
            Double avgMarketingSpendRev =businessTeamKPIRepository.retreiveValue(businessTeam.getTeamName(),marketingSpendRev ) ;
            Double avgECarSales = businessTeamKPIRepository.retreiveValue(businessTeam.getTeamName(),eCarSales);
            Double avgCo2Penalty = businessTeamKPIRepository.retreiveValue(businessTeam.getTeamName(),co2Penalty);
            Double avgWacc = businessTeamKPIRepository.retreiveValue(businessTeam.getTeamName(),wacc);
        
            TeamSummary teamSummary = new TeamSummary( avgWacc,  avgScores, avgFactoryUtilization,  avgEmployeeEngagement,
            avgInterestCoverage, avgMarketingSpendRev,  avgECarSales, avgCo2Penalty);


            summaryMap.put(businessTeam.getTeamName(), teamSummary);
            
        }


        Double avgScores =  businessTeamKPIRepository.retreiveValue(scores);
        Double avgFactoryUtilization =  businessTeamKPIRepository.retreiveValue(factoryUtilization);
        Double avgEmployeeEngagement = businessTeamKPIRepository.retreiveValue(employeeEngagement);
        Double avgInterestCoverage = businessTeamKPIRepository.retreiveValue(interestCoverage);
        Double avgMarketingSpendRev =businessTeamKPIRepository.retreiveValue(marketingSpendRev ) ;
        Double avgECarSales = businessTeamKPIRepository.retreiveValue(eCarSales);
        Double avgCo2Penalty = businessTeamKPIRepository.retreiveValue(co2Penalty);
        Double avgWacc = businessTeamKPIRepository.retreiveValue(wacc);
    
        TeamSummary teamSummary = new TeamSummary( avgWacc,  avgScores, avgFactoryUtilization,  avgEmployeeEngagement,
        avgInterestCoverage, avgMarketingSpendRev,  avgECarSales, avgCo2Penalty);


        summaryMap.put("Overall Average", teamSummary);
        
        

        
        return summaryMap;
    }
    
    
}
