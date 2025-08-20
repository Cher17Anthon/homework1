import { useParams } from "react-router-dom";
import { useGetTodosByUserQuery } from "../../features/PostList/model/api/postsApi";

const TodosPage = () => {
  const { id } = useParams();
  const { data: todos, isLoading } = useGetTodosByUserQuery(Number(id));

  if (isLoading) return <p>Загрузка задач...</p>;

  return (
    <div>
      <h2>Todos пользователя</h2>
      <ul>
        {todos?.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} readOnly /> {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPage;
