import React from 'react';
import './_header.css';

function Header() {
  return (
  <div className='header'>
    <img className='img-header' src='http://www.gstatic.com/flights/app/illustration-flights-desktop.png'/>
    <div className='header-title-container'>
      <h1 className='header-text'>Flights</h1>
    </div>
  </div>
  );
}

export default Header;
