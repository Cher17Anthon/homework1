import { NavLink } from "react-router-dom";

const UserTabs = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <NavLink to="/posts">Посты</NavLink>
      <NavLink to="/albums">Альбомы</NavLink>
      <NavLink to="/users">Пользователи</NavLink>
    </nav>
  );
};

export default UserTabs;
