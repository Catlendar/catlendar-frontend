import styled from 'styled-components';
import { ButtonSubmitWrap } from '../../components/Common/Button/Button.styled';

export const LoginWrapper = styled.div`
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
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

export const LoginTitle = styled.p`
  font-size: var(--h2-font-size);
  font-weight: bold;
  padding-top: 3.7rem;
  color: var(--color-black);
`;

export const ButtonWrapper = styled.div`
  padding-top: 40.5rem;
  width: 33.9rem;
`;

export const CheckBoxInput = styled.input`
  appearance: none;
  border: 0.2rem solid gainsboro;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--button-color-enable);
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  label {
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
  }
`;

export const StyledSubmitButton = styled(ButtonSubmitWrap)`
  position: absolute;
  top: 85%;
  @media screen and (min-width: 960px) {
    position: relative;
    padding-top: 10rem;
  }
`;
