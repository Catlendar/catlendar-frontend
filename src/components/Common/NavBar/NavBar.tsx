import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavbarWrapper,
  NavbarList,
  StyledHomeIcon,
  StyledCalendarIcon,
  StyledProfileIcon,
} from './NavBar.styled';

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <NavbarWrapper>
      <NavbarList>
        <Link to="/home">
          <li>
            <StyledHomeIcon active={pathname === '/home'} />
          </li>
        </Link>
        <Link to="/calendar">
          <li>
            <StyledCalendarIcon active={pathname === '/calendar'} />
          </li>
        </Link>
        <Link to="/profile">
          <li>
            <StyledProfileIcon active={pathname === '/profile'} />
          </li>
        </Link>
      </NavbarList>
    </NavbarWrapper>
  );
}
