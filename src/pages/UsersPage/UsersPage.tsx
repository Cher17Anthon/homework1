import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../entities/user/api/usersApi";
import { ItemList } from "../../shared/ui/ItemList/ItemList";
import type { User } from "../../entities/user/model/types";

const UsersPage = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Загрузка пользователей...</p>;

  if (!users) return <p>Нет пользователей</p>;

  return (
    <div>
      <h2>Пользователи</h2>
      <ItemList<User>
        items={users}
        keyExtractor={(u) => u.id}
        renderItem={(u) => (
          <div style={{ border: "1px solid gray", margin: "1rem", padding: "1rem" }}>
            <h3>{u.name}</h3>
            <Link to={`/users/${u.id}/albums`}>Альбомы</Link> |{" "}
            <Link to={`/users/${u.id}/posts`}>Посты</Link> |{" "}
            <Link to={`/users/${u.id}/todos`}>Задачи</Link>
          </div>
        )}
      />
    </div>
  );
};

export default UsersPage;
