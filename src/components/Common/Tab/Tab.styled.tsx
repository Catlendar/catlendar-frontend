import { styled } from 'styled-components';
import { TabButtonProps, TabStyleProps } from './TabTypes';

export const TabWrapper = styled.div<{ tabstyle: TabStyleProps }>`
  border-radius: 16px;
  width: ${(props) => props.tabstyle.wrapperWidth};
  background-color: var(--color-white);
`;

export const TabBox = styled.div<{ tabstyle: TabStyleProps }>`
  padding: 25px 20px;
  display: ${(props) => props.tabstyle.boxDisplay};
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.tabstyle.fontSize};
`;

export const TabButton = styled.button<TabButtonProps>`
  border: none;
  font: inherit;
  padding-bottom: 3px;
  cursor: pointer;

  background-color: var(--color-white);
  border-bottom: ${(props) => (props.selecttab ? '2px solid var(--color-black)' : 'none')};
  color: ${(props) => (props.selecttab ? 'var(--color-black)' : 'var(--text-color-main)')};
`;
