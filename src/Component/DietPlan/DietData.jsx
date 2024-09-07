import React from 'react';
import { Link } from 'react-router-dom';
import { RiEdit2Fill } from "react-icons/ri";

const DietPlanCard = ({ title, image, meals }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-header bg-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{title}</h5>
        <RiEdit2Fill size={18} className="text-primary cursor-pointer" />
      </div>
      <div className="card-body">
        <div className="text-center mb-3">
          <img src={image} alt={title} className="img-fluid rounded" style={{ maxHeight: '150px' }} />
        </div>
        <div className="d-flex justify-content-center mb-3">
          <span className="badge bg-primary me-2">protein</span>
          <span className="badge bg-danger me-2">carbs</span>
          <span className="badge bg-success">fats</span>
        </div>
        <div className="row">
          {meals.map((meal, index) => (
            <div key={index} className="col-md-4 mb-2">
              <h6 className="fw-bold">Meal {index + 1}</h6>
              <ul className="list-unstyled small">
                {meal.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const DietData = () => {
  const dietPlans = [
    {
      title: "NutriBalance",
      image: "meal.png",
      meals: [
        {
          items: [
            "Oatmeal with Protein",
            "Greek Yogurt Parfait"
          ]
        },
        {
          items: [
            "Grilled Chicken Salad",
            "Quinoa Bowl"
          ]
        },
        {
          items: [
            "Salmon with Vegetables",
            "Sweet Potato Mash"
          ]
        }
      ]
    },
    {
      title: "Keto Kickstart",
      image: "meal2.png",
      meals: [
        {
          items: [
            "Avocado and Eggs",
            "Bacon"
          ]
        },
        {
          items: [
            "Spinach and Feta Omelette",
            "Almonds"
          ]
        },
        {
          items: [
            "Grilled Steak",
            "Cauliflower Rice"
          ]
        }
      ]
    }
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Diet Plans</h2>
        <Link to="/create-diet" className="btn btn-primary">Create New</Link>
      </div>
      <div className="row">
        {dietPlans.map((plan, index) => (
          <DietPlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default DietData;