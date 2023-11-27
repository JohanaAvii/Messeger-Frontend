import React from 'react';
import './Navbar.css'; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo-container">
        <Link to="/home" className="logo-link">
    
        </Link>
      </div>
      <div className="nav-buttons">
      <Link to="/login" className="btn">
        Iniciar sesión
      </Link>
    </div>
    </nav>
  );


};

export default Navbar;