import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase.utils';
import './Navigation.styles.scss';

export default function Navigation() {
  const { setCurrentUser, currentUser } = useContext(UserContext);

  async function handleSignOut() {
    try {
      await signOutUser();
      setCurrentUser(null);
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
        <ul className='nav__links-container'>
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
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
