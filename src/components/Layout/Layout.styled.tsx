import { styled } from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 390px;
  /* height: 100vh; */
  height: calc(var(--vh, 1vh) * 100 + 7rem);

  /* height: 1000px; */

  /* min-height: 100vh;
  height: 100%; */

  display: flex;
  flex-direction: column;
  /* box-shadow: rgba(255, 0, 0, 0.35) 0px 0px 5px 20px; */
  background-color: red;

  main {
    box-shadow: rgba(0, 0, 255, 0.35) 0px 0px 5px 10px;
    /* height: calc(100% - 7rem); */
    height: 100%;
    /* padding-bottom: 7rem; */
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  nav {
    /* box-shadow: rgba(255, 0, 0, 0.35) 0px 0px 5px 20px; */
    border: 1px solid yellow;
  }
`;
