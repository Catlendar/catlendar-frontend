import styled from 'styled-components';

export const SettingUl = styled.ul`
  padding-top: 3rem;
`;

export const SettingLi = styled.li`
  line-height: 50px;
`;

export const SettingBtn = styled.button`
  border: none;
  background-color: var(--color-white);
  font-size: var(--small-font-size);
  cursor: pointer;
  &.hover {
    box-shadow: inset 0 -20px 0 #bfffa1;
  }
`;

export const DeleteBtn = styled(SettingBtn)`
  color: var(--text-color-warning);
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
