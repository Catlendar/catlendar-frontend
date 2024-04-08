import styled from 'styled-components';
import { ButtonSubmitWrap } from '../../components/Common/Button/Button.styled';

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 960px) {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translate(-50%, -50%);
  }
`;

export const SignUpTitle = styled.p`
  position: relative;
  font-size: var(--h2-font-size);
  font-weight: bold;
  padding-top: 3.7rem;
  padding-bottom: 1.3rem;
  color: var(--color-black);
  line-height: 1.3;
`;

export const StyledSubmitButton = styled(ButtonSubmitWrap)`
  // position: absolute;
  // top: 85%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media screen and (min-width: 960px) {
    position: relative;
    padding-top: 10rem;
  }
`;
