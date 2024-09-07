import React from 'react';
import Header from './../Home/Header';
import Sidebar from './../Home/Sidebar';
import './../CreateClient/CreateClient.css';
import Calendar from './Calendar'

function ScheduleMeeting() {
  return (
    <div className="app-container">
      <Header />
      <div className="d-flex mx-3">
        <Sidebar />
<Calendar/>
      </div>
    </div>
  );
}

export default ScheduleMeeting;