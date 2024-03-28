import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  /* margin: 0 auto; */
  /* width: 100%; */
  padding-top: 2rem;

  gap: 1rem;
`;
export const Label = styled.label``;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  display: none;

  + label {
    display: inline-block;
    cursor: pointer;
    height: 4.4rem;
    width: 16rem;
    border: 0.1rem solid var(--button-color-disabled);
    line-height: 4.4rem;
    text-align: center;
    font-weight: bold;
    font-size: var(--small-font-size);
    background-color: var(--color-white);
    color: var(--text-color-placeholder);
    border-radius: 1rem;
  }

  &:checked + label {
    background-color: #f5f5ff;
    border: none;
    color: var(--button-color-enable);
  }
`;

export const Img = styled.img`
  margin-right: 0.9rem;
  width: 1rem;
  height: 1rem;
`;
