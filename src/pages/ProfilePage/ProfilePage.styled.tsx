import styled from 'styled-components';
import { ButtonWrapper } from '../LoginPage/LoginPage.styled';

export const ProfileWrapper = styled.div`
  padding: 0 26px;
  position: relative;
`;

export const ProfileTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 53px;
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
`;

export const EditPwBtn = styled(ButtonWrapper)`
  padding-top: 200px;
`;
