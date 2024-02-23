import React from 'react';
import { TodoDataType } from '../../../../../../atom/TodoListAtom';
import TodoDeleteButton from './TodoDeleteButton';
import { ItemContent, ModalItemWrapper } from './TodoModalListItem.styled';
import IconModalStar from '../../../../../../assets/icons/icon-modal-star.svg';

interface TodoModalListItemProps {
  type: string;
  task: TodoDataType;
}

export default function TodoModalListItem({ type, task }: TodoModalListItemProps) {
  return (
    <ModalItemWrapper>
      <ItemContent>{task.calendarContent}</ItemContent>
      {task.bookmark === 'Y' ? <img src={IconModalStar} alt="즐겨찾기" /> : null}
      <TodoDeleteButton calendarId={task.calendarId} userId={task.userId} />
    </ModalItemWrapper>
  );
}
