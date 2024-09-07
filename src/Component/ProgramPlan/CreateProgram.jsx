import React from 'react';
import Header from './../Home/Header';
import Sidebar from './../Home/Sidebar';
import './../CreateClient/CreateClient.css';
import ProgramData from './ProgramData';
function CreateProgram() {
  return (
    <div className="app-container">
      <Header />
      <div className="d-flex mx-3">
        <Sidebar />
        <div className="container">
            <div className="row mt-4">
                <p className='fs-4 fw-bold'>Create Program</p>
                <div className="col">
                    <form action="">
                        <div className="form-group mb-3 mt-4">
                            <label htmlFor="Program Title">Program Title</label>
                            <input type="text" className="form-control" id="Program Title" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="description">General notes</label>
                            <textarea className="form-control" id="description"></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="price">Warm</label>
                            <input type="number" className="form-control" id="price" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="duration">Duration</label>
                            <input type="number" className="form-control" id="duration" />
                        </div>
                        <button className='btn btn-primary mb-3'>next</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProgram;