import styled from 'styled-components';

export const SettingUl = styled.ul`
  padding-top: 3rem;
`;

export const SettingLi = styled.li`
  padding-bottom: 30px;
`;

export const SettingBtn = styled.button`
  /* border: none;
  background-color: var(--color-white); */
  font-size: var(--small-font-size);
  &:hover {
    background: linear-gradient(to top, var(--bg-color-main) 40%, transparent 30%);
  }
`;

export const DeleteBtn = styled(SettingBtn)`
  color: var(--text-color-warning);
  &:hover {
    background: linear-gradient(to top, var(--button-color-warning) 40%, transparent 30%);
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
