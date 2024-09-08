import React from 'react';
import './Header.css';
import { HiBellAlert } from "react-icons/hi2";


const Header = () => {
  return (
    <header className="header bg-light mt-2">
      <div className="header-content">
        <div>
          <img src="image 45.png" alt="" className='w-50 h-25' />
        </div>
        <div className="greeting">
          {/* <h1>Good Morning, <span>Leslie Alexander</span></h1> */}
        </div>
        <div className="header-icons">
          <div className="notifications">
            {/* <span>2 Notifications</span> */}
          <HiBellAlert  size={24} />
          </div>
          <div className="profile-pic">
            <img src="picture.png" className='img-fluid rounded' alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;