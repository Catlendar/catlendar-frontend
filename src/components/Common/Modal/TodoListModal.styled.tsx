import { styled } from 'styled-components';

export const TodoModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-blur);
  z-index: 99;
`;

export const TodoModalWrapper = styled.div`
  /* width: 312px 빼면 모달이 늘어남, 모르겠어서 312px 줬음 */
  width: 312px;
  box-sizing: border-box;
  padding: 0 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border-radius: 16px;

  /* 모달 위치 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
