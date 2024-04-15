import { styled } from 'styled-components';

export const TodoListWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 2rem;
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
    padding-bottom: 1px;
    @media screen and (max-width: 1035px) {
      font-size: var(--tiny-font-size);
    }
    @media screen and (max-width: 959px) {
      font-size: var(--small-font-size);
    }
  }
  /* listItem의 마지막 요소만 제외하고 스타일 적용 */
  li:not(:last-child) {
    margin-bottom: 1rem;
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
