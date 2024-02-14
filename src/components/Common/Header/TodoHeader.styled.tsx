import styled from 'styled-components';

export const TodoHeaderWrapper = styled.div`
  width: 100%;
  background-color: var(--bg-color-gray);
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 0;
  border-radius: 2rem 2rem 0 0;
`;

export const TaskTitle = styled.span`
  font-size: var(--large-font-size);
  margin-left: 2.6rem;
`;

export const CompletedTasks = styled.span`
  color: var(--text-color-theme);
  margin-left: 0.5rem;
`;

export const AddButton = styled.button`
  cursor: pointer;
  font: inherit;
  display: flex;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--text-color-main);
  border: none;
  background: none;
  margin-right: 2.6rem;
`;

export const AddIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.9rem;
`;
