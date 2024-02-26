import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tokenInstance } from '../../../api/Axios';
import { BookmarkListAtom } from '../../../atom/BookmarkListAtom';
import { UserAtom } from '../../../atom/UserAtom';
import { AddInput, AddInputWrapper, ModalAddButton } from './AddModalInput.styled';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

export default function BookmarkAdd() {
  const userAtom = useRecoilValue(UserAtom);
  const setBookmarkListAtom = useSetRecoilState(BookmarkListAtom);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  const addBookmark = async () => {
    if (isAdding) return;
    setIsAdding(true);

    try {
      if (inputValue.trim().length === 0) {
        alert('내용을 입력해 주세요.');
        setInputValue('');
        return;
      }
      // 즐겨찾기 만들기 api 호출
      const createBookmarkresponse = await tokenInstance.post(
        'http://54.66.123.168:8080/calendar/createBookmark',
        {
          userId: userAtom.userId,
          bookmarkContent: inputValue,
        },
      );
      const responseText = createBookmarkresponse.data;

      // 즐겨찾기 목록 가져오기 api 호출
      const bookmarkList = await tokenInstance.post('calendar/getBookmarkList', {
        userId: userAtom.userId,
      });
      console.log(bookmarkList.data);

      if (responseText === '즐겨찾기에 추가 되었습니다.') {
        setBookmarkListAtom(bookmarkList.data);
        setInputValue('');
      }
    } catch (error) {
      alert('즐겨찾기 추가 실패');
      navigate('/error');
    } finally {
      setIsAdding(false);
    }
  };

  const handleOnchane = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
  };
  const handleOnKeyDown = async (e: InputKeyboardEvent) => {
    if (e.key === 'Enter') {
      e.stopPropagation();
      await addBookmark();
    }
  };

  const handleClick = async () => {
    await addBookmark();
  };

  return (
    <AddInputWrapper>
      <AddInput
        id="bookmarkadd"
        name="bookmarkadd"
        placeholder="+ 자주 하는 일을 추가하세요"
        value={inputValue}
        onChange={handleOnchane}
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      {inputValue && (
        <ModalAddButton type="button" title="추가하기" onClick={handleClick}>
          <span>추가하기</span>
        </ModalAddButton>
      )}
    </AddInputWrapper>
  );
}
