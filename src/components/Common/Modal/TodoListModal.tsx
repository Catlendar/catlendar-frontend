import React, { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { SelectTabTypeAtom } from '../../../atom/SelectTabTypeAtom';
import { TodoModalOpenAtom } from '../../../atom/TodoModalOpenAtom';
import AddModalInput from '../AddModalInput/AddModalInput';
import Tab from '../Tab/Tab';
import { TabDataTodo } from '../Tab/TabData';
import { ModalBackground, ModalWrapper } from './ModalLayout.styled';
import TodoModalList from './TodoListModal/TodoModalList/TodoModalList';
import { ModalTypeProps } from './Modal';

export default function TodoListModal({ date }: Pick<ModalTypeProps, 'date'>) {
  const setTodoModalOpenAtom = useSetRecoilState(TodoModalOpenAtom);
  const resetTabSelectTabType = useResetRecoilState(SelectTabTypeAtom);
  const selectTabType = useRecoilValue(SelectTabTypeAtom);

  // 탭 선택 상태 초기화하기
  useEffect(() => {
    resetTabSelectTabType();
  }, [resetTabSelectTabType]);

  useEffect(() => {
    console.log(selectTabType);
  }, [selectTabType]);

  return (
    <ModalBackground onClick={() => setTodoModalOpenAtom(false)}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <Tab tabData={TabDataTodo} />
        <TodoModalList date={date} />
        <AddModalInput date={date} />
      </ModalWrapper>
    </ModalBackground>
  );
}
