package com.wbs.wbskpidashboard.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wbs.wbskpidashboard.model.BusinessTeamKPI;
import java.util.List;


@Repository
public interface BusinessTeamKPIRepository extends CrudRepository <BusinessTeamKPI,Long>{
    
    List<BusinessTeamKPI> findByTeamName(String teamName);

//     private String kpiBusinessMeasure; 		
//    private double value;
//    private String teamName;
   
    List<BusinessTeamKPI> findByKpiBusinessMeasure(String kpiBusinessMeasure);     

    @Query(value = "SELECT team_name,kpi_business_measure , AVG(kpi.value) FROM business_team_kpi kpi" , nativeQuery = true)
    List<BusinessTeamKPI> findAverageTeamKPIs();
}
