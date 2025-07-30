import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`secondary-color-background shadow-sm sticky-top transition-navbar ${isScrolled ? 'navbar-small' : 'navbar-large'}`}>
      <div className='container d-flex justify-content-between align-items-center py-3'>
        <div>
          <Link to='' className='text-decoration-none text-white'>
            <h2 className='text-uppercase m-0'>Start Framework</h2>
          </Link>
        </div>

        <ul className='d-flex justify-content-around flex-grow-1 list-unstyled m-0' style={{ maxWidth: '300px' }}>
          <li>
            <NavLink to='About' className='text-white text-decoration-none fw-bold rounded'>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to='Portfolio' className='text-white text-decoration-none fw-bold rounded ms-3'>PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to='Contact' className='text-white text-decoration-none fw-bold rounded ms-3'>CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
