import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 70px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 100%;
  width: 50%;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
`;
