import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  NavbarWrapper,
  NavbarList,
  IconWrapper,
  StyledHomeIcon,
  StyledCalendarIcon,
  StyledProfileIcon,
} from './NavBar.styled';
import logo from '../../../assets/icons/catlendar.svg';
import myPage from '../../../assets/icons/icon-mypage.svg';
import logout from '../../../assets/icons/icon-logout.svg';

export default function NavBar({ isDesktop }: { isDesktop: boolean }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 로그아웃
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };
  if (isDesktop) {
    if (pathname === '/home' || pathname === '/fortune' || pathname === '/profile') {
      return (
        <nav className="nav-wrapper">
          <Link to="/home">
            <img className="logo" src={logo} alt="캣린더 로고" />
          </Link>
          <ul className="ul-wrapper">
            <li className="li-wrapper">
              <Link to="/profile">
                <img src={myPage} alt="마이페이지" />
              </Link>
            </li>
            <li className="li-wrapper">
              <button type="button" onClick={handleLogout}>
                <img src={logout} alt="로그아웃" />
              </button>
            </li>
          </ul>
        </nav>
      );
    }
    return null;
  }
  // 데스크탑 화면이 아닌 경우
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
