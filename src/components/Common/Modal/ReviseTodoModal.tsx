import React, { useState } from 'react';
import TextInput from '../TextInput';
import { ModalLayout } from './ModalLayout.styled';
import ModalButton from '../Button/ModalButton';

const todo = {
  content: 'React 상태관리 책 읽기',
};

export default function ReviseTodoModal() {
  const [newTodoContent, setNewTodoContent] = useState(todo.content);

  const handleInputChange = (value: string) => {
    console.log(newTodoContent);
    setNewTodoContent(value);
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
        <ModalButton type="remove" onClick={() => {}} />
        <ModalButton type="complete" onClick={() => {}} />
      </div>
    </ModalLayout>
  );
}
