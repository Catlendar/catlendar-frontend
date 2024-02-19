import { useSetRecoilState } from 'recoil';
import { TodoModalOpenAtom } from '../../../atom/TodoModalOpenAtom';
import {
  TodoHeaderWrapper,
  TaskTitle,
  CompletedTasks,
  AddButton,
  AddIcon,
} from './TodoHeader.styled';
import iconAdd from '../../../assets/icons/icon-add.svg';

interface HeaderProps {
  comletedTasks: number;
  totalTasks: number;
}

export default function TodoHeader({ comletedTasks, totalTasks }: HeaderProps) {
  const setTodoModalOpenAtom = useSetRecoilState(TodoModalOpenAtom);
  return (
    <TodoHeaderWrapper>
      <TaskTitle>
        오늘의 할일 <CompletedTasks>{comletedTasks}</CompletedTasks> / {totalTasks}
      </TaskTitle>
      <AddButton onClick={() => setTodoModalOpenAtom((prev) => !prev)} title="할일 추가 모달 오픈">
        <AddIcon src={iconAdd} />
        할일 추가
      </AddButton>
    </TodoHeaderWrapper>
  );
}
