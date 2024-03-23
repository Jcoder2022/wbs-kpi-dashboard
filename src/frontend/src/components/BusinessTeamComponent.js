import {React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Chart from './Chart'
const BusinessTeamComponent = () => {
  
  const[KPIMeasureForSpecificDay,setKPIMeasureForSpecificDay]=useState({});
  const[chartData,setChartData]=useState({});
  const   {  date, kpi } = useParams();

    useEffect(

        ()=> {
            const fetchPerformanceForParticularKPIMeasure = async ()=>{
                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/kpi/'+ kpi +'/day/'+date);
                const data  = await response.json();
                let arr = [];
                for (let i = 0; i < data.length; i++) {
                  let obj = { date: data[i].teamName , kpi :data[i].value};
                  arr.push(obj);
                }
                console.log(data);
                setChartData(arr);
                setKPIMeasureForSpecificDay(data);
            }
            fetchPerformanceForParticularKPIMeasure();
        },[]

    )
    
 
  
  return (

    
    <div >
 
 <Chart data={chartData} />

 <table align='center'>
                <thead>
                 <tr>
                    {/* <th>id</th> */}
                    <th>KPI Business Measure</th>
                    <th>value</th>
                    <th>Team Name</th>
                    <th>Date</th>
                    
                </tr> 
                </thead>
                <tbody>
                
                {   ( Object.keys(KPIMeasureForSpecificDay).map(key=>
                         <tr key={key}>
                             
                             {/* <td>{Object.entries( KPIMeasureForSpecificDay[key])[0][1]}</td> */}
                             <td>{Object.entries( KPIMeasureForSpecificDay[key])[1][1]}</td>
                             <td>{Object.entries( KPIMeasureForSpecificDay[key])[2][1]}</td>
                             <td>{Object.entries( KPIMeasureForSpecificDay[key])[3][1]}</td>
                             <td>{Object.entries( KPIMeasureForSpecificDay[key])[4][1]}</td>
                             
                         </tr>
                     ))
                }
            
            </tbody> 
            </table> 

  </div>
  
  )
}

export default BusinessTeamComponent