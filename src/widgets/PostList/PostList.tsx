import PostCard from '../../entities/post/ui/PostCard';
import React from 'react';

const posts = [
  { id: 1, title: 'Заглушка поста 1', body: 'Текст заглушки 1' },
  { id: 2, title: 'Заглушка поста 2', body: 'Текст заглушки 2' },
];

const PostList = () => {
  return (
    <>
      {posts.map(post => (
        <React.Fragment key={post.id}>
          <PostCard title={post.title} body={post.body} />
        </React.Fragment>
      ))}
    </>
  );
};

export default PostList;

