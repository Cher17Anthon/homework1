import PostCard from '../../entities/post/ui/PostCard';
import React, { useMemo, useCallback, useState } from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import CommentList from '../CommentList/ui/CommentList';

const initialPosts = [
  { id: 1, title: 'Заглушка поста 1', body: 'Текст заглушки 1' },
  { id: 2, title: 'Очень длинный заголовок поста', body: 'Текст заглушки 2' },
];

const PostList = () => {
  const [minLength, setMinLength] = useState(0);

  const filteredPosts = useMemo(
    () => filterByLength(initialPosts, minLength),
    [minLength]
  );

  const handleFilterChange = useCallback((len: number) => {
    setMinLength(len);
  }, []);

  return (
    <>
      <PostLengthFilter onFilterChange={handleFilterChange} />
      {filteredPosts.map(post => (
        <React.Fragment key={post.id}>
          <PostCard title={post.title} body={post.body} />
          <CommentList />
        </React.Fragment>
      ))}
    </>
  );
};

export default PostList;
