import React from 'react';
import Header from './../Home/Header';
import Sidebar from './../Home/Sidebar';
import './CreateClient.css';
import Form from './Form';
function CreateClient() {
  return (
    <div className="app-container">
      <Header />
      <div className="d-flex mx-3">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}

export default CreateClient;