import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Fname: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
    title: '',
    profilePic: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    // This is a placeholder. You'll need to implement actual image upload logic
    // and set the returned URL to formData.profilePic
    console.log('Image upload placeholder');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://heraklean-api.vercel.app/api/auth/register', formData);
      setMessage(response.data.message);
      // You might want to store the token in localStorage or context
      localStorage.setItem('token', response.data.token);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <p className='fs-4 fw-bold mt-5'>Profile</p>
          <div className="col">
            <img src={formData.profilePic || "image 45.png"} alt="" className='mb-4' />
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-primary mb-4" onClick={handleImageUpload}>Upload Image</button>
                <button type='button' className='btn btn-white mb-4'>Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="Fname">Firstname</label>
            <input type="text" name="Fname" className="form-control mb-3" onChange={handleChange} />
          </div>
          <div className="col-6">
            <label htmlFor="lastName">Lastname</label>
            <input type="text" name="lastName" className="form-control mb-3" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="form-control mb-3" onChange={handleChange} />
          </div>
          <div className="col-6">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control mb-3" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="location">Location</label>
            <input type="text" name="location" className="form-control mb-3" onChange={handleChange} />
          </div>
          <div className="col-6">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" className="form-control mb-3" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className='btn btn-primary'>Register</button>
          </div>
        </div>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default Registration;