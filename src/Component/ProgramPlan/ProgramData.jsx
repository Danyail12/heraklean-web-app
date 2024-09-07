import React from 'react';
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import "./Program.css";

const ProgramCard = ({ title, introduction, modules, duration }) => (
  <div className="col-md-4 col-sm-6 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title fw-bold mb-0">{title}</h5>
          <RiEdit2Fill size={18} className="text-primary cursor-pointer" />
        </div>
        <p className="card-text small text-muted">{introduction}</p>
        <div className="mt-2">
          <h6 className="fw-bold">Modules</h6>
          <ul className="list-unstyled small">
            {modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <h6 className="fw-bold">Duration</h6>
          <p className="small mb-0">{duration}</p>
        </div>
      </div>
    </div>
  </div>
);

const ProgramData = () => {
  const programs = [
    {
      title: "Elite Edge Training",
      introduction: "Lorem ipsum dolor sit amet consectetur. Amet eget do nec vitae netus at malesuada parturient vestib ulum morbi.",
      modules: [
        "Barbell Squats", "Deadlifts", "Bench Press", "Pull-ups or Lat Pulldowns",
        "Dumbbell Lunges", "Bent-over Rows", "Overhead Press", "Planks"
      ],
      duration: "3 weeks"
    },
    {
      title: "Core Strength Builder",
      introduction: "A focused program to develop core strength and stability for improved overall fitness.",
      modules: [
        "Planks", "Russian Twists", "Mountain Climbers", "Dead Bug",
        "Bird Dog", "Bicycle Crunches", "Side Planks", "Leg Raises"
      ],
      duration: "4 weeks"
    },
    {
      title: "Cardio Blast",
      introduction: "High-intensity cardio workouts designed to improve endurance and burn calories.",
      modules: [
        "HIIT Sprints", "Jump Rope", "Burpees", "Mountain Climbers",
        "High Knees", "Jumping Jacks", "Box Jumps", "Stair Climbs"
      ],
      duration: "6 weeks"
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold">Program Plans</h2>
          <Link to="/create-program" className="btn btn-primary">Create New</Link>
        </div>
      </div>
      <div className="row">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
};

export default ProgramData;