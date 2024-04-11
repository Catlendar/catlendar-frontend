import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavbarWrapper,
  NavbarList,
  IconWrapper,
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
          {/* IconWrapper로 Link를 감싸 클릭 가능 영역을 확장 */}
          <IconWrapper>
            <Link to="/home" aria-label="link to home">
              <StyledHomeIcon active={pathname === '/home'} />
            </Link>
          </IconWrapper>
        </li>
        <li>
          <IconWrapper>
            <Link to="/calendar" aria-label="link to calendar">
              <StyledCalendarIcon active={pathname === '/calendar'} />
            </Link>
          </IconWrapper>
        </li>
        <li>
          <IconWrapper>
            <Link to="/profile" aria-label="link to profile">
              <StyledProfileIcon active={pathname === '/profile'} />
            </Link>
          </IconWrapper>
        </li>
      </NavbarList>
    </NavbarWrapper>
  );
}
