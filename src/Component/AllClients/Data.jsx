import React from 'react';
import Header from './../Home/Header';
import Sidebar from './../Home/Sidebar';
import './../CreateClient/CreateClient.css';
import AllClients from './AllClients';
function Data() {
  return (
    <div className="app-container">
    <Header />
    <div className="d-flex mx-3">
      <Sidebar />
     
      
        <AllClients />
     
  </div>
    </div>
  );
}

export default Data;