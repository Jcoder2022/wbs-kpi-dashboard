 import {React,useEffect,useState} from 'react'
 import { PureComponent} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TeamPerformanceComponent.css'



const data = [
  {
    name: '2023-06-19',
    uv: 4000,
    pv: 2400,
    xv: 3000, 
    amt: 2400,
  },
  {
    name: '2023-06-20',
    uv: 3000,
    pv: 1398,
    xv: 1212,
    amt: 2210,
  },
  {
    name: '2023-06-21',
    uv: 2000,
    pv: 9800,
    xv: 2000,
    amt: 2290,
  },
  {
    name: '2023-06-23',
    uv: 2780,
    pv: 3908,
    xv: 6000,
    amt: 2000,
  },
  {
    name: '2023-06-24',
    uv: 1890,
    pv: 4800,
    xv: 3283,
    amt: 2181,
  },
  {
    name: '2023-06-25',
    uv: 2390,
    pv: 3800,
    xv: 3999,
    amt: 2500,
  }
];
const  TeamPerformanceComponent = () =>{
  
  const[teamPerformance,setTeamPerformance]=useState({});

        useEffect(

        ()=> {
            const fetchTeamPerformance = async ()=>{
                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/team/1/KPI/wacc');
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
      </div>
    );
  }


export default TeamPerformanceComponent