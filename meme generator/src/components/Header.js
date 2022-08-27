import React from 'react';
import logo from '../icons/logo.png'

function Header() {
  return (
    <header className='flex'>
      <div className='flex'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </header>
  );
}

export default Header;
