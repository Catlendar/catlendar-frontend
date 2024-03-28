import { styled } from 'styled-components';

export interface TodoBoxProps {
  page: string;
}

// export const TodoBoxWrapper = styled.div`
export const TodoBoxWrapper = styled.div<TodoBoxProps>`
  background-color: var(--bg-color-gray);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 0 2.5rem 8rem;

  @media screen and (min-height: 600px) {
    height: calc(100vh - 35rem);
  }
  @media screen and (min-height: 900px) {
    height: calc(100vh - 36rem);
  }
  @media screen and (min-height: 1024px) {
    height: calc(100vh - 39rem);
  }

  // @media screen and (min-height: 600px) {
  //   height: calc(100vh - 21rem);
  // }

  // @media screen and (min-height: 800px) {
  //   height: calc(100vh - 41rem);
  // }
  // @media screen and (min-height: 1024px) {
  //   height: calc(100vh - 39rem);
  // }

  // 동작 안함..
  // height: {(props) => props.location === 'calendar' && '10px'};

  /* TodoList 컴포넌트 세로 크기, 위치 조절 */
  div:last-child {
    flex-grow: 1;
    align-self: center;
  }

  /* 잘 모르겠어서 임의로 했음, 나중에 반응형 작업할 때 수정해야 함 */
  overflow: auto;
  box-sizing: border-box;
  // border: 1px solid black;
  // margin-top: -1.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
