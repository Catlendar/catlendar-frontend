import styled, { keyframes } from 'styled-components';
import IconArrowUp from '../../../assets/icons/icon-arrow-up.svg';

export const AddInputWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 12px;
`;

export const AddInput = styled.input`
  width: 274px;
  height: 46px;
  background-color: var(--bg-color-gray);
  color: var(--color-black);
  font-size: var(--small-font-size);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 4rem;
`;

export const ModalAddButton = styled.button`
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 1.2rem;
  background-image: url(${IconArrowUp});
  background-position: center;
  margin-right: 1.2rem;
  background-color: var(--bg-color-main);
  animation: opa 0.3s ease-in-out;

  @keyframes opa {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
