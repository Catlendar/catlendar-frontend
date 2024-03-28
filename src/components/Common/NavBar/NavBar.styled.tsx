import styled, { css } from 'styled-components';
import { ReactComponent as HomeIcon } from '../../../assets/icons/icon-home.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/icons/icon-calendar.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/icon-profile.svg';

export const NavbarWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  // width: 100%;
  // height: 7rem;
  z-index: 10;
  box-shadow: 0 -0.3rem 2rem rgba(0, 0, 0, 0.03);
  background-color: var(--color-white);
  width: clamp(28rem, 100%, 43rem);
  height: clamp(7rem, 8%, 9rem);
`;

export const NavbarList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  // li {
  //   flex-grow: 1;
  // }
`;

export const IconWrapper = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const IconStyle = css<{ active?: boolean }>`
  path {
    stroke: ${({ active }) => (active ? '#000' : '#ccc')};
    fill: ${({ active }) => (active ? '#000' : '#ccc')};
  }
`;

export const StyledHomeIcon = styled(HomeIcon)<{ active?: boolean }>`
  ${IconStyle}
`;

export const StyledCalendarIcon = styled(CalendarIcon)<{ active?: boolean }>`
  ${IconStyle}
`;

export const StyledProfileIcon = styled(ProfileIcon)<{ active?: boolean }>`
  ${IconStyle}
`;
