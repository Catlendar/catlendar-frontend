import { useMutation, useQueryClient } from '@tanstack/react-query';
import { tokenInstance } from '../api/Axios';

// 즐겨찾기 추가
const addBookmark = async ({ userId, bookmarkContent }) => {
  const response = tokenInstance.post('calendar/createBookmark', {
    userId,
    bookmarkContent,
  });
  return response;
};

const useAddBookmark = () => {
  const queryClient = useQueryClient();
  const { data, mutate, status } = useMutation({
    mutationFn: addBookmark,
    // Optimistic update 기능
    onMutate: async ({ userId, bookmarkContent }) => {
      await queryClient.cancelQueries({ queryKey: ['bookmarks'] });
      const previousBookmarks = queryClient.getQueryData(['bookmarks']);

      const newBookmark = {
        bookmarkContent,
        bookmarkId: Date.now().toString(),
        createDate: new Date().toISOString(),
        userId,
      };

      // Optimistic update를 위해 쿼리 데이터 업데이트
      queryClient.setQueryData(['bookmarks'], (old) => {
        const oldBookmarks = old as
          | { bookmarkContent: string; bookmarkId: string; createDate: string; userId: number }[]
          | undefined;

        return [...(oldBookmarks ?? []), newBookmark];
      });
      return { previousBookmarks };
    },
    onError(_err, _newBookmark, context) {
      queryClient.setQueryData(['bookmarks'], context?.previousBookmarks);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
    },
  });

  return { data, mutate, status };
};

export default useAddBookmark;
