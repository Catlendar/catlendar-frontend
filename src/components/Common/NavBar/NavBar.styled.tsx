import styled, { css } from 'styled-components';
import { ReactComponent as HomeIcon } from '../../../assets/icons/icon-home.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/icons/icon-calendar.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/icon-profile.svg';

export const NavbarWrapper = styled.nav`
  position: fixed;
  width: 39rem;
  /* min-width: 390px; */
  /* width: 100%; */
  height: 7rem;
  z-index: 10;
  bottom: 0;
  box-shadow: 0 -0.3rem 2rem rgba(0, 0, 0, 0.03);
  background-color: var(--color-white);
`;

export const NavbarList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    flex-grow: 1;
  }
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
