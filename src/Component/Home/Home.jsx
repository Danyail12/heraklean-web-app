import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ClientProfile from './ClientProfile';
// import './App.css';
import './Home.css';

function Home() {
  return (
    <div className="app-container">
      <Header />
      <div className="d-flex mx-3">
        <Sidebar />
       
        <ClientProfile />
        </div>

       
    </div>
  );
}

export default Home;