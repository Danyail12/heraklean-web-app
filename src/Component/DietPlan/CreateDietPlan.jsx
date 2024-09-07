import React from 'react';
import Header from './../Home/Header';
import Sidebar from './../Home/Sidebar';
import './../CreateClient/CreateClient.css';
// import DietData from './DietData';

const CreateDietPlan = () => {
  return (
    <>
    <div className="app-container">
      <Header />
      <div className="d-flex mx-3">
        <Sidebar />
    <div className="container">
        <div className="row mt-5">
            <h3>Create Diet Plan</h3>
            <div className="col mt-5">
                <form action="">
                    <div className="form-group mb-3">
                        <label htmlFor="Program Title" className='me-3 fw-bold fs-4'>Diet Title</label>
                        <input type="text" className="form-control-sm mt-4" id="Program Title" />
                    </div>
                    <div className="form-group mb-3">
                        <p className='fs-5 fw-bold'>Meal 1</p>
                        <div>

                        <label htmlFor="description" className='me-3 mb-3 '>Breakfast</label>
                        </div>
                            <input type="text" placeholder='eg. eggs' className="form-control-sm mb-3" id="Program Title" />
                        <div className="row">
                            <div className="col">
                        <label htmlFor="description" className='me-3 mb-2 form-control-sm'>Protein</label>
                        <input type="number"  className="form-control-sm  mb-2" id="Program Title" />
                        <input type="text" placeholder='Amount Of Quantity' className="form-control-sm mx-3 mb-3" id="Program Title" />

                            </div>
                            <div className="row">

                            <div className="col">
                            <label htmlFor="description" className='me-3 form-control-sm mx-1'>Carbs</label>
                        <input type="number"  className="form-control-sm  mb-3" id="Program Title" />
                        <input type="text" placeholder='Amount Of Quantity' className="form-control-sm mx-4 mb-3" id="Program Title" />

                            </div>
                            </div>
                        </div>
                        
                                            <div className="row">
                                                <div className="col">
                                                <label htmlFor="description" className='me-3 mx-3'>Fat</label>
                        <input type="number" className="form-control-sm  mb-3 mx-3" id="Program Title" />
                        <input type="text" placeholder='Amount Of Quantity' className="form-control-sm mx-3  mb-3" id="Program Title" />

                
                                                </div>
                                            </div>
                    </div>
                    <div className="form-group mb-3">
                        <p className='fs-5 fw-bold'>Meal 2</p>
                        <div>

                        <label htmlFor="description" className='me-3 mb-3 '>Breakfast</label>
                        </div>
                            <input type="text" placeholder='eg. eggs' className="form-control-sm mb-3" id="Program Title" />
                        <div className="row">
                            <div className="col">
                        <label htmlFor="description" className='me-3 mb-2 form-control-sm'>Protein</label>
                        <input type="number"  className="form-control-sm  mb-2" id="Program Title" />
                        <input type="text" placeholder='Amount Of Quantity' className="form-control-sm mx-3 mb-3" id="Program Title" />

                            </div>
                            <div className="row">

                            <div className="col">
                            <label htmlFor="description" className='me-3 form-control-sm mx-1'>Carbs</label>
                        <input type="number"  className="form-control-sm  mb-3" id="Program Title" />
                        <input type="text" placeholder='Amount Of Quantity' className="form-control-sm mx-4 mb-3" id="Program Title" />

                            </div>
                            </div>
                        </div>
                        
                                            <div className="row">
                                                <div className="col">
                                                <label htmlFor="description" className='me-3 mx-3'>Fat</label>
                        <input type="number" className="form-control-sm  mb-3 mx-3" id="Program Title" />
                        <input type="text" placeholder='Amount Of Quantity' className="form-control-sm mx-3  mb-3" id="Program Title" />

                
                                                </div>
                                            </div>
                    </div>
                    <div className="form-group mb-3">
                        <p className='fs-5 fw-bold'>Meal 3</p>
                        <div>

                        <label htmlFor="description" className='me-3 mb-3 '>Breakfast</label>
                        </div>
                            <input type="text" placeholder='eg. eggs' className="form-control-sm mb-3" id="Program Title" />
                        <div className="row">
                            <div className="col">
                        <label htmlFor="description" className='me-3 mb-2 form-control-sm'>Protein</label>
                        <input type="number"  className="form-control-sm  mb-2" id="Program Title" />
                        <input type="text" placeholder='Amount Of Quantity' className="form-control-sm mx-3 mb-3" id="Program Title" />

                            </div>
                            <div className="row">

                            <div className="col">
                            <label htmlFor="description" className='me-3 form-control-sm mx-1'>Carbs</label>
                        <input type="number"  className="form-control-sm  mb-3" id="Program Title" />
                        <input type="text" placeholder='Amount Of Quantity' className="form-control-sm mx-4 mb-3" id="Program Title" />

                            </div>
                            </div>
                        </div>
                        
                                            <div className="row">
                                                <div className="col">
                                                <label htmlFor="description" className='me-3 mx-3'>Fat</label>
                        <input type="number" className="form-control-sm  mb-3 mx-3" id="Program Title" />
                        <input type="text" placeholder='Amount Of Quantity' className="form-control-sm mx-3  mb-3" id="Program Title" />

                
                                                </div>
                                            </div>
                    </div>
                    <button className='btn btn-primary mb-3'>next</button>
                </form>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default CreateDietPlan