import {React,useEffect} from 'react'

const TeamsPerformanceComponent = () => {
    useEffect(

        ()=> {
            const fetchPerformanceSummary = async ()=>{
                const response = await fetch ('http://localhost:8080/wbs-kpi-dashboard/kpi/summary');
                const data = await response.json();
                console.log(data);
            }
            fetchPerformanceSummary();
        }

    )
    

  return (
    <div>TeamsPerformanceComponent</div>
  )
}

export default TeamsPerformanceComponent