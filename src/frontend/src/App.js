import React from 'react';
import './App.css';
import BusinessTeamPage from './pages/BusinessTeamPage';
import TeamsPerformancePage from './pages/TeamsPerformancePage';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import  BusinessTeamChartComponent  from './components/BusinessTeamChartComponent';

import Summary from './components/Summary';



function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route  path="/wbs-kpi-dashboard/kpi/" element = {<BusinessTeamPage/>} ></Route>
      <Route  path="/wbs-kpi-dashboard/summary/" element = {<TeamsPerformancePage/>}></Route>
      
      <Route  path="/wbs-kpi-dashboard/team/:teamId/KPI/:kpi" element = {<BusinessTeamChartComponent/>}></Route>
      <Route  path="/wbs-kpi-dashboard/summary/chart" element = {<Summary/>}></Route>

     
       
      </Routes>
      
    
    </div>
  );
}

export default App;
