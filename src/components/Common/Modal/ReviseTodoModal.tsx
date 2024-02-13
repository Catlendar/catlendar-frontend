import React from 'react';
import TextInput from '../TextInput';
import { ModalLayout } from './ModalLayout.styled';

const todo = {
  content: 'React 상태관리 책 읽기',
};

export default function ReviseTodoModal() {
  return (
    <ModalLayout type="revise">
      <TextInput inputType="text" name="" placeholder={todo.content} form={false} />
    </ModalLayout>
  );
}
