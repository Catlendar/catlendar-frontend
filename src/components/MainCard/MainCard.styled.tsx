import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainCardWrapper = styled.div`
  background-color: var(--bg-color-main);
  height: 20rem;
  padding: 2rem 0;
  @media screen and (min-height: 600px) {
    height: 22rem;
    padding: 6rem 0;
  }
  @media screen and (min-height: 900px) {
    padding: 6rem 0 6.5rem 0;
  }
  @media screen and (min-height: 1024px) {
    padding: 7rem 0 7.5rem 0;
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

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    right: 0;
  }
`;

export const UserName = styled.p`
  margin-bottom: 1.2rem;
  font-size: var(--small-font-size);
`;

export const TodayFortune = styled.p`
  line-height: 2.8rem;
  font-size: var(--h3-font-size);
`;

export const TextBox = styled.div`
  margin-top: 4.2rem;
  span {
    font-family: var(--font-family-bold);
  }
`;

export const StyledLink = styled(Link)`
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
