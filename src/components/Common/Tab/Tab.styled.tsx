import { styled } from 'styled-components';
import { TabButtonProps, TabStyleProps } from './TabTypes';

export const TabWrapper = styled.div<{ tabStyle: TabStyleProps }>`
  border: 1px solid blue;
  border-radius: 16px;
  width: ${(props) => props.tabStyle.wrapperWidth};
`;

export const TabBox = styled.div<{ tabStyle: TabStyleProps }>`
  border: 1px solid red;
  padding: 25px 20px;
  display: ${(props) => props.tabStyle.boxDisplay};
  justify-content: space-around;
  align-items: center;
  font-size: ${(props) => props.tabStyle.fontSize};
`;

export const TabButton = styled.button<TabButtonProps>`
  border: none;
  font: inherit;
  padding-bottom: 3px;

  background-color: var(--color-white);
  border-bottom: ${(props) => (props.isSelect ? '2px solid var(--color-black)' : 'none')};
  color: ${(props) => (props.isSelect ? 'var(--color-black)' : 'var(--text-color-main)')};
`;
