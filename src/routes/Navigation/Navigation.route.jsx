//import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToggleCart } from '../../store/cart/cart.selector';
import selectCurrentUser from '../../store/user/user.selector';

import { CartIcon, CartDropdown } from '../../components';
//import { UserContext } from '../../contexts/user.context2';
//import { CartContext } from '../../contexts/cart.context2';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase.utils';

import {
  NavContainer,
  NavLink,
  NavLinksContainer,
  LogoContainer,
} from './Navigation.styles';

export default function Navigation() {
  //useSelector automatically subscribes to the Redux store for us!
  const currentUser = useSelector(selectCurrentUser);
  const toggleCart = useSelector(selectToggleCart);

  //const { currentUser } = useContext(UserContext);
  //const { toggleCart } = useContext(CartContext);

  async function handleSignOut() {
    try {
      await signOutUser();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <NavContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={handleSignOut}>
              sign out
            </NavLink>
          ) : (
            <NavLink to='/auth'>sign in</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {toggleCart && <CartDropdown />}
      </NavContainer>
      <Outlet />
    </>
  );
}
