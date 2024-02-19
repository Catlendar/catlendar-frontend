import { styled } from 'styled-components';
import IconX from '../../../assets/icons/icon-x.svg';

export const CloseButton = styled.button`
  border: none;
  background-color: var(--color-white);
  width: 30px;
  height: 30px;
  background-image: url(${IconX});
  cursor: pointer;

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
