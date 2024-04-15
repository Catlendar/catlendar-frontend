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

    @media screen and (min-width: 960px) {
      height: calc(100% - 100px);

      &.grid-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        background-color: var(--bg-color-main);
        font-size: 2rem;
        section {
          width: 90%;
        }
        @media screen and (min-width: 960px) {
          place-items: center;
        }

        .wrap-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .txt-info {
            line-height: 1.4;
            margin: 2rem 0;
            color: #fff;
            text-align: center;
          }
          .txt-link {
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;
            font-size: 1.7rem;
            transition: transform 0.5s ease-in-out;

            &:hover .arrowIcon {
              animation: move 0.7s ease-in-out infinite alternate;
            }
          }
          @keyframes move {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(10px);
            }
          }
        }
        .wrap-calendar {
          main {
            height: fit-content;
            border-radius: 2rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 960px) {
    // nav {
    //   position: fixed;
    //   z-index: 10;
    //   box-shadow: 0 -0.3rem 2rem rgba(0, 0, 0, 0.03);
    //   background-color: var(--color-white);
    //   width: clamp(28rem, 100%, 43rem);
    //   height: clamp(7rem, 8%, 9rem);
    //   width: 100%;
    // }
  }

  .nav-wrapper {
    display: flex;
    box-shadow: 0 -0.3rem 2rem rgba(0, 0, 0, 0.03);
    background-color: var(--color-white);

    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
  }

  .ul-wrapper {
    display: flex;
    align-items: center;
    gap: 5rem;
    margin: 0 5rem;
  }

  .li-wrapper {
    cursor: pointer;
    display: flex;

    .btn-logo {
      width: 12rem;
    }

    .btn-mypage {
      width: 8rem;
    }

    .btn-logout {
      width: 7rem;
    }
    /* @media screen and (min-width: 1200px) {
      .btn-logo {
        width: 12rem;
      }

      .btn-mypage {
        width: 8rem;
      }

      .btn-logout {
        width: 7rem;
      }
    } */
  }
`;
