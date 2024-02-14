import React, { useState } from 'react';
import TextInput from '../TextInput';
import { ModalLayout } from './ModalLayout.styled';
import ModalButton from '../Button/ModalButton';

const todo = {
  content: 'React 상태관리 책 읽기',
};

interface ModalProps {
  onClose: () => void;
}

export default function ReviseTodoModal({ onClose }: ModalProps) {
  const [newTodoContent, setNewTodoContent] = useState(todo.content);

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
    <ModalLayout type="revise">
      <TextInput
        inputType="text"
        name=""
        placeholder={todo.content}
        form={false}
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
    </ModalLayout>
  );
}
