// ClientProfile.js
import React from 'react';
import {Link} from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

import './ClientProfile.css';

const ClientProfile = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-4 mt-5">
          <div className="">
            <div className="card-body">
              <img src="phy.png" alt="" className="float-end img-thumbnail" style={{ width:'33%'}} />
              <h5 className="card-title">Good Morning,</h5>
              <p className="card-text fw-bold">Leslie Alexander</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className=" h-100">
            <div className="card-body mb-3 mt-5">
              <Link to="/create-client" className="btn btn-primary float-end mt-3">  
                Create New</Link>
                <div className="row">
                  <div className="col">

              <h5 className="card-title fw-bold fs-2 mt-3">56</h5>
              <p className="card-text">Clients</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2 d-flex justify-content-between">
        <p className='fw-bold fs-5 mb-3 mt-3'>Upcoming Schedules</p>
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
                <div className='d-flex justify-content-around'>
                                 <div className="card-image mx-3  "><img src="pic.png" alt="" /></div>
                <div className="row">
                  <div className="col">

              <p className="card-title fw-bold">Kathryn Murphy

              </p>
              <p className="card-text fw-light mt-2 ">06/09/24 | 01:00 PM</p>
                  </div>
                  

                  

                  
                  
                </div>

                <div className="row">
                  <div className="col">
                  <MdKeyboardArrowRight className=' ' size={34} />

                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
                <div className='d-flex justify-content-around'>
                                 <div className="card-image mx-3  "><img src="pic.png" alt="" /></div>
                <div className="row">
                  <div className="col">

              <p className="card-title fw-bold ">Kathryn Murphy

              </p>
              <p className="card-text fw-light mt-2 ">06/09/24 | 01:00 PM</p>
                  </div>
                  

                  

                  
                  
                </div>

                <div className="row">
                  <div className="col">
                  <MdKeyboardArrowRight className=' ' size={34} />

                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mt-2">
          <div className="card">
            <div className="card-body">
                <div className='d-flex justify-content-around'>
                                 <div className="card-image mx-3  "><img src="pic.png" alt="" /></div>
                <div className="row">
                  <div className="col">

              <p className="card-title fw-bold ">Kathryn Murphy

              </p>
              <p className="card-text fw-light mt-2 ">06/09/24 | 01:00 PM</p>
                  </div>
                  

                  

                  
                  
                </div>

                <div className="row">
                  <div className="col">
                  <MdKeyboardArrowRight className=' ' size={34} />

                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mt-2">
          <div className="card">
            <div className="card-body">
                <div className='d-flex justify-content-around'>
                                 <div className="card-image mx-3  "><img src="pic.png" alt="" /></div>
                <div className="row">
                  <div className="col">

              <p className="card-title fw-bold ">Kathryn Murphy

              </p>
              <p className="card-text fw-light mt-2 ">06/09/24 | 01:00 PM</p>
                  </div>
                  

                  

                  
                  
                </div>

                <div className="row">
                  <div className="col">
                  <MdKeyboardArrowRight className=' ' size={34} />

                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>



      <div className="row mt-2 ">
            <p className='fs-4 fw-bold'>Alerted Clients</p>
            <div className=' row mb-5'>

        <div className="col-lg-4 ">
          <div className="card">
            <div className="card-body ">
              <img src="pro.png" alt="" className="float-start mx-3" />
              <h5 className="card-title">William Jones </h5>
              <p className="card-text mt-2">New York, USA</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
          <div className="card-body">
              <img src="anothet.png" alt="" className="float-start mx-3" />
              <h5 className="card-title">William Jones </h5>
              <p className="card-text">New York, USA</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
          <div className="card-body">
              <img src="pro.png" alt="" className="float-start mx-3" />
              <h5 className="card-title">William Jones </h5>
              <p className="card-text">New York, USA</p>
            </div>
          </div>
        </div>

            </div>
      </div>
    </div>

  );
};

export default ClientProfile;
