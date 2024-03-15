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
        <li>
          <Link to="/home" aria-label="link to home">
            <StyledHomeIcon active={pathname === '/home'} />
          </Link>
        </li>
        <li>
          <Link to="/calendar" aria-label="link to calendar">
            <StyledCalendarIcon active={pathname === '/calendar'} />
          </Link>
        </li>
        <li>
          <Link to="/profile" aria-label="link to profile">
            <StyledProfileIcon active={pathname === '/profile'} />
          </Link>
        </li>
      </NavbarList>
    </NavbarWrapper>
  );
}
