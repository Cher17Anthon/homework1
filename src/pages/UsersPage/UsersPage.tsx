import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../features/PostList/model/api/postsApi";

const UsersPage = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Загрузка пользователей...</p>;

  return (
    <div>
      <h2>Пользователи</h2>
      {users?.map((u) => (
        <div key={u.id} style={{ border: "1px solid gray", margin: "1rem", padding: "1rem" }}>
          <h3>{u.name}</h3>
          <Link to={`/users/${u.id}/albums`}>Альбомы</Link> |{" "}
          <Link to={`/users/${u.id}/posts`}>Посты</Link> |{" "}
          <Link to={`/users/${u.id}/todos`}>Задачи</Link>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
