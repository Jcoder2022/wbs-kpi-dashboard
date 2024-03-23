import {React,useEffect,useState} from 'react'
import "./Summary.css";
import SummaryChart from './SummaryChart';

const Summary = () => {
  
    const[data,setdata]=useState({});
    const [team, setTeam] = useState({
        teamName:"", 
        wacc:"",
        scores:"",
        factoryUtilisation:"",
    employeeEngagement:"",
    interestCoverage:"",
    marketingSpendRev:"",
    eCarSales:"",
    co2Penalty:""
      });
    

    useEffect(

        ()=> {
            const fetchPerformanceSummary = async ()=>{
                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/kpi/summary');
                const data = await response.json();
                
                
                //let obj = { date: data[i].dataForDay , kpi :data[i].value};
                //console.log(data.length);
                let arr = [];

                Object.keys(data)?.map(key=>{
                    let obj ={Team : key,
                        wacc : Object.entries( data[key])[0][1], 
                        scores : Object.entries( data[key])[1][1],
                        factory_utilisation:Object.entries( data[key])[2][1],
                        employee_engagement: Object.entries( data[key])[3][1],
                        interest_coverage:Object.entries( data[key])[4][1],
                        marketing_spend_rev:Object.entries( data[key])[5][1],
                        e_car_sales:Object.entries( data[key])[6][1],
                        co2_penalty:Object.entries( data[key])[7][1]}
                        arr.push(obj);
                    
                    })
                   
                    
                for (let i = 0; i < arr.length; i++) {

                  
                  console.log(arr[i]);
                  
                }



                //console.log(data);
                setdata(arr);
            }
            fetchPerformanceSummary();
        },[]

    )
    

  return (
    
    <div className='summary'>
         <SummaryChart data={data} /> 
    {/* <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={[["Team Name", 
            "Wacc",
            "Scores",
            "Factory Utilisation",
            "Employee Engagement",
            "Interest Coverage",
            "Marketing Spend/Rev",
            "eCar Sales",
            "CO2 Penalty"] ,
            (Object.keys(data)?.map(key=>
                [   key,
                    Object.entries( data[key])[0][1], 
                    Object.entries( data[key])[1][1],
                    Object.entries( data[key])[2][1],
                    Object.entries( data[key])[3][1],
                    Object.entries( data[key])[4][1],
                    Object.entries( data[key])[5][1],
                    Object.entries( data[key])[6][1],
                    Object.entries( data[key])[7][1]
                ]))] }
      
      
    />  */}
        </div>
  )
}

export default Summary