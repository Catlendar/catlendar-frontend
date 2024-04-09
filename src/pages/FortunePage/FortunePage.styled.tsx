import styled from 'styled-components';

export const FortuneWrapper = styled.div`
  background-color: var(--color-white);
  height: 100vh;

  @media screen and (min-width: 960px) {
    margin-top: 7rem;
  }
`;
export const FortuneCardBox = styled.div`
  background-color: var(--bg-color-gray);
  @media screen and (min-width: 960px) {
    background-color: var(--bg-color-white);
  }
`;

export const CatImg = styled.img`
  width: 25rem;
  height: 20rem;
  padding: 3.3rem 0;
  display: block;
  margin: auto;

  @media screen and (min-width: 960px) {
    padding: 0;
    margin-top: 1rem;
  }
`;

export const FortuneContentBox = styled.div`
  padding: 0 5rem 5rem 5rem;
  background-color: var(--color-white);

  @media screen and (min-width: 960px) {
    max-width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FortuneTitle = styled.p`
  font-size: var(--regular-font-size);
  padding: 3.5rem 0;
`;

export const FortuneContent = styled.p`
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

  @media screen and (min-height: 600px) and (max-width: 800px) {
    height: calc(100vh - 33rem);
  }
`;

export const MoreButton = styled.button`
  margin-left: 0.5rem;
  font-size: var(--small-font-size);
  color: var(--color-black);
`;
