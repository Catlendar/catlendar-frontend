import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainCardWrapper = styled.div`
  width: 100%;
  padding: 5.4rem 0 7.4rem 0;
  background-color: var(--bg-color-main);
`;

export const CardContent = styled.div`
  margin: 0 2.6rem 0 2.6rem;
  color: var(--color-white);

  span {
    font-size: var(--large-font-size);
  }
`;

export const ContentBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  p {
    margin-bottom: 1.2rem;
    font-size: var(--small-font-size);
  }

  h3 {
    line-height: 2.8rem;
    font-size: var(--h3-font-size);
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    right: 0;
  }
`;

export const TextBox = styled.div`
  margin-top: 4.2rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #d5d4ff;
  text-decoration: none;

  img {
    margin-left: 1.3rem;
  }
`;
