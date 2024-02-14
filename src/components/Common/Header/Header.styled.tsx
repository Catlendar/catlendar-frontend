import styled from 'styled-components';
import iconBack from '../../../assets/icons/icon-back.svg';

export const HeaderWrapper = styled.div`
  position: relative;
  width: 39rem;
  height: 6.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
