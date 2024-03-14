package com.wbs.wbskpidashboard.config;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;

import com.wbs.wbskpidashboard.model.BusinessTeamsKPI;
import com.wbs.wbskpidashboard.model.BusinessTeam;
import com.wbs.wbskpidashboard.repository.BusinessTeamRepository;
import com.wbs.wbskpidashboard.repository.BusinessTeamsKPIRepository;

import java.io.FileReader;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.json.simple.parser.JSONParser;


@Component
public class Loader {

    
    private BusinessTeamRepository businessTeamRepository;
    private BusinessTeamsKPIRepository businessTeamsKPIRepository;

      private final static  String fileDay1 =  "2023-06-19";
      private final static  String fileDay2 =  "2023-06-20";
      private final static  String fileDay3 =  "2023-06-21";
      private final static  String fileDay4 =  "2023-06-23";
      private final static  String fileDay5 =  "2023-06-24";
      private final static  String fileDay6 =  "2023-06-25";

      private static String currentFile;
       
     Loader(BusinessTeamRepository businessTeamRepository,BusinessTeamsKPIRepository businessTeamsKPIRepository) {

        this.businessTeamRepository = businessTeamRepository;
        this.businessTeamsKPIRepository = businessTeamsKPIRepository;
       // initBusinessTeams();
        fileReader(fileDay1  );
        fileReader(fileDay2  );
        fileReader(fileDay3  );
        fileReader(fileDay4  );
        fileReader(fileDay5  );
        fileReader(fileDay6  );

        System.out.println("JOB COMPLETED SUCCESSFULLY !!!!!");
        //businessTeamsKPIRepository.findAll().forEach(System.out::println);
    }       


    private List<BusinessTeam> initBusinessTeams() {

        String[] teams = {"fovro", "Fastun", "Nyxx", "CarSpa", "Motion", "Worthwheel", "Carzio", "Rollovo", "iAuto", 
        "VroomTime", "Kar", "EliteTechs", "Carz", "MileMode", "Automotiq", "RYDI", "EvolutionAuto", "Automovo", "ROBOH", 
        "rimovo", "ottobi", "Evi", "Rusted", "Cjio", "NitroRide", "HXH", "SpeedLabs", "TenQ", "Caraxa", "Blazers", 
        "DriveSwitch", "GIIQ", "Teuso", "Hoqa", "AutoInfinite", "vusk", "DentCenter", "Turbo", "evCU", "Electronically", 
        "Drivat", "Torque", "Drift", "Carvato", "Rush", "Matic", "Wheelic", "Slidyn", "Pitpo", "caralo", "Drivesly", "Xuad", 
        "CarLeap", "Tazox", "Amxu", "Honkli"};

        BusinessTeam businessTeam;
        List<BusinessTeam> bteams= new ArrayList<>(); 
        Long id = (long) 0;
        for(String teamName:teams){
            businessTeam = new BusinessTeam(id,teamName);
            businessTeamRepository.save(businessTeam);  
            bteams.add(businessTeam);  
            id=id+1;  
        }
        return bteams;

    }


    public void fileReader(String filename ) {
        JSONParser parser = new JSONParser();
        currentFile = filename;
        try {
            FileReader reader = new FileReader(ResourceUtils.getFile("classpath:data/"+filename +".json"));
            Object p = parser.parse(reader);
            JSONObject object = new JSONObject();
            if(p instanceof org.json.simple.JSONObject){
                System.out.println("JSONObject");
                object = (JSONObject)p;
            }   
           
            JSONArray waccList = (JSONArray) object.get("wacc");
            JSONArray scoreList = (JSONArray) object.get("scores");
            JSONArray factoryUtilizationList = (JSONArray) object.get("factory_utilization");
            JSONArray employeeEngagementList = (JSONArray) object.get("employee_engagement");
            JSONArray interestCoverageList = (JSONArray) object.get("interest_coverage");
            JSONArray marketingSpendRevList = (JSONArray) object.get("marketing_spend_rev");
            JSONArray eCarSalesList = (JSONArray) object.get("e_cars_sales");
            JSONArray co2PenaltyList = (JSONArray) object.get("co2_penalty");

            processor(waccList,"wacc");
            processor(scoreList, "scores");
            processor(factoryUtilizationList,"factory_utilization" );
            processor(employeeEngagementList, "employee_engagement");
            processor(interestCoverageList,"interest_coverage");
            processor(marketingSpendRevList,"marketing_spend_rev");
            processor(eCarSalesList,"e_cars_sales");
            processor(co2PenaltyList,"co2_penalty");

            

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    

    private  void processor(JSONArray jsonArray,String kpiBusinessMeasure) {
        Iterator<JSONObject> iterator = jsonArray.iterator();
        List<BusinessTeamsKPI> businessTeamsKPIs = new ArrayList<>();
        int team ;
        Double value = 0.0;
        LocalDate date;

        List<BusinessTeam> bteams= initBusinessTeams();
        while (iterator.hasNext()) {
            JSONObject object = iterator.next();
            team =  Integer.parseInt(object.get("team").toString());
            value = Double.parseDouble(object.get("value").toString());
            BusinessTeamsKPI businessTeamsKPI = new BusinessTeamsKPI(kpiBusinessMeasure,value, 
            bteams.get(team-1).getTeamName(),
             LocalDate.parse( currentFile));
            businessTeamsKPIs.add(businessTeamsKPI);
            
         }

        businessTeamsKPIRepository.saveAll(businessTeamsKPIs);
       
    }
}
