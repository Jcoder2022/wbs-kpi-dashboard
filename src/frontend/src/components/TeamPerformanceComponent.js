 import {React,useEffect,useState} from 'react'
 import { PureComponent} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TeamPerformanceComponent.css'




const  TeamPerformanceComponent = () =>{
  
  const[teamPerformance,setTeamPerformance]=useState({});

        useEffect(

        ()=> {
            const fetchTeamPerformance = async ()=>{
                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/team/1/KPI/e_cars_sales');
                const data = await response.json();
                let arr = [];
                for (let i = 0; i < data.length; i++) {
                  let obj = { name: data[i].dataForDay , pv :data[i].value};
                  // loop throgh comodities
                  // for (let j = 0; j < data[i].commodities.length; j++) {
                  //   let commodity = data[i].commodities[j];
                  //   obj[commodity.name] = commodity.moves;
                  // }
                  arr.push(obj);
                }
                  
                


                console.log(arr);
                setTeamPerformance(arr);
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* //<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="xv" stroke="#70efef" /> */}
        </LineChart>
      </ResponsiveContainer></div>


<table align='center'>
                <thead>
                 <tr>
                    <th>Date</th>
                    <th>Value</th>
                    
                </tr> 
                </thead><table align='center'>
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