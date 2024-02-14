import React, { useState } from 'react';
import { CheckboxStyle } from './Checkbox.styled';

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
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked(!isChecked); // isChecked의 반대값으로 설정하여 토글
    onClick();
  };

  return (
    <div>
      <CheckboxStyle type="checkbox" checked={isChecked} onClick={handleClick} />
    </div>
  );
}

export default Checkbox;
