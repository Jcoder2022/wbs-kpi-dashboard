package com.wbs.wbskpidashboard.model;

import java.time.LocalDate;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BusinessTeamKPI {
   
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id;
   private String kpiBusinessMeasure; 		
   private double value;
   private String teamName;
   
    private LocalDate dataForDay;	



    @Override
    public String toString() {
        return "BusinessTeamsKPI [id=" + id + ", kpiBusinessMeasure=" + kpiBusinessMeasure + ", value=" + value
                + ", teamName=" + teamName + ", dataForDay=" + dataForDay + "]";
    }
   
   public BusinessTeamKPI(){

   }
   public BusinessTeamKPI(String kpiBusinessMeasure, double value, String teamName, LocalDate dataForDay) {
    this.kpiBusinessMeasure = kpiBusinessMeasure;
    this.value = value;
    this.teamName = teamName;
    this.dataForDay = dataForDay;
}
   
   
   public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getKpiBusinessMeasure() {
        return kpiBusinessMeasure;
    }
    public void setKpiBusinessMeasure(String kpiBusinessMeasure) {
        this.kpiBusinessMeasure = kpiBusinessMeasure;
    }
    public double getValue() {
        return value;
    }
    public void setValue(double value) {
        this.value = value;
    }
    public String getTeamName() {
        return teamName;
    }
    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
    public LocalDate getDataForDay() {
        return dataForDay;
    }
    public void setDataForDay(LocalDate dataForDay) {
        this.dataForDay = dataForDay;
    }
    
}
