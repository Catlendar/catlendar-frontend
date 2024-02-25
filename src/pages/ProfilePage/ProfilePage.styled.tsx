import styled, { keyframes } from 'styled-components';
import gear from '../../assets/icons/icon-setting.svg';
import { ButtonWrapper } from '../LoginPage/LoginPage.styled';

export const ProfileWrapper = styled.div`
  padding: 0 26px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProfileTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 53px;
  line-height: 26px;
`;

export const ProfileName = styled.p`
  font-size: var(--regular-font-size);
  font-weight: bold;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ProfileMain = styled.p`
  font-size: var(--h3-font-size);
  padding-top: 47px;
  line-height: 30px;
  padding-bottom: 30px;
`;

export const EditPwBtn = styled(ButtonWrapper)`
  padding-top: 200px;
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
  width: 24px;
  height: 24px;
  display: inline-block;
  background-image: url(${gear});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    animation: ${rotate} 4s linear infinite;
  }
`;
