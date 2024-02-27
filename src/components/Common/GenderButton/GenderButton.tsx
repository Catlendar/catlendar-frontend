import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { SelectWrapper, HiddenRadio, Label, Img } from './GenderButton.styled';
import { InputName } from '../TextInput/TextInput.styled';
import { UserAtom } from '../../../atom/UserAtom';
import checkImg from '../../../assets/icons/check.png';

interface GenderButtonProps {
  name: string;
  onChange: (value: string) => void;
}

export default function GenderButton({ name, onChange }: GenderButtonProps) {
  const userAtom = useRecoilValue(UserAtom);
  const [selectedGender, setSelectedGender] = useState(userAtom.gender);

  const genderChange = (value: string) => {
    setSelectedGender(value);
    onChange(value);
  };
  return (
    <div>
      <InputName>{name}</InputName>
      <SelectWrapper className="select">
        <HiddenRadio
          id="male"
          name="gender"
          value="남성"
          onChange={() => genderChange('남성')}
          checked={selectedGender === '남성'}
        />
        <Label htmlFor="male">
          {selectedGender === '남성' && <Img src={checkImg} alt="Checked" />}
          남성
        </Label>
        <HiddenRadio
          id="female"
          name="gender"
          value="여성"
          onChange={() => genderChange('여성')}
          checked={selectedGender === '여성'}
        />
        <Label htmlFor="female">
          {selectedGender === '여성' && <Img src={checkImg} alt="Checked" />}
          여성
        </Label>
      </SelectWrapper>
    </div>
  );
}
