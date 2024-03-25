import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  gap: 10px;
`;
export const Label = styled.label``;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  display: none;

  + label {
    display: inline-block;
    cursor: pointer;
    height: 44px;
    width: 160px;
    border: 1px solid var(--button-color-disabled);
    line-height: 44px;
    text-align: center;
    font-weight: bold;
    font-size: var(--small-font-size);
    background-color: var(--color-white);
    color: var(--text-color-placeholder);
    border-radius: 10px;
  }

  &:checked + label {
    background-color: #f5f5ff;
    border: none;
    color: var(--button-color-enable);
  }
`;

export const Img = styled.img`
  margin-right: 9px;
  width: 10px;
  height: 10px;
`;
