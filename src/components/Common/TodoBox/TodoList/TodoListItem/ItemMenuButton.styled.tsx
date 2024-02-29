import { styled } from 'styled-components';
import IconMenu from '../../../../../assets/icons/icon-meatball.svg';

export const TodoItemMenuBtn = styled.button`
  border: none;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0;
  padding: 0;
  background-color: var(--color-white);
  background-image: url(${IconMenu});
  background-repeat: no-repeat;
  background-position: center;

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
