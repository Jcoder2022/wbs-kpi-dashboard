import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//import './BusinessTeamChartComponent.css'
import { useParams } from 'react-router-dom';
import {useEffect,useState} from 'react'

import Chart from './Chart';

 

const  BusinessTeamChartComponent = () => {
  
  const [data, setdata] = useState({});
   
  const   {  teamId, kpi } = useParams();

        useEffect(

        ()=> {
            const fetchTeamPerformance = async ()=>{

             

                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/team/'+teamId+'/KPI/'+ kpi);
                const data = await response.json();

                let arr = [];
                for (let i = 0; i < data.length; i++) {
                  let obj = { date: data[i].dataForDay , kpi :data[i].value};
                  arr.push(obj);
                }
                setdata(arr)
                               
                            }
            
            fetchTeamPerformance();
        },[]

    )

  //PureComponent.render() {
    return (

      
      <div className='businessTeam'>
        
        <div className='businessTeam-container'>
        <Chart data={data} /></div>
        <table align='center'>
                <thead>
                 <tr>
                    <th>Date</th>
                    <th>Value</th>
                    
                </tr> 
                </thead>
                <tbody>
                
                {   ( Object.keys(data).map(key=>
                         <tr key={key}>
                             
                             <td>{Object.entries( data[key])[0][1]}</td>
                             <td>{Object.entries( data[key])[1][1]}</td>
                             
                             
                         </tr>
                     ))
                }
            
            </tbody> 
            </table>           



      </div>
    );
  //}
}
export default BusinessTeamChartComponent