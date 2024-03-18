package com.wbs.wbskpidashboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wbs.wbskpidashboard.model.BusinessTeamKPI;

@Repository
public interface BusinessTeamKPIRepository extends CrudRepository <BusinessTeamKPI,Long>{
    
    
    
}
