import styled, { keyframes } from 'styled-components';

export const SettingUl = styled.ul`
  width: 33.9rem;
  @media screen and (min-width: 960px) {
    width: 100%;
    transform: scale(1.3);
  }
  @media screen and (max-width: 960px) {
    margin-top: 5.3rem;
  }
`;

export const SettingLi = styled.li`
  padding-bottom: 3rem;
`;

const draw = keyframes`
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
`;

export const SettingBtn = styled.button`
  font-size: var(--small-font-size);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease;
  &:hover {
    background-image: linear-gradient(to top, var(--bg-color-main) 10%, transparent 50%);
    animation: ${draw} 0.5s forwards;
  }
`;

export const DeleteBtn = styled(SettingBtn)`
  color: var(--text-color-warning);
  &:hover {
    background-image: linear-gradient(to top, var(--button-color-warning) 10%, transparent 50%);
    animation: ${draw} 0.5s forwards;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-blur);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
