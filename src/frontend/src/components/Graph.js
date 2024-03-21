import {React,useEffect,useState} from 'react'
import { Chart } from 'react-google-charts';


const Graph = () => {
  
    const[summary,setSummary]=useState({});

    useEffect(

        ()=> {
            const fetchPerformanceSummary = async ()=>{
                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/kpi/summary');
                const data = await response.json();
                console.log(data);
                setSummary(data);
            }
            fetchPerformanceSummary();
        },[]

    )
    

  return (
    
    <div >
{Object.keys(summary)}
            
    <Chart
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
            Object.keys(summary)?.map(key=>
                [   key,
                    Object.entries( summary[key])[0][1], 
                    Object.entries( summary[key])[1][1],
                    Object.entries( summary[key])[2][1],
                    Object.entries( summary[key])[3][1],
                    Object.entries( summary[key])[4][1],
                    Object.entries( summary[key])[5][1],
                    Object.entries( summary[key])[6][1],
                    Object.entries( summary[key])[7][1]
                ])] }
      
      
    /> 
        </div>
  )
}

export default Graph