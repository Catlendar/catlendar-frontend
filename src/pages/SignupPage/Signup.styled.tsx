import styled from 'styled-components';
import { ButtonSubmitWrap } from '../../components/Common/Button/Button.styled';

export const SignUpWrapper = styled.div`
  margin: 0 26px;
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
  position: absolute;
  top: 85%;
`;
