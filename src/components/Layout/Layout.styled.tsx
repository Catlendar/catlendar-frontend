import { styled } from 'styled-components';

export const LayoutWrapper = styled.div`
  /* height: 100vh; */
  // height: calc(var(--vh, 1vh) * 100 + 7rem);
  /* height: 1000px; */
  /* min-height: 100vh;
  /* box-shadow: rgba(255, 0, 0, 0.35) 0px 0px 5px 20px; */

  min-width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    // height: 100%;
    /* padding-bottom: 7rem; */
    box-shadow: rgba(0, 0, 255, 0.35) 0px 0px 5px 10px;
    height: calc(100% - 7rem);
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  nav {
    /* box-shadow: rgba(255, 0, 0, 0.35) 0px 0px 5px 20px; */
    border: 1px solid yellow;
    // width: 100%;
  }
`;
