import { NavigationMenu } from '@/components/ui/navigation-menu';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const menuLinks = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about-us">About</Link></li>
    <li><Link>Health Tips</Link></li>
    <li><Link>How It Works</Link></li>
  </>

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {menuLinks}
            </ul>
          </div>
          <Link to="/" className="">
            <img className='w-32' src="https://i.ibb.co.com/N2J2mDdq/ownmed.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuLinks}
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn btn-primary text-white">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;