import React from 'react';
import { BookmarkListDataType } from '../../../../../../atom/BookmarkListAtom';
import { ItemContent, ModalItemWrapper } from '../TodoModalListItem/TodoModalListItem.styled';
import BookmarkDeleteButton from './BookmarkDeleteButton';
import BookmarkToTodoButton from './BookmarkToTodoButton';

interface BookmarkListItemProps {
  type: string;
  task: BookmarkListDataType;
}

export default function BookmarkListItem({ type, task }: BookmarkListItemProps) {
  return (
    <ModalItemWrapper>
      <ItemContent>{task.bookmarkContent}</ItemContent>
      <BookmarkToTodoButton bookmarkId={task.bookmarkId} userId={task.userId} />
      <BookmarkDeleteButton bookmarkId={task.bookmarkId} userId={task.userId} />
    </ModalItemWrapper>
  );
}
