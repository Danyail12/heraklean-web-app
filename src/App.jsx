import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration';
import ScheduleMeeting from './Component/ScheduleMeeting/ScheduleMeeting';
import Profile from './Component/Profile/Profile';
import ProgramPlan from './Component/ProgramPlan/ProgramPlan';
import DietPlan from './Component/DietPlan/DietPlan';
import CreateClient from './Component/CreateClient/CreateClient';
import Data from './Component/AllClients/Data';
import CreateProgram from './Component/ProgramPlan/CreateProgram';
import CreateDietPlan from './Component/DietPlan/CreateDietPlan';
import SingleClient from './Component/AllClients/SingleClient'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dietplan" element={<DietPlan />} />
        <Route path="/programplan" element={<ProgramPlan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/create-client' element={<CreateClient />}/>
        <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/create-program" element={<CreateProgram />} />
        <Route path="/create-diet" element={<CreateDietPlan />} />
        <Route path='/singleClient' element={<SingleClient/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
