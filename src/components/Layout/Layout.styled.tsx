import { styled } from 'styled-components';

export const LayoutWrapper = styled.div`
  min-width: 32rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    height: calc(100% - 7rem);
    width: 100%;
    /* display: flex; */
    /* flex-direction: column; */

    @media screen and (min-width: 960px) {
      height: 100%;

      &.grid-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        background-color: var(--bg-color-main);
        font-size: 2rem;

        .wrap-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .txt-info {
            line-height: 1.4;
            margin: 2rem 0;
            color: #fff;
          }
          .txt-link {
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;
            font-size: 1.7rem;
          }
        }
        .wrap-calendar {
          padding: 20px 20px 20px 0;
          main {
            border-radius: 2rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 960px) {
    header {
      display: none;
    }
    nav {
      position: fixed;
      z-index: 10;
      box-shadow: 0 -0.3rem 2rem rgba(0, 0, 0, 0.03);
      background-color: var(--color-white);
      width: clamp(28rem, 100%, 43rem);
      height: clamp(7rem, 8%, 9rem);
      width: 100%;
      top: 0;

      .logo {
        width: 10rem;
        margin-left: 5rem;
      }

      ul li:last-child {
        margin-right: 5rem;
      }
    }
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ul-wrapper {
    display: flex;
    align-items: center;
    gap: 5rem;
  }

  .li-wrapper {
    cursor: pointer;
    display: flex;

    img {
      width: 5rem;
    }
  }
`;
