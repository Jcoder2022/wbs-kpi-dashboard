package com.wbs.wbskpidashboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wbs.wbskpidashboard.model.BusinessTeamsKPI;

@Repository
public interface BusinessTeamsKPIRepository extends CrudRepository <BusinessTeamsKPI,Long>{
    
}
