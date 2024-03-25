import { styled } from 'styled-components';

export const TodoItemMenuBtn = styled.button`
  border: none;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg path {
    transition: fill 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.5);
    transition: transform 0.3s ease;
  }

  &:hover svg path {
    fill: #000; // 여기에 원하는 호버 시 색상 코드를 넣으세요.
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
