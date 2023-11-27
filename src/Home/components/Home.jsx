import React from 'react';
import Navbar from '../../navbar/components/Navbar';
import './Home.css';

const Home = () => {
    
  return (
    <div className='home'>
        <Navbar/>
        <div className="Home-form-container">
        <form className="Home-form">
            <div className="Home-form-content">
                <p>hola</p>
                </div>
         </form>
         </div>
    </div>

  );

  
};

export default Home;