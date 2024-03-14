package com.wbs.wbskpidashboard.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BusinessTeam {
   

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
   private Long id;
   
   private String teamName;

public BusinessTeam(Long id, String teamName)
{
    this.id=id;
    this.teamName = teamName;
}
public BusinessTeam(String teamName) {
    this.teamName = teamName;
}

public BusinessTeam() {
    }

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public String getTeamName() {
    return teamName;
}

public void setTeamName(String teamName) {
    this.teamName = teamName;
}

   
}