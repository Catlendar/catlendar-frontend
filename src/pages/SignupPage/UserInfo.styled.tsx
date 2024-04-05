import styled from 'styled-components';
import { ButtonSubmitWrap } from '../../components/Common/Button/Button.styled';

export const UserInfoWrapper = styled.div`
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

export const UserInfoTitle = styled.p`
  font-size: var(--h2-font-size);
  font-weight: bold;
  padding-top: 3.7rem;
  padding-bottom: 1.3rem;
  color: var(--color-black);
  line-height: 1.3;
`;

export const ButtonWrapper = styled(ButtonSubmitWrap)`
  position: absolute;
  top: 85%;
  @media screen and (min-width: 960px) {
    position: relative;
    padding-top: 10rem;
  }
`;

export const BirthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
