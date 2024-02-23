import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useEffect } from 'react';
import Modal from '../Modal/Modal';
import TodoHeader from '../Header/TodoHeader';
import { TodoBoxWrapper } from './TodoBox.styled';
import TodoList from './TodoList/TodoList';
import { UserAtom } from '../../../atom/UserAtom';
import { tokenInstance } from '../../../api/Axios';
import { TodoListAtom } from '../../../atom/TodoListAtom';
import { BookmarkListAtom } from '../../../atom/BookmarkListAtom';

export default function TodoBox() {
  const userAtom = useRecoilValue(UserAtom);
  const [todoListAtom, setTodoListAtom] = useRecoilState(TodoListAtom);
  const [bookmarkListAtom, setBookmarkListAtom] = useRecoilState(BookmarkListAtom);

  // 들어가자마자 api 요청으로 오늘 할 일 목록 데이터 불러오기
  useEffect(() => {
    const fetcTodoData = async () => {
      const url = 'calendar/getToday';
      const response = await tokenInstance.post(url, {
        userId: userAtom.userId,
      });
      console.log(response);
      setTodoListAtom(response.data);
    };
    fetcTodoData();
    console.log(todoListAtom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 들어가자마자 api 요청으로 즐겨찾기 목록 데이터 불러오기
  useEffect(() => {
    const fetchBookmarkData = async () => {
      const url = 'calendar/getBookmarkList';
      const response = await tokenInstance.post(url, {
        userId: userAtom.userId,
      });
      console.log(response);
      setBookmarkListAtom(response.data);
    };
    fetchBookmarkData();
    console.log(bookmarkListAtom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoBoxWrapper>
      <TodoHeader comletedTasks={1} totalTasks={3} />
      <TodoList />
      <Modal type="todoList" />
    </TodoBoxWrapper>
  );
}
