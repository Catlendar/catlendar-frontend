import styled from 'styled-components';

export const FortuneCardWrapper = styled.div`
  background-color: var(--bg-color-gray);
`;

export const CatImg = styled.img`
  width: 25rem;
  padding-bottom: 3rem;
  display: block;
  margin: auto;
`;

export const FortuneContentWrapper = styled.div`
  padding: 0 4.5rem;
  background-color: var(--color-white);
`;

export const FortuneTitle = styled.p`
  font-size: var(--regular-font-size);
  padding: 3.5rem 0;
`;

export const FortuneContent = styled.p`
  height: 28rem;
  font-size: var(--small-font-size);
  line-height: 2rem;
  color: var(--text-color-main);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 0.2rem;
  }
`;

export const MoreButton = styled.button`
  margin-left: 0.5rem;
  font-size: var(--small-font-size);
  color: var(--color-black);
`;
