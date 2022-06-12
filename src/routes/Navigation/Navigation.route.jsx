import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase.utils';
import { CartIcon, CartDropdown } from '../../components';

import './Navigation.styles.scss';

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { toogleCart } = useContext(CartContext);


  async function handleSignOut() {
    try {
      await signOutUser();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <nav className='nav'>
        <Link className='nav__logo-container' to='/'>
          <Logo className='nav__logo' />
        </Link>
        <div className='nav__links-container'>
          <Link className='nav__link' to='/shop'>
            shop
          </Link>
          <Link className='nav__link' to='/contact'>
            contact
          </Link>
          {currentUser ? (
            <span className='nav__link' onClick={handleSignOut}>
              sign out
            </span>
          ) : (
            <Link className='nav__link' to='/auth'>
              sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {toogleCart && <CartDropdown/>}
      </nav>
      <Outlet />
    </>
  );
}
