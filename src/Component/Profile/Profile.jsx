import React from 'react';
import Header from './../Home/Header';
import Sidebar from './../Home/Sidebar';
import './../CreateClient/CreateClient.css';
import ProfileData from './ProfileData';

function Profile() {
  return (
    <div className="app-container">
    <Header />
    <div className="d-flex mx-3">
      <Sidebar />
        <ProfileData />
      </div>
    </div>
  );
}

export default Profile;