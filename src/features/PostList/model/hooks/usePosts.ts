import { useGetPostsQuery } from "../api/postsApi";
import { filterByLength } from "../../../PostLengthFilter/lib/filterByLength";
import { useState, useMemo } from "react";

export const usePosts = () => {
  const { data, error, isLoading } = useGetPostsQuery();
  const [minLength, setMinLength] = useState(0);

  const filteredPosts = useMemo(() => {
    if (!data) return [];
    return filterByLength(data, minLength);
  }, [data, minLength]);

  return { posts: filteredPosts, error, isLoading, setMinLength };
};
