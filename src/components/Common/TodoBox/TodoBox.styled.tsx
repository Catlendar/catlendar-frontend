import { styled } from 'styled-components';

export const TodoBoxWrapper = styled.div`
  background-color: var(--bg-color-gray);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 0 2.5rem 8rem;

  @media screen and (min-width: 960px) {
    min-height: 350px;
    height: calc(100vh / 2);
    width: 93%;
    padding: 0 2.5rem 5rem;
  }
  @media screen and (max-width: 960px) {
    @media screen and (min-height: 600px) {
      height: calc(100vh - 35.5rem);
    }
    @media screen and (min-height: 900px) {
      height: calc(100vh - 37rem);
    }
    @media screen and (min-height: 1024px) {
      height: calc(100vh - 41rem);
    }
  }

  @media screen and (min-width: 1900px) and (min-height: 1024px) {
    height: calc(100vh - 51rem);
  }

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
