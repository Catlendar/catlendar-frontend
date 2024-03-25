import { useQuery } from '@tanstack/react-query';
import { tokenInstance } from '../api/Axios';

const fetchBookmarks = async (userId: string) => {
  const response = await tokenInstance.post('calendar/getBookmarkList', {
    userId,
  });
  return response.data;
};

const useFetchBookmarks = (userId: string) => {
  const { data, status } = useQuery({
    queryKey: ['bookmarks', userId],
    queryFn: () => fetchBookmarks(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 예: 5분 동안 캐시 데이터를 신선한 것으로 간주
  });
  return { data, status };
};

export default useFetchBookmarks;
