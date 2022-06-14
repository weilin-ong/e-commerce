import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { CartIcon, CartDropdown } from '../../components';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase.utils';

import {
  NavContainer,
  NavLink,
  NavLinksContainer,
  LogoContainer,
} from './Navigation.styles';

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
        {toogleCart && <CartDropdown />}
      </NavContainer>
      <Outlet />
    </>
  );
}
