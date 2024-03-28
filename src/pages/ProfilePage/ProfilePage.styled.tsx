import styled, { keyframes } from 'styled-components';
import gear from '../../assets/icons/icon-setting.svg';
import { ButtonSubmitWrap } from '../../components/Common/Button/Button.styled';

export const ProfileWrapper = styled.div`
  padding: 0 2.6rem;
  padding-top: 2rem;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const ProfileTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 5.3rem;
  line-height: 2.6rem;
`;

export const ProfileName = styled.p`
  font-size: var(--regular-font-size);
  font-weight: bold;
`;

export const Img = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const ProfileMain = styled.p`
  font-size: var(--h3-font-size);
  padding-top: 4.7rem;
  line-height: 3rem;
  padding-bottom: 3rem;
`;

export const EditPwBtn = styled.div`
  padding-top: 10rem;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Gear = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${gear});
  cursor: pointer;
  &:hover {
    animation: ${rotate} 4s linear infinite;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 10.6rem;
  width: 33.9rem;
`;

export const ProfileButtonWrapper = styled(ButtonSubmitWrap)`
  position: absolute;
  /* padding-top: 10.6rem; */
  bottom: -25%;
`;
export const PwButtonWrapper = styled(ButtonSubmitWrap)`
  position: absolute;
  bottom: -60%;
`;
