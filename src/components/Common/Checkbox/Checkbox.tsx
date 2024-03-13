import React from 'react';
import { CheckboxItem, CheckboxLabel } from './Checkbox.styled';

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
  const handleChange = () => {
    onClick();
  };

  return (
    <div>
      <CheckboxLabel id="check" htmlFor="isChecked">
        할일 체크
      </CheckboxLabel>
      <CheckboxItem
        id="isChecked"
        aria-labelledby="check"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default Checkbox;
