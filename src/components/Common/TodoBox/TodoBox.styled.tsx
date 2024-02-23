import { styled } from 'styled-components';

export const TodoBoxWrapper = styled.div`
  border: 1px solid red;

  background-color: var(--bg-color-gray);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;

  /* TodoList 컴포넌트 세로 크기, 위치 조절 */
  div:last-child {
    flex-grow: 1;
    align-self: center;
  }

  /* 잘 모르겠어서 임의로 했음, 나중에 반응형 작업할 때 수정해야 함 */
  // height: 67vh;
`;
