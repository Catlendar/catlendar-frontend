import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tokenInstance } from '../../../api/Axios';
import { BookmarkListAtom } from '../../../atom/BookmarkListAtom';
import { UserAtom } from '../../../atom/UserAtom';
import { BookmarkAddInput } from './AddModalInput.styled';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

export default function BookmarkAdd() {
  const userAtom = useRecoilValue(UserAtom);
  const setBookmarkListAtom = useSetRecoilState(BookmarkListAtom);
  const [inputValue, setInputValue] = useState('');

  const handleOnchane = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
  };
  const handleOnKeyDown = async (e: InputKeyboardEvent) => {
    if (e.key === 'Enter') {
      e.stopPropagation();
      const createBookmarkUrl = 'http://54.66.123.168:8080/calendar/createBookmark';
      // 즐겨찾기 만들기 api 호출
      const createBookmarkresponse = await tokenInstance.post(createBookmarkUrl, {
        userId: userAtom.userId,
        bookmarkContent: inputValue,
      });
      const responseText = createBookmarkresponse.data;

      const getBookmarkListUrl = 'calendar/getBookmarkList';
      // 즐겨찾기 목록 가져오기 api 호출
      const bookmarkList = await tokenInstance.post(getBookmarkListUrl, {
        userId: userAtom.userId,
      });
      console.log(bookmarkList.data);

      if (responseText === '즐겨찾기에 추가 되었습니다.') {
        setBookmarkListAtom(bookmarkList.data);
        setInputValue('');
      }
    }
  };
  return (
    <BookmarkAddInput
      id="bookmarkadd"
      name="bookmarkadd"
      placeholder="+ 자주 하는 일을 추가하세요"
      value={inputValue}
      onChange={handleOnchane}
      onKeyDown={(e) => handleOnKeyDown(e)}
    />
  );
}
