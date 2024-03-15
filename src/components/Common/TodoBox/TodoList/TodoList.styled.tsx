import { styled } from 'styled-components';

export const TodoListWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  padding: 15px 15px 20px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: var(--color-white);
`;

export const TodoListUl = styled.ul`
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0;
  li {
    font-size: var(--small-font-size);
    color: var(--input-bb);
  }
  /* listItem의 마지막 요소만 제외하고 스타일 적용 */
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const MoreBtn = styled.button`
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  // 버튼이 가득 채워지도록 width값 100%
  width: 100%;
`;
