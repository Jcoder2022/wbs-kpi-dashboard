import React from 'react';
import './App.css';
import BusinessTeamPage from './pages/BusinessTeamPage';
import TeamsPerformancePage from './pages/TeamsPerformancePage';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Graph from './components/Graph';


function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route  path="/wbs-kpi-dashboard/kpi/" element = {<BusinessTeamPage/>} ></Route>
      <Route  path="/wbs-kpi-dashboard/summary/" element = {<TeamsPerformancePage/>}></Route>
      {/* <Route  path="/wbs-kpi-dashboard/summary/graph" element = {<Graph/>}></Route> */}
      </Routes>
      
    
    </div>
  );
}

export default App;
