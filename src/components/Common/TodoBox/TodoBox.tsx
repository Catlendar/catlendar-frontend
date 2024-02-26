import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Modal from '../Modal/Modal';
import TodoHeader from '../Header/TodoHeader';
import { TodoBoxWrapper } from './TodoBox.styled';
import TodoList from './TodoList/TodoList';
import { UserAtom } from '../../../atom/UserAtom';
import { tokenInstance } from '../../../api/Axios';
import { TodoDataType, TodoListAtom } from '../../../atom/TodoListAtom';
import { BookmarkListAtom } from '../../../atom/BookmarkListAtom';
import { TodayTasksAtom } from '../../../atom/TodayTasksAtom';

interface TodoBoxProps {
  date: string;
}

// <TodoBox date='today' or date={YYYY-MM-DD형식의 변수} />
export default function TodoBox({ date }: TodoBoxProps) {
  const today = moment(new Date()).format('YYYY-MM-DD');
  const userAtom = useRecoilValue(UserAtom);
  const [todoListAtom, setTodoListAtom] = useRecoilState(TodoListAtom);
  const [bookmarkListAtom, setBookmarkListAtom] = useRecoilState(BookmarkListAtom);
  const [todayTasksAtom, setTodayTasksAtom] = useRecoilState(TodayTasksAtom);
  const navigate = useNavigate();

  // 오늘 할 일 목록에서 completed: 'Y'인 item 개수 구하기
  const getTodayCompletedTasks = (data: TodoDataType[]) => {
    let completedTasks = 0;
    data.forEach((item) => {
      if (item.completed === 'Y') completedTasks += 1;
    });
    return completedTasks;
  };

  // 들어가자마자 api 요청으로 오늘 할 일 목록 데이터 불러오기
  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        const url = date === 'today' ? 'calendar/getToday' : '/calendar/getSpecificMonth';
        const response = await tokenInstance.post(
          url,
          date === today
            ? {
                userId: userAtom.userId,
              }
            : { userId: userAtom.userId, targetDate: date },
        );
        console.log('res', response);
        setTodoListAtom(response.data);
      } catch (error) {
        navigate('/error');
      }
    };
    fetchTodoData();
    console.log(todoListAtom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  // 들어가자마자 api 요청으로 즐겨찾기 목록 데이터 불러오기
  useEffect(() => {
    const fetchBookmarkData = async () => {
      try {
        const response = await tokenInstance.post('calendar/getBookmarkList', {
          userId: userAtom.userId,
        });
        console.log(response);
        setBookmarkListAtom(response.data);
      } catch (error) {
        alert('즐겨찾기 데이터를 불러오는 데 실패했습니다.');
        navigate('/error');
      }
    };
    fetchBookmarkData();
    console.log(bookmarkListAtom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 모달안에서 todoListAtom이 변하면 총 할 일 개수와, 완료한 일 개수를 다시 계산
  useEffect(() => {
    const totalTasks = todoListAtom.length;
    const completedTasks = getTodayCompletedTasks(todoListAtom);

    setTodayTasksAtom({ totalTasks, completedTasks });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoListAtom]);

  return (
    <TodoBoxWrapper>
      <TodoHeader
        comletedTasks={todayTasksAtom.completedTasks}
        totalTasks={todayTasksAtom.totalTasks}
      />
      <TodoList />
      <Modal type="todoList" />
    </TodoBoxWrapper>
  );
}
