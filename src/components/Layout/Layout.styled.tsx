import { styled } from 'styled-components';

export const LayoutWrapper = styled.div`
  min-width: 32rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    height: calc(100% - 7rem);
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 96rem) {
    nav {
      display: none;
    }
  }
`;
