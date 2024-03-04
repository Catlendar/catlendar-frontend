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
  margin: 3.5rem 0;
`;

export const FortuneContent = styled.p`
  font-size: var(--small-font-size);
  line-height: 2rem;
  color: var(--text-color-main);
`;

export const MoreButton = styled.button`
  margin-left: 0.5rem;
  font-size: var(--small-font-size);
  color: var(--color-black);
`;
