import React from 'react';
import Header from './../Home/Header';
import Sidebar from './../Home/Sidebar';
import './../CreateClient/CreateClient.css';
import ProgramData from './ProgramData';
function ProgramPlan() {
  return (
    <div className="app-container">
      <Header />
      <div className="d-flex mx-3">
        <Sidebar />
       
        
        <ProgramData />
      </div>
    </div>
  );
}

export default ProgramPlan;