import { Link } from "react-router-dom";
import PostCard from "../../entities/post/ui/PostCard";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";

const PostsPage = () => {
  const { posts, isLoading, error, setMinLength } = usePosts();

  if (isLoading) return <p>Загрузка постов...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  return (
    <div>
      <h2>Все посты</h2>
      <PostLengthFilter onFilterChange={setMinLength} />
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/posts/${post.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <PostCard title={post.title} body={post.body} />
        </Link>
      ))}
    </div>
  );
};

export default PostsPage;
