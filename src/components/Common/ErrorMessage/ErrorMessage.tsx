import React, { useEffect } from 'react';
import { ErrorWrapper } from './ErrorMessage.styled';

interface ButtonProps {
  message: string;
  clearMessage: () => void;
}

/* 
사용방법
<ErrorMessage message={emailErrorMessage} clearMessage={() => setEmailErrorMessage('')} />
* message에는 에러메세지로 보여줄값을 넣습니다.
* clearMessage에는 사라질 상태값을 넣습니다.
*/
function ErrorMessage({ message, clearMessage }: ButtonProps) {
  // 3초 뒤에 message clear
  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, clearMessage]);

  return <ErrorWrapper>{message}</ErrorWrapper>;
}

export default ErrorMessage;
