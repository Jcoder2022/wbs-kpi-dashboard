import {React,useEffect,useState} from 'react'

const TeamsPerformanceComponent = () => {

    const[summary,setSummary]=useState({});

    useEffect(

        ()=> {
            const fetchPerformanceSummary = async ()=>{
                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/kpi/summary');
                const summary = await response.json();
                //console.log(data);
                setSummary(summary);
            }
            fetchPerformanceSummary();
        }

    )
    

  return (
    
    <div >
            <table>
                <thead>
                 <tr>
                    <th>Team Name</th>
                    <th>Wacc</th>
                    <th>Scores</th>
                    <th>Factory Utilisation</th>
                    <th>Employee Engagement</th>
                    <th>Interest Coverage</th>
                    <th>Marketing Spend/Rev</th>
                    <th>eCar Sales</th>
                    <th>CO2 Penalty</th>
                    
                </tr> 
                </thead>
                <tbody>
                
                {   ( Object.keys(summary).map(key=>
                         <tr key={key}>
                             <td>{key}</td>
                             
                             <td>{Object.entries( summary[key])[0][1]}</td>
                             <td>{Object.entries( summary[key])[1][1]}</td>
                             <td>{Object.entries( summary[key])[2][1]}</td>
                             <td>{Object.entries( summary[key])[3][1]}</td>
                             <td>{Object.entries( summary[key])[4][1]}</td>
                             <td>{Object.entries( summary[key])[5][1]}</td>
                             <td>{Object.entries( summary[key])[6][1]}</td>
                             <td>{Object.entries( summary[key])[7][1]}</td>
                             
                         </tr>
                     ))
                }
            
            </tbody> 
            </table>
        </div>

       

  )
}

export default TeamsPerformanceComponent