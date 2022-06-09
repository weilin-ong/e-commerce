import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export default function Navigation() {
  return (
    <>
      <nav className='nav'>
        <Link className='nav__logo-container' to='/'>
          <Logo className='nav__logo' />
        </Link>
        <ul className='nav__links-container'>
          <Link className='nav__link' to='/shop'>
            shop
          </Link>
          <Link className='nav__link' to='/contact'>
            contact
          </Link>
          <Link className='nav__link' to='/signin'>
            sign in
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
