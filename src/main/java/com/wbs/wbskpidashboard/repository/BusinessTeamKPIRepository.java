package com.wbs.wbskpidashboard.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wbs.wbskpidashboard.model.BusinessTeamKPI;

import java.time.LocalDate;
import java.util.List;


@Repository
public interface BusinessTeamKPIRepository extends CrudRepository <BusinessTeamKPI,Long>{
    
    List<BusinessTeamKPI> findByTeamName(String teamName);

   
    List<BusinessTeamKPI> findByKpiBusinessMeasure(String kpiBusinessMeasure);     

    @Query(value = "SELECT  AVG(kpi.value) "+
    "FROM business_team_kpi kpi where kpi.team_name = :teamName and  kpi.kpi_business_measure= :kpiBusinessMeasure" , nativeQuery = true)
    Double retreiveValue(@Param("teamName") String teamName,@Param("kpiBusinessMeasure") String kpiBusinessMeasure);


    List<BusinessTeamKPI> findByKpiBusinessMeasureAndDataForDay(String kpiMeasure, LocalDate date);
}
