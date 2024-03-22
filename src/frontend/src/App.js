import React from 'react';
import './App.css';
import BusinessTeamPage from './pages/BusinessTeamPage';
import TeamsPerformancePage from './pages/TeamsPerformancePage';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import  BusinessTeamChartComponent  from './components/BusinessTeamChartComponent';
import Graph from './components/Graph';
import TeamPerformanceComponent from './components/TeamPerformanceComponent';



function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route  path="/wbs-kpi-dashboard/kpi/" element = {<BusinessTeamPage/>} ></Route>
      <Route  path="/wbs-kpi-dashboard/summary/" element = {<TeamsPerformancePage/>}></Route>
      
      <Route  path="/wbs-kpi-dashboard/graph" element = {<BusinessTeamChartComponent/>}></Route>
       <Route  path="/wbs-kpi-dashboard/team-performance" element = {<TeamPerformanceComponent/>}></Route>

      <Route  path="/wbs-kpi-dashboard/chart" element = {<Graph/>}></Route>
       
      </Routes>
      
    
    </div>
  );
}

export default App;
