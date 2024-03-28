import { styled } from 'styled-components';
import { TabButtonProps, TabStyleProps } from './TabTypes';

export const TabWrapper = styled.div<{ tabstyle: TabStyleProps }>`
  border-radius: 2rem 2rem 0 0;
  width: ${(props) => props.tabstyle.wrapperWidth};
  background-color: var(--color-white);
  padding-top: ${(props) => props.tabstyle.paddingTop};
`;

export const TabBox = styled.div<{ tabstyle: TabStyleProps }>`
  padding: 2.5rem 2rem;
  display: ${(props) => props.tabstyle.boxDisplay};
  justify-content: ${(props) => props.tabstyle.justifyContent};
  align-items: center;
  font-size: ${(props) => props.tabstyle.fontSize};
`;

export const TabButton = styled.button<TabButtonProps>`
  border: none;
  font: inherit;
  padding: 0 0.8rem 0.3rem 0.8rem;
  cursor: pointer;
  background-color: var(--color-white);
  text-decoration: ${(props) => (props.selecttab ? 'underline' : 'none')};
  text-underline-position: ${(props) => (props.selecttab ? 'under' : 'none')};
  text-decoration-thickness: ${(props) => (props.selecttab ? '0.3rem' : 'none')};
  color: ${(props) => (props.selecttab ? 'var(--color-black)' : 'var(--text-color-main)')};
  /* border-bottom: ${(props) => (props.selecttab ? '0.2rem solid var(--color-black)' : 'none')}; */
`;
