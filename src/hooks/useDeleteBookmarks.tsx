import { useMutation, useQueryClient } from '@tanstack/react-query';
import { tokenInstance } from '../api/Axios';

// 즐겨찾기 삭제
const deleteBookmark = async ({ userId, bookmarkId }) => {
  const response = tokenInstance.post('calendar/deleteBookmark', {
    userId,
    bookmarkId,
  });
  return response;
};

const useDeleteBookmark = () => {
  const queryClient = useQueryClient();
  const { data, mutate, status } = useMutation({
    mutationFn: deleteBookmark,
    onMutate: async ({ bookmarkId }) => {
      await queryClient.cancelQueries({ queryKey: ['bookmarks'] });
      const previousBookmarks = queryClient.getQueryData(['bookmarks']);

      queryClient.setQueryData(['bookmarks'], (old) => {
        const oldBookmarks = old as
          | { bookmarkContent: string; bookmarkId: string; createDate: string; userId: number }[]
          | undefined;

        return oldBookmarks?.filter((bookmark) => bookmark.bookmarkId !== bookmarkId) ?? [];
      });

      return { previousBookmarks };
    },
    onError: (_err, _var, context) => {
      queryClient.setQueryData(['bookmarks'], context?.previousBookmarks);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
    },
  });
  return { data, mutate, status };
};

export default useDeleteBookmark;
