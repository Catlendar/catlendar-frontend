import styled from 'styled-components';
import Tab from '../../components/Common/Tab/Tab';

export const FortuneCardWrapper = styled.div`
  position: relative;
  background-color: var(--bg-color-gray);
`;

export const CatImg = styled.img`
  width: 25rem;
  padding-bottom: 3rem;
  display: block;
  margin: auto;
`;

export const FortuneContentWrapper = styled.div`
  padding: 0 4.5rem;
`;

export const StyledTab = styled(Tab)``;

export const FortuneTitle = styled.p`
  font-size: var(--regular-font-size);
  margin: 3.9rem 0;
`;

export const FortuneContent = styled.p`
  font-size: var(--small-font-size);
  line-height: 2rem;
  color: var(--text-color-main);
`;
