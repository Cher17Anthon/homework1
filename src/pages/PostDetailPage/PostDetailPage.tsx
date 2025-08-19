import { useParams } from "react-router-dom";
import { useGetPostByIdQuery, useGetCommentsByPostQuery } from "../../features/PostList/model/api/postsApi";

const PostDetailPage = () => {
  const { id } = useParams();
  const postId = Number(id);

  const { data: post, isLoading } = useGetPostByIdQuery(postId);
  const { data: comments, isLoading: commentsLoading } = useGetCommentsByPostQuery(postId);

  if (isLoading) return <p>Загрузка поста...</p>;
  if (!post) return <p>Пост не найден</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <h3>Комментарии</h3>
      {commentsLoading && <p>Загрузка комментариев...</p>}
      {comments?.map((c) => (
        <div key={c.id} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
          <b>{c.name}</b> ({c.email})
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetailPage;
