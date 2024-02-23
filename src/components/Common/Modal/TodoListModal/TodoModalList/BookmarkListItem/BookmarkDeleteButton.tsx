import React from 'react';
import { useSetRecoilState } from 'recoil';
import { tokenInstance } from '../../../../../../api/Axios';
import { BookmarkListAtom } from '../../../../../../atom/BookmarkListAtom';
import { TodoModalDeleteButton } from '../TodoModalListItem/TodoDeleteButton.styled';

interface BookmarkDeleteButtonProps {
  bookmarkId: string;
  userId: string;
}

type MouseEvent = React.MouseEvent<HTMLButtonElement>;

export default function BookmarkDeleteButton({ bookmarkId, userId }: BookmarkDeleteButtonProps) {
  const setBookmarkListAtom = useSetRecoilState(BookmarkListAtom);

  const handleOnClick = async (e: MouseEvent) => {
    e.stopPropagation();
    console.log(bookmarkId);
    console.log(userId);
    // 선택한 즐겨찾기 삭제요청
    const deleteUrl = 'http://54.66.123.168:8080/calendar/deleteBookmark';
    const deleteResponse = await tokenInstance.post(deleteUrl, {
      userId,
      bookmarkId,
    });
    console.log(deleteResponse);
    const responseText = deleteResponse.data;

    // 즐겨찾기 목록 가져오기
    const getBookmarkListUrl = 'http://54.66.123.168:8080/calendar/getBookmarkList';
    const getBookmarkListResponse = await tokenInstance.post(getBookmarkListUrl, {
      userId,
    });
    const bookmarkListData = getBookmarkListResponse.data;
    if (responseText === '즐겨찾기가 삭제 되었습니다.') {
      setBookmarkListAtom(bookmarkListData);
    }
  };
  return (
    <TodoModalDeleteButton type="button" title="즐겨찾기 삭제" onClick={handleOnClick}>
      <span>즐겨찾기 삭제</span>
    </TodoModalDeleteButton>
  );
}
