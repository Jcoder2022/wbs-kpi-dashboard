import {React,useEffect,useState} from 'react';

const BusinessTeamComponent = () => {
  
  const[KPIMeasureForSpecificDay,setKPIMeasureForSpecificDay]=useState({});

    useEffect(

        ()=> {
            const fetchPerformanceForParticularKPIMeasure = async ()=>{
                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/kpi/scores/day/2023-06-19');
                const data  = await response.json();
                console.log(data);
                setKPIMeasureForSpecificDay(data);
            }
            fetchPerformanceForParticularKPIMeasure();
        },[]

    )
    
 
  
  return (

    
    <div >
 


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