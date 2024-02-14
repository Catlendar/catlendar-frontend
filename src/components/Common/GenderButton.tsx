import React, { useState } from 'react';
import { SelectWrapper, HiddenRadio, Label, Img } from './GenderButton.styled';
import { InputName } from './TextInput.styled';
import checkImg from '../../assets/check.png';

interface GenderButtonProps {
  name: string;
}

export default function GenderButton({ name }: GenderButtonProps) {
  const [selectedGender, setSelectedGender] = useState('');
  return (
    <div>
      <InputName>{name}</InputName>
      <SelectWrapper className="select">
        <HiddenRadio
          id="male"
          name="gender"
          value="male"
          onChange={() => setSelectedGender('male')}
        />
        <Label htmlFor="male">
          {selectedGender === 'male' && <Img src={checkImg} alt="Checked" />}
          남성
        </Label>
        <HiddenRadio
          id="female"
          name="gender"
          value="female"
          onChange={() => setSelectedGender('female')}
        />
        <Label htmlFor="female">
          {selectedGender === 'female' && <Img src={checkImg} alt="Checked" />}
          여성
        </Label>
      </SelectWrapper>
    </div>
  );
}
