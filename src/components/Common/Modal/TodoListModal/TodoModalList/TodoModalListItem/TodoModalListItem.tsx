import React from 'react';
import moment from 'moment';
import { TodoDataType } from '../../../../../../atom/TodoListAtom';
import TodoDeleteButton from './TodoDeleteButton';
import { ItemContent, ModalItemWrapper } from './TodoModalListItem.styled';
import IconModalStar from '../../../../../../assets/icons/icon-modal-star.svg';

export interface TodoModalListItemProps {
  task: TodoDataType;
  date?: string;
}

export default function TodoModalListItem({ task, date }: TodoModalListItemProps) {
  return (
    <ModalItemWrapper>
      <ItemContent>{task.calendarContent}</ItemContent>
      {task.bookmark === 'Y' ? <img src={IconModalStar} alt="즐겨찾기" /> : null}
      <TodoDeleteButton calendarId={task.calendarId} userId={task.userId} date={date} />
    </ModalItemWrapper>
  );
}

TodoModalListItem.defaultProps = {
  date: moment(new Date()).format('YYYY-MM-DD').toString(),
};
