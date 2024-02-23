import { styled } from 'styled-components';
import IconX from '../../../assets/icons/icon-x.svg';

export const CloseButton = styled.button`
  border: none;
  background-color: var(--color-white);
  width: 3rem;
  height: 3rem;
  background-image: url(${IconX});

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
