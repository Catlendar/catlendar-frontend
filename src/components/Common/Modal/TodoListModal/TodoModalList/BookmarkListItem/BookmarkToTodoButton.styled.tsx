import { styled } from 'styled-components';
import IconModalPlus from '../../../../../../assets/icons/icon-modal-plus.svg';

export const BookmarkToTodo = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${IconModalPlus});
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;

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
