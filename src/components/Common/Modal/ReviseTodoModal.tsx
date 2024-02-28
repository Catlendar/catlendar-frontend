import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import TextInput from '../TextInput/TextInput';
import ModalButton from '../Button/ModalButton';
import { ModalBackground, ModalWrapper } from './ModalLayout.styled';
import { ReviseModalOpenAtom } from '../../../atom/ReviseModalOpenAtom';

const todo = {
  content: 'React 상태관리 책 읽기',
};

interface ModalProps {
  onClose: () => void;
}

export default function ReviseTodoModal({ onClose }: ModalProps) {
  const [newTodoContent, setNewTodoContent] = useState(todo.content);
  const setReviseModalOpenAtom = useSetRecoilState(ReviseModalOpenAtom);

  const handleInputChange = (value: string) => {
    console.log(newTodoContent);
    setNewTodoContent(value);
  };

  const handleRemoveClick = () => {
    // 삭제하는 API 호출
    console.log('삭제 완료!');
    onClose();
  };

  const handleCompleteClick = () => {
    // 수정하는 API 호출
    console.log('수정 완료!');
    onClose();
  };

  return (
    <ModalBackground onClick={() => setReviseModalOpenAtom(false)}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <TextInput
          inputType="text"
          name=""
          placeholder={todo.content}
          // form={false}
          onChange={handleInputChange}
        />
        <div className="button-wrapper">
          <ModalButton
            type="remove"
            onClick={() => {
              handleRemoveClick();
            }}
          />
          <ModalButton
            type="complete"
            onClick={() => {
              handleCompleteClick();
            }}
          />
        </div>
      </ModalWrapper>
    </ModalBackground>
  );
}
