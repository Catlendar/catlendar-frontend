import { useSetRecoilState } from 'recoil';
import { TodoModalOpenAtom } from '../../../atom/TodoModalOpenAtom';
import { CloseButton } from './TabCloseButton.styled';

export default function TabCloseButton() {
  const setTodoModalOpenAtom = useSetRecoilState(TodoModalOpenAtom);

  return (
    <CloseButton onClick={() => setTodoModalOpenAtom(false)} type="button" title="모달 닫기">
      <span>닫기</span>
    </CloseButton>
  );
}
