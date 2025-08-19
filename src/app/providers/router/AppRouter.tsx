import { Routes, Route } from "react-router-dom";
import PostsPage from "../../../pages/PostsPage/PostsPage";
import PostDetailPage from "../../../pages/PostDetailPage/PostDetailPage";
import AlbumsPage from "../../../pages/AlbumsPage/AlbumsPage";
import AlbumDetailPage from "../../../pages/AlbumDetailPage/AlbumDetailPage";
import TodosPage from "../../../pages/TodosPage/TodosPage";
import UsersPage from "../../../pages/UsersPage/UsersPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/albums" element={<AlbumsPage />} />
      <Route path="/albums/:id" element={<AlbumDetailPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id/albums" element={<AlbumsPage />} />
      <Route path="/users/:id/posts" element={<PostsPage />} />
      <Route path="/users/:id/todos" element={<TodosPage />} />
    </Routes>
  );
};

export default AppRouter;
