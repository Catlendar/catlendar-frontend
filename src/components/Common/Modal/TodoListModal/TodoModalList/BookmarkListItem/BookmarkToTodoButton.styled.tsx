import { styled } from 'styled-components';
import IconModalPlus from '../../../../../../assets/icons/icon-modal-plus.svg';

export const BookmarkToTodo = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;

  &:hover svg {
    transform: scale(1.3);
    transition: transform 0.3s ease;
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
