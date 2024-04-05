import { styled } from 'styled-components';
import checkImg from '../../assets/icons/icon-check.svg';

export const TodoCircle = styled.div`
  background-color: var(--color-todoCircle);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin-top: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1rem;
  @media screen and (min-width: 960px) {
    margin-top: 0px;
  }

  &.process {
    background-color: var(--color-white);
    border: 0.1rem dashed var(--color-primary);
  }

  &.complete {
    background-color: var(--color-primary);
    background-image: url(${checkImg});
    background-image: no-repeat;
    background-size: 100% 100%;
    border: 0.5rem solid var(--color-primary);
  }
`;
