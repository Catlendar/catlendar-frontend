import { styled } from 'styled-components';
import IconModalDelete from '../../../../../../assets/icons/icon-modal-delete.svg';

export const TodoModalDeleteButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${IconModalDelete});
  background-position: center center;
  background-repeat: no-repeat;
  margin-left: 1rem;

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
