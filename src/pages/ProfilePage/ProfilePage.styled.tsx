import styled from 'styled-components';
import gear from '../../assets/icons/icon-setting.svg';
import { ButtonSubmitWrap } from '../../components/Common/Button/Button.styled';

export const MenuSection = styled.section`
  background-color: var(--bg-color-main);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  color: var(--color-white);

  p {
    font-size: 3.6rem;
  }

  li {
    font-size: 2.4rem;
  }
  li:not(:last-child) {
    margin-bottom: 2.6rem;
  }
  .menu-txt {
    text-decoration: none;
    color: inherit;
  }

  button {
    color: inherit;
  }
`;

export const ChartSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ChartTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;

export const ChartWrapper = styled.div`
  transform: scale(1.5);
`;

export const DesktopProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  @media screen and (min-width: 960px) {
    font-size: 3.2rem;
  }
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

  @media screen and (min-width: 960px) {
    font-size: 2rem;
    padding: 3.5rem 0;
    text-align: center;
  }
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
export const BirthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
