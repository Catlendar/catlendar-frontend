import React from 'react';
import moment from 'moment';
import { BookmarkListDataType } from '../../../../../../atom/BookmarkListAtom';
import { ItemContent, ModalItemWrapper } from '../TodoModalListItem/TodoModalListItem.styled';
import BookmarkDeleteButton from './BookmarkDeleteButton';
import BookmarkToTodoButton from './BookmarkToTodoButton';

interface BookmarkListItemProps {
  task: BookmarkListDataType;
  date?: string;
}

export default function BookmarkListItem({ task, date }: BookmarkListItemProps) {
  return (
    <ModalItemWrapper>
      <ItemContent>{task.bookmarkContent}</ItemContent>
      <BookmarkToTodoButton bookmarkId={task.bookmarkId} userId={task.userId} date={date} />
      <BookmarkDeleteButton bookmarkId={task.bookmarkId} userId={task.userId} />
    </ModalItemWrapper>
  );
}

BookmarkListItem.defaultProps = {
  date: moment(new Date()).format('YYYY-MM-DD'),
};
