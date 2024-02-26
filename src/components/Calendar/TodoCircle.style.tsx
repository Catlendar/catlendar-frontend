import { styled } from 'styled-components';
import checkImg from '../../assets/icons/icon-check.svg';

export const TodoCircle = styled.div`
  background-color: var(--color-todoCircle);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);
  font-weight: 700;

  &.process {
    background-color: var(--color-white);
    border: 1.5px dashed var(--color-primary);
  }

  &.complete {
    background-color: var(--color-primary);
    background-image: url(${checkImg});
    background-image: no-repeat;
    background-size: 100% 100%;
    border: 5px solid var(--color-primary);
  }
`;
