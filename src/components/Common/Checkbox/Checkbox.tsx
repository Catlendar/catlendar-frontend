import React, { ChangeEvent, useState } from 'react';
import { CheckboxStyle } from './CheckboxStyle';

interface CheckboxProps {
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}
/* 
사용방법
=> checkbox는 토글방식이며, onChange함수가 실행 됨
*/
function Checkbox({ checked, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div>
      <CheckboxStyle type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
}

export default Checkbox;
