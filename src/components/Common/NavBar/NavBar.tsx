import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../../assets/icons/icon-home.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/icons/icon-calendar.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/icon-profile.svg';
import { Nav, IconWrapper } from './NavBar.styled';

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Nav>
      <IconWrapper active={pathname === '/home'} onClick={() => handleNavigation('/home')}>
        <HomeIcon />
      </IconWrapper>
      <IconWrapper active={pathname === '/calendar'} onClick={() => handleNavigation('/calendar')}>
        <CalendarIcon />
      </IconWrapper>
      <IconWrapper active={pathname === '/profile'} onClick={() => handleNavigation('/profile')}>
        <ProfileIcon />
      </IconWrapper>
    </Nav>
  );
}
