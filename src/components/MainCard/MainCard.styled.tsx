import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainCardWrapper = styled.div`
  background-color: var(--bg-color-main);
  height: 20rem;
  padding: 6.5rem 0;

  /* @media screen and (min-height: 700px) {
    margin: 1rem 0;
  } */

  /* @media screen and (min-height: 900px) and (min-width: 960px) {
    margin: 3rem 0;
  } */

  @media screen and (min-width: 960px) {
    padding: 0 0 0.1rem 0;
  }

  @media screen and (min-width: 960px) and (min-height: 900px) {
    padding: 0 0 4rem 0;
  }

  @media screen and (min-width: 1100px) and (min-height: 900px) {
    padding: 0 0 4rem 0;
  }
`;

export const CardContent = styled.div`
  margin: 0 2.6rem;
  color: var(--color-white);
`;

export const Today = styled.span`
  font-size: var(--large-font-size);
`;

export const ContentBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (min-width: 1100px) {
    margin: 1rem 0;
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-30%);
    right: 0;
    width: 15.3rem;
    height: auto;
    @media screen and (min-width: 960px) and (max-width: 1100px) {
      display: none;
    }
    @media screen and (min-width: 1101px) {
      transform: translateY(-20%);
      top: 40%;
      width: 35%;
    }
    @media screen and (min-width: 2200px) {
      transform: translateY(-30%);
      top: 40%;
      width: 35%;
    }
  }
`;

export const UserName = styled.p`
  margin-bottom: 1.2rem;
  font-size: var(--small-font-size);
  @media screen and (min-width: 1100px) {
    font-size: var(--large-font-size);
  }
`;

export const TodayFortune = styled.p`
  line-height: 3.1rem;
  font-size: var(--h3-font-size);
  button {
    color: var(--color-white);
    cursor: pointer;
    font-family: var(--font-family-bold);
  }
`;

export const TextBox = styled.div`
  margin-top: 4.2rem;
  span {
    font-family: var(--font-family-bold);
  }
  @media screen and (min-width: 960px) and (max-height: 800px) {
    margin-top: 3rem;
  }
`;

export const StyledLink = styled(Link)`
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #d5d4ff;
  text-decoration: none;
  width: 10rem;
  img {
    margin-left: 1.3rem;
  }
`;
