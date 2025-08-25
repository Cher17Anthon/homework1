type Post = { id: number; title: string; body: string };

export const filterByLength = (posts: Post[], minLength: number) => {
  return posts.filter(post => post.title.length >= minLength);
};
