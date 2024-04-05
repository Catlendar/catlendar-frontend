import styled from 'styled-components';
import gear from '../../assets/icons/icon-setting.svg';
import { ButtonSubmitWrap } from '../../components/Common/Button/Button.styled';

export const ProfileWrapper = styled.div`
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

export const ProfileTitle = styled.p`
  width: 85%;
  display: flex;
  justify-content: space-between;
  line-height: 2.6rem;
  margin-top: 5.3rem;
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
  width: 85%;
  font-size: var(--h3-font-size);
  padding-top: 4.7rem;
  line-height: 3rem;
  padding-bottom: 3rem;
`;

export const EditPwBtn = styled.div`
  padding-top: 10rem;
`;

export const Gear = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${gear});
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  padding-top: 10rem;
  width: 33.9rem;
`;

export const ProfileButtonWrapper = styled(ButtonSubmitWrap)`
  position: absolute;
  top: 85%;
  @media screen and (min-width: 960px) {
    position: relative;
    padding-top: 10rem;
  }
`;
export const PwButtonWrapper = styled(ButtonSubmitWrap)`
  position: absolute;
  top: 85%;
  @media screen and (min-width: 960px) {
    position: relative;
    padding-top: 10rem;
  }
`;
export const ChartWrapper = styled.div`
  // position: absolute;
  // top: 85%;
  @media screen and (min-width: 960px) {
    // position: relative;
    // padding-top: 10rem;
    // width: 500px;
    // transform: translate(-50%, -50%) scale(1);
  }
`;
