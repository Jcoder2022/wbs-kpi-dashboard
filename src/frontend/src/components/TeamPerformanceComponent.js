 import {React,useEffect,useState} from 'react'
 import { PureComponent} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TeamPerformanceComponent.css'
import { useParams } from 'react-router-dom';




const  TeamPerformanceComponent = () =>{
  
  const[teamPerformance,setTeamPerformance]=useState({});
  const   {  teamId, kpi } = useParams();

        useEffect(

        ()=> {
            const fetchTeamPerformance = async ()=>{

             

                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/team/'+teamId+'/KPI/'+ kpi);
                const data = await response.json();

                console.log(data.length);
                let arr = [];
                for (let i = 0; i < data.length; i++) {
                  let obj = { date: data[i].dataForDay , kpi :data[i].value};
                  // loop throgh comodities
                  // for (let j = 0; j < data[i].commodities.length; j++) {
                  //   let commodity = data[i].commodities[j];
                  //   obj[commodity.name] = commodity.moves;
                  // }
                  arr.push(obj);
                  //console.log(obj);
                }
                  
                


                //console.log(arr);
                setTeamPerformance(arr);
                console.log("teamPerformance"+teamPerformance.length)
            }
            
            fetchTeamPerformance();
        },[]

    )
   
   

    return (
       
      <div className='performance'>
        
        <div className='performance-container'>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={teamPerformance}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey={kpi}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={kpi} stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
      </div>


<table align='center'>
                <thead>
                 <tr>
                    <th>Date</th>
                    <th>Value</th>
                    
                </tr> 
                </thead>
                <tbody>
                
                {   ( Object.keys(teamPerformance).map(key=>
                         <tr key={key}>
                             
                             <td>{Object.entries( teamPerformance[key])[0][1]}</td>
                             <td>{Object.entries( teamPerformance[key])[1][1]}</td>
                             
                             
                         </tr>
                     ))
                }
            
            </tbody> 
            </table>           

      </div>
    );
  }


export default TeamPerformanceComponent