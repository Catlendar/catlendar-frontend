import React, { useState } from 'react';
import { CheckboxItem } from './Checkbox.styled';

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
}
/* 
사용방법
=> 토글형식으로 되어있으며, onClick에 함수 추가하여 사용
<Checkbox checked={false} onClick={handleClick} />
*/
function Checkbox({ checked, onClick }: CheckboxProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div>
      <CheckboxItem type="checkbox" checked={checked} onClick={handleClick} />
    </div>
  );
}

export default Checkbox;
