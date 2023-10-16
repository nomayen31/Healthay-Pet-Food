import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container mx-auto'>
            <nav>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <div className="tabs">
  <Link to='/' className='tab'>Home</Link>
  <Link to='/about' className='tab'>About</Link>
  <Link to='/contact' className='tab'>Contact</Link>
</div>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            </nav>
        </div>
    );
};

export default NavBar;