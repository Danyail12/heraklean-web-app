import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from './../Home/Sidebar';
import Header from './../Home/Header'; // Importing the Header from another file

// Renamed local Header component to avoid conflict
const ClientHeader = ({ trainerName, clientName }) => (
  <header className="d-flex justify-content-between align-items-center p-3 bg-light">
    <div>
      <h1>{trainerName}</h1>
      <h2>{clientName}</h2>
    </div>
  </header>
);

// Client Info component
const ClientInfo = ({ name, status, image }) => (
  <div className="d-flex align-items-center mb-4">
    <img src={image} alt={name} className="rounded-circle me-3" style={{ width: '60px', height: '60px' }} />
    <div>
      <h2 className="mb-0">{name}</h2>
      <p className="text-muted mb-0">Status: {status}</p>
    </div>
    <button className="btn btn-primary ms-auto me-2">Send Plan</button>
    <button className="btn btn-success"><FaWhatsapp /></button>
  </div>
);

// Weight Graph component
const WeightGraph = ({ data }) => (
  <div className="card mb-4">
    <div className="card-body">
      <h5 className="card-title">Weight Graph</h5>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// Measurements component
const Measurements = ({ measurements }) => (
  <div className="card mb-4">
    <div className="card-body">
      <h5 className="card-title">Measurements</h5>
      <div className="row">
        {Object.entries(measurements).map(([key, value]) => (
          <div key={key} className="col-6 mb-2">
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Membership component
const Membership = ({ plan, startDate }) => (
  <div className="card mb-4">
    <div className="card-body">
      <h5 className="card-title">Membership</h5>
      <p className="mb-0">{plan}</p>
      <small className="text-muted">Started on: {startDate}</small>
    </div>
  </div>
);

// Active Plans component
const ActivePlans = ({ program, mealPlan }) => (
  <div className="row">
    <div className="col-md-6">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            Active Plans
            <small><a href="#">View All</a></small>
          </h5>
          <h6>{program.name}</h6>
          <p className="text-muted">{program.description}</p>
          <a href="#" className="btn btn-outline-primary btn-sm">Active</a>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            Active Meal Plans
            <small><a href="#">View All</a></small>
          </h5>
          <h6>{mealPlan.name}</h6>
          {Object.entries(mealPlan.meals).map(([meal, items]) => (
            <div key={meal}>
              <strong>{meal}:</strong>
              <ul className="mb-0">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Main ClientProfile component
const ClientProfile = () => {
  const clientData = {
    trainerName: 'Leslie Alexander',
    clientName: 'William Jones',
    clientStatus: 'Bulk',
    clientImage: 'picture.png',
    weightData: [
      { name: 'Jan', weight: 70 },
      { name: 'Feb', weight: 72 },
      { name: 'Mar', weight: 71 },
      { name: 'Apr', weight: 73 },
      { name: 'May', weight: 72 },
      { name: 'Jun', weight: 74 },
    ],
    measurements: {
      'Chest/Back': 70,
      'Right Arm': 14,
      'Left Arm': 14,
      'Right Leg': 24,
      'Left Leg': 24,
      'Waist': 32,
    },
    membership: {
      plan: 'Monthly Premium Plan',
      startDate: '20 Sept 2023',
    },
    activeProgram: {
      name: 'Program Name Here',
      description: 'Short description of the program goes here',
    },
    activeMealPlan: {
      name: 'NutriBalance',
      meals: {
        Breakfast: ['Oatmeal with Protein', 'Greek Yogurt Parfait'],
        Lunch: ['Grilled Chicken Salad', 'Quinoa Black Bean Bowl'],
        Dinner: ['Baked Salmon with Sweet Potato', 'Grilled Veggies'],
      },
    },
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        {/* Use imported Header component */}
        <Header trainerName={clientData.trainerName} clientName={clientData.clientName} />
        <div className="container mt-4">
          <ClientInfo name={clientData.clientName} status={clientData.clientStatus} image={clientData.clientImage} />
          <div className="row">
            <div className="col-md-8">
              <WeightGraph data={clientData.weightData} />
              <ActivePlans program={clientData.activeProgram} mealPlan={clientData.activeMealPlan} />
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Monthly Payment Amount</h5>
                  <h2 className="text-primary">$100</h2>
                </div>
              </div>
              <Measurements measurements={clientData.measurements} />
              <Membership plan={clientData.membership.plan} startDate={clientData.membership.startDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SingleClient = ClientProfile;  // Assigning ClientProfile to SingleClient

export default SingleClient;
