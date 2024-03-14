package com.wbs.wbskpidashboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.wbs.wbskpidashboard.model.BusinessTeam;
@Repository
public interface BusinessTeamRepository extends CrudRepository<BusinessTeam, Long> {

    
}
