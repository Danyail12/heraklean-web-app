import React from 'react';
import Header from './../Home/Header';
import Sidebar from './../Home/Sidebar';
import './../CreateClient/CreateClient.css';
import DietData from './DietData';

function DietPlan() {
  return (
    <div className="app-container">
    <Header />
    <div className="d-flex mx-3">
      <Sidebar />
     
      <DietData />
  
      </div>
    </div>
  );
}

export default DietPlan;