import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaUsers, FaListAlt, FaUtensils, FaUser, FaSignOutAlt, } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  // const location = useLocation();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', icon: FaHome, path: '/' },
    { name: 'Calendar', icon: FaCalendarAlt, path: '/schedule-meeting' },
    { name: 'Clients', icon: FaUsers, path: '/Data' },
    { name: 'Programs', icon: FaListAlt, path: '/programplan' },
    { name: 'Diet Plans', icon: FaUtensils, path: '/dietplan' },
    { name: 'Profile', icon: FaUser, path: '/profile' },
  ];

  return (
    
    <nav className="sidebar d-flex flex-column justify-content-between h-100 my-2">
      <div>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-item d-flex flex-column align-items-center my-3 text-decoration-none ${
              location.pathname === item.path ? 'active' : ''
            }`}
          >
            <item.icon size={14} className={location.pathname === item.path ? 'text-primary' : 'text-muted'} />
            <span className={`mt-1 small ${location.pathname === item.path ? 'text-primary' : 'text-muted'}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-link text-decoration-none" onClick={() => {/* Add sign out logic here */}}>
          <FaSignOutAlt size={14} className="text-muted" />
          <span className="d-block mt-1 small text-muted">Sign Out</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;