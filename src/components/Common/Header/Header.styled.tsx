import styled from 'styled-components';
import iconBack from '../../../assets/icons/icon-back.svg';

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 6.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);

  &.fortune-header {
    background-color: var(--bg-color-gray);
  }

  @media screen and (min-width: 960px) {
    width: 100%;
    margin: 0 auto;
  }
`;
export const BackButton = styled.button`
  position: absolute;
  width: 0.78rem;
  height: 1.5rem;
  background: url(${iconBack}) no-repeat center / auto 100%;
  border: none;
  left: 1.9rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const HeaderText = styled.span`
  font-size: var(--regular-font-size);
  color: var(--color-black);

  /* @media screen and (min-width: 960px) {
    width: 100%;
    max-width: 960px;
    margin-left: 5rem;
  } */
`;
