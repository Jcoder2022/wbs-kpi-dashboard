package com.wbs.wbskpidashboard.model;

public class TeamSummary {

    private double waccAverage;
    private double scoreAverage;
    private double factoryUtilisation;
    private double employeeEngagement;
    private double interestCoverage;
    private double cumulativeMarketingSpendRev;
    private double eCarSales;
    private double cO2Penalty;
 
    
    
    public TeamSummary() {
    }


    public TeamSummary(double waccAverage, double scoreAverage, double factoryUtilisation, double employeeEngagement,
    double interestCoverage, double cumulativeMarketingSpendRev, double eCarSales, double cO2Penalty) {
this.waccAverage = waccAverage;
this.scoreAverage = scoreAverage;
this.factoryUtilisation = factoryUtilisation;
this.employeeEngagement = employeeEngagement;
this.interestCoverage = interestCoverage;
this.cumulativeMarketingSpendRev = cumulativeMarketingSpendRev;
this.eCarSales = eCarSales;
this.cO2Penalty = cO2Penalty;
}


    public double getWaccAverage() {
        return waccAverage;
    }
    public void setWaccAverage(double waccAverage) {
        this.waccAverage = waccAverage;
    }
    public double getScoreAverage() {
        return scoreAverage;
    }
    public void setScoreAverage(double scoreAverage) {
        this.scoreAverage = scoreAverage;
    }
    public double getFactoryUtilisation() {
        return factoryUtilisation;
    }
    public void setFactoryUtilisation(double factoryUtilisation) {
        this.factoryUtilisation = factoryUtilisation;
    }
    public double getEmployeeEngagement() {
        return employeeEngagement;
    }
    public void setEmployeeEngagement(double employeeEngagement) {
        this.employeeEngagement = employeeEngagement;
    }
    public double getInterestCoverage() {
        return interestCoverage;
    }
    public void setInterestCoverage(double interestCoverage) {
        this.interestCoverage = interestCoverage;
    }
    public double getCumulativeMarketingSpendRev() {
        return cumulativeMarketingSpendRev;
    }
    public void setCumulativeMarketingSpendRev(double cumulativeMarketingSpendRev) {
        this.cumulativeMarketingSpendRev = cumulativeMarketingSpendRev;
    }
    public double geteCarSales() {
        return eCarSales;
    }
    public void seteCarSales(double eCarSales) {
        this.eCarSales = eCarSales;
    }
    public double getcO2Penalty() {
        return cO2Penalty;
    }
    public void setcO2Penalty(double cO2Penalty) {
        this.cO2Penalty = cO2Penalty;
    }
    
}
